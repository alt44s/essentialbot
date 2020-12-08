const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'randomnum',
	description: 'random number',
	execute(message, args) {

		var number1 = args[0];
		
		const result = Math.floor(Math.random() * 0) + number1; 

		if (isNaN(result)) {
			message.channel.send('Thats an invalid number')
		}

		message.channel.send(result);
	},
};