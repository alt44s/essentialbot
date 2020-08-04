const _ball = [`It is certain`,`Without a doubt`,`You may rely on it`,`Yes definitely`,`It is decidedly so`,`As I see it, yes`,`Most likely`,`Yes`,`Yup`,`Definitely`,`Better not tell you now`,`Ask again later`,`Cannot say now`,`Try asking a more clearer question`,`Don\'t count on it`,`Nope`,`My sources say no`,`Doubtful`,`No`,`My reply is no`];

module.exports = {
	name: '8ball',
	description: '8ball',
	execute(message, args) {
		function ball() {
			return _ball[Math.floor(Math.random() * faces.length)];
        }
        
        message.channel.send(ball);
	}
}