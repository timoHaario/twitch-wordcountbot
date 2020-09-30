const tmi = require("tmi.js");

// Define configuration options
const opts = {
  identity: {
    username: "harzzaa_bot",
    password: "oauth:61clum8hbqa3vt7lxvxt6ezbz79mg7",
  },
  channels: ["harzzaa_bot"],
};
// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on("message", onMessageHandler);
client.on("connected", onConnectedHandler);

// Connect to Twitch:
client.connect();

const word = "pog";

let wordCount = 0;

// Called every time a message comes in
function onMessageHandler(target, context, msg, self) {
  //   if (self) {
  //     return;
  //   } // Ignore messages from the bot

  // Remove whitespace from chat message
  const message = msg.trim().toLowerCase();

  if (message === "30") {
    let i = 30;
    while (i > 0) {
      client.say(target, "pog");
      i -= 1;
    }
  }

  if (message.includes(word)) {
    wordCount += 1;
    console.log(`Word count for ${word} is: ${wordCount}`);
  }
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
