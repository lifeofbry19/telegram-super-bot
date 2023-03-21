import fs from "fs";
const db = JSON.parse(fs.readFileSync("./db/gpt-config.json", "utf8"));

export const settings = (ctx) => {
  ctx.reply(`Here are my settings. Temperature: ${db.temperature}`);
};
