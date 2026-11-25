#!/usr/bin/env bash
set -euo pipefail

site_root="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
site_port="${1:-8000}"
site_host="${HOST:-127.0.0.1}"

printf 'Scentkeep website: http://%s:%s\n' "$site_host" "$site_port"
exec python3 -m http.server "$site_port" --bind "$site_host" --directory "$site_root"
