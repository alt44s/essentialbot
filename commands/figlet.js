var figlet = require('figlet');
const { fonts } = require('figlet');

module.exports = {
	name: 'figlet',
	description: 'cool text',
	execute(message, args) {
        const p = `${args[1]} ${args[2]} ${args[3]} ${args[4]} ${args[5]}`;
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments`);
        }

        if (!args[1]) {
            return message.channel.send(`Not enough arguments`);
        }

        if (args[6]) {
            return message.channel.send(`Too much arguments`);
        }
        const regex = /undefined/g;
        const input = (p.replace(regex, ''));
        const font = args[0];

		figlet.text(input, {
            font: font,
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 80,
            whitespaceBreak: true
        }, function(err, data) {
            if (err) {
                message.channel.send('Something went wrong. Did you enter the font right?');
                console.log(err);
                return;
            }
            message.channel.send(`\`\`\`` + data + `\`\`\``);
        });
	}
}