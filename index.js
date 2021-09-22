require('dotenv').config();
const Discord = require('discord.js');
const axios = require('axios');

const client = new Discord.client();

client.on('ready',() => {
  console.log('Logged in as ${client.user.tag}!');
});

client.on('message', async msg => {
  switch (msg.content) {
    case "all hail memegod":
      msg.reply("All Hail.");
      break;
    case "!!meme":
      msg.channel.send("Here is your meme, meme god hailer.");
      const img = await getMeme();
      msg.channel.send(img);
      break;
   }
})

client.login(process.env.CLIENT_TOKEN);
