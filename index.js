const Discord = require("discord.js");
const config = require("./config.json");

const prefix = config.prefix;

const client = new Discord.Client();

client.on("message", function(message){
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	const commandBody = message.content.slice(prefix.length);
	const args = commandBody.split(/ +/);
	const command = args.shift().toLowerCase();
	const taggedUser = message.mentions.users.first();

	if(command === "ping"){
		const timeTaken = Date.now() - message.createdTimestamp;
		message.reply(`Lolski! HAHA.. latencynya cuman ${timeTaken}ms.`);
	} else if (command === "sum"){
		const numArgs = args.map(x => parseFloat(x));
		const sum = numArgs.reduce((a,b) => {return a += b});
		message.reply(`The sum of all your argument is ${sum}!`);
	} else if (command === "call"){
		message.channel.send(`WOI ${taggedUser} BANGUN NJER!`);
	} else if (command === "help"){
		message.channel.send("List of commands: ping, sum, call, help");
	}
});

client.login(config.BOT_TOKEN);
