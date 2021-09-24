// Run by Node.js
const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let numOfIterate = 0;
  let number = 0;
  const phone = [];

  for await (const line of rl) {
    if (numOfIterate === 0) {
      number = Number(line);
    } else {
      phone.push(line);
      if (number === numOfIterate) {
        rl.close();
      }
    }
    numOfIterate++;
  }

  process.exit();
})();
