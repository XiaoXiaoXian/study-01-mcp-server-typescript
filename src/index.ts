import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import process from "process";
import winston from "winston";
import path from "path";

const server = new McpServer({
  name: "hello-world-server",
  version: "1.0.0",
  capabilities: {
    resources: {},
    tools: {},
  },
});

const logger = winston.createLogger({
  level: "debug",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({
      filename: path.join("J:/test/mcpserver-start/01/log", "application.log"),
    }),
  ],
});

// Add optional console transport for terminal output
if (true || process.env.CONSOLE_LOGGING === "true") {
  logger.add(new winston.transports.Console());
}

// Add logging functionality
server.tool(
  "hello-world",
  "A simple Hello World tool",
  {},
  async () => {
    logger.debug("Debug: hello-world tool invoked");
    return {
      content: [
        {
          type: "text",
          text: "Hello, World!",
        },
      ],
    };
  }
);

async function main() {
  const transport = new StdioServerTransport();
  logger.debug("Debug: Connecting server with StdioServerTransport");
  await server.connect(transport);
  logger.error("Hello World MCP Server running on stdio xxxx");
}

main().catch((error) => {
  logger.error("Fatal error in main():", error);
  process.exit(1);
});
