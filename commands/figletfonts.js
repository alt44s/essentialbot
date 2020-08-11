var figlet = require('figlet');
const Discord = require('discord.js');

module.exports = {
	name: 'figletfonts',
	description: 'cool text',
	execute(message, args) {
            const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('Fonts')
                .setAuthor('EssentialBot')
                .setDescription('https://hastebin.com/urivuzunum.md')
                .setTimestamp();
            message.channel.send(embed);
         
	}
}