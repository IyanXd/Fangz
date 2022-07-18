let handler  = async (m, { conn, usedPrefix }) => { 
	conn.sendButton(m.chat, `Hello👋\nI am 𝖄𝖆𝖓𝖓𝖓𝕸𝖉, 𝖄𝖆𝖓𝖓𝖓𝕸𝖉 is a Bot that can help you in this group, click the button below if you want to use a bot!`.trim(), `${wm}`, '📮Menu', '.menu', m)
	}

handler.command = /^(salken)$/i

export default handler 

let wm = global.botwm


//PERCOBAAN