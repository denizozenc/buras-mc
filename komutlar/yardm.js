const Discord = require('discord.js');

exports.run = (client, message, args, tools) => {

  let pages = ['**Komutlar**\n\nt!afk = Afk Olursunuz.  \nt!yardım = BOT Komutlarını Atar. \nt!ping = BOTun Pingini Gösterir. \nt!i = BOT İstatistiklerini Atar.', '**Komutlar 2**\n\nt!ban = Ban Atar. \nt!banaç = Banı Açar. \nt!bilgi = Bot Hakkında Bilgi Verir. \nt!duyuru = Bot Duyuru Yapar. \nt!kick  = İstediğiniz Kişiyi Sunucudan Atar. \n', '**Komutlar 3**\n\n\nt!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \nt!sunucubilgi = Sunucu Bilsigini Gösterir. \nt!tavsiye = Tavsiye Verir. \nt!temizle = Mesajları Siler', '**Komutlar 4**\n\nt!uyar = Kişiyi Uyarırsınız. \ng!yenilikler = Yeniliklerlen Haberdar Olursunuz. \nt!saat = Türkiye Saatini Gösterir \nt!ascii = Yaz Ve Gör :) \nt!Atam = Değer Ve Kalbimizde Taşıdığımız Atamız <3  \nt!çekiliş = Çekiliş Yapar. \nt!yapımcım = Yapımcıyı Gösterir.', '**Komutlar 5** \n\nt!havadurumu = İstediginiz Şehrin Hava Durumunu Gösterir ']; // Sayfalar
  let page = 1; // Sayfa 1

  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setFooter(`Sayfa ${page} / ${pages.length}`, "https://cdn.discordapp.com/attachments/456201531130118154/461933525906620426/indir.jpg")
  .setDescription(pages[page-1])
  .setAuthor("Tunga ", "https://cdn.discordapp.com/attachments/456201531130118154/461933525906620426/indir.jpg")

  message.channel.send(embed).then(msg => {

    msg.react('⬅').then(r => {
      msg.react('➡')

      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 });

      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })

    })
  })
};


exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'yardım',
description: 'Yardım Listesini Gösterir.',
usage: 'yardım'
};
