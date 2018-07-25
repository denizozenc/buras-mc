const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {

	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Uyarı :warning:', '`mcsunucu` adlı komutu özel mesajlarda kullanamazsın.')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField('Server Adı', '**PvpSquad**' )
    .addField('Ip ', '**play.pvpsquad.pw**'  )
    .addField('Sürüm', '**1.7-1.8**' )
    .addField('Lokasyon', '**Türkiye-İzmir**' )
    .addField('Server Kurucusu', '**@Alpertunga Atakan#3179**' )
    .addField('Server Kurucusu + Coder + Hazırlayan', '**@EmralRG [18]#4931** ' )
    

    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['minecraftsunucu', 'minecraft sunucu bilgi', 'msbilgi'],
  permLevel: 0
};

exports.help = {
  name: 'mcsunucu',
  description: 'Sunucu hakkında bilgi verir.',
  usage: 'mcsunucu'
};
