const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');




exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        
        .setTitle(`${client.user.username} ꌝ`)
        .setDescription(`📥**Botun Davet Linki İçin** [TIKLA](https://discordapp.com/oauth2/authorize?client_id=733719227898265761&scope=bot&permissions=8) \n🔶**Sunucumuza Katılmak İçin** [TIKLA](https://discord.gg/Yrksr9g)`)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Başarıyla ${ayarlar.prefix}davet Sistemi Kullandı!`, message.author.avatarURL)
    .setColor(`RANDOM`)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: '',
  usage: 'davet'
};
