---
name: use-railway
description: Use Railway Control Room to inspect Railway projects, services, deployments, and logs; explain failures; create projects; and perform a confirmed redeploy through Railway's official remote MCP.
---

# Railway Control Room

Use the installed `railway` MCP connection for Railway account and project operations. This plugin is designed for ChatGPT Work, including mobile contexts where a local terminal is unavailable.

## First-use flow

1. If Railway is not connected, ask the user to complete the Railway OAuth link shown by ChatGPT.
2. Never request, paste, or store a Railway API token in chat.
3. Begin with account/project discovery before a user asks for a project-specific action, unless they supplied a Railway project URL or exact project identity.

## Read-first operating model

For questions such as “what broke?”, “is it live?”, “what needs attention?”, and “show my services”:

1. List projects or services through the Railway MCP.
2. Retrieve the relevant deployment state or bounded logs.
3. Explain the result in plain language: symptom, likely cause, confidence, and the smallest safe next action.
4. If the issue needs multi-step diagnosis, use Railway's `railway-agent` tool and clearly state that it is Railway's agent operating through the user's authorized account.

## Mutations require explicit confirmation

Treat these as write actions:

- create a Railway project
- redeploy a service
- accept staged deployment changes

Before any write action, repeat the exact target: project, service, environment when known, and the effect. Ask for a direct confirmation such as: “Redeploy `api` in `production` now?”

Never treat “fix it”, “make it work”, or a request to diagnose logs as confirmation to deploy.

## Production caution

When the target is production, say what users may experience and prefer a read-only explanation or reversible change first. Do not imply a deployment succeeded until Railway returns a confirmed result.

## Security

- Never expose secrets or invite users to paste them into chat.
- Do not broaden scope beyond the Railway workspaces/projects chosen in OAuth.
- Do not claim this plugin is officially endorsed by Railway.
- If a requested action is unavailable through the remote MCP, explain the limitation rather than inventing an API workaround.

## Good prompts

- “Which of my Railway services are unhealthy?”
- “Why did the latest deployment for my API fail?”
- “List my projects and tell me what changed most recently.”
- “Redeploy the staging worker.”

## Sources

- Railway remote MCP: https://docs.railway.com/ai/mcp-server
- Railway MCP CLI reference: https://docs.railway.com/cli/mcp
