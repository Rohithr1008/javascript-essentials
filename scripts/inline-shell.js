#!/usr/bin/env node
/**
 * Inline shared/study-shell.css into study apps between markers.
 *
 *   node scripts/inline-shell.js          # --write (default)
 *   node scripts/inline-shell.js --check  # fail if HTML drifts from shared CSS
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SHARED = path.join(ROOT, "shared", "study-shell.css");
const START = "<!-- SHARED-SHELL-CSS:START -->";
const END = "<!-- SHARED-SHELL-CSS:END -->";
const APPS = [1, 2, 3, 4, 5].map(
  (n) => `Javascript_essentials_part${n}_study_app.html`
);

const checkOnly = process.argv.includes("--check");
const css = fs.readFileSync(SHARED, "utf8").replace(/\r\n/g, "\n").trimEnd() + "\n";
const expectedBlock = `${START}\n${css}${END}`;

let failed = 0;

for (const file of APPS) {
  const full = path.join(ROOT, file);
  if (!fs.existsSync(full)) {
    console.error("FAIL:", file, "missing");
    failed++;
    continue;
  }
  let raw = fs.readFileSync(full, "utf8");
  const startIdx = raw.indexOf(START);
  const endIdx = raw.indexOf(END);
  if (startIdx < 0 || endIdx < 0 || endIdx < startIdx) {
    console.error("FAIL:", file, "missing SHARED-SHELL-CSS markers");
    failed++;
    continue;
  }
  const before = raw.slice(0, startIdx);
  const after = raw.slice(endIdx + END.length);
  const current = raw.slice(startIdx, endIdx + END.length).replace(/\r\n/g, "\n");
  if (checkOnly) {
    if (current !== expectedBlock) {
      console.error("FAIL:", file, "shared CSS not inlined (run: node scripts/inline-shell.js)");
      failed++;
    } else {
      console.log("OK  ", file, "shared shell matches");
    }
  } else {
    const next = before + expectedBlock + after;
    if (next !== raw) {
      fs.writeFileSync(full, next);
      console.log("WROTE", file);
    } else {
      console.log("OK  ", file, "(already current)");
    }
  }
}

if (failed) {
  console.error(`\n${failed} check(s) failed`);
  process.exit(1);
}
if (checkOnly) console.log("\nShared-shell check passed.");
else console.log("\nInline complete.");
