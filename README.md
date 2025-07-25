# Hello World MCP Server

This project is a simple MCP server implemented in TypeScript using the @modelcontextprotocol/sdk library.

## Features
- Provides a "Hello World" tool.
- Uses standard I/O transport for communication.

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Build the project:
   ```bash
   npm run build
   ```
3. Run the server:
   ```bash
   node build/index.js
   ```
   Alternatively, run the server directly from the TypeScript source:
   ```bash
   npx ts-node src/index.ts
   ```
   Or 
   ```bash
   node  --require ts-node/register src/index.ts
   ```

   Or run the server with trace warnings:
   ```bash
   node --trace-warnings --require ts-node/register src/index.ts
   ```

   Or
   ```bash
   npx tsx src/index.ts
```

## Development
- Source files are located in the `src` directory.
- Build output is located in the `build` directory.

## License
This project is licensed under the ISC License.
