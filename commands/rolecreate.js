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
	name: 'rolecreate',
	description: 'create a role',
	execute(message, args) {
        if (!message.guild) {
            message.channel.send('You can\'t execute that command here.')
            return;
        }

        const member = message.member;
        const guild = message.guild;

		if (member.hasPermission('MANAGE_ROLES') || message.author.id === '472744991241011201') {
		try {
            guild.roles.create({ data: { name: message.content.substr(2), permissions: ['SEND_MESSAGES', 'VIEW_CHANNEL'], color: 'RANDOM' } });
            message.channel.send('Successfully created the role: ' + args[0]);
		} catch (err) {
			console.error(err);
			message.channel.send('I was unable to create the role');
		}
		} else if (!member.hasPermission('MANAGE_ROLES')) {
			return message.channel.send('You do not have the required permissions to execute that command');
		}
		
	}
}