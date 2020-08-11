const Discord = require('discord.js');
const client = new Discord.Client();
var ai = require('ascii-images');
module.exports = {
	name: 'aimage',
	description: 'ascii to image',
	execute(message, args) {
        const image = message.attachments;

        message.channel.send(image);
		//ai(image, function(result){
          //  message.channel.send(`\`\`\`${result}\`\`\``);
          //});          
	}
}