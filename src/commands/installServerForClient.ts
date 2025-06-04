import chalk from 'chalk'
import { verbose } from '../logger';
import { promptForRestart } from '../utils/client';
import { readConfig, writeConfig } from '../client-config';
import { getServerName } from '../utils/config';

interface InstallServerForClientParams {
  client: string;
  qualifiedName: string;
  serverConfig: any;
}

export async function installServerForClient({
  client,
  qualifiedName,
  serverConfig,
}: InstallServerForClientParams) {
  verbose(`Reading configuration for client: ${client}`)
  const config = readConfig(client)
  verbose("Normalizing server ID...")
  const serverName = getServerName(qualifiedName)
  verbose(`Normalized server ID: ${serverName}`)

  verbose("Updating client configuration...")
  config.mcpServers[serverName] = serverConfig
  verbose("Writing updated configuration...")
  writeConfig(config, client)
  verbose("Configuration successfully written")

  console.log(
    chalk.green(`${qualifiedName} successfully installed for ${client}`),
  )
  verbose("Prompting for client restart...")
  await promptForRestart(client)
  verbose("Installation process completed")
} 