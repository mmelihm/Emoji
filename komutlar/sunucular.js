const Discord = require("discord.js");
const hastebin = require("hastebin-gen");
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {
  let guild = message.guild;
  if (message.author.id != ayarlar.sahip) {
    message.reply("**Neye Baktın Aslan!!!**");
  }
  let sunucular = client.guilds.array();
  let x = ``;
  for (var i = 0; i < sunucular.length; i++) {
    x += `${i + 1} -) ${sunucular[i].name} - ${
      sunucular[i].memberCount
    } Kişi\nID: ${sunucular[i].id}\n\n`;
  }
  hastebin(x, { code: "txt" }).then(haste => {
    message.channel.send(haste);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "sunucular",
  description: "Botun bulunduğu tüm sunucuları gösterir.",
  usage: "sunucular"
};
