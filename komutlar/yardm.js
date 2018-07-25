const Discord = require('discord.js');

exports.run = (client, message, args, tools) => {

  let pages = ['**Komutlar**\n\n+yardım = BOT Komutlarını Atar. \n+ping = BOTun Pingini Gösterir. \n+i = BOT İstatistiklerini Atar.', '**Komutlar 2**\n\n+bilgi = Bot Hakkında Bilgi Verir. \n+duyuru = Bot Duyuru Yapar. \n+kick  = İstediğiniz Kişiyi Sunucudan Atar. \n', '**Komutlar 3**\n\n\n+sunucubilgi = Sunucu Hakkında Bilgi  Gösterir. \n+temizle = Mesajları Siler', '**Komutlar 4**\n\n+yenilikler = Yeniliklerlen Haberdar Olursunuz. \n+çekiliş = Çekiliş Yapar. ', '**Komutlar 5** \n\n+havadurumu = İstediginiz Şehrin Hava Durumunu Gösterir ']; // Sayfalar
  let page = 1; // Sayfa 1

  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setFooter(`Sayfa ${page} / ${pages.length}`, "https://cdn.discordapp.com/attachments/471401753443827722/471722745315590171/OYUNHESAPLOGO.png")
  .setDescription(pages[page-1])
  .setAuthor("OyunHesap.NET", "https://cdn.discordapp.com/attachments/471401753443827722/471722745315590171/OYUNHESAPLOGO.png")

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
