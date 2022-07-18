let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '5'
let sn = '10'
let ss = '25'
let sp = '40'
let sv = '120'
//premium
let ph = '5'
let pn = '15'
let pp = '45'
let pv = '65'
let ppm = '70'
let info = `
*${htki} sᴇᴡᴀ ${htka}*
┏⫹⫺ *𝙷𝚎𝚖𝚊𝚝* 
┗$ ${sh}k/grup (1 minggu)

┏⫹⫺ *𝙽𝚘𝚛𝚖𝚊𝚕* 
┗$ ${sn}k/grup (1 bulan)

┏⫹⫺ *𝚂𝚝𝚊𝚗𝚍𝚊𝚛* 
┗$ ${ss}k/grup (2 bulan)

┏⫹⫺ *𝙿𝚛𝚘* 
┗$ ${sp}k/grup (3 bulan)

┏⫹⫺ *𝙿𝚎𝚛𝚖𝚊𝚗𝚎𝚗𝚝* 
┗$ ${sv}k/grup (Permanen)

──···────────────────···──

*${htki} 𝙿𝚛𝚎𝚖𝚒𝚞𝚖 ${htka}*
┏⫹⫺ *𝙷𝚎𝚖𝚊𝚝* 
┗$ ${ph}k (1 minggu)

┏⫹⫺ *𝙽𝚘𝚛𝚖𝚊𝚕* 
┗$ ${pn}k (1 bulan)

┏⫹⫺ *𝙶𝚘𝚘𝚍* 
┗$ ${pp}k (3 bulan)

┏⫹⫺ *𝙿𝚛𝚘* 
┗$ ${pv}k (5 bulan)                                            

𝚈𝚊𝚗 𝙼𝚞𝚕𝚝𝚒 𝙳𝚎𝚟𝚒𝚌𝚎

–––––– *𝙺𝚎𝚋𝚒𝚓𝚊𝚔𝚊𝚗* ––––––
🗣️: Kak, Kok harganya mahal banget?
💬: Mau tawar menawar? boleh, silahkan chat owner aja.. max tawar 5k

🗣️: Scam ga nih kak?
💬: Enggalah, Owner 100% Tepati janji #STAYHALAL

▌│█║▌║▌║║▌║▌║█│▌
`
const sections = [
   {
	title: `✃ 𝚂𝚎𝚠𝚊`,
	rows: [
	    {title: "𝗛𝗘𝗠𝗔𝗧", rowId: '.pay', description: '𝗣𝗿𝗶𝗰𝗲: ' + sh + 'k (1 minggu)' },
	    {title: "𝗡𝗢𝗥𝗠𝗔𝗟", rowId: '.pay', description: '𝗣𝗿𝗶𝗰𝗲: ' + sn + 'k (1 bulan)' },
	{title: "𝗦𝗧𝗔𝗡𝗗𝗔𝗥", rowId: '.pay', description: '𝗣𝗿𝗶𝗰𝗲: ' + ss + 'k (2 bulan)' },
	{title: "𝗣𝗥𝗢", rowId: '.pay', description: '𝗣𝗿𝗶𝗰𝗲: ' + sp + 'k (3 bulan)' },
	{title: "🔖 𝗩𝗜𝗣", rowId: '.pay', description: '𝗣𝗿𝗶𝗰𝗲: ' + sv + 'k (Permanen)' },
	]
    }, {
    title: `✃ 𝙿𝚛𝚎𝚖𝚒𝚞𝚖`,
	rows: [
	    {title: "𝗛𝗘𝗠𝗔𝗧", rowId: '.pay', description: '𝗣𝗿𝗶𝗰𝗲: ' + ph + 'k (1 minggu)' },
	    {title: "𝗡𝗢𝗥𝗠𝗔𝗟", rowId: '.pay', description: '𝗣𝗿𝗶𝗰𝗲: ' + pn + 'k (1 bulan)' },
	{title: "𝗚𝗢𝗢𝗗", rowId: '.pay', description: '𝗣𝗿𝗶𝗰𝗲: ' + pp + 'k (3 bulan)' },
	{title: "𝗣𝗥𝗢", rowId: '.pay', description: '𝗣𝗿𝗶𝗰𝗲: ' + pv + 'k (5 bulan)' },
	]
    }, {
    title: `✃ INFO`,
	rows: [
	    {title: "📊 Discount", rowId: '.diskon', description: 'Discount Pembayaran' },
	    ]
        },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "𝙱 𝚞 𝚢",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i
handler.private = true

export default handler
