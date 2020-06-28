const Discord = require('discord.js');
const querystring = require('query-string');
const r2 = require('r2');
const cat_api_key = process.argv[3];
const dog_api_key = process.argv[4];

module.exports = {

    /**
     * 
     * @param {Discord.Message} msg 
     */
    handleCommand: async function(msg) {
        if (msg.content.startsWith('!') || msg.content.startsWith('.')) {
            var command = msg.content.substring(1);
            //cat picture
            if (command.startsWith('cica')) {
                var image = await getCatImage(msg.author.username);
                var embed = new Discord.MessageEmbed()
                    .setColor('#ff33cc')
                    .setDescription('😻 😻 😻 😻')
                    .setImage(image[0].url);
                msg.channel.send(embed).then(sentMsg => sentMsg.react(sentMsg.guild.emojis.cache.find(emoji => emoji.name === 'kitty')));
                console.log('Sent a cat picture :)');
            //dog picture
            } else if (command.startsWith('kutya')) {
                var image = await getDogImage(msg.author.username);
                var embed = new Discord.MessageEmbed()
                    .setColor('#ff33cc')
                    .setDescription('egy kutya')
                    .setImage(image[0].url);
                msg.channel.send(embed);
                console.log('Sent a dog picture :)');
            //welcome
            } else if (command.startsWith('szia')) {
                msg.react('👋');
                msg.channel.send(genEmbed('Szia!'));
            }
        }
    }
}

/**
 * 
 * @param {String} username
 */
async function getCatImage(username) {
    var headers = {
        'X-API-KEY': cat_api_key
    };
    var query_params = {
        'mime_types': 'jpg,png',
        'size': 'medium',
        'sub_id': username,
        'limit' : 1
    };

    let queryString = querystring.stringify(query_params);
    try {
        let _url = `https://api.thecatapi.com/v1/images/search?${queryString}`;
        var response = await r2.get(_url , {headers} ).json;
    } catch (e) {
        console.log(e);
    }
    
    return response;
}

/**
 * 
 * @param {String} username
 */
async function getDogImage(username) {
    var headers = {
        'X-API-KEY': dog_api_key
    };
    var query_params = {
        'mime_types': 'jpg,png',
        'size': 'medium',
        'sub_id': username,
        'limit' : 1
    };

    let queryString = querystring.stringify(query_params);
    try {
        let _url = `https://api.thedogapi.com/v1/images/search?${queryString}`;
        var response = await r2.get(_url , {headers} ).json;
    } catch (e) {
        console.log(e);
    }
    
    return response;
}

/**
 * 
 * @param {String} title
 * @param {String} message 
 */
function genEmbed(title, message) {
    var embed = new Discord.MessageEmbed()
        .setColor('#ff33cc');
    if (message !== undefined) {
        embed.setDescription(message);
    }
    if (title !== undefined) {
        embed.setTitle(title);
    }
    return embed;
}