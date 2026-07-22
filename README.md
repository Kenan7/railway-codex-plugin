# Railway MCP for ChatGPT Work

Railway already has an official remote MCP server.

This repo is a small plugin package that points ChatGPT/Codex at it — useful for the moment when you are away from your terminal and just want to ask:

> why did my deploy fail?

No copied API. No token pasted into chat. No fake “AI cloud dashboard.”

## What is here

- Railway's official hosted MCP endpoint: `https://mcp.railway.com`
- Railway OAuth for account, workspace, and project access
- Guidance for safe reads first: projects, services, deployment state, and logs
- Explicit confirmation before actions such as redeploying

## What it is trying to unlock

From ChatGPT Work, you should be able to ask things like:

- What is unhealthy in my Railway account?
- Why did my last deploy fail?
- Show my projects and services.
- Read these logs and explain the likely cause.
- Redeploy the staging worker.

Railway stays in charge of the real permission boundary. Its OAuth flow decides which workspaces and projects the user authorizes.

## Important: current status

This is **not an official Railway plugin**.

The MCP connection is real and uses Railway's documented endpoint. What still needs testing is the last mile: whether ChatGPT Work can install this package cleanly and complete Railway OAuth on mobile. Until that is verified and reviewed, treat this as an experimental integration package — not a finished public product.

## Why not just build a new Railway connector?

Because Railway already solved the difficult part: OAuth, scoped access, audit context, and the tool layer.

Rebuilding that would mean storing credentials or maintaining a second version of Railway's API surface. This repo does neither. It is deliberately small.

## How it works

```text
ChatGPT / Codex
        ↓
this plugin package
        ↓
Railway remote MCP
        ↓
Railway OAuth
        ↓
the Railway projects the user chose to share
```

## What this repo does **not** do

- It does not store a Railway API key.
- It does not proxy or copy Railway data.
- It does not claim Railway endorsement.
- It does not make production changes silently.

## If you work at Railway

This is meant to be easy to adopt, replace, or improve. If there is a better way to package the existing MCP for ChatGPT Work, that is the preferred outcome.

## Validate it

```bash
python3 /root/.codex/skills/.system/plugin-creator/scripts/validate_plugin.py .
node scripts/verify-plugin.mjs
```

## Useful links

- [Railway MCP docs](https://docs.railway.com/ai/mcp-server)
- [Railway MCP CLI reference](https://docs.railway.com/cli/mcp)
