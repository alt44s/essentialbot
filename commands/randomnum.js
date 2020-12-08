const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'randomnum',
	description: 'generates a random number',
	execute(message) {
		function getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
		}
		
		var number = message.content.substr(11)
		message.channel.send(getRandomInt(number))

		if (isNaN(number)) {
			message.channel.send('Thats an invalid number')
		}
	},
};