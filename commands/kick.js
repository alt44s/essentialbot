const Discord = require('discord.js');
const client = new Discord.Client();

const { Permissions } = require('discord.js');

const flags = [
	'MANAGE_CHANNELS',
	'EMBED_LINKS',
	'ATTACH_FILES',
	'READ_MESSAGE_HISTORY',
	'MANAGE_ROLES',
];

module.exports = {
	name: 'kick',
	description: 'kick a user from the server.',
	execute(message, args) {
        if (!message.guild) {
            message.channel.send('You can\'t execute that command here.')
            return;
        }

    const member = message.member;
	const user = message.mentions.users.first();

    if (member.hasPermission('KICK_MEMBERS')) 
        {
            if (user) {
                const member = message.guild.member(user);
                if (member) {
                member
                .kick(args[1])
                .then(() => {
                    message.channel.send(`Successfully kicked ${user.tag}`);
                })
                .catch(err => {
                    message.channel.send('I was unable to kick the member');
                    console.error(err);
                });
            } else {
                message.channel.send("That user isn't in this server");
            }
            } else {
                message.channel.send("You didn't mention the user to kick");
            }
        }else if (!member.hasPermission('KICK_MEMBERS')) 
        {
            return message.channel.send('You do not have the required permissions to execute that command');
		}	
	}
}