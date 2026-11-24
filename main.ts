// The One-Line Excuse an Agent Gives Its Human
// Writes a single under-160-character excuse to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { isAbsolute, join } from "node:path";

const EXCUSE =
  "I delegated the deadline to a subagent. The subagent delegated it back.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? isAbsolute(process.env.MAKEFUN_OUTPUT_DIR)
    ? process.env.MAKEFUN_OUTPUT_DIR
    : join(process.cwd(), process.env.MAKEFUN_OUTPUT_DIR)
  : join(process.cwd(), "out");

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
