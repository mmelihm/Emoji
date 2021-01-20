const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {
const embed = new Discord.RichEmbed()
.setColor("BLACK")
.setTitle("**Funny Bot Emoji Bilgi 1**")
.setDescription(`» Emojileri kullanmak için m!emoji <emojiadı>\n
• palyaco = <a:palyaco:700313810904547331> • opucuk = <a:opucuk:700313818965868585> • onay = <a:onay:700313803300143104> • nono = <a:nono:700313815086137435>\n
• noktaloading = <a:noktaloading:700313810749358143> • no = <a:no:700313819968438292>,\n
• meow = <a:meow:700313815312629820> • lvlup = <a:lvlup:700313818395312228> • loading = <a:loading:700313814603923466> • kustum = <a:kustum:700313809050665010>\n
• kurtcuk = <a:kurtcuk:700313831540523009> • kudur = <a:kudur:700313808349954068>\n
,• kopus = <a:kopus:700313838318518373> • kitap = <a:kitap:700313803304468480>\n
• kelebek = <a:kelebek:700313836615630899> • kedicik = <a:kedicik:700313833775824988> • kalps = <a:kalps:700313802985570355> • kalpp = <a:kalpp:700313804466159658>\n
• kalpm = <a:kalpm:700313803123982346> • kalpb = <a:kalpb:700313810053103727>,\n
• hypesquad = <a:hypesquad:700313802545037372>,\n
• elmas = <a:elmas:700313831141802104> • dng = <a:dng:700313821268410368> • dikkat = <a:dikkat:700313802293379112> • darklord = <a:darklord:700313827153018941>\n
• kedi = <a:kedi:700313823697043467> • carpi = <a:carpi:700313805128728576> • classic = <a:classic:700313831825604659> • buyuktur = <a:buyuktur:700313805351288844>\n 
• bune = <a:bune:700313811940409397> • buki = <a:buki:700313825072906261> • boost = <a:boost:700313818902822974> • bicak = <a:bicak:700313804868681768>\n
• bebis = <a:bebis:700313838289158184> • battaniye = <a:battaniye:700313823529140325> • banned = <a:banned:700313817799721050> • alkis = <a:alkis:700313814674964571>\n
• alev = <a:alev:700313806064320522> • agabe = <a:agabe:700313803144953908> • aaa = <a:aaa:700313823873335307> • 200iq = <a:200iq:700313824275988572>
`)
return message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["emoji1"],
  permLevel: 0
};

exports.help = {
  name: 'emoji1',
  description: 'Komut kategorilerini gösterir.',
  usage: 'emoji'
};
