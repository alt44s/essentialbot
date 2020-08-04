const { uwuifySentence } = require('uwuifier/dist');

module.exports = {
	name: 'uwuify',
	description: 'why',
	execute(message, args) {
        const content = message.content.substr(8);
        const uwuifiedContent = uwuifySentence(content);

        message.channel.send(uwuifiedContent);
	}
}