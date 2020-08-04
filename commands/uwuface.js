const faces = [`(・\`ω´・)`, `;;w;;`, `owo`, `UwU`, `>w<`, `^w^`, `ÚwÚ`, `:3`, `x3`];

module.exports = {
	name: 'uwuface',
	description: 'why x2',
	execute(message, args) {
        function uwuFace() {
			return faces[Math.floor(Math.random() * faces.length)];
		}

		message.channel.send(uwuFace());
	}
}