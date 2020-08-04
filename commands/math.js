const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'math',
	description: 'basic math',
	execute(message, args) {
		const amount1 = parseInt(args[0]);
		const amount2 = parseInt(args[1]);

		message.channel.send(Number(amount1) + amount2);
	},
};