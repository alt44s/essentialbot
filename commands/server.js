module.exports = {
	name: 'server',
	description: 'server info',
	execute(message) {
		if (!message.guild) {
            message.channel.send('You can\'t execute that command here.')
            return;
        }

		message.channel.send(`Server name: ${message.guild.name}\nNumber of members: ${message.guild.memberCount}`);
	},
};