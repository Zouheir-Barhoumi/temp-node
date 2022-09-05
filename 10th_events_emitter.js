const EventEmitter = require("node:events");

const myEventEmitter = new EventEmitter();

myEventEmitter.on("DOO", (name, number) => {
  console.log(
    `My event's emitted! by ${name}, who's favourite number is: ${number}`
  );
});
myEventEmitter.emit("DOO", "Zouheir", "9");
