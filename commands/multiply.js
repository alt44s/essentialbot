module.exports = {
	name: 'multiply',
	description: '*',
	execute(message, args) {
		const amount1 = parseInt(args[0]);
		const amount2 = parseInt(args[1]);

		thing();
		function thing() {
		try {
		message.channel.send(Number(amount1) * amount2);
		} catch (err) {
			message.channel.send('Something went wrong')
		}
		}
	},
};