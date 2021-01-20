const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {
const embed = new Discord.RichEmbed()
.setColor("BLACK")
.setTitle("**Funny Bot Emoji Bilgi 2**")
.setDescription(`» Emojileri kullanmak için m!emoji <emojiadı>\n
• yldzm = <a:yldzm:700314124181176320> • yldzk = <a:yldzk:700314124361400330> • yildiz = <a:yildiz:700314095013986372>\n
• yes = <a:yes:700314099212484639> • yeap = <a:yeap:700314111552258068> • yaniyorum = <a:yaniyorum:700314121983492097>\n
• yalarim2 = <a:yalarim2:700314119403733102> • yalarim1 = <a:yalarim1:700314116258267167> • yalarim = <a:yalarim:700314109920673843>\n
• viuw = <a:viuw:700314094967980053> • viuv = <a:viuv:700314091490639963> • tiky = <a:tiky:700314124948602972> • tiks = <a:tiks:700314109220225035>\n
• tikp = <a:tikp:700314120880259082> • tikm = <a:tikm:700314125452181544> • smiler = <a:smiler:700314105617317938> • serefe = <a:serefe:700314101200715826>\n
• sad = <a:sad:700314098692259850> • pug = <a:pug:700314116853858446> • patkut = <a:patkut:700314124885819422>\n
• parmak = <a:parmak:700314089120989255> • dokuz = <a:dokuz:702495159539204176> • sekiz = <a:sekiz:702495159887331358> • yedi = <a:yedi:702495159287545936>\n
• alti = <a:alti:702495159480221746> • bes = <a:bes:702495159123968052> • dort = <a:dort:702495159102865499> • uc = <a:uc:702495159530815488> • iki = <a:iki:702495159354392677>\n
• bir = <a:bir:702495158867853387> • sifir = <a:sifir:702495154753241140> • uzulme = <a:uzulme:702496307566084107> • ucuyorum = <a:ucuyorum:702496306169380994>\n
• tivsan = <a:tivsan:702496307667009566> • sdnz = <a:sdnz:702496305498292315> • planet = <a:planet:702496305322393610> • olala = <a:olala:702496309264777286>\n
• nee = <a:nee:702496304995237958> • nanana = <a:nanana:702496357553799291> • mrr = <a:mrrr:702496357293883432> • miyav = <a:miyav:702496358199853168>\n
• mable = <a:mable:702496304554573884> • dipper = <a:dipper:702496303736946709> • kalpi = <a:kalpi:702496304298852442> • hagh = <a:hagh:702496307121487892>\n
• cuut = <a:cuut:702496304193863721> • cikcik = <a:cikcik:702496303183298604> • bambam = <a:bambam:702496304357441628>
`)
return message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["emoji2"],
  permLevel: 0
};

exports.help = {
  name: 'emoji2',
  description: 'Komut kategorilerini gösterir.',
  usage: 'emoji'
};
