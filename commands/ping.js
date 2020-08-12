module.exports = {
	name: 'ping',
	description: 'fuck you',
	execute(message, args) {
		var ping = Date.now() - message.createdTimestamp + " ms";
    message.channel.sendMessage("`" + `${Date.now() - message.createdTimestamp}` + " ms`");
	}
}