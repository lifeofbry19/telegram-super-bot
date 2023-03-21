import express from "express";
import dotenv from "dotenv";
import { Telegraf } from "telegraf";
import bodyParser from "body-parser";
import cryptoRandomString from "crypto-random-string";
import { help } from "./controllers/help.js";
import { promptGpt } from "./controllers/promptGpt.js";
import { updateTemp } from "./controllers/updateTemp.js";
import { settings } from "./controllers/settings.js";
import { sendDice } from "./controllers/sendDice.js";

dotenv.config();
const { TELEGRAM_BOT_TOKEN, SERVER_URL } = process.env;
//const telegram_api = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}`;
const uri = `/webhook/${cryptoRandomString({ length: 32, type: "url-safe" })}`;
const webhookDomain = `${SERVER_URL}${uri}`;

const bot = new Telegraf(TELEGRAM_BOT_TOKEN);
const app = express();
app.use(bodyParser.json());
app.use(await bot.createWebhook({ domain: webhookDomain }));

bot.start((ctx) => {
  ctx.reply(
    "Hello! Im a Telegram SuperBot that comes with many powerful features, such as leveraging OpenAI's GPT-3.5 model for advanced language processing. Type /help to see a full list of my commands"
  );
});
bot.help(help);
bot.settings(settings);
bot.hears("/sleep", (ctx) => {
  ctx.reply("Going to sleep... 😴");
  bot.stop();
});
bot.hears("/spin", (ctx) => {
  sendDice(ctx, "spin");
});
bot.hears("/dice", (ctx) => {
  sendDice(ctx);
});
bot.on("text", (ctx) => {
  if (ctx.message.text.slice(0, 9) === "@SuperBot") {
    promptGpt(ctx);
    return;
  }
  if (ctx.message.text.includes("@SuperBot")) {
    ctx.reply(
      "Please put @SuperBot at the beginning of the message if you want to prompt GPT-3.5"
    );
    return;
  }
  if (ctx.message.text.slice(0, 11) === "/updatetemp") {
    updateTemp(ctx);
  }
});

bot.launch();

app.listen(process.env.port || 8080, () => {
  console.log("Server is running on port 8080");
});
