const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'poll',
	description: 'polls',
	execute(message, args) {
		var input = message.content.substr(6)
		
		message.delete();

		message.channel.send(input).then(sentMessage => {
		sentMessage.react('👍');
		sentMessage.react('👎');
	})
	},
};
