const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'ping',
	description: 'fuck you',
	execute(message, args) {
		message.channel.send('Pong.');
	}
}