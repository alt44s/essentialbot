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
	name: 'roleadd',
	description: 'add a role',
	execute(message, args) {
		if (!message.guild) {
            message.channel.send('You can\'t execute that command here.')
            return;
        }

		const guild = message.guild;
		const member = message.member;
		
		if (member.hasPermission('MANAGE_ROLES') || message.author.id === '472744991241011201') {
		try {
		const role = guild.roles.cache.find(role => role.name === args[1]);
		const member = message.mentions.members.first();
		member.roles.add(role);
		message.channel.send(`Successfully added ${role} to ${member}`);
		} catch (err) {
			console.error(err);
			message.channel.send('I was unable to add the role to the member');
		}
		} else if (!member.hasPermission('MANAGE_ROLES')) {
			return message.channel.send('You do not have the required permissions to execute that command');
		}
		
	}
}