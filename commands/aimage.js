const Discord = require('discord.js');
const client = new Discord.Client();
var ai = require('ascii-images');
const image = new Discord.MessageAttachment(attachment, name, data);
const _image = message.image;

module.exports = {
	name: 'ping',
	description: 'fuck you',
	execute(message, args) {
		ai(_image, function(result){
            message.channel.send({files: [_image]});
          });          
	}
}