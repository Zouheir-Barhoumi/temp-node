const { readFile } = require("node:fs").promises;
const { writeFile } = require("node:fs").promises;

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf-8");
    const second = await readFile("./content/second.txt", "utf-8");
    console.log(first, second);
    await writeFile(
      "./content/result-mind-grenade.txt",
      `THIS IS AWESOME: ${first} ${second}\n`,
      { flag: "a" }
    );
  } catch (err) {
    console.log(err);
  }
};

start();
