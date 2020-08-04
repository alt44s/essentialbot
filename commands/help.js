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
					.setDescription('e!help')
					.setThumbnail('https://imgur.com/O2cVNvg.png')
					.addField('Prefix', 'Prefix: e!', true)
					.addFields(
						{ name: 'User Commands', value: 'Commands everyone can use' },
						{ name: 'math', value: 'e!math 1 1', inline: true },
						{ name: 'randomnum', value: 'e!randomnum [Number]', inline: true },
						{ name: 'say', value: 'e!say [Text]', inline: true },
						{ name: 'ping', value: 'e!ping', inline: true },
						{ name: 'server', value: 'e!server', inline: true },
						{ name: 'spamdm', value: 'e!spamdm', inline: true },
						{ name: 'poll', value: 'e!poll [Text]', inline: true },
					)
					.addFields(
						{ name: 'Music Commands', value: 'Used in a voice channel' },
						{ name: 'play', value: 'e!play [YouTube Link]', inline: true },
						{ name: 'leave', value: 'e!leave', inline: true },
					)
					.addFields(
						{ name: 'Moderation', value: 'Commands only accessible to staff' },
						{ name: 'kick', value: 'e!kick [Mention] [Reason]', inline: true },
						{ name: 'ban', value: 'e!ban [Mention] [Reason]', inline: true },
						{ name: 'prune', value: 'e!prune [1-99]', inline: true },
						{ name: 'roleadd', value: 'e!roleadd [Mention] [Role Name]', inline: true },
						{ name: 'rolecreate', value: 'e!rolecreate [Name]', inline: true },
					)
					.addFields(
						{ name: 'Forbidden Commands', value: 'I would prefer if you would not use them' },
						{ name: 'uwuify', value: 'e!uwuify [Text]', inline: true },
						{ name: 'uwuface', value: 'e!uwuface', inline: true },
					)
					.setTimestamp()
				message.author.send(embed);
			if (!message.guild){
				return;
			} else {
				message.channel.send('I sent you a dm with all the commands')
			}
			} catch (err) {
				await message.channel.send('Couldn\'t send you a message. Are your dms open?')
				console.log(err);
			}
		}
	}
}