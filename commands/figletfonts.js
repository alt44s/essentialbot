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
                .setDescription('http://www.figlet.org/fontdb.cgi')
                .setTimestamp();
            message.channel.send(embed);
         
	}
}