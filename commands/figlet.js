var figlet = require('figlet');

module.exports = {
	name: 'figlet',
	description: 'cool text',
	execute(message, args) {
        const input = message.substr(args[0]).message.content.substr(4);
        const font = args[0];


		figlet.text(input, {
            font: font,
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 80,
            whitespaceBreak: true
        }, function(err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }

            message.channel.send(`\`\`\`` + data + `\`\`\``);

        });
	}
}