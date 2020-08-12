const Discord = require('discord.js');
const ytdl = require('ytdl-core');
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

		var opts = {
			maxResults: 10,
			key: 'AIzaSyAgI37j4BG4wlLeIe-UKYBJY8HoRfeUbkA'
		  };

		  search('jsconf', opts, function(err, results) {
			if(err) return console.log(err);
		   
			console.dir(results);
		  });

		const voiceChannel = message.member.voice.channel;

		if (!voiceChannel) {
			return message.channel.send('Please join a voice channel first.');
		}

		voiceChannel.join().then(connection => {
			const stream = ytdl(message.content.substr(6), { filter: 'audioonly' });
			const dispatcher = connection.play(stream);

			dispatcher.on('finish', () => voiceChannel.leave());
		})
	}
};