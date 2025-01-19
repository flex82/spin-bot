const lineReply = require ('discord-reply')
const express = require("express");
const app = express();

app.listen(() =>  ("im ready"));
require('events').EventEmitter.defaultMaxListeners = 30;
app.use('/ping', (req, res) => {
  res.send(new Date());
});
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "$"
const moment = require("moment")


client.on("ready", () => {
    client.user.setActivity(`$help`)
})


///الاكواد

 var owner = ["1071810231392272465"];///ايدي اليستعمل الب
  
let ayan = [ "7k","5k","حظ اوفر","10k","20k","15k"]
    client.on("message", message => { 
      if (message.content.startsWith(prefix + "spin")) {
    if(!owner.includes(message.author.id)) return;

      let v = ayan[Math.floor(Math.random() * ayan.length)];
      let embed = new Discord.MessageEmbed() 
      .setTitle(`** عجلة الحظ سيرفر سايت**`)
      .setDescription(`** فزت ب  ${v} **`) 
      .setColor("RANDOM")
      message.channel.send(embed)

    }
  });
  
    client.on("message", message => { 
      if (message.content.startsWith(prefix + "help")) {
          message.channel.send("**مساعدة بوت عجلة الحظ** ")
        message.channel.send("**$spin امر العجلة** ")
         message.channel.send5
          message.channel.send("**Made By :  Flex ** ")
}
  });

client.login(process.env.token);
