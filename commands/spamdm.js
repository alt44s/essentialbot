const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'spamdm',
	description: 'spams your dms 10 times',
	execute(message) {
		const user = message.mentions.users.first();

		for (var i=0;i<10;i++)
		{
			message.author.send('Spam');
		}
	},
};