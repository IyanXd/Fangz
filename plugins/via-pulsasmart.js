let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} PULSA ${htka}

👋‘‹, ingin melanjutkan pembayaran?

💌 *Pembayaran*
💳 Via: Pulsa indosat
📞 Nomor: 085806151497
👤 A/n: Iyan
📦 Mitra: Yann BOT
💰 Metode pembayaran: Online ( ~Cod~ )

✏️ _Informasi Pembayaran_

Pembayaran Sewa hanya dapat menggunakan saldo.
Pastikan saldo kamu mencukupi untuk bertransaksi!


❗KLIK *SUDAH BAYAR* JIKA SUDAH MEMBAYAR!
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'TOPUP', url: 'Konter Terdekat'}},
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
handler.help = ['indosat']
handler.tags = ['info']
handler.command = /^(donasiindosat)$/i
handler.private = true

export default handler