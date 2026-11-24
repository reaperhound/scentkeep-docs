#!/usr/bin/env python3
"""Verify project configuration and the public Serendie MCP endpoint."""
import json
from pathlib import Path
import subprocess
import tomllib

ROOT = Path(__file__).resolve().parents[1]
URL = "https://serendie.design/mcp"
config = tomllib.loads((ROOT / ".codex/config.toml").read_text())
assert config["mcp_servers"]["serendie-mcp"]["url"] == URL
assert json.loads((ROOT / ".mcp.json").read_text())["mcpServers"]["serendie-mcp"]["url"] == URL


def rpc(method, params, request_id):
    request = json.dumps({"jsonrpc": "2.0", "id": request_id, "method": method, "params": params})
    result = subprocess.run([
        "curl", "--silent", "--show-error", "--fail", "--max-time", "30", URL,
        "-H", "Content-Type: application/json", "-H", "Accept: application/json, text/event-stream",
        "--data-binary", "@-",
    ], input=request, text=True, capture_output=True, check=True)
    messages = [json.loads(line[6:]) for line in result.stdout.splitlines() if line.startswith("data: ")]
    response = messages[-1] if messages else json.loads(result.stdout)
    if "error" in response:
        raise RuntimeError(response["error"])
    return response["result"]


initialized = rpc("initialize", {
    "protocolVersion": "2025-03-26", "capabilities": {},
    "clientInfo": {"name": "scentkeep-docs-check", "version": "1.0.0"},
}, 1)
assert initialized["serverInfo"]["name"] == "serendie-mcp-server"
tools = rpc("tools/list", {}, 2)["tools"]
assert "get-design-tokens" in {tool["name"] for tool in tools}
print(f"Serendie MCP OK: {initialized['serverInfo']['name']}, {len(tools)} tools; project configs valid.")
