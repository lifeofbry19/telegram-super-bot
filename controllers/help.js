export const help = (ctx) => {
  ctx.reply(
    "Here are a list of commands you can use: \n @SuperBot followed by a prompt for OpenAIs GPT-3 language processing model. \n /updatetemp followed by a number between 0 and 1 to update the temperature of the GPT-3 model. \n /dice to roll a dice for a random number between 1-6. \n /spin to spin a slot if you're feeling lucky. \n /settings to see the current settings. \n /help to see this list of commands."
  );
};
