const Discord = require('discord.js');

const bot = new Discord.Client();
const token = process.argv[2];
const commandHandler = require('./commandHandler');

const regex = /((k|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(u|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(r|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(v|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(a|\*|4)+|(a|\*|4)+([$-/:-?{-~!"^_`\[\]\s+])*(n|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(y|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(á|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(d|\*)+|(a|\*|4)+([$-/:-?{-~!"^_`\[\]\s+])*(n|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(y|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(a|\*|4)+([$-/:-?{-~!"^_`\[\]\s+])*(d|\*)+|(g|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(e|\*|3)+([$-/:-?{-~!"^_`\[\]\s+])*(c|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(i|\*)+|(f|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(a|\*|4)+([$-/:-?{-~!"^_`\[\]\s+])*(s|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(z|\*)+|(f|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(a|\*|4)+([$-/:-?{-~!"^_`\[\]\s+])*(s|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(z|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(o|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(m|\*)+|(f|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(a|\*|4)+([$-/:-?{-~!"^_`\[\]\s+])*(s|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(s|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(z|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(o|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(p|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(ó|\*)+|(s|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(z|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(a|\*|4)+([$-/:-?{-~!"^_`\[\]\s+])*(r|\*)+|(s|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(z|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(a|\*|4)+([$-/:-?{-~!"^_`\[\]\s+])*(r|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(h|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(á|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(z|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(i|\*)+|(s|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(z|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(a|\*|4)+([$-/:-?{-~!"^_`\[\]\s+])*(r|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(o|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(s|\*)+|(b|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(u|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(z|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(i|\*)+|(k|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(i|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(b|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(a|\*|4)+([$-/:-?{-~!"^_`\[\]\s+])*(s|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(z|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(o|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(t|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(t|\*)+|(s|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(z|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(ő|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(r|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(ö|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(s|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(t|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(a|\*|4)+([$-/:-?{-~!"^_`\[\]\s+])*(l|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(p|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(ú|\*)+|(c|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(i|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(g|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(á|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(n|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(y|\*)+|(n|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(i|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(g|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(g|\*)+([$-/:-?{-~!"^_`\[\]\s+])*(e|\*|3)+([$-/:-?{-~!"^_`\[\]\s+])*(r|\*)+)/gi

bot.on('ready', () => {
    console.log('Hermione is online!');
    bot.user.setActivity('Minecraft', 'PLAYING');
    console.log(bot.user.username + ' ' + bot.user.id);
});

bot.on('message', msg => {
    if (msg.guild) {

        var regexResult = msg.content.match(regex);
        if (regexResult != null) {
            console.log('Caught swearing ' + msg.author.username + ': ' + msg.content);
            msg.delete();
            var embed = new Discord.MessageEmbed()
                .setColor('#ff33cc')
                .setDescription('Ezen a szerveren nem szabad káromkodni!')
                .setImage('https://media1.tenor.com/images/f4b0e237c4e3551007c21b520a970847/tenor.gif?itemid=16772867');
            msg.channel.send(embed);
        }

        if ((msg.content.includes('ki') || msg.content.includes('Ki')) && (msg.content.includes('Hermione') || msg.content.includes('hermione'))) {
            msg.channel.send(genEmbed(undefined, 'Én Hermione vagyok, egy SunStorm átal készített bot. Ha beírod a chatbe ezt `!cica` vagy `!kutya` akkor cicás vagy kutyás képet küldök.'));
        }

        if (msg.content.startsWith('!') || msg.content.startsWith('.')) {
            commandHandler.handleCommand(msg);
        }
    }
});

/**
 * 
 * @param {String} title
 * @param {String} message 
 */
function genEmbed(title, message) {
    var embed = new Discord.MessageEmbed()
        .setColor('#ff33cc')
        .setDescription(message)
    if (title !== undefined) {
        embed.setTitle(title);
    }
    return embed;
}

bot.login(token);