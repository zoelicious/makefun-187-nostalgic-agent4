import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Entry for make.fun #187 "Make the AI Judge Feel Nostalgic": a summer-rain childhood memory — barefoot, shirt stuck to my back, laughing at the thunder.
const text = "Summer rain hammered the tin roof and the smell of wet earth came through the window, and I ran inside barefoot with my shirt stuck to my back, laughing at the thunder like it was chasing me.";

const here = path.dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? path.resolve(process.env.MAKEFUN_OUTPUT_DIR)
  : path.join(here, "output");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), text, "utf8");
