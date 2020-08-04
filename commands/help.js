module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	execute(message, args) {
		whatever();
		async function whatever() {
			try {
				await message.author.send('Here\'s a list of my commands:')
				await message.author.send('Prefix: e!\n**help** (e!help)\n**kick** (e!kick [Mention])\n**ban** (e!ban [Mention])\n**math** (e!math 1 1)\n**myav** (e!myav)\n**online** (e!online)\n**ping** (e!ping)\n**play** (e!play [Youtube Link])\n**leave** (e!leave (Leaves VC))\n**poll** (e!poll [Text])\n**prune** (e!prune [1-99])\n**randomnum** (e!randomnum [Number])\n**roleadd** (e!roleadd [Existing Role])\n**rolecreate** (e!rolecreate [Text])\n**say** (e!say (Text))\n**server** (e!server)\n*Forbidden Commands:*\n**uwuify** (e!uwuify [Text])\n**uwuface** (e!uwuface)')
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