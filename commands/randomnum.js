const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'randomnum',
	description: 'random number',
	execute(message, args) {

		var number1 = args[0];
		var number2 = args[1];
		
		const result = Math.floor(Math.random() * number2) + number1; 

		if (isNaN(result)) {
			message.channel.send('Thats an invalid number')
		}

		message.channel.send(result);
	},
};