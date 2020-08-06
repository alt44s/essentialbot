module.exports = {
	name: 'add',
	description: '+',
	execute(message, args) {
		const amount1 = parseInt(args[0]);
		const amount2 = parseInt(args[1]);

		if (NaN){
			message.channel.send('Invalid number');
		} else {
		thing();
		function thing() {
		try {
		message.channel.send(Number(amount1) + amount2);
		} catch (err) {
			message.channel.send('Something went wrong')
		}
		}
	}
	},
};