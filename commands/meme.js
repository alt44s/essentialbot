const { meme } = require('memejs');

module.exports = {
	name: 'meme',
	description: 'bad',
	execute(message, args) {
		const { meme } = require('memejs');
 
			meme(function(err, data) {
		  if (err) return console.error(err);
			  message.channel.send(data);
});

	}
}