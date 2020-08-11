const Discord = require('discord.js');
const client = new Discord.Client();
const { MessageAttachment } = require('discord.js');
var ai = require('ascii-images');
module.exports = {
	name: 'aimage',
	description: 'ascii to image',
	execute(message, args) {
        const attachment = new MessageAttachment(attachments);

        message.channel.send(attachment);
		//ai(image, function(result){
          //  message.channel.send(`\`\`\`${result}\`\`\``);
          //});          
	}
}