var figlet = require('figlet');
const Discord = require('discord.js');

module.exports = {
	name: 'figletfonts',
	description: 'cool text',
	execute(message, args) {
            const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('Fonts')
                .setAuthor('EssentialBot')
                .setDescription(`3-D

                3x5
                                
                Acrobatic
               
                Alligator
               
                Alligator2
               
                Alphabet
               
                Avatar
               
                Banner
               
                Banner3-D
               
                Banner3
               
                Banner4
               
                Barbwire
               
                Basic
               
                Bell
               
                Big
               
                Bigchief
               
                Binary
               
                Block
               
                Bubble
               
                Bulbhead
               
                Calgphy2
               
                Caligraphy
               
                Catwalk
               
                Chunky
               
                Coinstak
               
                Colossal
               
                Computer
               
                Contessa
               
                Contrast
               
                Cosmic
               
                Cosmike
               
                Cricket
               
                Cyberlarge
               
                Cybermedium
               
                Cybersmall
               
                Diamond
               
                Digital
               
                Doh
                                                                                
                Doom
                                 
                Epic
               
                Fender
               
                Fourtops
               
                Fuzzy
               
                Goofy
               
                Gothic
               
                Graffiti
               
                Hollywood
               
                Invita
               
                Isometric1
               
                Isometric2
               
                Isometric3
               
                Isometric4
               
                Italic
               
                Ivrit
               
                Jazmine
                                     
                Jerusalem
               
                Katakana
               
                Kban                        
                                          
                Lcd
               
                Lean
               
                Letters
               
                Linux
               
                Lockergnome
               
                Madrid
               
                Marquee
               
                Maxfour
               
                Mike
               
                Mini
               
                Mirror
               
                Mnemonic
               
                Morse
               
                Moscow
               
                Nancyj-Fancy
               
                Nancyj-Underlined
               
                Nancyj
               
                Nipples                            
               
                O8
               
                Ogre
               
                Pawp
               
                Peaks
               
                Pebbles
               
                Pepper
               
                Poison
                                                
                Puffy
               
                Pyramid
               
                Rectangles
               
                Relief
               
                Relief2
               
                Roman
               
                Rot13
               
                Rounded            
               
                Rozzo
               
                Runic
               
                Runyc
               
                script
               
                Serifcap
               
                Shadow
               
                Short
               
                Slant
               
                Slide
               
                Small
               
                Keyboard
               
                Script
               
                Shadow
               
                Speed
               
                Stampatello               
               
                Standard
               
                Stellar
               
                Stop
               
                Straight
               
                Tanja
               
                Tengwar
               
                Term
               
                Thick
               
                Thin
               
                Threepoint
               
                Ticks
               
                tinker-toy
               
                Tombstone
               
                Trek
               
                Tsalagi
               
                Univers
                                                          
                Weird`)
                .setTimestamp();
            message.channel.send(embed);
         
	}
}