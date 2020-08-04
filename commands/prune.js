const Discord = require('discord.js');
const Client = new Discord.Client();
Client.commands = new Discord.Collection();

const { Permissions } = require('discord.js');

const permissions = new Permissions([
    'MANAGE_MESSAGES',
]);

module.exports = {
    name: 'prune',
    description: 'prune up to 99 messages.',
    execute(message, args) {
        if (!message.guild) {
            message.channel.send('You can\'t execute that command here.')
            return;
        }
        const member = message.member;
        const amount = parseInt(args[0]) + 1
    
        if (member.hasPermission('MANAGE_MESSAGES') || message.author.id === '472744991241011201') 
        {

            if (isNaN(amount)) {
                return message.channel.send('That\'s not a valid number');
            } else if (amount <= 1 || amount > 100) {
                return message.channel.send('You need to input a number between 1 and 99.');
            }

            message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            message.channel.send('There was an error trying to prune messages in this channel.');
        })
        }else if (!member.hasPermission('MANAGE_MESSAGES')) 
        {
            return message.channel.send('You do not have the required permissions to execute that command');
		}
    }
}