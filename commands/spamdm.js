const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'spamdm',
	description: 'spams your dms a number of times',
	execute(message) {
		for (var i=0;i<10;i++)
		{
			message.author.send('SPAM SPAM SPAM SPAM SPAM SPAM SPAM')
		}
	},
};