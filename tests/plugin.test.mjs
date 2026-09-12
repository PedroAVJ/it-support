import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import test from "node:test";

const root = fileURLToPath(new URL("..", import.meta.url));

test("plugin manifests and IT Support contract agree", async () => {
  const codex = JSON.parse(await readFile(join(root, ".codex-plugin", "plugin.json"), "utf8"));
  const claude = JSON.parse(await readFile(join(root, ".claude-plugin", "plugin.json"), "utf8"));
  const contract = JSON.parse(await readFile(join(root, "skills", "it-support", "references", "role-contract.json"), "utf8"));
  assert.equal(codex.name, "it-support");
  assert.equal(claude.name, codex.name);
  assert.equal(claude.version, codex.version);
  assert.equal(codex.version, "0.2.1");
  assert.equal(contract.role.key, "it-support");
  assert.equal(contract.role.thread_title, "👨🏻‍💻 IT Support");
  assert.equal(contract.role.runtime.model, "gpt-5.6-terra");
  assert.equal(contract.role.runtime.reasoning_effort, "medium");
});
