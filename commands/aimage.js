const Discord = require('discord.js');
const client = new Discord.Client();
var ai = require('ascii-images');
var imgur = require('imgur');

module.exports = {
	name: 'aimage',
	description: 'ascii to image',
	execute(message, args) {
        const image = message.attachments;

        imgur.uploadFile(image)
        .then(function (json) {
          
     })
         .catch(function (err) {
            console.error(err.message);
     });

		ai(json.data.link, function(result){
            message.channel.send(`\`\`\`${result}\`\`\``);
          });          
	}
}