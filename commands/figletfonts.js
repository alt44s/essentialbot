var figlet = require('figlet');
const Discord = require('discord.js');

module.exports = {
	name: 'figletfonts',
	description: 'cool text',
	execute(message, args) {
        figlet.fonts(function(err, fonts) {
            if (err) {
                console.log('something went wrong...');
                console.dir(err);
                return;
            }
            const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('Fonts')
                .setAuthor('EssentialBot')
                .setDescription(fonts)
                .setTimestamp();
            message.channel.send(embed);
            
        });        
	}
}