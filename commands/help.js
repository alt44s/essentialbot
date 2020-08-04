module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	execute(message, args) {
		whatever();
		async function whatever() {
			try {
				await message.author.send('Here\'s a list of my commands:')
				await message.author.send('Prefix: e!\n**help**\n**kick**\n**ban**\n**math** (e.g. e!math 1 1)\n**myav**\n**online**\n**ping**\n**play** (youtube link)\n**leave** (leave vc)\n**poll**\n**prune**\n**randomnum**\n**roleadd**\n**rolecreate**\n**say**\n**server**\n**uwuify** (e.g e!uwuify [Text])')
			if (!message.guild){
				return;
			} else {
				message.channel.send('I sent you a dm with all the commands')
			}
			} catch (err) {
				await message.channel.send('Couldn\'t send you a message. Are your dms open?')
			}
		}
	}
}