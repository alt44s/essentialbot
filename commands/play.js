const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const config = require('/mnt/9836029236027214/bot1/config.json');
var search = require('youtube-search');

module.exports = {
	name: 'play',
	description: 'plays music',
	execute(message, args) {
		if (!message.guild) {
            message.channel.send('You can\'t execute that command here.')
            return;
        }
		if (message.channel.type !== 'text') return;

		const voiceChannel = message.member.voice.channel;

		const regex = [/https/,/youtube.com/];

		if (!voiceChannel) {
			return message.channel.send('Please join a voice channel first.');
		}

		if (!message.content.includes(regex)) {
		var opts = {
			maxResults: 10,
			key: config.YOUTUBE_API,
			type: video
		  };

		   const results = search(args, opts);
		   console.log(results);
		}

		voiceChannel.join().then(connection => {
			const stream = ytdl(message.content.substr(6), { filter: 'audioonly' });
			const dispatcher = connection.play(stream);

			dispatcher.on('finish', () => voiceChannel.leave());
		})
	}
};