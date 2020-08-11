const Discord = require('discord.js');
const client = new Discord.Client();
var ai = require('ascii-images');
const image = message.attachments;

module.exports = {
	name: 'aimage',
	description: 'ascii to image',
	execute(message, args) {
		ai(_image, function(result){
            message.channel.send({files: [image]});
          });          
	}
}