const Discord = require('discord.js');

exports.run = (client, message, args) => {

  const yaz = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription("Bu Botu Kendi Sunucunuzda Kullanamassınız");
  message.channel.sendEmbed(yaz)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davet',"invite"],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Botun davet linkini atar',
  usage: 'davet'
};
