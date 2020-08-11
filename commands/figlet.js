var figlet = require('figlet');

module.exports = {
	name: 'figlet',
	description: 'cool text',
	execute(message, args) {
        const p = `${args[1]} ${args[2]} ${args[3]} ${args[4]} ${args[5]}`;
        if (!args) {
            message.channel.send('Provide arguments.')
            return;
        }
        const regex = /undefined/g;
        const input = (p.replace(regex, ''));
        const font = args[0];

        if (!args[0]) {
            figlet(input, function(err, data) {
                if (err) {
                    message.channel.send('Something went wrong...');
                    console.log(err);
                    return;
                }
                message.channel.send(`\`\`\`` + data + `\`\`\``);
                return;
            });
        }

		figlet.text(input, {
            font: font,
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 80,
            whitespaceBreak: true
        }, function(err, data) {
            if (err) {
                message.channel.send('Something went wrong...');
                console.log(err);
                return;
            }
            message.channel.send(`\`\`\`` + data + `\`\`\``);
        });
	}
}