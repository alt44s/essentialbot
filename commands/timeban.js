const Discord = require('discord.js');
const client = new Discord.Client();

const { Permissions } = require('discord.js');

module.exports = {
	name: 'timeban',
	description: 'bans someone in a specific period of time',
	execute(message, args) {
		if (!message.guild) {
            message.channel.send('You can\'t execute that command here.')
            return;
        }

	if (member.hasPermission('BAN_MEMBERS')) 
    {
			const user = message.mentions.users.first();
			function msToHMS( ms ) {
			var seconds = ms / 1000;
			}
			const time = msToHMS( args[1] );

			setTimeout(function(){ 
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
            	message.channel.send('I was unable to ban the member');
            	console.error(err);
          	});
      	} else {
      	  message.channel.send("That user isn't in this server.");
      	}
    	} else {
    	  message.channel.send("You didn't mention the user to ban.");
		}
	}, time);
	} else if (!member.hasPermission('BAN_MEMBERS')) 
	{
	return message.channel.send('You do not have the required permissions to execute that command');
	}
}	
}