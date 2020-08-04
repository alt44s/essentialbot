const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'didyoujustassumemyos',
	description: 'fuck you',
	execute(message, args) {
		message.channel.send('Did you just fucking assume my operating system? I\'ll have you know I\'ve been using Arch Linux for the past 5 years steeling myself to become the best hacker man in the world. I have over 300 confirmed hacks on national intelligence agencies. You think you can get away with spreading the assumption that people should be using windows when in fact they\'re just giving away their own fundamental freedoms that libre software provides? Think again. I\'m already contacting my secret network of elite hackers to remotely access your computer in order delete all proprietary software and replace them with libre alternatives that I\'m sure you\'ll enjoy after a little bit of getting used to them. Don\'t worry, you\'ll be saved in no time.');
	},
};