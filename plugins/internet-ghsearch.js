import fetch from 'node-fetch'
let handler = async (m, { text, command, usedPrefix }) => {
    if (!text) throw `contoh:\n${usedPrefix + command} stikerinbot`
    let res = await fetch(global.API('https://api.github.com', '/search/repositories', {
        q: text
    }))
    if (!res.ok) throw eror
    let json = await res.json()
    let str = json.items.map((repo, index) => {
        return `>      「 ${ 1 + index } 」       <
𝙽𝚊𝚖𝚎 𝚁𝚎𝚙𝚘 : ${repo.name}
𝙱𝚢 : ${repo.owner.login}
𝙵𝚘𝚛𝚔𝚎𝚍 : ${repo.fork ? 'True' : 'False'}
𝙿𝚛𝚒𝚟𝚊𝚝𝚎 : ${repo.private ? 'True': 'False'}

➔ 𝙲𝚛𝚎𝚊𝚝𝚎𝚍 𝙾𝚗 : ${formatDate(repo.created_at)}
➔ 𝙻𝚊𝚜𝚝 𝚄𝚙𝚍𝚊𝚝𝚎 𝙾𝚗 :${formatDate(repo.updated_at)}
👁  ${repo.watchers}   🍴  ${repo.forks}   ⭐  ${repo.stargazers_count}
❗ 𝙸𝚜𝚜𝚞𝚎 : ${repo.open_issues} ${repo.description ? `
📚 𝙳𝚎𝚜𝚌𝚛𝚒𝚙𝚝𝚒𝚘𝚗:
${repo.description}` : ''}

⑂ 𝙲𝚕𝚘𝚗𝚎 :
$ git clone ${repo.clone_url}
`.trim()
    }).join('\n— — — — — — — — — — — — — —\n')
    conn.sendHydrated(m.chat, `*${htki} 𝙶𝚒𝚝𝚑𝚞𝚋 𝚂𝚎𝚊𝚛𝚌𝚑 ${htka}*\n` + str, botdate, null, json.items.map((repo, index) => { return `${repo.html_url}` }), ['[ 1 ] 𝙻 𝚒 𝚗 𝚔', '[ 2 ] 𝙻 𝚒 𝚗 𝚔', '[ 3 ] 𝙻 𝚒 𝚗 𝚔'], null,null, [[null,null],[null,null],[null,null]],m)
}
handler.help = ['githubsearch'].map(v => v + ' <pencarian>')
handler.tags = ['internet','downloader']
handler.limit = true

handler.command = /^g(ithub|h)s(earch)?$/i

export default handler

function formatDate(n, locale = 'id') {
    let d = new Date(n)
    return d.toLocaleDateString(locale, {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    })
}
