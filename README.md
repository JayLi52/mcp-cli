# Mcp-Installer ![NPM Version](https://img.shields.io/npm/v/mcp-installer) ![NPM Downloads](https://img.shields.io/npm/d18m/mcp-installer)

> 本项目基于 [smithery-ai/cli](https://github.com/smithery-ai/cli) 开发，主要增加了新的命令并修改了原有的 install 命令。

## Useage
```bash
# sse mcp server
npx mcp-installer install --client cline sse-mcp-server --config '{"url": "http://localhost:3000/sse"}'

# sse mcp server
npx mcp-installer install --client cline amap-sse --config '{
  "url": "https://mcp.amap.com/sse?key=您在高德官网上申请的key"
}'

# stdio mcp server
npx mcp-installer install --client cline amap-stdio --config '{
  "command": "npx",
  "args": ["-y", "@amap/amap-maps-mcp-server"],
  "env": {
    "AMAP_MAPS_API_KEY": "您在高德官网上申请的key"
  }
}
```

The Smithery registry installer and manager for Model Context Protocol (MCP) servers, designed to be client-agnostic.

## Requirements
- NodeJS version 18 or above

## Usage

```bash
npx @smithery/cli <command>
```

### Available Commands

- `install <package>` - Install a package
  - `--client <name>` - Specify the AI client
  - `--config <json>` - Provide configuration data as JSON (skips prompts)
- `uninstall <package>` - Uninstall a package
  - `--client <name>` - Specify the AI client
- `inspect <server-id>` - Inspect a server interactively
- `run <server-id>` - Run a server
  - `--config <json>` - Provide configuration for the server
- `list clients` - List available clients
- `list servers --client <name>` - List installed servers for specific AI client
- `--help` - Show help message
- `--verbose` - Show detailed logs for debugging

### Examples

```bash
# Install a server (requires --client flag)
npx @smithery/cli install mcp-obsidian --client claude

# Install a server with pre-configured data (skips prompts)
npx @smithery/cli install mcp-obsidian --client claude --config '{"vaultPath":"path/to/vault"}'

# Remove a server
npx @smithery/cli uninstall mcp-obsidian --client claude

# List available clients
npx @smithery/cli list clients

# List installed servers for claude
npx @smithery/cli list servers --client claude

# Inspect a specific server from smithery's registry
npx @smithery/cli inspect mcp-obsidian

# Run a server with configuration
npx @smithery/cli run mcp-obsidian --config '{"key":"value"}'

# Show help menu
npx @smithery/cli --help

# Install with verbose logging for debugging
npx @smithery/cli install mcp-obsidian --client claude --verbose
```

### Important Notes

- Remember to restart your AI client after installing or uninstalling servers
- Use the `inspect` command for interactive server testing
- Run without arguments to see the help menu
- Use `--verbose` flag for detailed logs when troubleshooting

## Development

This guide will help you get started with developing for @smithery/cli.

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/smithery-ai/cli
   cd cli
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the project:
   ```bash
   npm run build
   ```

### Development Commands

```bash
# List all servers
npx . list servers

# Inspect a specific server
npx . inspect <server-id>

# Install a server
npx . install <server-name> --client <client-name>

# Run with verbose logging
npx . <command> --verbose
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.