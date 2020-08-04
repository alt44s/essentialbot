const Discord = require('discord.js');

module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	execute(message, args) {
		whatever();
		async function whatever() {
			try {
				const embed = new Discord.MessageEmbed()
					.setColor('RANDOM')
					.setTitle('Help!')
					.setAuthor('EssentialBot')
					.setDescription('test')
					.addField('test', 'test', true)
					.setTimestamp()
				message.author.send(embed);
			if (!message.guild){
				return;
			} else {
				message.channel.send('I sent you a dm with all the commands')
			}
			} catch (err) {
				await message.channel.send('Couldn\'t send you a message. Are your dms open?')
			}
		}
	}
}