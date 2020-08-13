const fs = require('fs');
const Discord = require('discord.js');
const Client = new Discord.Client();
Client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const AntiSpam = require('discord-anti-spam');
const { CommandoClient } = require('discord.js-commando');
const { Structures } = require('discord.js');
const path = require('path');
const antiSpam = new AntiSpam({
    warnThreshold: 3, // Amount of messages sent in a row that will cause a warning.
    kickThreshold: 7, // Amount of messages sent in a row that will cause a ban.
    banThreshold: 99999, // Amount of messages sent in a row that will cause a ban.
    maxInterval: 2000, // Amount of time (in milliseconds) in which messages are considered spam.
    warnMessage: 'Please stop spamming.', // Message that will be sent in chat upon warning a user.
    kickMessage: '**{user_tag}** has been kicked for spamming.', // Message that will be sent in chat upon kicking a user.
    banMessage: '**{user_tag}** has been banned for spamming.', // Message that will be sent in chat upon banning a user.
    maxDuplicatesWarning: 7, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesKick: 7, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesBan: 99999, // Amount of duplicate messages that trigger a warning.
    exemptPermissions: [ 'ADMINISTRATOR'], // Bypass users with any of these permissions.
    ignoreBots: true, // Ignore bot messages.
    verbose: true, // Extended Logs from module.
    ignoredUsers: [472744991241011201], // Array of User IDs that get ignored.
});

//https://discordapp.com/oauth2/authorize?client_id=733372434421383269&scope=bot&permissions=2146958847

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	Client.commands.set(command.name, command);
}

const { Permissions } = require('discord.js');

Structures.extend('Guild', Guild => {
	class MusicGuild extends Guild {
	  constructor(client, data) {
		super(client, data);
		this.musicData = {
		  queue: [],
		  isPlaying: false,
		  volume: 1,
		  songDispatcher: null
		};
	  }
	}
	return MusicGuild;
  });
  const client = new CommandoClient({
	commandPrefix: prefix,
	owner: '472744991241011201',
	unknownCommandResponse: false
  });
  
  client.registry
	.registerDefaultTypes()
	.registerGroups([
	  ['music', 'Music Command Group']
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, 'commands'));

Client.on('ready', ()=>{
console.log("Ready to go");
Client.user.setActivity('e!help');
});

Client.on('guildCreate', guild => {
    const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
    channel.send(`Hey! Thank you for inviting EssentialBot to ${guild}! To get started, you can check my commands by doing "e!help"`);
	console.log(`Joined ${guild} on `)
});

Client.on('message', message =>{
	antiSpam.message(message); 

	const guild = message.guild;
	//const member = message.member.user.tag;

	//console.log(`Message ` + message.content + ` was sent to ${guild} by ${member}`);

	if (!message.content.startsWith("e!") || message.author.bot) return;

	const args = message.content.slice("e!".length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!Client.commands.has(command)) return;

	try {
		Client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.channel.send('An error happened while trying to execute that command. Consult the owner of the bot for possible fixes.');
	}
		process.on('unhandledRejection', error => {
			console.error('Unhandled promise rejection:', error);
		});
});

Client.on('guildMemberRemove', member => {
	const message = guild.message

	message.channel.send(`${member.user.tag} has left the server`);
});

Client.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
	if (!channel) return;
	channel.send(`Welcome to the server, ${member}`);
});

Client.login("NzMzMzcyNDM0NDIxMzgzMjY5.XxGTFA.HqLZt0Ft8uiKHM-3AiDRmsSBzF0");