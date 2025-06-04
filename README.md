# Smithery CLI ![NPM Version](https://img.shields.io/npm/v/%40smithery%2Fcli) ![NPM Downloads](https://img.shields.io/npm/dt/%40smithery%2Fcli)

The Smithery registry installer and manager for Model Context Protocol (MCP) servers, designed to be client-agnostic.

## Requirements
- NodeJS version 18 or above

## Usage

```bash
npx mcp-installer <command>
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
npx mcp-installer install mcp-obsidian --client claude

# Install a server with pre-configured data (skips prompts)
npx mcp-installer install mcp-obsidian --client claude --config '{"vaultPath":"path/to/vault"}'

# Remove a server
npx mcp-installer uninstall mcp-obsidian --client claude

# List available clients
npx mcp-installer list clients

# List installed servers for claude
npx mcp-installer list servers --client claude

# Inspect a specific server from smithery's registry
npx mcp-installer inspect mcp-obsidian

# Run a server with configuration
npx mcp-installer run mcp-obsidian --config '{"key":"value"}'

# Show help menu
npx mcp-installer --help

# Install with verbose logging for debugging
npx mcp-installer install mcp-obsidian --client claude --verbose
```

### Important Notes

- Remember to restart your AI client after installing or uninstalling servers
- Use the `inspect` command for interactive server testing
- Run without arguments to see the help menu
- Use `--verbose` flag for detailed logs when troubleshooting

## Development

This guide will help you get started with developing for mcp-installer.

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