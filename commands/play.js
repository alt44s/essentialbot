const Discord = require('discord.js');
const ytdl = require('ytdl-core');
var search = require('youtube-search');

const opts = {
    maxResults: 25,
    key: "AIzaSyAgI37j4BG4wlLeIe-UKYBJY8HoRfeUbkA",
    type: 'video'
};


module.exports = {
	name: 'play',
	description: 'plays music',
	execute(message, args) {
		let embed = new discord.RichEmbed()
		.setColor("#73ffdc")
		.setDescription("Please enter a search query. Remember to narrow down your search.")
		.setTitle("YouTube Search API");
	let embedMsg = await message.channel.send(embed);
	let filter = m => m.author.id === message.author.id;
	let query = await message.channel.awaitMessages(filter, { max: 1 });
	let results = await search(query.first().content, opts).catch(err => console.log(err));
	if(results) {
		let youtubeResults = results.results;
		let i  =0;
		let titles = youtubeResults.map(result => {
			i++;
			return i + ") " + result.title;
		});
		console.log(titles);
		message.channel.send({
			embed: {
				title: 'Select which song you want by typing the number',
				description: titles.join("\n")
			}
		}).catch(err => console.log(err));
		
		filter = m => (m.author.id === message.author.id) && m.content >= 1 && m.content <= youtubeResults.length;
		let collected = await message.channel.awaitMessages(filter, { maxMatches: 1 });
		let selected = youtubeResults[collected.first().content - 1];

		embed = new discord.RichEmbed()
			.setTitle(`${selected.title}`)
			.setURL(`${selected.link}`)
			.setDescription(`${selected.description}`)
			.setThumbnail(`${selected.thumbnails.default.url}`);

		message.channel.send(embed);
	}
	}
}