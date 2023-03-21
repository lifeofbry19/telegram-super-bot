import { Configuration, OpenAIApi } from "openai";
import { config } from "dotenv";
import fs from "fs";

config();
const db = JSON.parse(fs.readFileSync("./db/gpt-config.json", "utf8"));
const openai = new OpenAIApi(
  new Configuration({ apiKey: process.env.OPENAI_API_KEY })
);

export const promptGpt = async (ctx) => {
  const prompt = ctx.message.text.slice(10);
  const temp =
    parseInt(db.temperature) >= 0 && parseInt(db.temperature) <= 1
      ? parseInt(db.temperature)
      : 0.5;
  if (prompt === "" || !prompt) {
    ctx.reply("Please enter a prompt to receive a response.");
    return;
  }
  ctx.sendChatAction("typing");
  openai
    .createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: temp || 0.5,
    })
    .then((res) => {
      ctx.reply(res.data.choices[0].message.content);
    })
    .catch((err) => {
      console.log(err);
      ctx.reply("Sorry, I wasn't able to process your request.");
    });
};
