var figlet = require('figlet');

module.exports = {
	name: 'figletfonts',
	description: 'cool text',
	execute(message, args) {
        figlet.fonts(function(err, fonts) {
            if (err) {
                console.log('something went wrong...');
                console.dir(err);
                return;
            }
            console.dir(fonts);
        });        
	}
}