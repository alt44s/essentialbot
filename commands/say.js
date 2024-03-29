const Discord = require('discord.js');
const client = new Discord.Client();

const { Permissions } = require('discord.js');

module.exports = {
	name: 'say',
	description: 'say',
	execute(message) {
		const member = message.member;
		const msg = message.content.substr(5);

		if (member.hasPermission('MENTION_EVERYONE')) 
        {
			message.channel.startTyping();
			message.delete();
			setTimeout(function(){ 
			message.channel.send(msg);
			message.channel.stopTyping();
			}, 500);
		} else if (!member.hasPermission('MENTION_EVERYONE')) {
			if (message.content.includes('@everyone' || '@here')){
				message.channel.send('Why would you want to do that?');
			} else {
				message.channel.startTyping();
				message.delete();
				setTimeout(function(){ 
				message.channel.send(msg);
				message.channel.stopTyping();
			}, 500);
			}
		}
	},
};