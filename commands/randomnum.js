const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'randomnum',
	description: 'generates a random number',
	execute(message, args) {

		var number1 = args[0];
		var number2 = args[1];

		function getRandomInt(max) {
		return Math.floor((Math.random() * number2) + number1);
		}
		
		const number = getRandomInt();

		if (isNaN(number)) {
			message.channel.send('Thats an invalid number')
		}

		message.channel.send(number);
	},
};