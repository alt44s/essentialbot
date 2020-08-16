const Discord = require('discord.js');
const client = new Discord.Client();

const { Permissions } = require('discord.js');

module.exports = {
	name: 'leaveserver',
	description: 'Leaves the server',
	execute(message, args) {

        const member = message.member;

        if (member.hasPermission('ADMINISTRATOR' || message.author.id === '472744991241011201')) 
        {
        message.guild.leave();
        } else {
            message.channel.send('You don\'t have the required permissions to execute that command')
        }
	}
}