import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const manifest = JSON.parse(await readFile(resolve(root, ".codex-plugin/plugin.json"), "utf8"));
const mcp = JSON.parse(await readFile(resolve(root, ".mcp.json"), "utf8"));

const railway = mcp.mcpServers?.railway;
const checks = [
  [manifest.name === "railway-control-room", "manifest has the expected stable name"],
  [manifest.mcpServers === "./.mcp.json", "manifest includes the MCP package"],
  [railway?.type === "http", "Railway MCP uses HTTP transport"],
  [railway?.url === "https://mcp.railway.com", "Railway MCP uses the official hosted endpoint"],
  [railway?.oauth_resource === "https://mcp.railway.com", "OAuth resource is Railway's hosted endpoint"],
  [!JSON.stringify(mcp).match(/token|secret|password|api[_-]?key/i), "MCP config contains no credentials"]
];

for (const [ok, message] of checks) {
  if (!ok) throw new Error(`Plugin verification failed: ${message}`);
  console.log(`✓ ${message}`);
}
