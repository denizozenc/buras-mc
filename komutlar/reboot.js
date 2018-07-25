const Discord = require('discord.js');

exports.run = (client, message, args) => {
if (message.author.id != "415503006327635968") return msg.channel.send("Bunun için iznin yok");
message.delete();
message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Reboot;').setDescription('Kabul ediyorsan `onay` yaz').setFooter('15 Saniye İçinde İptal!', client.user.avatarURL).setTimestamp())
.then(() => {
message.channel.awaitMessages(response => response.content === 'onay', {
max: 1,
time: 15000,
errors: ['time'],
})
.then((collected) => {
  message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Reboot;').setDescription('Onay Verildi! Yeniden Başlatılıyorum...').setFooter('Beep Boop', client.user.avatarURL).setTimestamp()).then(msg => {
console.log(`BOT : Yeniden Başlatılıyor...`);
process.exit(0);
})
})
.catch(() => {
  message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Yeniden Başlatma;').setDescription('Komut İptal Edildi!').setFooter('Beep Boop', client.user.avatarURL).setTimestamp())
});
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'restart',
  description: 'Botu Yeniden Başlatır.',
  usage: 'reboot'
};