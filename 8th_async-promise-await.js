const { readFile } = require("node:fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

// getText("./content/first.txt")
//   .then((res) => console.log("Async: " + res))
//   .catch((err) => console.log("Async: " + err));

const start = async () => {
  try {
    const first = await getText("./content/first.txt");
    const second = await getText("./content/second.txt");
    console.log("Async: " + first, "\t" + second);
  } catch (error) {
    console.log(error);
  }
};

start();
