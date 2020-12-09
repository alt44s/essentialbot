const Discord = require('discord.js');

module.exports = {
	name: 'social',
	description: 'social media',
	execute(message, args) {
		whatever();
		async function whatever() {
			try {
				const embed = new Discord.MessageEmbed()
					.setColor('RANDOM')
					.setTitle('Social Media')
					.setAuthor('EssentialBot')
					.addFields(
						{ name: 'YouTube', value: 'https://www.youtube.com/channel/UCOtNbZ7ju825GlSPfOZUTgg?view_as=subscriber' },
						{ name: 'Twitter', value: 'https://twitter.com/true_ranbee', inline: true },
						{ name: 'Twitch', value: 'https://twitter.com/true_ranbee', inline: true },
					)
					.setTimestamp()
				message.channel.send(embed);
					}catch(err){
						message.channel.send('Couldn\'nt send the message')
					}
		}
	}
}
			
			
				