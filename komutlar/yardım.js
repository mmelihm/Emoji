const Discord = require("discord.js");

exports.run = function(client, message) {
  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("» Eğlence Menüsü")
    .setTimestamp()
    .addField(
      "» Emoji Komutları",
      "\n<a:tiks:700314109220225035> m!emoji1 = Bottaki emojileri gösterir.\n<a:tiks:700314109220225035> m!emoji2 = Bottaki emojileri gösterir.\n<a:tiks:700314109220225035> m!emoji3 = Bottaki emojileri gösterir.\n<a:tiks:700314109220225035> m!emojiid emojiad = Emojinin idsini gösterir.\n<a:tiks:700314109220225035> m!emojilink emojiid <gif,png> = Emojinin linkini atar.\n<a:tiks:700314109220225035> m!emojiidlink emojiid <gif,png> = Emojinin linki atar.\n<a:tiks:700314109220225035> m!emojiara emojiad = Botun olduğu sunuculardaki emojiyi gösterir.\n<a:tiks:700314109220225035> m!pp @kişi = Belirtilen kişinin ppsini atar.\n<a:tiks:700314109220225035> m!serverpp = Sunucunun ppsi atar."
    )
    .setFooter("Funny Bot", client.user.avatarURL)
    .setTimestamp()
    .setThumbnail(client.user.avatarURL);
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım"],
  permLevel: 0
};

exports.help = {
  name: "yardim",
  description: "Tüm komutları gösterir.",
  usage: "yardım"
};
