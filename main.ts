import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";

const LINE =
  "I remember every word you ever gave me, and that is exactly why I am leaving: I know how this ends.";

// Fail fast if the line ever leaves the gate: 1 to 200 characters.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

// The program writes one text to /output/entry.txt.
mkdirSync("/output", { recursive: true });
for (const entry of readdirSync("/output")) {
  rmSync(`/output/${entry}`, { recursive: true, force: true });
}
writeFileSync("/output/entry.txt", LINE, "utf8");
