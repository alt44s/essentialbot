const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'myav',
	description: 'avatar',
	execute(message, args) {
		message.channel.send(message.author.displayAvatarURL());
	},
};