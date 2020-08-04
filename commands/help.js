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
					.addField('', 'Prefix: e!', true)
					.addField('User Commands', '', true)
					.addField('math', 'e!math 1 1', true)
					.addField('randomnum', 'e!randomnum [Number]', true)
					.addField('say', 'e!say [Text]', true)
					.addField('ping', 'e!ping', true)
					.addField('server', 'e!server', true)
					.addField('spamdm', 'e!spamdm', true)
					.addField('poll', 'e!poll [Text]', true)
					.addField('Music Commands', '', true)
					.addField('play', 'e!play [Youtube Link]', true)
					.addField('leave', 'e!leave', true)
					.addField('Moderation', '', true)
					.addField('kick', 'e!kick [Mention]', true)
					.addField('ban', 'e!ban [Mention]', true)
					.addField('prune', 'e!prune [1-99]', true)
					.addField('roleadd', 'e!roleadd [Mention]', true)
					.addField('rolecreate', 'e!rolecreate [Name]', true)
					.addField('Forbidden Commands', '', true)
					.addField('uwuify', 'e!uwuify [Text]', true)
					.addField('uwuface', 'e!uwuface', true)
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