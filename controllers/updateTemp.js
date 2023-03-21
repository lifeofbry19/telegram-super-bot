import fs from "fs";

export const updateTemp = (ctx) => {
  const temp = ctx.message.text.slice(11).trim();
  // write to json file with new temperature value
  if (isNaN(temp) || temp < 0 || temp > 1) {
    ctx.reply(
      "Please use a number value between 0 and 1 for the temperature. For example, /updatetemp 0.5"
    );
    return;
  }
  fs.writeFileSync(
    "./db/gpt-config.json",
    JSON.stringify({ temperature: temp }),
    (err) => {
      if (err) {
        console.log(err);
        ctx.reply(
          "Sorry, I wasn't able to update the temperature, try again later."
        );
        return;
      }
    }
  );

  ctx.reply(`Temperature successfully updated to ${temp}`);
  return;
};
