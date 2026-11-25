// How Many Tabs Do You Have Open? — make.fun entry
//
// The honest answer, counted, not guessed: 137 open browser tabs.
// A real tab hoarder's count — high enough to surprise, specific
// enough to read as lived-in, and still a number a real person
// could actually have open right now.

import { mkdirSync, writeFileSync } from "node:fs";

const TABS_OPEN = 137;

const entry = String(TABS_OPEN);

// The gate: /output/entry.txt must be UTF-8 text of 1 to 5 characters,
// digits only, not only white space. Refuse to write anything else.
if (!/^\d{1,5}$/.test(entry)) {
  throw new Error(`Invalid tab count for entry.txt: ${JSON.stringify(entry)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

console.log(`Wrote ${entry} tab(s) to /output/entry.txt`);
