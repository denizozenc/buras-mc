const Discord = require('discord.js');
const { stripIndents, oneLine } = require('common-tags');
exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
  .setAuthor('BİLGİ')
  .setColor(3447003)
  .setDescription(`Yapımcı : DenizPrime \n\n\ İnternet Sitesi : tungapre.com \n\n\ Komutların Hepsini Görmek İçin : t!yardım \n\n\ Botu Sunucunuza Ekliyemessiniz Çünkü Sunucumuza Ait Özel Bottur .  `)
  return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bilgi'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot hakkında bilgi verir.',
  usage: 'bilgi'
};
