

## 🧩 Usage

### Import

Use destructuring to import the functions you need:

```javascript
const {
  newtonify,
  lawOfCoding,
  appleFall,
  gravityText,
  newtonRandom
} = require('newtonify');
```

---

### 🧲 1. `newtonify(text, mode)`

Adds a Newton-inspired twist (with emojis and humor) to any message.

| Mode        | Description                            |
| :---------- | :------------------------------------- |
| `light`     | For simple, light-hearted messages.    |
| `heavy`     | For intense or "buggy" situations.     |
| `discovery` | For moments of insight or realization. |

```javascript
console.log(newtonify("Learning JavaScript", "discovery"));
console.log(newtonify("Debugging life", "heavy"));
```

**Output:**

```
Learning JavaScript 🧠 (thanks, gravity!)
Debugging life ⚡⚡ (thanks, gravity!)
```

---

### 🧠 2. `lawOfCoding(num?)`

Returns one of Newton’s "Laws of Coding" — funny and relatable programming truths.
Pass a number to get a specific law, or call it without arguments for a random one.

```javascript
console.log(lawOfCoding());   // Get a random law
console.log(lawOfCoding(2));  // Get the 2nd law
```

**Example Output:**

```
Newton's 2ᵗʰ Law of Coding:
A coder in motion stays in motion unless stopped by production bugs. 🧑‍💻
```

---

### 💥 3. `appleFall(text, mode?)`

Literally drop an apple 🍎 or an idea 💡 around your message.

| Mode    | Output Symbol | Default? |
| :------ | :------------ | :------- |
| `apple` | 🍎            | ✅        |
| `idea`  | 💡            | ❌        |

```javascript
console.log(appleFall("Eureka!", "apple"));
console.log(appleFall("New idea incoming!", "idea"));
```

**Output:**

```
🍎 Eureka! 🍎
💡 New idea incoming! 💡
```

---

### 📐 4. `gravityText(text, delay?)`

Simulates gravity pulling your text down. Each letter prints on a new line with a specified delay (in milliseconds).
Great for fun console effects! **Note:** This is an `async` function.

```javascript
await gravityText("Newton School", 150);
```

**Output:**

```
N
e
w
t
o
n
S
c
h
o
o
l
```

---

### 🧪 5. `newtonRandom()`

Retrieves a random, witty Newton fact, quote, or coding-related line.

```javascript
console.log(newtonRandom());
```

**Possible Outputs:**

```
Gravity pulled apples, curiosity pulls coders. 🍎
An object at rest stays at rest until the next deadline hits. 😅
Innovation is just applied curiosity. 🚀
```

---

## 💡 Function Summary

| Function                       | Description                                                             | Example                           |
| :----------------------------- | :---------------------------------------------------------------------- | :-------------------------------- |
| 🧲 `newtonify(text, mode)`     | Adds Newton-style emojis & humor (`light`, `heavy`, `discovery` modes). | `newtonify("Debugging", "heavy")` |
| 🧠 `lawOfCoding(num?)`         | Returns a random or numbered “Law of Coding.”                           | `lawOfCoding(3)`                  |
| 💥 `appleFall(text, mode?)`    | Adds 🍎 (default) or 💡 around your text.                               | `appleFall("Eureka!", "idea")`    |
| 📐 `gravityText(text, delay?)` | Animates text vertically (like gravity) with a delay (ms).              | `await gravityText("Newton")`     |
| 🧪 `newtonRandom()`            | Returns a random Newton fact or quote.                                  | `newtonRandom()`                  |

---

## 🎓 Why We Built This

This project was created by **students of Newton School of Technology** to combine creativity 🎨 with code 💻.
It served as a valuable, hands-on learning experience covering core development concepts:

* ✅ String manipulation and regex
* ✅ Asynchronous functions and delays
* ✅ JS modules & exports
* ✅ The npm publishing process
* ✅ Collaboration & open-source contribution

---

## 💬 Contributing

Have a cool, Newton-inspired idea? 🍏 We’d love to see your creativity!

1. Fork this repository.
2. Add your new feature or function (like `inertiaMode()` 😄).
3. Create a descriptive pull request.

Your idea could be the next gravity-defying addition! 🚀

---

## 📜 License

**MIT License** © Newton School of Technology
Made with ❤️, curiosity, and gravity 🍎💡

---

> “Gravity pulled apples. Curiosity pulls coders.” — *Newton School of Technology*


