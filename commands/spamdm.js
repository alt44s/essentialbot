const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'spamdm',
	description: 'spams your dms a number of times',
	execute(message) {
		const user = message.mentions.users.first();

		var number = args[0];

		if (number = NaN) {
			message.channel.send('Invalid number')
			return;
		}

		for (var i=0;i<number;i++)
		{
			message.author.send('SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM SPAM')
		}
	},
};