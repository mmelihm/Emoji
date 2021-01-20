const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  let tür = args.slice(0).join(".");
  if(!tür)
    return message.channel.send(
      "**Hareketli ise `m!emojilink id gif`**\n**Hareketsiz ise `m!emojilink id png`**"
      );
 message.channel.send(`https://cdn.discordapp.com/emojis/${tür}`)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    kategori: "kullanıcı",
 
  };

  exports.help = {
    name: "emojiidlink",
    description: 'İstediğiniz bir emojiyi botun ekli olduğu sunucularda aramanıza yarar.',
    usage: 'emoji-ara <emoji-adı>',
   
  };
