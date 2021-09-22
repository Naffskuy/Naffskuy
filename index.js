const { Client, intents } = require('discord.js');
const { author } = require('./package.json');
const config = require('./config.json');
const client = new Client({
  intents: 32767
});

client.on('ready', () => {
  console.log(`[${client.user.username}] Online\nAuthor: ${author}`)
  client.user.setActivity(config.botStatus + ' | ' + author, {
    type: 'PLAYING'
  })
})



client.login(process.env.TOKEN);