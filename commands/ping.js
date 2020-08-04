module.exports = {
	name: 'ping',
	description: 'fuck you',
	execute(message, args) {
		message.channel.send('Pong.');
	}
}