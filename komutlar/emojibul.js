const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  const db = require('quick.db');
  
 if(!args[0]) return message.channel.send('Lütfen aranacak emojinin adını giriniz. Please enter the name of the emoji to search.')
    const emojii = client.emojis.find(e => e.name == args[0])

 if(emojii === null) return message.channel.send('Böyle bir emoji bulunamadı. Unutmayın emojiler sadece botun **ekli** olduğu sunucularda aramaktadır.No such emoji was found. Emojis are only searching on servers where the bot is attached.')

  const emoji = client.emojis.find(e => e.name == args[0]).id

  message.channel.send(`${client.emojis.get(emoji)}`)
 
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["emoji-bul", "emojiara","emojibul"],
    permLevel: 0,
    kategori: "kullanıcı",
 
  };

  exports.help = {
    name: "emoji-ara",
    description: 'İstediğiniz bir emojiyi botun ekli olduğu sunucularda aramanıza yarar.',
    usage: 'emoji-ara <emoji-adı>',
   
  };
