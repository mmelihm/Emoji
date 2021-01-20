const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {
const embed = new Discord.RichEmbed()
.setColor("BLACK")
.setTitle("**Funny Bot Emoji Bilgi 3**")
.setDescription(`» Emojileri kullanmak için m!emoji <emojiadı>\n
• pies = <a:pies:702496802452013136> • ivj = <a:ivj:702496800506118195> • gul = <a:gul:702496802968174642> • opucuks = <a:opucuks:703253348618338314>\n
• yikik = <a:yikik:703253348777852989> • hh = <a:hh:703253349084037180> • crn = <a:crn:703253348299702364> • amag = <a:amag:703253349704663051>
`)
return message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["emoji3"],
  permLevel: 0
};

exports.help = {
  name: 'emoji3',
  description: 'Komut kategorilerini gösterir.',
  usage: 'emoji'
};
