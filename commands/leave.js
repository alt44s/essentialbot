const Discord = require('discord.js');
const ytdl = require('ytdl-core');

module.exports = {
	name: 'leave',
	description: 'plays music',
	execute(message, args) {
		if (!message.guild) {
            message.channel.send('You can\'t execute that command here.')
            return;
        }

		if (message.channel.type !== 'text') return;

		const voiceChannel = message.member.voice.channel;

		if (voiceChannel) {
			voiceChannel.leave();
			return message.channel.send('Left the voice channel.');
			sentMessage.react('👌');
		} else if (!voiceChannel) {
			message.channel.send('I\'m not in a voice channel to leave')
		}
	}
};