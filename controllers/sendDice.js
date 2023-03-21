export const sendDice = (ctx, action = "") => {
  if (action === "spin") {
    ctx.replyWithDice({ emoji: "🎰" });
    return;
  }
  ctx.replyWithDice();
};
