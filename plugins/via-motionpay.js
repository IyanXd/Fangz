let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} MOTION PAY ${htka}

Hay👋‹, ingin Donasi?

💌 *Pembayaran*
💳 Via: Motion Pay
📞 Nomor: 0895323413434
👤 A/n: Iyann
📝 Mitra: Yann BOT
💰 Metode pembayaran: Online ( ~Cod~ )


®KLIK *SUDAH BAYAR* JIKA SUDAH TRANSFER 
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'QRIS', url: 'https://telegra.ph/file/143a35a997b7deec882a2.jpg'}},
    {index: 4, quickReplyButton: {displayText: 'Sudah membayar', id: '.sudahbayar'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['motionpay']
handler.tags = ['info']
handler.command = /^(donasimotionpay)$/i
handler.private = true

export default handler