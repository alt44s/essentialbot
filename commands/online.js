const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'online',
	description: 'shows online members',
	execute(message, args) {
		if (!message.guild) {
            message.channel.send('You can\'t execute that command here.')
            return;
        }

		message.guild.members.fetch().then(fetchedMembers => {
		const totalOnline = fetchedMembers.filter(member => member.presence.status === 'online');
		message.channel.send(`There are currently ${totalOnline.size} members online in this server`);
	});
	},
};