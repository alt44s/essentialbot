const Discord = require('discord.js');
const client = new Discord.Client();

const { Permissions } = require('discord.js');

module.exports = {
	name: 'ban',
	description: 'bans someone idk',
	execute(message, args) {
		if (!message.guild) {
            message.channel.send('You can\'t execute that command here.')
            return;
        }

	if (member.hasPermission('BAN_MEMBERS')) 
    {
			const user = message.mentions.users.first();
	    if (user) {
      		const member = message.guild.member(user);
        if (member) {
        	member
          	.ban({
          	  reason: args[1],
          	})
            .then(() => {
            	message.channel.send(`Successfully banned ${user.tag}`);
          	})
          	.catch(err => {
            	message.channel.send('I was unable to ban that member');
            	console.error(err);
          	});
      	} else {
      	  message.channel.send("That user isn't on this server.");
      	}
    	} else {
    	  message.channel.send("You didn't mention a user to ban.");
    	}
	} else if (!member.hasPermission('BAN_MEMBERS')) 
	{
	return message.channel.send('You do not have the required permissions to execute that command');
	}
}	
}