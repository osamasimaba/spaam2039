const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("535452007767474176")
setInterval(function() {
channel.send(`yassin yassin osama osama`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
