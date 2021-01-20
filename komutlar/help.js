const Discord = require("discord.js");

exports.run = function(client, message) {
  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("» Funny Menu")
    .setTimestamp()
    .addField(
      "» Emoji Komutları",
      "\n<a:tiks:700314109220225035> m!emoji1 = Shows emojis in the bot.\n<a:tiks:700314109220225035> m!emoji2 = Shows emojis in the bot.\n<a:tiks:700314109220225035> m!emoji3 = Shows emojis in the bot.\n<a:tiks:700314109220225035> m!emojiid emojiad = Shows the id of the emoji.\n<a:tiks:700314109220225035> m!emojilink emojiid <gif,png> = Throws the link of the emoji.\n<a:tiks:700314109220225035> m!emojiidlink emojiid <gif,png> = Throws the link of the emoji.\n<a:tiks:700314109220225035> m!emojiara emojiad = Shows the emoji on the servers with the bot.\n<a:tiks:700314109220225035> m!pp @kişi = Assigns the pfp of the specified person.\n<a:tiks:700314109220225035> m!serverpp = Discards the server's pfps."
    )
    .setFooter("Funny Bot", client.user.avatarURL)
    .setTimestamp()
    .setThumbnail(client.user.avatarURL);
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help"],
  permLevel: 0
};

exports.help = {
  name: "help",
  description: "Tüm komutları gösterir.",
  usage: "yardım"
};
