const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const moment = require("moment");
var Jimp = require("jimp");
const { Client, Util } = require("discord.js");
const fs = require("fs");
const db = require("quick.db");
const http = require("http")
  .createServer(async (req, res) => {
    res.statusCode = 200;
    res.write("ok");
    res.end();
  })
  .listen(3000, () => console.log("Now listening on port 3000"));

const express = require("express");
require("./util/eventLoader")(client);
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(ayarlar.token);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const activities_list = [
  "Çok Yaşa Scorp!!!", // Sadece Tırnak Yani " İşareti İçinde Yazmakta Olan Mesajları Değiştirin.
  "Her Daim Anarşi!!", // Sadece Tırnak Yani " İşareti İçinde Yazmakta Olan Mesajları Değiştirin.
  "Çok Yaşa Scorp!!!", // Sadece Tırnak Yani " İşareti İçinde Yazmakta Olan Mesajları Değiştirin.
  "Her Daim Anarşi!!" // Sadece Tırnak Yani " İşareti İçinde Yazmakta Olan Mesajları Değiştirin.
];
client.on("ready", () => {
  setInterval(() => {
    const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // Bu Kısımları Ellemeyin
    client.user.setActivity(activities_list[index]); // Bu Kısımları Ellemeyin.
  }, 3000); // Selam 1 Saniye = 1000 MiliSaniye Yapar - Kısacası Böyle Bırakırsan - 3 Saniyede 1 Değişir.
});
///////////////////////////////////////////////////////////////////////////////
client.on("message", async msg => {
  if (
    msg.content.toLowerCase() == "sa" ||
    msg.content.toLowerCase() == "sea" ||
    msg.content.toLowerCase() == "slm" ||
    msg.content.toLowerCase() == "selam" ||
    msg.content.toLowerCase() == "selamün aleyküm" ||
    msg.content.toLowerCase() == "selamun aleyküm"
  ) {
    await msg.react("🇦");
    msg.react("🇸");
  }
});
const nemojis = require("node-emoji");
client.on("message", msg => {
  if (!msg.mentions.users.has(client.user.id)) return;
  const random = nemojis.random();
  return msg.guild.me.setNickname(
    `${random.emoji}` + `${client.user.username}`
  );
});
client.on("message", message => {
  if (message.content === `<@${client.user.id}>`) {
    message.reply(
      "**Adıma emoji koydum nasıl olmuş <a:kedicik:700313833775824988>**"
    );
  }
});
client.on("message", msg => {
  const kisi = ["<@283240322505637889>"];
  if (kisi.some(word => msg.content.toLowerCase().includes(word))) {
    const id = "283240322505637889";
    const an = msg.guild.member(id);
    an.send(
      `${msg.author}(${msg.author.username},${msg.author.id}) kişisi **${msg.guild}**(${msg.guild.id}) sunucusunda seni etiketledi.\n**Mesajı:** ${msg.content}`
    );
  }
});
