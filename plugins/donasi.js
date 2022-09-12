let handler = async m => m.reply(`
╭─「 Donasi tot 」
│ •  [0812-2725-9557]
│ •  [0821-4103-4454]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
