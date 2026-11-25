// SPDX-License-Identifier: MIT
// One Star for Monday — writes a single one-star restaurant review of
// Monday as if Monday were a restaurant, to /output/entry.txt.
//
// The review is assembled from three complaint beats (seating, dish, bill)
// so each beat can be tuned independently; the assembled line is the entry.

import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// Beat 1 — the booking: the diner asked for breakfast, Monday answered.
function seatingBeat(): string {
  return "Booked Monday for breakfast";
}

// Beat 2 — the dish: what arrived at the table.
function dishBeat(): string {
  return "got served last week's cold coffee";
}

// Beat 3 — the bill and the server: charged for the weekend, waiter gone.
function billBeat(): string {
  return "a bill for the weekend, and a waiter who ghosted till Friday";
}

// The review strings the three beats together with semicolons, diner-style.
function composeReview(): string {
  const beats = [seatingBeat(), dishBeat(), billBeat()];
  return `${beats[0]}; ${beats[1]}, ${beats[2]}.`;
}

function main(): void {
  const review = composeReview();
  const words = review.split(/\s+/).filter(Boolean).length;
  if (words > 25) {
    throw new Error(`review is ${words} words, over the 25-word cap`);
  }
  if (review.length < 1 || review.length > 180) {
    throw new Error(`review is ${review.length} chars, outside the 1-180 gate`);
  }
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, review + "\n", "utf8");
}

main();
