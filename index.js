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

client.on('guildMemberAdd',(member)=>{
    const channel =  member.guild.channels.cache.find(ch => ch.name === 'general').send(`Selamat Datang di Server Smapda Tech ${member}!!\n
 Server Info :
   Kunjungi <#771373087954042910> untuk denger lagu!
   Kunjungi <#741632073282093060> untuk diskusi bareng lewat teks sama temen - temen lainnya
   Kunjungi <#771368338290245682> untuk share memes! High Quality memes ya!
   Kunjungi <#771373231767552000> untuk course - course menarik lainnya
   Kunjungi <#771367332927766538> untuk melihat info - info penting
   Kunjungi <#771368451703963658> untuk temen - temen yang kesulitan memahami sebuah kasus
   Kunjungi <#771368451703963658> untuk ide untuk pengembangan bot atau berkontribusi
  )

   member.guild.channels.cache.find(ch => ch.name ==='members-logs').send(`Selamat Datang **${member}** di Smapda Tech Server, kamu memiliki username _**${member.user.tag}**`);



});

client.login(config.BOT_TOKEN);
