const Discord = require('discord.js');
const ytdl = require('ytdl-core');

module.exports = {
	name: 'playloop',
	description: 'plays and loops',
	execute(message, args) {
		if (!message.guild) {
            message.channel.send('You can\'t execute that command here.')
            return;
        }
		if (message.channel.type !== 'text') return;

		const voiceChannel = message.member.voice.channel;

		if (!voiceChannel) {
			return message.channel.send('Please join a voice channel first.');
		}

		for (var i=0;i<99;i++)
		whatever();
		async function whatever() {
		{
			try {
		await voiceChannel.join().then(connection => {
			const stream = ytdl(message.content.substr(6), { filter: 'audioonly' });
			const dispatcher = connection.play(stream);
		})
		} catch (err) {
			await message.channel.send("Couldn't play the audio.")
			console.log(err);
		}
		}
	}
	}
	}