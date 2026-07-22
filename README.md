# Railway × ChatGPT Work

Railway already has a good remote MCP server. This repo is the missing little wrapper that makes it usable as a ChatGPT Work plugin — especially when you are on your phone and do not have a terminal open.

## The whole idea

You should be able to say:

> why did my Railway deploy fail?

...and get the answer from your actual Railway project, without copying logs around or opening your laptop.

This plugin connects ChatGPT Work to Railway's own MCP endpoint:

`https://mcp.railway.com`

Railway still owns the important bits: login, permissions, workspaces, projects, audit trail, and the tools themselves. This repo does **not** rebuild any of that.

## What you can ask

- What is broken in my Railway account right now?
- Why did the latest deployment fail?
- Show my projects and services.
- Pull logs for this service and explain them like a human.
- Redeploy the staging worker. *(ChatGPT should ask before changing anything.)*

## What this is not

- not an official Railway product — yet
- not a proxy that stores your Railway token
- not a fake dashboard
- not another API wrapper that will drift from Railway

It is intentionally boring and thin. That is a feature.

## How it works

```text
ChatGPT Work → this plugin → Railway remote MCP → Railway OAuth → your scoped Railway projects
```

No API key goes in this repo. Railway's OAuth screen is where the user decides what ChatGPT can access.

## Why make this if Railway already has MCP?

Railway supports Codex/other coding tools through MCP config. But ChatGPT Work users — particularly mobile users — need a discoverable plugin package, not a terminal command.

That is the gap this is trying to close.

## Status

Early, but real. The package validates and points at Railway's documented remote MCP endpoint. The remaining work is testing the OAuth link inside ChatGPT Work and getting it published/reviewed.

## For Railway

If you work at Railway: please feel free to take this over, fold it into your own plugin distribution, or tell me what needs changing. The goal is not to own a Railway integration; it is to make the existing one easier to use.

## Local validation

```bash
python3 /root/.codex/skills/.system/plugin-creator/scripts/validate_plugin.py plugins/railway-control-room
node plugins/railway-control-room/scripts/verify-plugin.mjs
```
