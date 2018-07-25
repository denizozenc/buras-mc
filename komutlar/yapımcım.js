const Discord = require('discord.js');
exports.run = function(client, message, args) {
    message.channel.send({embed: {
        color: 0xD97634,
        description: "👑 **Yapımcım**\n **•》 DenizPrime** "
      }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yapımcı',
  description: 'Ekibimiz.',
  usage: 'yapımcı'
};