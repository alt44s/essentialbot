const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'say',
	description: 'say',
	execute(message) {
		message.channel.startTyping();
		message.delete();
		setTimeout(function(){ 
		message.channel.send(message.content.substr(5));
		message.channel.stopTyping();
		}, 500);
	},
};