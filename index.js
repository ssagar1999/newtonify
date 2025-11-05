// index.js

/**
 * 🍎 newtonify
 * Adds a Newton twist to your messages with emoji and humor.
 */

function newtonify(text, mode = "light") {
  const emojiSets = {
    light: ["🍎", "💡", "✨"],
    heavy: ["🍎🍎", "💡💡", "⚡⚡"],
    discovery: ["🧠", "🚀", "🔭"]
  };

  const emojis = emojiSets[mode] || emojiSets.light;
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  return `${text} ${randomEmoji} (thanks, gravity!)`;
}

/**
 * 🧠 lawOfCoding
 * Returns Newton-style funny coding laws.
 */

function lawOfCoding(num) {
  const laws = [
    "For every bug, there is an equal and opposite workaround. 🧩",
    "A coder in motion stays in motion unless stopped by production bugs. 🧑‍💻",
    "Every line of code written creates technical debt somewhere else. 💻",
    "If something can go wrong, it will go wrong — especially during demos. 🚀",
    "The gravity of deadlines pulls all coders equally. 🍎"
  ];

  if (!num || num < 1 || num > laws.length) {
    num = Math.floor(Math.random() * laws.length);
  } else {
    num = num - 1;
  }

  return `Newton's ${num + 1}ᵗʰ Law of Coding:\n${laws[num]}`;
}

/**
 * 💥 appleFall
 * Drops “apples” or “ideas” into your message 🍎💡
 */

function appleFall(text, mode = "idea") {
  const apple = "🍎";
  const idea = "💡";
  const emoji = mode === "apple" ? apple : idea;
  return `${emoji} ${text} ${emoji}`;
}

/**
 * 📐 gravityText
 * Simulates gravity pulling text down (console animation)
 */

async function gravityText(text, delay = 100) {
  for (const char of text) {
    console.log(char);
    await new Promise((res) => setTimeout(res, delay));
  }
}

/**
 * 🧪 newtonRandom
 * Returns a random Newton quote, fact, or fun message.
 */

function newtonRandom() {
  const facts = [
    "Gravity pulled apples, curiosity pulls coders. 🍎",
    "Every great idea starts with a small ‘why?’ 💡",
    "Innovation is just applied curiosity. 🚀",
    "An object at rest stays at rest until the next deadline hits. 😅",
    "Falling apples teach more than standing still. 🍏"
  ];
  const random = Math.floor(Math.random() * facts.length);
  return facts[random];
}

// Export everything
module.exports = {
  newtonify,
  lawOfCoding,
  appleFall,
  gravityText,
  newtonRandom
};
