const Discord = require('discord.js');
const Jimp = require('jimp'); 

exports.run = (client, message, args) => {
    if (!message.guild) {
    return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Çekiliş;').setDescription(message.author.tag + ', bu komutu direkt mesajda kullanamazsın.').setFooter('Gıda Abi', client.user.avatarURL).setTimestamp()); }
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Çekiliş;').setDescription(message.author.tag + ', kullanım: g!çekiliş <ödül>.').setFooter('Gıda Abi', client.user.avatarURL).setTimestamp());
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Çekiliş;')
    .addField('Kazanan:', message.guild.members.random().displayName, true)
    .addField('Ödül:', mesaj, true)
    .setFooter('Gıda Abi', client.user.avatarURL)
    .setTimestamp()
    message.channel.send(embed);
        };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say', 'söyle'],
  permLevel: 0
};

exports.help = {
  name: 'çekiliş',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};
