const { uwuifySentence } = require('uwuifier/dist');

module.exports = {
	name: 'uwuify',
	description: 'why',
	execute(message, args) {
        const content = message.content.substr(8);
		const uwuifiedContent = uwuifySentence(content);
		const regex = /undefined/g;
        const _input = (uwuifiedContent.replace(regex, ''));

        message.channel.send(_input);
	}
}