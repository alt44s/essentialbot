var figlet = require('figlet');

module.exports = {
	name: 'figlet',
	description: 'cool text',
	execute(message, args) {
        const input = message.content.substr(8);

		figlet(input, function(err, data) {
            if (err) {
                message.channel.send('Something went wrong');
                console.log(err);
                return;
            }

            message.channel.send(data);

        });
	}
}