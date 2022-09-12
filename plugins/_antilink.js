let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {
    await m.reply(`*「 ANTI LINK 」*\n\nDetected *${await conn.getName(m.sender)}* hahaa kmu kirim link kan!\n\nmantep gw dapat jatah kick mwehwewhe`)
    if (isAdmin) return m.reply('*anying lu admin sory nagab:v..*')
    if (!isBotAdmin) return m.reply('*Bots are not admins, how can they kick people _-*')
    let linkGC = ('https://chat.whatsapp.com/' + await conn.groupInviteCode(m.chat))
    let isLinkconnGc = new RegExp(linkGC, 'i')
    let isgclink = isLinkconnGc.test(m.text)
    if (isgclink) return m.reply('*「 ANTI LINK 」*\n\nOrder denied, bot will not kick you.\nBecause the group link itself')
    await conn.sendMessage(m.chat, { delete: m.key })
    await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
  }
  return true
}

module.exports = handler


