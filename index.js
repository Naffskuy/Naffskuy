const { Client, intents } = require('discord.js');
const config = require('./config.json');
const client = new Client({
  intents: 32767
});

client.on('ready', () => {
  
  console.log(`${client.user.username} Telah Online!\nAuthor: Xzanx`)
})

client.on('messageCreate', (message) => {
  
  const prefix = config.Bot.prefix
  if(!message.content.startsWith(prefix) || message.author.bot) return
  const args = message.content.slice(prefix.length).trim().split(/ +/)
  const cmd = args.shift().toLowerCase()

  if(cmd === 'verify') {
    
    const nickname = args.join(' ')
    const roles = config.Verify.roleID
    const channel = config.Verify.channelID
    const tag = config.Verify.nickTag
    const nRpName = config.Verify.nRpName
    
    if(message.channel.id !== channel) return message.reply(`Kamu hanya dapat menggunakan perintah ini pada channel <#${channel}>`)
    if(!args[0] || !args[1]) return message.reply(`Gunakan: \`${prefix}verify <RPName>\ (Tanpa _ | 2 Kata)\`\nContoh: \`${prefix}verify Samsul_Badun\``)
    for(i = 0; i < nRpName.length; i++) {
      if(message.content.toLowerCase().includes(nRpName[i].toLowerCase())) {
        return message.reply('Nama tersebut tidak diperbolehkan')
      }
    }
    if(!isNaN(args[0]) || !isNaN(args[1])) return message.reply('Nama tidak dapat berbentuk angka')
    if(nickname.length > 30) return message.reply('Nickname terlalu panjang')
    message.member.setNickname(tag + ' ' + args[0] + '_' + args[1]).catch(e => {
      return message.reply('Saya tidak dapat mengganti nickname dan tidak memiliki permission `MANAGE NICKNAMES` atau Role saya berada dibawah.\n**Silahkan naikkan terlebih dahulu**')
    })
    
    const checkRoles = message.guild.roles.cache.get(roles)
    message.member.roles.add(checkRoles).catch(e => {
      return message.reply('Saya tidak dapat menambahkan role dan tidak memiliki permission `MANAGE ROLES` atau Role saya berada dibawah.\n**Silahkan naikkan terlebih dahulu**')
    })
    message.reply('Berhasil verify!')
  }
})

client.login(process.env.TOKEN);