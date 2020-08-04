const Discord = require('discord.js');
const client = new Discord.Client();

const { Permissions } = require('discord.js');

module.exports = {
	name: 'roleremove',
	description: 'remove a role',
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
		member.roles.remove(role);
		message.channel.send(`Successfully removed ${role} of ${member}`);
		} catch (err) {
			console.error(err);
			message.channel.send(`I was unable to remove ${role} off ${member}`);
		}
		} else if (!member.hasPermission('MANAGE_ROLES')) {
			return message.channel.send('You do not have the required permissions to execute that command');
		}
		
	}
}