import daily from './rpg-daily.js'
import weekly from './rpg-weekly.js'
import monthly from './rpg-monthly.js'
import adventure from './rpg-adventure.js'

const inventory = {
  others: {
    health: true,
    money: true,
    exp: true,
    limit: true,
  },
  items: {
    health: true,
    money: true,
    exp: true,
    level: true,
    limit: true,
  },
  tools: {
    armor: {
      '0': '❌',
      '1': 'Leather Armor',
      '2': 'Iron Armor',
      '3': 'Gold Armor',
      '4': 'Diamond Armor',
      '5': 'Emerald Armor',
      '6': 'Crystal Armor',
      '7': 'Obsidian Armor',
      '8': 'Netherite Armor',
      '9': 'Wither Armor',
      '10': 'Dragon Armor',
      '11': 'Hacker Armor'
    },
    sword: {
      '0': '❌',
      '1': 'Wooden Sword',
      '2': 'Stone Sword',
      '3': 'Iron Sword',
      '4': 'Gold Sword',
      '5': 'Copper Sword',
      '6': 'Diamond Sword',
      '7': 'Emerald Sword',
      '8': 'Obsidian Sword',
      '9': 'Netherite Sword',
      '10': 'Samurai Slayer Green Sword',
      '11': 'Hacker Sword'
    },
    pickaxe: {
      '0': '❌',
      '1': 'Wooden Pickaxe',
      '2': 'Stone Pickaxe',
      '3': 'Iron Pickaxe',
      '4': 'Gold Pickaxe',
      '5': 'Copper Pickaxe',
      '6': 'Diamond Pickaxe',
      '7': 'Emerlad Pickaxe',
      '8': 'Crystal Pickaxe',
      '9': 'Obsidian Pickaxe',
      '10': 'Netherite Pickaxe',
      '11': 'Hacker Pickaxe'
    },
    fishingrod: true,

  },
  crates: {
    common: true,
    uncommon: true,
    mythic: true,
    legendary: true,
    pet: true,
  },
  pets: {
    horse: 10,
    cat: 10,
    fox: 10,
    dog: 10,
  },
  cooldowns: {
    lastclaim: {
      name: 'claim',
      time: daily.cooldown
    },
    lastweekly: {
    	name: 'weekly',
        time: weekly.cooldown
        },
    lastmonthly: {
      name: 'monthly',
      time: monthly.cooldown
    },
    lastadventure: {
      name: 'adventure',
      time: adventure.cooldown
    }
  }
}
let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const tools = Object.keys(inventory.tools).map(v => user[v] && `*${global.rpg.emoticon(v)}${v}:* ${typeof inventory.tools[v] === 'object' ? inventory.tools[v][user[v]?.toString()] : `Level(s) ${user[v]}`}`).filter(v => v).join('\n').trim()
  const items = Object.keys(inventory.items).map(v => user[v] && `*${global.rpg.emoticon(v)}${v}:* ${user[v]}`).filter(v => v).join('\n│ ').trim()
  const crates = Object.keys(inventory.crates).map(v => user[v] && `*${global.rpg.emoticon(v)}${v}:* ${user[v]}`).filter(v => v).join('\n').trim()
  const pets = Object.keys(inventory.pets).map(v => user[v] && `*${global.rpg.emoticon(v)}${v}:* ${user[v] >= inventory.pets[v] ? 'Max Levels' : `Level(s) ${user[v]}`}`).filter(v => v).join('\n').trim()
  const cooldowns = Object.entries(inventory.cooldowns).map(([cd, { name, time }]) => cd in user && `*✧ ${name}*: ${new Date() - user[cd] >= time ? '✅' : '❌'}`).filter(v => v).join('\n').trim()
  const caption = `*🧑🏻‍🏫 𝙽𝚊𝚖𝚎:* ${user.registered ? user.name : conn.getName(m.sender)}
*▸ 𝙴𝚡𝚙:* ${user.exp}
*▸ 𝙻𝚎𝚟𝚎𝚕:* ${user.level}
*▸ 𝚁𝚘𝚕𝚎:* ${user.role}
*▸ 𝙷𝚎𝚊𝚕𝚝𝚑:* ${user.health}
*▸ 𝙻𝚒𝚖𝚒𝚝:* ${user.limit}
*▸ 𝙼𝚘𝚗𝚎𝚢:* ${user.money}${user.atm ? `
*▸ 𝙰𝚝𝚖:* 𝙻𝚟.${user.atm}
*▸ 𝙱𝚊𝚗𝚔:* ${user.bank} $ / ${user.fullatm} $`: ''}

▸ *𝚂𝚝𝚊𝚝𝚞𝚜:* ${user.premiumTime > 0 ? 'Premium' : 'Free'}
▸ *𝚁𝚎𝚐𝚒𝚜𝚝𝚎𝚛𝚎𝚍:* ${user.registered ? 'Yes':'No'}${user.premiumTime >= 1 ? `
▸ *𝙴𝚣𝚜𝚙𝚒𝚛𝚎𝚍:*
${clockString(user.premiumTime - new Date() * 1)}`: ''}
`.trim()
  conn.sendButton(m.chat, `${htki} 𝚄 𝚜 𝚎 𝚛 𝚜 ${htka}`, caption, null, [`𝙸𝚗𝚟𝚎𝚗𝚝𝚘𝚛𝚢`, '.inv'],m)
}
handler.help = ['my']
handler.tags = ['xp']
handler.command = /^(my)$/i

handler.register = false
export default handler

function clockString(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *𝚈𝚎𝚊𝚛𝚜 🗓️*\n', mo, ' *𝙼𝚘𝚗𝚝𝚑 🌙*\n', d, ' *𝙳𝚊𝚢𝚜 ☀️*\n', h, ' *𝙷𝚘𝚞𝚛𝚜 🕐*\n', m, ' *𝙼𝚒𝚗𝚞𝚝𝚎 ⏰*\n', s, ' *𝚂𝚎𝚌𝚘𝚗𝚍 ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
