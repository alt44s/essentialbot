const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'say',
	description: 'say',
	execute(message) {
		const member = message.author;
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
				message.delete()
					.then(message.channel.send('Why would you want to do that?'))
			}
		}
	},
};