var figlet = require('figlet');

module.exports = {
	name: 'figlet',
	description: 'cool text',
	execute(message, args) {
        const input = [args[1],args[2],args[3],args[4]];
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