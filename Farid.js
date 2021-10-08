
const {WAConnection,MessageType,Presence,MessageOptions,Mimetype,WALocationMessage,WA_MESSAGE_STUB_TYPES,ReconnectMode,ProxyAgent,GroupSettingChange,waChatKey,mentionedJid,processTime,} = require("@adiwajshing/baileys")
const hx = require('hxz-api')
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fetch = require('node-fetch')
util = require('util')
const fs = require("fs") 
const chalk = require("chalk")
const crypto = require('crypto')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const tiktod = require('tiktok-scraper')
const igdl = require('instagram-scraping')
const igdls = require('instagram-url-direct')
const toMs = require('ms')
const yts = require("yt-search")
const ms = require('parse-ms')
const request = require('request')
const { exec } = require("child_process")
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const cd = 4.32e+7
const translate = require("@vitalets/google-translate-api")
const { removeBackgroundFromImageFile } = require('remove.bg')

const { fetchJson, fetchText } = require('./lib/fetcher') 
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { addCommands, getJawabanCmd, getSoalCmd, getCommandsPosi, checkCommands, isCreated, deleteCommands } = require('./lib/commands')
const { color, bgcolor } = require('./lib/color')
const simple = require('./lib/simple.js')
const { ind } = require('./database/language')
const game = require('./lib/game')
const { addgambar, getJawabanTG, isTebakGambar, cekWaktuTG, getTGPosi, addkata, getJawabanTK, isTebakKata, cekWaktuTK, getTKPos} = require('./lib/game')
const _prem = require('./lib/premium')
const _sewa = require('./lib/sewa')
const { yta, ytv } = require('./lib/ytdl')
const afk = require('./lib/afk')
const menu = require('./menu.js')
const { webp2mp4File} = require('./lib/webp2mp4')
const Math_js = require('mathjs')

const apixteam = 'AbilGanss'
const leysapi = 'dappakntlll'
const lolkey = '0b0ffba94f2b803b88721e4f'

hargalimit = "100"
limitawal = "20"
namabot = "AnisaChan🎋(Helga)"
namaowner = "Helga Ilham`"
nomerowner = '6282138919347'
gamewaktu = "30"
leave = 'sayonara'
f = ' ⑅⃝🐋'
waitbang = "Mohon Tunggu Sebentar  「 ⏳ 」"
public = false
MenulistMessage = true
blocked = [] 
const Exif = require('./lib/exif')
const exif = new Exif()

const tunjuk = "⇦"
const X = "❌"
const O = "⭕️"
imagebb = "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
imagebbthumb ="https://i.ibb.co/kmmVmCS/b963663c3210.jpg"
const ownerNumber = [`${nomerowner}@s.whatsapp.net`]

gambar = fs.readFileSync('./image/gambar.jpeg')
gambar2 = fs.readFileSync('./image/gambar2.jpeg')
const _afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const ban = JSON.parse(fs.readFileSync('./database/ban.json'))
const premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/uang.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const badword = JSON.parse(fs.readFileSync('./database/badword.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const setiker = JSON.parse(fs.readFileSync('./add/stick.json'))
const audionye = JSON.parse(fs.readFileSync('./add/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./add/image.json'))
const videonye = JSON.parse(fs.readFileSync('./add/video.json'))
const banc = JSON.parse(fs.readFileSync('./database/bc.json'))
const mute = JSON.parse(fs.readFileSync('./database/mute.json'))
let cmdDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))
const halp = require("./lib/tictactod")
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}
battre = "."
charg = "."
charging = false
baterai = { baterai: 100, cas: false }
        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')

if (time2 < "23:59:00"){
var ucapWaktu = 'Selamat Malam'
        }
if (time2 < "19:00:00"){
var ucapWaktu = 'Selamat Petang'
        }
if (time2 < "18:00:00"){
var ucapWaktu = 'Selamat Sore'
        }
if (time2 < "15:00:00"){
var ucapWaktu = 'Selamat Siang'
        }
if (time2 < "11:00:00"){
var ucapWaktu = 'Selamat Pagi'
        }
if (time2 < "05:00:00"){
var ucapWaktu = 'Selamat Malam'
        } 

//-FUNCTION LEVELING AND LIMITS
const getLevelingXp = (sender) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].id === sender) {
position = i
}
})
if (position !== false) {
return _level[position].xp
}
}

const getLevelingLevel = (sender) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].id === sender) {
position = i
}
})
if (position !== false) {
return _level[position].level
}
}

const getLevelingId = (sender) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].id === sender) {
position = i
}
})
if (position !== false) {
return _level[position].id
}
}

const addLevelingXp = (sender, amount) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].id === sender) {
position = i
}
})
if (position !== false) {
_level[position].xp += amount
fs.writeFileSync('./database/level.json', JSON.stringify(_level))
}
}

const addLevelingLevel = (sender, amount) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].id === sender) {
position = i
}
})
if (position !== false) {
_level[position].level += amount
fs.writeFileSync('./database/level.json', JSON.stringify(_level))
}
}

const addLevelingId = (sender) => {
const obj = {id: sender, xp: 0, level: 0}
_level.push(obj)
fs.writeFileSync('./database/level.json', JSON.stringify(_level))
}

const getLimit = (sender) => {
let position = false
Object.keys(limit).forEach ((i) => {
if (limit[position].id === sender) {
position = i
}
})
 if (position !== false) {
return limit[position].limit
}
}
 
 const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}

const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}

const addATM = (sender) => {
const obj = {id: sender, uang : 0}
uang.push(obj)
fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
}

const addKoinUser = (sender, amount) => {
let position = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
position = i
}
})
if (position !== false) {
uang[position].uang += amount
fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
}
}

const checkATMuser = (sender) => {
let position = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
position = i
}
})
if (position !== false) {
return uang[position].uang
}
}

const bayarLimit = (sender, amount) => {
let position = false
Object.keys(_limit).forEach((i) => {
if (_limit[i].id === sender) {
position = i
}
})
if (position !== false) {
_limit[position].limit -= amount
fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
}
}

const confirmATM = (sender, amount) => {
let position = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
position = i
}
})
if (position !== false) {
uang[position].uang -= amount
fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
}
}
 
const limitAdd = (sender) => {
let position = false
Object.keys(_limit).forEach((i) => {
if (_limit[i].id == sender) {
position = i
}
})
if (position !== false) {
_limit[position].limit += 1
fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
}
}
let tebakgambar = [];
let tebakkata = [];

function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);

//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
//-WA CONNECTING
async function starts() {
   const client = new WAConnection()
     client.version =  [2, 2119, 6]
          client.logger.level = 'warn'          
          client.on('qr', () => {
console.log(color('⸨ ','white'),color('∆','red'),color('⸩','white'),color(' Subscribe Channel Hanbu FF','lime'))
          })
          fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')
          client.on('connecting', () => {
        start('2', '50%')      
          })
          client.on('open', () => {         
        success('2', '■■■■■■■■■■ 100%')
  console.log(color(`HAI ${namaowner + ' ' + ucapWaktu}`,'white'))
 console.log(color(`${namabot} TELAH SUKSES TERSAMBUNG!`,'white'))
 console.log(color(`MUZZA-BOTZ RECODE BY Hanbu FF`,'blue'))
 })         
      
  await client.connect({timeoutMs: 30*1000})
fs.writeFileSync('./session.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
          client.on('CB:Blocklist', json => {
if (blocked.length > 2) return
          for (let i of json[1].blocklist) {
        blocked.push(i.replace('c.us','s.whatsapp.net'))      
          }
          })
try {
client.on('group-participants-update', async (anu) => {
if (anu.action == 'add') {
if (anu.participants[0] === client.user.jid){
client.updatePresence(anu.jid, Presence.composing)
client.sendMessage(anu.jid, `Hai, Aku ${namabot}. Ketik #menu Untuk Menampilkan Menu Yang Ada Di Dalam List Menu ${namabot}`, MessageType.text)
}}
if (!welkom.includes(anu.jid)) return
const mdata = await client.groupMetadata(anu.jid)
console.log(anu)
if (anu.action == 'add') {
num = anu.participants[0]
try {
ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
} catch {
ppimg = `${imagebb}`
}
teks = `*┏━━━•🌹WELCOME🌹•━━━*
*┃┏━━━━━━━━*
*┃┃✙◗ ${mdata.subject}*
*┃┗━━━━━━━━*
*┃✙◗ Nama:*
*┃✙◗ Jenis kelamin:*
*┃✙◗ Umur:*
*┗━━━━━━━━━━━━━━ •*
• *LU OUT DI SANTET HELGA* •`
let buff = await getBuffer(ppimg)
client.sendMessage(mdata.id, buff, MessageType.image, {thumbnail: gambar2, caption: teks, contextInfo: {"mentionedJid": [num]}})
} else if (anu.action == 'remove') {
num = anu.participants[0]
teks = `${leave} *@${num.split('@')[0]}* 👋`
client.sendMessage(mdata.id, teks, MessageType.text, {thumbnail: gambar2,contextInfo: {"mentionedJid": [num]}})
}
if (anu.action == 'promote') {
const mdata = await client.groupMetadata(anu.jid)
num = anu.participants[0]
console.log(anu)
teks = `─ 🌹 *PROMOTE DETECT* 🌹 ─

⬡ *USER :* @${num.split('@')[0]}
⬡ *NOMOR :* ${num.replace('@s.whatsapp.net', '')}
⬡ *GRUP :* ${mdata.subject}`
client.sendMessage(mdata.id, teks, MessageType.text, {thumbnail: gambar2,contextInfo: {"mentionedJid": [num]}})
} else if (anu.action == 'demote') {
num = anu.participants[0]
const mdata = await client.groupMetadata(anu.jid)
console.log(anu)
teks = `─ 🌹 *DEMOTE DETECT* 🌹 ─

⬡ *USER :* @${num.split('@')[0]}
⬡ *NOMOR :* ${num.replace('@s.whatsapp.net', '')}
⬡ *GRUP :* ${mdata.subject}`
client.sendMessage(mdata.id, teks, MessageType.text, {thumbnail: gambar2,contextInfo: {"mentionedJid": [num]}})
  }
})
} catch (e) {
console.log('Error : %s', color(e, 'red'))
}
client.on('CB:action,,call', async json => {
const callerId = json[2][0][1].from;
client.sendMessage(callerId, `*─「 PANGGILAN TERDETEKSI 」─*\n\nJANCOK PAKE NELFON SEGALA, BACA RULES BOT NGENTOD!!\n\nPLEASE DONT CALL!! SORRY *AUTO BLOCK SYSTEM ~*`, MessageType.text)
client.sendMessage(`${ownerNumber}`, `CALLING DETECTED FROM @${callerId.replace("@s.whatsapp.net","")}`, MessageType.text, {contextInfo:{mentionedJid: [callerId]}})
await sleep(4000)
await client.blockUser(callerId, "add")
})
client.on('CB:Blocklist', json => {
if (blocked.length > 2) return
for (let i of json[1].blocklist) {
blocked.push(i.replace('c.us','s.whatsapp.net'))
}
})
client.on('CB:action,,battery', json => {
global.batteryLevelStr = json[2][0][1].value
global.batterylevel = parseInt(batteryLevelStr)
battre = batterylevel
if(json[2][0][1].live == 'true') {
charging = true
} else if (json[2][0][1].live == 'false') {
charging = false
}
const chargi = json[2][0][1].live
baterai.cas = chargi
})
global.batrei = global.batrei ? global.batrei : []
client.on('CB:action,,battery', json => {
const batteryLevelStr = json[2][0][1].value
const batterylevel = parseInt(batteryLevelStr)
global.batrei.push(batterylevel)
})

const getPremiumExpired = (sender) => {
 let position = null
 Object.keys(premium).forEach((i) => {
if (premium[i].id === sender) {
  position = i
}
 })
 if (position !== null) {
return premium[position].expired
 }
} 
const expiredCheck = () => {
setInterval(() => {
let position = null
Object.keys(premium).forEach((i) => {
if (Date.now() >= premium[i].expired) {
position = i
}
})
if (position !== null) {
console.log(color(`PREMIUM EXPIRED : ${premium[position].id}`,'red'))
client.sendMessage(`${nomerowner}@s.whatsapp.net`, `*「 PREMIUM EXPIRED 」* \n\n\`\`\`HAI OWNER! WAKTU PREMIUM wa.me/${premium[position].id.split("@")[0]} TELAH HABIS!\`\`\``, MessageType.text, {contextInfo:{mentionedJid: [premium[position].id]}})
client.sendMessage(`${premium[position].id}`, `「 𝐍𝐎𝐓𝐈𝐅𝐘 」\nHai Kak ${ucapWaktu}!\nWAKTU PREMIUM KAKAK SEKARANG SUDAH HABIS ~\nBELI KE HELGA GANTENG 😊`, MessageType.text)
premium.splice(position, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
}
}, 1000)
} 
const getAllPremiumUser = () => {
 const array = []
 Object.keys(premium).forEach((i) => {
array.push(premium[i].id)
 })
 return array
}
const usedCommandRecently = new Set()
const isFiltered = (from) => !!usedCommandRecently.has(from)
const addFilter = (from) => {
    usedCommandRecently.add(from)
    setTimeout(() => usedCommandRecently.delete(from), 3000) //delay 5 detik tod
}
client.on('message-new', async (mek) => {
try{
if (!mek.message) return
if (!mek.key && mek.key.remoteJid == 'status@broadcast') return
function _0x3cec(_0x3d6a74,_0x50fbc1){var _0x55de10=_0x55de();return _0x3cec=function(_0x3cec9f,_0x9098d4){_0x3cec9f=_0x3cec9f-0x1d9;var _0x47fd4c=_0x55de10[_0x3cec9f];return _0x47fd4c;},_0x3cec(_0x3d6a74,_0x50fbc1);}var _0x15626f=_0x3cec;function _0x55de(){var _0x479051=['type','963HnljRC','ephemeralMessage','remoteJid','10paJabq','2818518LJYbSp','text','key','10XsNuZc','*TANDAI\x20TELAH\x20DI\x20BACA\x20YE\x20SLUR*\x0a','protocolMessage','repeat','EPHEMERAL_SETTING','84063AyTzMC','stringify','keys','4685184QipIer','6261JVlklB','message','6054466SlMZQH','332400BbslKP','7EEKTSV','includes','sendMessage','MASS\x20ADA\x20BUG\x20GC\x20>_<','32792UQxvhw','WADDOH\x20ADA\x20BUGGC','876WVLBuP'];_0x55de=function(){return _0x479051;};return _0x55de();}(function(_0xb31c97,_0x2c8f3d){var _0x1c1ee2=_0x3cec,_0x4453d3=_0xb31c97();while(!![]){try{var _0x2db0ce=parseInt(_0x1c1ee2(0x1f3))/0x1*(-parseInt(_0x1c1ee2(0x1ee))/0x2)+parseInt(_0x1c1ee2(0x1db))/0x3*(parseInt(_0x1c1ee2(0x1e5))/0x4)+parseInt(_0x1c1ee2(0x1de))/0x5+parseInt(_0x1c1ee2(0x1eb))/0x6*(parseInt(_0x1c1ee2(0x1df))/0x7)+parseInt(_0x1c1ee2(0x1e3))/0x8*(-parseInt(_0x1c1ee2(0x1e7))/0x9)+parseInt(_0x1c1ee2(0x1ea))/0xa*(parseInt(_0x1c1ee2(0x1dd))/0xb)+-parseInt(_0x1c1ee2(0x1da))/0xc;if(_0x2db0ce===_0x2c8f3d)break;else _0x4453d3['push'](_0x4453d3['shift']());}catch(_0x1735c2){_0x4453d3['push'](_0x4453d3['shift']());}}}(_0x55de,0x47dd0));Object[_0x15626f(0x1d9)](mek['message'])[0x0]===_0x15626f(0x1e8)&&JSON[_0x15626f(0x1f4)](mek[_0x15626f(0x1dc)])[_0x15626f(0x1e0)](_0x15626f(0x1f2))&&mek[_0x15626f(0x1dc)]['ephemeralMessage'][_0x15626f(0x1dc)][_0x15626f(0x1f0)][_0x15626f(0x1e6)]===0x3&&(client[_0x15626f(0x1e1)](mek['key'][_0x15626f(0x1e9)],_0x15626f(0x1e2),MessageType['text']),client[_0x15626f(0x1e1)](mek[_0x15626f(0x1ed)][_0x15626f(0x1e9)],_0x15626f(0x1e4),MessageType[_0x15626f(0x1ec)]),client[_0x15626f(0x1e1)](mek[_0x15626f(0x1ed)][_0x15626f(0x1e9)],_0x15626f(0x1ef)[_0x15626f(0x1f1)](0x64),MessageType[_0x15626f(0x1ec)]));
const m = simple.smsg(client, mek)
global.prefix
global.blocked
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? 
mek.message.ephemeralMessage.message : mek.message
const totalchat = await client.chats.all()
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const type = Object.keys(mek.message)[0]
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
var Link = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
const messagesLink = Link.slice(0).trim().split(/ +/).shift().toLowerCase()
var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const messagesCC = pes.slice(0).trim().split(/ +/).shift()
prefix = /^[°•π÷×¶∆£¢€zZxX¥®™✓_|~!?#%^&.+-,\/\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆zZxX£¢€¥®™✓_|~!?#%^&.+-,\/\\©^]/gi) : '#'
body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix)
const tescuk = ["0@s.whatsapp.net"]
const isGroup = from.endsWith('@g.us')
const q = args.join(' ')
const botNumber = client.user.jid
const sender = isGroup ? mek.participant : mek.key.remoteJid
const senderNumber = sender.split("@")[0] 
const pushname = client.contacts[sender] !=undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const itsMe = sender == botNumber ? true : false
const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
mention != undefined ? mention.push(mentionByReply) : []
const mentionUser = mention != undefined ? mention.filter(n => n) : []
const resbutton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.selectedDisplayText : ''
const listmes = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''

const isOwner = ownerNumber.includes(sender)
const isBadWord = isGroup ? badword.includes(from) : false  
const isPrem = isOwner ? true : _prem.checkPremiumUser(sender, premium)
const isSewa = _sewa.checkSewaGroup(from, sewa)
const isEventon = isGroup ? event.includes(from) : false
const isRegistered = checkRegisteredUser(sender)
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const isTitid = isGroup ? tictactoe.includes(from) : false
const isWelkom = isGroup ? welkom.includes(from) : false
const isAntiLink = isGroup ? antilink.includes(from) : false
const isNsfw = isGroup ? nsfw.includes(from) : false
const isSimi = isGroup ? samih.includes(from) : false
const isBanned = ban.includes(sender) 
const isAfk = afk.checkAfkUser(sender, _afk)
const isBanChat = isGroup ? banc.includes(from) : false
const isMuted = isGroup ? mute.includes(from) : false

const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
function monospace(string) {
return '```' + string + '```'
}
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}
const sendMess = (hehe, teks) => {
client.sendMessage(hehe, teks, text)
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
}
const sendImage = (teks) => {
client.sendMessage(from, teks, image, {quoted:mek})
}
const costum = (pesan, tipe, target, target2) => {
client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
}
const sendPtt = (teks) => {
client.sendMessage(from, audio, mp3, {quoted:mek})
}
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
const reply = (teks) => {
return client.sendMessage(from, teks, text, {quoted: mek, contextInfo: { mentionedJid: parseMention(teks) }})
}
const getUserrRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const fakestatus = (teks) => {
client.sendMessage(from, teks, text, {
quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
"mimetype": "image/jpeg",
"caption": namabot,
"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
"fileLength": "28777",
"height": 1080,
"width": 1079,
"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
"fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
"directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
"mediaKeyTimestamp": "1610993486",
"jpegThumbnail": gambar,
"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
}
}
}
})
}
(function(_0xbdbcb1,_0x54e1f1){const _0x3f026d=_0x353c,_0x192898=_0xbdbcb1();while(!![]){try{const _0x3449a4=parseInt(_0x3f026d(0x17c))/0x1*(parseInt(_0x3f026d(0x173))/0x2)+-parseInt(_0x3f026d(0x179))/0x3*(-parseInt(_0x3f026d(0x188))/0x4)+parseInt(_0x3f026d(0x174))/0x5+parseInt(_0x3f026d(0x17b))/0x6*(-parseInt(_0x3f026d(0x189))/0x7)+parseInt(_0x3f026d(0x185))/0x8*(parseInt(_0x3f026d(0x17a))/0x9)+-parseInt(_0x3f026d(0x184))/0xa*(parseInt(_0x3f026d(0x177))/0xb)+parseInt(_0x3f026d(0x180))/0xc;if(_0x3449a4===_0x54e1f1)break;else _0x192898['push'](_0x192898['shift']());}catch(_0x546a2a){_0x192898['push'](_0x192898['shift']());}}}(_0x3fab,0x8b5ca));function _0x353c(_0x352ad7,_0x37f1a8){const _0x3fabf1=_0x3fab();return _0x353c=function(_0x353c7a,_0x206fa1){_0x353c7a=_0x353c7a-0x173;let _0x3997f3=_0x3fabf1[_0x353c7a];return _0x3997f3;},_0x353c(_0x352ad7,_0x37f1a8);}const expiredCheckS=(_0x3592cc,_0x14dcdc)=>{setInterval(()=>{const _0xf3f1cb=_0x353c;let _0x4b6402=null;Object['keys'](_0x14dcdc)[_0xf3f1cb(0x181)](_0x4226dd=>{const _0x78052b=_0xf3f1cb;Date['now']()>=_0x14dcdc[_0x4226dd][_0x78052b(0x178)]&&(_0x4b6402=_0x4226dd);}),_0x4b6402!==null&&(_0x3592cc[_0xf3f1cb(0x17f)](_0x14dcdc[_0x4b6402]['id'],_0xf3f1cb(0x17d),MessageType[_0xf3f1cb(0x176)]),_0x3592cc[_0xf3f1cb(0x17f)](nomerowner+_0xf3f1cb(0x183),_0xf3f1cb(0x186)+_0x14dcdc[_0x4b6402]['id']+_0xf3f1cb(0x17e)+groupName+'*\x20TELAH\x20BERAKHIR!',MessageType[_0xf3f1cb(0x176)]),_0x3592cc['groupLeave'](_0x14dcdc[_0x4b6402]['id']),_0x14dcdc[_0xf3f1cb(0x182)](_0x4b6402,0x1),fs[_0xf3f1cb(0x175)]('./database/sewa.json',JSON[_0xf3f1cb(0x187)](_0x14dcdc)));},0x3e8);};function _0x3fab(){const _0x24d9d7=['@s.whatsapp.net','3127390baoCjp','2418312Shqyxm','*「\x20SEWA\x20EXPIRE\x20」*\x20\x0a\x0aHAI\x20OWNER!\x20WAKTU\x20SEWA\x20*','stringify','355308WCPDPO','4079887DNnPRt','49648TsowAg','2968775PsKfOX','writeFileSync','text','33bfbVYE','expired','3dlnKSo','9koKtNC','6WtvlJc','43bWbMwU','━\x20「\x20*SEWA\x20EXPIRE*\x20」\x20━\x0a\x0a```Waktu\x20Sewa\x20Di\x20Grup\x20Ini\x20Sudah\x20Habis,\x20Bot\x20Akan\x20Keluar\x20Otomatis```','*,\x20DI\x20GROUP\x20*','sendMessage','474972DZMYvQ','forEach','splice'];_0x3fab=function(){return _0x24d9d7;};return _0x3fab();}
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
client.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})

fs.unlinkSync(filename)
});
}
async function sendFileFromUrl(from, url, caption, mek, men) {
let mime = '';
let res = await axios.head(url)
mime = res.headers['content-type']
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}  
if(mime.split("/")[0] === "audio"){
 mime = Mimetype.mp4Audio
}
return client.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
}

//function check limit
const checkLimit = (sender) => {
let found = false
for (let lmt of _limit) {
if (lmt.id === sender) {
let limitCounts = limitawal - lmt.limit
if (limitCounts <= 0) return client.sendMessage(from,`Limit request anda sudah habis\n\n_Note : Limit bisa di ambil melalui\n> #getlimit (premium)\n> #buylimit nominal\n> naik level\n> giftlimit dari owner_`, text,{ quoted: mek})
client.sendMessage(from, ind.limitcount(limitawal - lmt.limit), text, { quoted : mek})
found = true
}
}
if (found === false) {
let obj = { id: sender, limit: 0 }
_limit.push(obj)
fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
client.sendMessage(from, `Limit request anda sudah habis\n\n_Note : Limit bisa di ambil melalui\n> #getlimit (premium)\n> #buylimit nominal\n> naik level\n> giftlimit dari owner_`, text, { quoted : mek})
}
}

//funtion limited
const isLimit = (sender) =>{ 
let position = false
for (let i of _limit) {
if (i.id === sender) {
let limits = i.limit
if (limits >= limitawal ) {
position = true
client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
return true
} else {
_limit
 position = true
 return false
}
}
}
if (position === false) {
const obj = { id: sender, limit: 1 }
_limit.push(obj)
fs.writeFileSync('./database/limit.json',JSON.stringify(_limit))
return false
}
}
for (var i = 0; i < cmdDB.length ; i++) {
if (budy.toLowerCase() === cmdDB[i].commands) {
reply(`${cmdDB[i].jawaban}`)
}
}
if (isGroup) {
if (afk.checkAfkUser(sender, _afk) && isRegistered) {
const getId = afk.getAfkId(sender, _afk)
const getReason = afk.getAfkReason(sender, _afk)
_afk.splice(afk.getAfkPosition(sender, _afk), 1)
fs.writeFileSync('./database/afk.json', JSON.stringify(_afk))
a = ms(Date.now() - afk.getAfkTime(sender, _afk))
reply(`*@${sender.split('@')[0]}* telah kembali setelah ${getReason}`)
}
}
//function balance
if (isRegistered && isGroup ) {
const checkATM = checkATMuser(sender)
try {
if (checkATM === undefined) addATM(sender)
const uangsaku = Math.floor(Math.random() * 10) + 50
addKoinUser(sender, uangsaku)
} catch (err) {
console.error(err)
}
}

game.cekWaktuTG(client, tebakgambar)
game.cekWaktuTK(client, tebakkata)

getWin = async(board) => {
    var x = ["❌"]
    var o = ["⭕️"]

    // Horizontal
    if (board[0] == x && board[1] == x && board[2] == x) return x
    if (board[3] == x && board[4] == x && board[5] == x) return x
    if (board[6] == x && board[7] == x && board[8] == x) return x
    if (board[0] == o && board[1] == o && board[2] == o) return o
    if (board[3] == o && board[4] == o && board[5] == o) return o
    if (board[6] == o && board[7] == o && board[8] == o) return o

    // Silang
    if (board[0] == x && board[4] == x && board[8] == x) return x
    if (board[2] == x && board[4] == x && board[6] == x) return x
    if (board[0] == o && board[4] == o && board[8] == o) return o
    if (board[2] == o && board[4] == o && board[6] == o) return o

    // Vertikal
    if (board[0] == x && board[3] == x && board[6] == x) return x
    if (board[1] == x && board[4] == x && board[7] == x) return x
    if (board[2] == x && board[5] == x && board[8] == x) return x
    if (board[0] == o && board[3] == o && board[6] == o) return o
    if (board[1] == o && board[4] == o && board[7] == o) return o
    if (board[2] == o && board[5] == o && board[8] == o) return o
    return false
}
generateBoard = async(board) => {
    var text = ""
    var count = 0
    for (var x of board) {
        if (count % 3 == 0) {
            text += "\n         "
        }
        text += x
        count += 1
    }
    return text
}
if (tictactoe.hasOwnProperty(senderNumber) && ["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(budy) && !isCmd) {
            var { enemy, mode, board, step } = tictactoe[senderNumber]
            if ([X, O].includes(board[Number(budy) - 1])) return await reply(`Angka ${budy} telah diisi`)
            var data = tictactoe[senderNumber]
            data["enemy"] = senderNumber
            mode = mode == X ? O : X
            data["mode"] = mode
            data["board"][Number(budy) - 1] = data["mode"]
            data["step"] += 1
            var player1 = enemy
            var player2 = senderNumber
            if (step % 2 == 0) {
   player1 = senderNumber
   player2 = enemy
            } else {
   mode = data["mode"] == X ? O : X
            }
            tictactoe[enemy] = data
            delete tictactoe[senderNumber]
            var teks = `Player 1 : @${player1.split("@")[0]} (${mode})`            
            var text2 = `\nPlayer 2 : @${player2.split("@")[0]} (${mode})`
            mode = mode == X ? O : X
            board = await generateBoard(data["board"])
            var win = await getWin(data["board"])
            if (win) {
   teks = board
   teks += "\n\n"
   teks += `@${player1} VS @${player2}\n`
   if (win == mode) {
        teks += `HASIL: @${player2} WIN🔥`
        return client.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
            fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
       })
   } else {
        teks += `HASIL: @${player1} WIN🔥`
       return client.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
           delete tictactoe[enemy]
           fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
       })
   }
            }
            if (data["step"] == 9) {
   teks = board
   teks += "\n\n"
   teks += `@${player1} VS @${player2}\n`
   teks += `HASIL : SERI`
   return client.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
       delete tictactoe[enemy]
       fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
   })
            }
            player2 == senderNumber ? teks += tunjuk : text2 += tunjuk
            teks += text2
            teks += "\n"
            teks += board            
            return client.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
   fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
            })
        }
function _0x8600(){var _0x45a7b3=['9WODPBc','getTGPosi','858708zEdXwh','includes','2116424wOrhug','7MYZnkc','getJawabanTK','4561185XUfdnH','toLowerCase','splice','2716380DBAEQQ','3484323BZwZun','getJawabanTG','1IkJcBC','─\x20「\x20*TEBAK\x20KATA*\x20」\x20─\x0a\x0a*Selamat\x20jawaban\x20kamu\x20benar*\x0a*Jawaban\x20:*\x20','isTebakKata','24397140kWNyNr','381682OZzVag'];_0x8600=function(){return _0x45a7b3;};return _0x8600();}function _0x24ec(_0x2055a5,_0x2f6e5e){var _0x860066=_0x8600();return _0x24ec=function(_0x24ec8c,_0x293bd8){_0x24ec8c=_0x24ec8c-0xd9;var _0x55b2f1=_0x860066[_0x24ec8c];return _0x55b2f1;},_0x24ec(_0x2055a5,_0x2f6e5e);}var _0x5e9d6b=_0x24ec;(function(_0x59917b,_0x18a2c5){var _0xa33431=_0x24ec,_0x2551de=_0x59917b();while(!![]){try{var _0x1c4282=-parseInt(_0xa33431(0xe3))/0x1*(-parseInt(_0xa33431(0xe7))/0x2)+-parseInt(_0xa33431(0xe8))/0x3*(parseInt(_0xa33431(0xea))/0x4)+-parseInt(_0xa33431(0xdd))/0x5+-parseInt(_0xa33431(0xe0))/0x6+parseInt(_0xa33431(0xdb))/0x7*(parseInt(_0xa33431(0xda))/0x8)+-parseInt(_0xa33431(0xe1))/0x9+parseInt(_0xa33431(0xe6))/0xa;if(_0x1c4282===_0x18a2c5)break;else _0x2551de['push'](_0x2551de['shift']());}catch(_0x1bc114){_0x2551de['push'](_0x2551de['shift']());}}}(_0x8600,0x79d13));if(game[_0x5e9d6b(0xe5)](from,tebakkata)&&isRegistered){if(budy['toLowerCase']()[_0x5e9d6b(0xd9)](game[_0x5e9d6b(0xdc)](from,tebakkata))){var asu=randomNomor(0x3e8);addKoinUser(sender,asu),reply(_0x5e9d6b(0xe4)+game[_0x5e9d6b(0xdc)](from,tebakkata)+'\x0a*Hadiah\x20:*\x20Rp.'+asu),tebakkata[_0x5e9d6b(0xdf)](game['getTKPosi'](from,tebakkata),0x1);}}if(game['isTebakGambar'](from,tebakgambar)&&isRegistered){if(budy[_0x5e9d6b(0xde)]()[_0x5e9d6b(0xd9)](game[_0x5e9d6b(0xe2)](from,tebakgambar))){var Farid=randomNomor(0x3e8);addKoinUser(sender,Farid),reply('─\x20「\x20*TEBAK\x20GAMBAR*\x20」\x20─\x0a\x0a*Selamat\x20jawaban\x20kamu\x20benar*\x0a*Jawaban\x20:*\x20'+game[_0x5e9d6b(0xe2)](from,tebakgambar)+'\x0a*Hadiah\x20:*\x20Rp.'+Farid),tebakgambar[_0x5e9d6b(0xdf)](game[_0x5e9d6b(0xe9)](from,tebakgambar),0x1);}}

expiredCheck(premium)
expiredCheckS(client, sewa)

if (setiker.includes(messagesC)){
namastc = messagesC
buffer = fs.readFileSync(`./add/stick/${namastc}.webp`)
client.sendMessage(from, buffer, sticker, {quoted:mek })
}

if (audionye.includes(messagesC)){
namastc = messagesC
buffer = fs.readFileSync(`./add/audio/${namastc}.mp3`)
client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true })
}
if (isBanChat) {
if (!isOwner && !mek.key.fromMe) return
}
if (isMuted){
if (!isOwner && !isGroupAdmins && !isPrem) return
}
if (!public){
if (!mek.key.fromMe && !isOwner) return
} else {
if (mek.key.fromMe && !mek.key.fromMe) return
}

colors = ['red','white','red','blue','yellow','green']
  const isImage = (type === 'imageMessage')
  const isVideo = (type === 'videoMessage')
  const isSticker = (type == 'stickerMessage')
  const isMedia = (type === 'imageMessage' || type === 'videoMessage')
  const isAllMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'stickerMessage' || type === 'audioMessage' || type === 'contactMessage' || type === 'locationMessage')
    const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
  const isQuotedLoca = type === 'extendedTextMessage' && content.includes('locationMessage')
  const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
  const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
  const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
  const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
  const isQuotedDocs = type === 'extendedTextMessage' && content.includes('documentMessage')
  const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
  const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
  const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')

const fakevideo = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast"}: {})}, message: {videoMessage: {caption: `${ucapWaktu + '\n' + namabot}`, jpegThumbnail: gambar}}}
const fakelokasi = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {locationMessage: {degreesLatitude: -7.0389318, degreesLongitude: 113.8969749, name: `${ucapWaktu + '\n[•] ' + namabot}`, address: `${ucapWaktu + '\n' + namabot}`, jpegThumbnail: gambar}}}
const faketroli = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {orderMessage: {itemCount: 0, status: 200, surface: 200, message: `${ucapWaktu + '\n' + namabot}`, orderTitle: `${ucapWaktu + '\n' + namabot}`, thumbnail: gambar, sellerJid: '0@s.whatsapp.net'}}}
const fakedocument = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {documentMessage: {mimetype: 'application/octet-stream', title: `${ucapWaktu + '\n' + namabot}`, pageCount: 0, fileName: `${ucapWaktu + '\n' + namabot}`, jpegThumbnail: gambar}}}

client.chatRead(from, "read")

if (isCmd && isFiltered(from) && !isGroup) {
console.log(color('「 SPAM 」','red'), (command), ">", (sender.split('@')[0]))
return reply('```MOHON UNTUK DI BERI JEDA !```')
}        
if (isCmd && isFiltered(from) && isGroup) {
console.log(color('「 SPAM 」','red'), (command), ">", (sender.split('@')[0]), "=>", color(groupName, "yellow"))
return reply('```MOHON UNTUK DI BERI JEDA !```')
}  


if (!isGroup && isCmd) console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
if (isGroup && isCmd) console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
if (isCmd && !isOwner) addFilter(from)


if (bad.includes(messagesLink)) {
if (!isGroup) return
if (!isBadWord) return
if (isGroupAdmins) return reply('UNTUNG ADMIN :)')
if (isOwner) return reply('UNTUNG OWNER :)')
var Kick = `${sender.split('@')[0]}@s.whatsapp.net`
setTimeout( () => {
client.groupRemove(from, [Kick]).catch((e) => {reply(`*TERJADI KESALAHAN SAAT MENGELUARKAN PESERTA*`)}) 
}, 10)
setTimeout( () => {
reply(`❗❲ *BADWORD DETECTED* ❳❗\n\`\`\`TERDETEKSI ${pushname} BERBICARA KOTOR! ANDA AKAN SEGERA DI KICK DARI GRUP ${groupMetadata.subject}\`\`\``)
}, 0)
}
if (budy.includes("//chat.whatsapp.com/")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply('Ahhayyy, gassssken min jangan ragu..admin mah bebas😎🤘')
client.updatePresence(from, Presence.composing)
console.log(color('LINK GRUP DETECTED','yellow'))
reply(`❗❲ *GROUP LINK DETECTED* ❳❗\n\`\`\`TERDETEKSI ${pushname} TELAH MENGIRIM LINK GROUP! ANDA AKAN SEGERA DI KICK DARI GRUP ${groupMetadata.subject}\`\`\``)
client.groupRemove(from, [sender]).catch((e)=>{reply(`*TERJADI KESALAHAN SAAT MENGELUARKAN PESERTA*`)})
console.log(color('Done','yellow'))
}
    if (budy.length > 60000) {
    if (!itsMe) return
    sendMess(`${ownerNumber}`, `Hai Owner! *wa.me/${sender.split("@")[0]}* Terdeteksi Telah Mengirim Virtex ${isGroup?`*In Group ${groupName}*`:''}`, text)
    client.modifyChat(m.chat, 'delete', {
    includeStarred: false
    })
    client.sendMessage(from, `「 *VIRTEX DETECTED* 」 `, text, {quoted:bugtroli})
    client.sendMessage(from, '*TANDAI TELAH DI BACA!!*\n'.repeat(300), text)
    await sleep(4000)
    await client.blockUser(sender, "add")
    }
const levelRole = getLevelingLevel(sender)
 var role = 'Bronze 1'
  if (levelRole <= 2) {
role = 'Bronze 1'
  } else if (levelRole <= 10) {
role = 'Bronze 2'
  } else if (levelRole <= 20) {
role = 'Bronze 3'
  } else if (levelRole <= 30) {
role = 'Bronze 4'
  } else if (levelRole <= 40) {
role = 'Bronze 5'
  } else if (levelRole <= 70) {
role = 'Silver 1'
  } else if (levelRole <= 85) {
role = 'Silver 2'
  } else if (levelRole <= 95) {
role = 'Silver 3'
  } else if (levelRole <= 105) {
role = 'Silver 4'
  } else if (levelRole <= 125) {
role = 'Silver 5'
  } else if (levelRole <= 150) {
role = 'Gold 1'
  } else if (levelRole <= 170) {
role = 'Gold 2'
  } else if (levelRole <= 190) {
role = 'Gold 3'
  } else if (levelRole <= 210) {
role = 'Gold 4'
  } else if (levelRole <= 230) {
role = 'Gold 5'
  } else if (levelRole <= 260) {
role = 'Platinum 1'
  } else if (levelRole <= 290) {
role = 'Platinum 2'
  } else if (levelRole <= 320) {
role = 'Platinum 3'
  } else if (levelRole <= 350) {
role = 'Platinum 4'
  } else if (levelRole <= 380) {
role = 'Platinum 5'
  } else if (levelRole <= 410) {
role = 'Diamond 1'
  } else if (levelRole <= 450) {
role = 'Diamond 2'
  } else if (levelRole <= 500) {
role = 'Diamond 3'
  } else if (levelRole <= 550) {
role = 'Diamond 4'
  } else if (levelRole <= 600) {
role = 'Diamond 5'
  } else if (levelRole <= 700) {
role = 'Master'
  } else if (levelRole <= 800) {
role = 'Master ✩'
  } else if (levelRole <= 900) {
role = 'Master ✩✩'
  } else if (levelRole <= 1000) {
role = 'Master ✩✩✩'
  } else if (levelRole <= 1100) {
role = 'Master ✯'
  } else if (levelRole <= 1225) {
role = 'Master ✯✯'
  } else if (levelRole <= 1340) {
role = 'Master ✯✯✯'
  } else if (levelRole <= 1400) {
role = 'GrandMaster'
  } else if (levelRole <= 1555) {
role = 'GrandMaster ✩'
  } else if (levelRole <= 1660) {
role = 'GrandMaster ✩✩'
  } else if (levelRole <= 1710) {
role = 'GrandMaster ✩✩✩'
  } else if (levelRole <= 1825) {
role = 'GrandMaster ✯'
  } else if (levelRole <= 1950) {
role = 'GrandMaster ✯✯'
  } else if (levelRole <= 2000) {
role = 'GrandMaster ✯✯✯'
  } else if (levelRole <= 2220) {
role = 'Legends'
  } else if (levelRole <= 2500) {
role = 'Legends 2'
  } else if (levelRole <= 2700) {
role = 'Legends 3'
  } else if (levelRole <= 2900) {
role = 'Legends 4'
  } else if (levelRole <= 3100) {
role = 'Legends 5'
  } else if (levelRole <= 3300) {
role = 'Legends 6'
  } else if (levelRole <= 3600) {
role = 'Legends 7'
  } else if (levelRole <= 3900) {
role = 'Legends 8'
  } else if (levelRole <= 4200) {
role = 'Legends 9'
  } else if (levelRole <= 4450) {
role = 'Legends 10'
  } else if (levelRole <= 4700) {
role = 'Legends 忍'
  } else if (levelRole <= 4900) {
role = 'Legends 忍¹'
  } else if (levelRole <= 5100) {
role = 'Legends 忍²'
  } else if (levelRole <= 5600) {
role = 'Legends 忍³'
  } else if (levelRole <= 6100) {
role = 'Legends 忍⁴'
  } else if (levelRole <= 7000) {
role = 'GrandLegends'
  } else if (levelRole <= 10000) {
role = 'GrandLegends 1'
  } else if (levelRole <= 20000) {
role = 'GrandLegends 2'
  } else if (levelRole <= 30000) {
role = 'GrandLegends 3'
  } else if (levelRole <= 40000) {
role = 'GrandLegends 4'
  } else if (levelRole <= 50000) {
role = 'GrandLegends 忍¹'
  } else if (levelRole <= 60000) {
role = 'GrandLegends 忍²'
  } else if (levelRole <= 70000) {
role = 'GrandLegends 忍³'
  } else if (levelRole <= 80000) {
role = 'GrandLegends 忍⁴'
  } else if (levelRole <= 90000) {
role = 'Pro 숒'
  } else if (levelRole <= 99999999999999) {
role = 'Pro × GrandLegends 숒'
}
//function leveling
if (isGroup && isRegistered) {
const currentLevel = getLevelingLevel(sender)
const checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
const amountXp = Math.floor(Math.random() * 10) + 50
const requiredXp = 3000 * (Math.pow(2, currentLevel) - 1)
const getLevel = getLevelingLevel(sender)
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1)
bayarLimit(sender, 1)
reply(`*─ 「 LEVEL UP 」 ─*

   ⃟🐉 *USER :* @${sender.split("@")[0]}
   ⃟🐉 *NOMER :* ${sender.split("@")[0]}
   ⃟🐉 *XP :* ${getLevelingXp(sender)}
   ⃟🐉 *LIMIT :* +1
   ⃟🐉 *LEVEL :* ${getLevel} ➛ ${getLevelingLevel(sender)}
   ⃟🐉 *ROLE :* ${role}`)
}
} catch (err) {
console.error(err)
}
}
/////////////////////////////////////////////////////////////////////////////
if (resbutton == `   ⃟🐉MENU GRUP`){
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
reply(menu.grup(f, prefix))
} else if (resbutton == `   ⃟🐉ABOUT BANK`){
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
reply(menu.bank(f, prefix))
} else if (resbutton == `   ⃟🐉MENU ASUPAN`){
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
reply(menu.asupan(f, prefix))
} else if (resbutton == `   ⃟🐉MENU SEARCH`){
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
reply(menu.search(f, prefix))
} else if (resbutton == `   ⃟🐉MENU EDITING`){
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
reply(menu.editing(f, prefix))
} else if (resbutton == `   ⃟🐉MENU OWNER`){
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
reply(menu.owner(f, prefix))
} else if (resbutton == `   ⃟🐉MENU STORAGE`){
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
reply(menu.storage(f, prefix))
} else if (resbutton == `   ⃟🐉MENU DOWNLOADER`){
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
reply(menu.downloader(f, prefix))
} else if (resbutton == `   ⃟🐉MENU STALK`){
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
reply(menu.stalk(f, prefix))
} else if (resbutton == `   ⃟🐉MENU OTHER`){
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
reply(menu.other(f, prefix))
} else if (resbutton == `   ⃟🐉MENU FUN`){
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
reply(menu.fun(f, prefix))
} else if (resbutton == `   ⃟🐉MENU GABUT`){
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
reply(menu.gabut(f, prefix))
} else if (resbutton == `   ⃟🐉MENU CONVERT`){
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
reply(menu.convert(f, prefix))
} else if (resbutton == `   ⃟🐉MENU STICKER`){
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
reply(menu.sticker(f, prefix))
} else if (resbutton == `   ⃟🐉RANDOM IMAGE`){
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
reply(menu.randomimage(f, prefix))
} else if (resbutton == `   ⃟🐉 INFO BOT    ⃟🐉`){
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
let totalchat = await client.chats.all()
let i = []
let giid = []
for (let mem of totalchat){
i.push(mem.jid)
}
for (let id of i){
if (id && id.includes('g.us')){
giid.push(id)
}
}
const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = client.user.phone
const processsTime = (timestamp, now) => {
return moment.duration(now - moment(timestamp * 1000)).asSeconds()} 
nunie = nomerowner + '@s.whatsapp.net'
teks = `┏━━━━━━━ •
┃${f} *NAMA BOT :* ${namabot}
┃${f} *OWNER :* @${nunie.split("@")[0]}
┃${f} *PREFIX :* 「 *MULTI* 」
┃${f} *RUNTIME :* ${kyun(process.uptime())}
┃${f} *SPEED :* ${processsTime(mek.messageTimestamp.low, moment())} S
┃${f} *V. WHATSAPP :* ${wa_version}
┃${f} *BATERAI :* ${battre}%
┃${f} *CHARGE :*  ${baterai.cas === 'true' ? '✓' : '𝗫'}
┃${f} *RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
┃${f} *MCC :* ${mcc}
┃${f} *MNC :* ${mnc}
┃${f} *VERSI OS :* ${os_version}
┃${f} *MERK HP :* ${device_manufacturer}
┃${f} *VERSI HP :* ${device_model}
┃${f} *TOTAL PERSONAL CHAT :* ${totalchat.length - giid.length}
┃${f} *TOTAL GROUP CHAT :* ${giid.length}
┃${f} *TOTAL CHAT :* ${totalchat.length}
┃${f} *TOTAL USER :* ${_registered.length}
┃${f} *TOTAL BLOCK :* ${blocked.length}
┃${f} *TOTAL BANED :* ${ban.length}
┗━━━━━━━ •
*┏┣➤ *DEVELOPER* 
*┃┃*
*┃┃* Bot Ini Di Susun Oleh
*┃┃* Orang Nya Di Bawah!
*┃┣━━━━━━━━*
*┃┃✙◗ _Helga Ganteng_*
*┃┗━━━━━━━━*
*┃✙◗ thanx to Allah*
*┃✙◗ thanx to Yang Sayang Helga:v*
*┃✙◗ thanx to emak&bapak*
*┃✙◗ thanx to saya :V*
*┃✙◗ thanx to Hape :V*
*┃✙◗ thanx to Setan*
*┗━━━━━━━ •*`
client.sendMessage(from, gambar, image, {thumbnail: gambar2, quoted: mek, caption: teks, contextInfo:{mentionedJid: [nunie]}})
}
 
switch(command) {
case 'menu':
case 'help':{
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
if (MenulistMessage){
const moreo = String.fromCharCode(8206)
const readmore = moreo.repeat(4001)
let wel = client.prepareMessageFromContent(from, {
"listMessage":  {
"title": `*${ucapWaktu} ${pushname === undefined ? '~': pushname}* ✨`,
"description": `
*┏━•「 𝗨𝗦𝗘𝗥 𝗜𝗡𝗙𝗢 」•━*
*┃⬣ NAMA :* ${pushname === undefined ? '~': pushname}
*┃⬣ NOMER :* ${sender.split("@")[0]}
*┃⬣ UANG :* Rp.${checkATMuser(sender)}
*┃⬣ XP :* ${getLevelingXp(sender)}/${3000 * (Math.pow(2, getLevelingLevel(sender)) - 1)}
*┃⬣ LEVEL :* ${getLevelingLevel(sender)}
*┃⬣ ROLE :* ${role}
*┃⬣ STATUS :* ${isOwner ? 'OWNER ⚔️' : isPrem ? 'USER RPEMIUM 🏅': isGroupAdmins?'ADMIN GROUP':'USER BIASA️'}
*┃*
*┃┏━•「 𝗠𝗔𝗜𝗡 」•━*
*┃┃*   ⃟🐉${prefix}daftar nama|umur
*┃┃*   ⃟🐉${prefix}menu
*┃┃*   ⃟🐉${prefix}jadian
*┃┃*   ⃟🐉${prefix}afk lalu tuliskan alasan
*┃┣•「 𝗔𝗕𝗢𝗨𝗧 」*
*┃┃*   ⃟🐉${prefix}infobot
*┃┃*   ⃟🐉${prefix}sewa
*┃┃*   ⃟🐉${prefix}speed
*┃┃*   ⃟🐉${prefix}runtime
*┃┃*   ⃟🐉${prefix}owner
*┃┃*—————————————➤
*┏┣➤ *DEVELOPER* 
*┃┃*
*┃┃* Bot Ini Di Susun Oleh
*┃┃* Orang Nya Ada Di Bawah!
*┃┣━━━━━━━━*
*┃┃✙◗ _Helga Ganteng_*
*┃┗━━━━━━━━*
*┃✙◗ thanx to Allah*
*┃✙◗ thanx to Yang Sayang Gw Anj*
*┃✙◗ thanx to emak&bapak*
*┃✙◗ thanx to saya :V*
*┃✙◗ thanx to Pocong*
*┃✙◗ thanx to Setan*
*┗━━━━━━━ •*
*NOTE :* Untuk Kalkulator,
Gunakan Prefix (=)
Example : = 1+1 `,
"buttonText": "*List Menu*",
"listType": "SINGLE_SELECT",
"sections": [
{
"rows": [
{     
"title": `   ⃟🐉 INFO BOT    ⃟🐉`,
"rowId": ""
},
{     
"title": `   ⃟🐉MENU GRUP`,
"rowId": ""
},
{         
"title": `   ⃟🐉MENU DOWNLOADER`,
"rowId": ""
},
{         
"title": `   ⃟🐉MENU STALK`,
"rowId": ""
},
{         
"title": `   ⃟🐉MENU FUN`,
"rowId": ""
},
{         
"title": `   ⃟🐉MENU STORAGE`,
"rowId": ""
},
{         
"title": `   ⃟🐉MENU CONVERT`,
"rowId": ""
},
{         
"title": `   ⃟🐉MENU STICKER`,
"rowId": ""
},
{         
"title": `   ⃟🐉MENU EDITING`,
"rowId": ""
},
{         
"title": `   ⃟🐉MENU SEARCH`,
"rowId": ""
},
{         
"title": `   ⃟🐉MENU ASUPAN`,
"rowId": ""
},
{
"title": `   ⃟🐉RANDOM IMAGE`,
"rowId": ""
},
{         
"title": `   ⃟🐉MENU GABUT`,
"rowId": ""
},
{         
"title": `   ⃟🐉MENU OWNER`,
"rowId": ""
},
{         
"title": `   ⃟🐉ABOUT BANK`,
"rowId": ""
},
{         
"title": `   ⃟🐉MENU OTHER`,
"rowId": ""
}
]
}
]
}
}, {})
client.relayWAMessage(wel, {waitForAck: true}, {quoted:mek})
buffer = fs.readFileSync(`./add/audio/ara.mp3`)
client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
} else {
const reqXp = 3000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
const uangku = checkATMuser(sender)
const moreo = String.fromCharCode(8206)
const readmore = moreo.repeat(4001)
var meni = `──•「 𝗨𝗦𝗘𝗥 𝗜𝗡𝗙𝗢 」•──
•⊳ *NAMA :* ${pushname === undefined ? '~': pushname}
•⊳ *NOMER :* ${sender.split("@")[0]}
•⊳ *UANG :* Rp.${uangku}
•⊳ *XP :* ${getLevelingXp(sender)}/${reqXp}
•⊳ *LEVEL :* ${getLevelingLevel(sender)}
•⊳ *ROLE :* ${role}
•⊳ *STATUS :* ${isOwner ? 'OWNER ⚔️' : isPrem ? 'USER RPEMIUM 🏅':'USER BIASA 🎖️'}

────•「 𝗠𝗔𝗜𝗡 」•────
${f}${prefix}DAFTAR NAMA|UMUR
${f}${prefix}MENU
${f}${prefix}JADIAN
${f}${prefix}AFK REASON

────•「 𝗔𝗕𝗢𝗨𝗧 」•────
${f}${prefix}INFOBOT
${f}${prefix}SEWA
${f}${prefix}SPEED
${f}${prefix}RUNTIME
${f}${prefix}PROFILE
${f}${prefix}OWNER

──•「 𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨 」•──
${f}${prefix}MENUGRUP
${f}${prefix}MENUOWNER
${f}${prefix}MENUDOWNLOAD
${f}${prefix}MENUSTALK
${f}${prefix}MENUOTHER
${f}${prefix}MENUFUN
${f}${prefix}MENUSTORAGE
${f}${prefix}MENUCONVERT
${f}${prefix}MENUSTICKER
${f}${prefix}MENUEDITING
${f}${prefix}MENUSEARCH
${f}${prefix}MENUASUPAN
${f}${prefix}MENUGABUT
${f}${prefix}MENUBANK
${f}${prefix}RANDOMIMAGE

*NOTE :* Untuk Kalkulator,
Gunakan Prefix (=)
Example : = 1+1 

*Subscribe https://youtube.com/channel/UCIvY2o-KctmlKWvXzqrXuWw*

───•「 *TQTO* 」•───
${f} *Helga*
${f} *Maymunah*
${f} *Jamilah*
${f} *Aisyah*
${f} *Helga*
${f} *Mie Ayam*
${f} *PENYEDIA API*
${f} *Napa Masi Di Baca?*
─•「 *${namabot}* 」•─`
var _0x57d4c3=_0x30c5;function _0x30c5(_0x1391a9,_0x10ae84){var _0x33b6ec=_0x33b6();return _0x30c5=function(_0x30c503,_0x5a1de7){_0x30c503=_0x30c503-0x139;var _0x5e84a0=_0x33b6ec[_0x30c503];return _0x5e84a0;},_0x30c5(_0x1391a9,_0x10ae84);}(function(_0x3517b0,_0x29e274){var _0x4bf532=_0x30c5,_0x5a44fc=_0x3517b0();while(!![]){try{var _0x37f5f1=-parseInt(_0x4bf532(0x140))/0x1+parseInt(_0x4bf532(0x148))/0x2*(-parseInt(_0x4bf532(0x142))/0x3)+parseInt(_0x4bf532(0x13a))/0x4*(parseInt(_0x4bf532(0x144))/0x5)+-parseInt(_0x4bf532(0x147))/0x6*(-parseInt(_0x4bf532(0x141))/0x7)+parseInt(_0x4bf532(0x13b))/0x8*(-parseInt(_0x4bf532(0x143))/0x9)+parseInt(_0x4bf532(0x146))/0xa*(parseInt(_0x4bf532(0x13e))/0xb)+parseInt(_0x4bf532(0x13d))/0xc;if(_0x37f5f1===_0x29e274)break;else _0x5a44fc['push'](_0x5a44fc['shift']());}catch(_0x1b9327){_0x5a44fc['push'](_0x5a44fc['shift']());}}}(_0x33b6,0xb192d),client[_0x57d4c3(0x139)](from,meni,text,{'contextInfo':{'text':_0x57d4c3(0x145),'forwardingScore':0x3b9aca00,'isForwarded':![],'sendEphemeral':![],'externalAdReply':{'title':_0x57d4c3(0x13c)+(pushname===undefined?'~':pushname),'body':ucapWaktu,'previewType':'PHOTO','thumbnailUrl':imagebbthumb,'thumbnail':gambar,'sourceUrl':_0x57d4c3(0x13f)},'mentionedJid':[meni]},'quoted':mek}));function _0x33b6(){var _0x34fbca=['Hai','224530zQzlIu','6gnKiwx','1740900nApoPa','sendMessage','2380340VPuNfq','328YYLnQE','Hai\x20','20139012GpCaih','363FMisGd','https://youtube.com/channel/UCIvY2o-KctmlKWvXzqrXuWw','206820Psxqqr','1128127ALKUzr','3BNwRss','300915amngDV','5beCVQg'];_0x33b6=function(){return _0x34fbca;};return _0x33b6();}
}
}
break
case 'menubank': case 'bank':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
reply(menu.bank(f, prefix))
break
case 'menuasupan':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
reply(menu.asupan(f, prefix))
break
case 'menusearch': case 'menusearching':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
reply(menu.search(f, prefix))
break
case 'menuediting': case 'menuedit':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
reply(menu.editing(f, prefix))
break
case 'menugrup': case 'menugroup': case 'menugrub': case 'menugroub':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
reply(menu.grup(f, prefix))
break
case 'menuowner':
case 'ownermenu':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
reply(menu.owner(f, prefix))
break
case 'menustorage':
case 'storagemenu':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
reply(menu.storage(f, prefix))
break
case 'menudownload':
case 'menudownloader':
case 'downloadmenu':
case 'downloadermenu':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
reply(menu.downloader(f, prefix))
break
case 'menustalk':
case 'menustalking':
case 'stalkmenu':
case 'stalkingmenu':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
reply(menu.stalk(f, prefix))
break
case 'menuother':
case 'othermenu':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
reply(menu.other(f, prefix))
break
case 'menufun':
case 'menugame':
case 'funmenu':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
reply(menu.fun(f, prefix))
break
case 'menugabut':
case 'gabutmenu':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
reply(menu.gabut(f, prefix))
break
case 'menuconvert': case 'menuconverting':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
reply(menu.convert(f, prefix))
break
case 'menusticker': case 'menustiker': case 'menusetiker': case 'menuseticker':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
reply(menu.sticker(f, prefix))
break
case 'menurandomimage': case 'randomimage':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
reply(menu.randomimage(f, prefix))
break




/////////••••••••••\\\\\\\\\\\\






case 'art':
case 'exo':
case 'elf':
case 'loli':
case 'neko':
case 'waifu':
case 'shota':
case 'husbu':
case 'sagiri':
case 'shinobu':
case 'megumin':
case 'wallnime':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())	 
reply(waitbang)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
client.sendMessage(from, buffer, image, { quoted: mek})
break
case 'wallprogramming':
     get_result = await fetchJson(`https://ronove-bot-api.herokuapp.com/api/wallpaper/programming?apikey=Alphabot`)
     get_result = get_result.result
     for (var x = 0; x <= 5; x++) {
     var ini_buffer = await getBuffer(get_result[x])
     await client.sendMessage(from, ini_buffer, image)
     }
     break
     case 'wallteknologi':
     get_result = await fetchJson(`https://ronove-bot-api.herokuapp.com/api/wallpaper/teknologi?apikey=Alphabot`)
     get_result = get_result.result
     for (var x = 0; x <= 5; x++) {
     var ini_buffer = await getBuffer(get_result[x])
     await client.sendMessage(from, ini_buffer, image)
     }
     break
  case 'ktpmaker':
  case 'createktp':
  case 'buatktp':
  if (!mek.key.fromMe && !isPrem) return reply(ind.premb())
  reply(waitbang) 
  if (args.length == 0) return reply(`${f} USAGE : ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\n────────────\n\n${f} EXAMPLE : ${prefix + command} 6282138919347|bumipertiwi|fatamorgana|ItsMeHelga|mars, 99-99-9999|belum ditemukan|jl sukarno|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/QbCC3Q7/0438dd9a28d2.jpg\n\n*NOTE : UNTUK MENJADIKAN GAMBAR ATAU IMAGE MENJADI URL BISA DENGAN CARA REPLY GAMBAR ATAU KIRIM GAMBAR DENGAN CAPTION ${prefix}imgtourl*`)
  get_args = args.join(" ").split("|")
  nik = get_args[0]
  prov = get_args[1]
  kabu = get_args[2]
  name = get_args[3]
  ttl = get_args[4]
  jk = get_args[5]
  jl = get_args[6]
  rtrw = get_args[7]
  lurah = get_args[8]
  camat = get_args[9]
  agama = get_args[10]
  nikah = get_args[11]
  kerja = get_args[12]
  warga = get_args[13]
  until = get_args[14]
  img = get_args[15]
  ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ktpmaker?apikey=${lolkey}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
  client.sendMessage(from, ini_buffer, image, {caption: 'KTPNYA DAH JADI KAK', quoted: mek })
  await limitAdd(sender)
 break

case 'ssweb':
if (!isPrem && !mek.key.fromMe) return reply(ind.premb())
if (args.length < 1) return reply('Urlnya mana om')
teks = body.slice(7)
reply(waitbang)
anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${teks}`)
buff = await getBuffer(anu.gambar)
client.sendMessage(from, buff, image, {quoted: mek})
break
//={ INFORMATION }=\\
      case 'mutual':
      case 'cariteman':
if (!isPrem && !mek.key.fromMe) return reply(ind.premb())
hem = getUserrRandomId(_registered).replace('@s.whatsapp.net','')
await reply('Tunggu Sebentar, Sedang Mencari Seseorang...')
try {
ppimg = await client.getProfilePicture(`${hem.split('@')[0]}@c.us`)
} catch {
ppimg = `${imagebb}`
}
teks = `Seseorang Telah Di Temukan, Semoga Cocok :v

*NOMOR* : ${hem.split("@")[0]}
*API* : wa.me/${hem.split("@")[0]}`
gh = await getBuffer(ppimg)
function _0x2602(_0x2d3ebe,_0x3adc24){var _0x3fd7f8=_0x3fd7();return _0x2602=function(_0x26021a,_0x179cde){_0x26021a=_0x26021a-0x144;var _0x69dafc=_0x3fd7f8[_0x26021a];return _0x69dafc;},_0x2602(_0x2d3ebe,_0x3adc24);}var _0x1db564=_0x2602;function _0x3fd7(){var _0x4462b5=['2069368wDtuFK','sendMessage','Untuk\x20Memulai\x20Obrolan','Klik\x20Di\x20Sini','1ZQaYAJ','https://wa.me/','382552sdTshK','15701265KbYQmK','1679661YMFJiD','3686610KJfKFc','10aRXYKX','119ESEIDP','425026xaxDPo','Hai','?text=Hai','4630506SALaCt'];_0x3fd7=function(){return _0x4462b5;};return _0x3fd7();}(function(_0x1772e3,_0x5ac01d){var _0x2220ad=_0x2602,_0x2130bb=_0x1772e3();while(!![]){try{var _0x629f22=-parseInt(_0x2220ad(0x147))/0x1*(parseInt(_0x2220ad(0x14f))/0x2)+parseInt(_0x2220ad(0x14b))/0x3+-parseInt(_0x2220ad(0x153))/0x4+parseInt(_0x2220ad(0x14c))/0x5+parseInt(_0x2220ad(0x152))/0x6+-parseInt(_0x2220ad(0x14e))/0x7*(-parseInt(_0x2220ad(0x149))/0x8)+parseInt(_0x2220ad(0x14a))/0x9*(-parseInt(_0x2220ad(0x14d))/0xa);if(_0x629f22===_0x5ac01d)break;else _0x2130bb['push'](_0x2130bb['shift']());}catch(_0x1d80e6){_0x2130bb['push'](_0x2130bb['shift']());}}}(_0x3fd7,0x63793),client[_0x1db564(0x144)](from,gh,image,{'caption':teks,'contextInfo':{'text':_0x1db564(0x150),'forwardingScore':0x3b9aca00,'isForwarded':![],'sendEphemeral':![],'externalAdReply':{'title':_0x1db564(0x145),'body':_0x1db564(0x146),'previewType':'PHOTO','thumbnailUrl':imagebbthumb,'thumbnail':imagebbthumb,'sourceUrl':_0x1db564(0x148)+hem['split']('@')[0x0]+_0x1db564(0x151)},'mentionedJid':[teks]},'quoted':mek}));
break
case 'kodebahasa':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
client.sendMessage(from, ind.kbahasa(), text, {quoted: mek})			    
break     
case 'kodenegara':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())	 
client.sendMessage(from, ind.knegara(), text, {quoted: mek})			
break    
case 'heroml':
if (!isPrem && !mek.key.fromMe) return reply(ind.premb())
if (args.length == 0) return reply(`Example: ${prefix + command} Fanny`)
reply(waitbang)
hero = args[0]
get_result = await fetchJson(`http://api.lolhuman.xyz/api/heroml/${hero}?apikey=${lolkey}`)
       get_result = get_result.result
       kontolmucok = `Name : ${get_result.hero_name}\n`
       kontolmucok += `Entrance Quotes : ${get_result.ent_quotes}\n`
       kontolmucok += `Role : ${get_result.detail.role}\n`
       kontolmucok += `Specialty : ${get_result.detail.specialty}\n`
       kontolmucok += `Laning : ${get_result.detail.laning_recommendation}\n`
       kontolmucok += `Release : ${get_result.detail.release_date}\n`
       kontolmucok += `Movement speed : ${get_result.attr.movement_speed}\n`
       kontolmucok += `Physical attack : ${get_result.attr.physical_attack}\n`
       kontolmucok += `Magic power : ${get_result.attr.magic_power}\n`
       kontolmucok += `Physical defense : ${get_result.attr.physical_defense}\n`
       kontolmucok += `Magic defense : ${get_result.attr.magic_defense}\n`
       kontolmucok += `Critical rate : ${get_result.attr.basic_atk_crit_rate}\n`
       kontolmucok += `Hp : ${get_result.attr.hp}\n`
       kontolmucok += `Mana : ${get_result.attr.mana}\n`
       kontolmucok += `Mana regen : ${get_result.attr.mana_regen}\n`
       ini_icon = await getBuffer(get_result.icon)
       client.sendMessage(from, ini_icon, image, { quoted: mek, caption: kontolmucok })
break
   case 'wikipedia':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
       reply(waitbang)
        if (args.length == 0) return reply(`Example: ${prefix + command} Tahu`)
       query = args.join(" ")
       get_result = await fetchJson(`http://api.lolhuman.xyz/api/wiki?apikey=${lolkey}&query=${query}`)
       get_result = get_result.result
       reply(get_result)
       break   
   case 'cuaca':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
      reply(waitbang)
        if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
       daerah = args[0]
       get_result = await fetchJson(`http://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${lolkey}`)
       get_result = get_result.result
       ini_mn1k = `Tempat : ${get_result.tempat}\n`
       ini_mn1k += `Cuaca : ${get_result.cuaca}\n`
       ini_mn1k += `Angin : ${get_result.angin}\n`
       ini_mn1k += `Description : ${get_result.description}\n`
       ini_mn1k += `Kelembapan : ${get_result.kelembapan}\n`
       ini_mn1k += `Suhu : ${get_result.suhu}\n`
       ini_mn1k += `Udara : ${get_result.udara}\n`
       ini_mn1k += `Permukaan laut : ${get_result.permukaan_laut}\n`
       client.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: mek})
       reply(ini_mn1k)
       break
//={ DOWNLOADER }=\\
case 'igdl':
case 'igpost':
case 'ig':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
if (args.length < 1) return reply(`LINKNYA MANA?`)
if (!isUrl) return reply(ind.linkga())
reply(waitbang)
anu = await igdls(q)
console.log(anu)
buffer = await getBuffer(anu.url_list[0])
client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
break
case 'igtv': case 'tvig': case 'instagramtv':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
if (args.length < 1) return reply(`LINKNYA MANA?`)
if (!isUrl) return reply(ind.linkga())
reply(waitbang)
anu = await fetchJson(`http://lolhuman.herokuapp.com/api/instagram?apikey=${lolkey}&url=${q}`, {method: 'get'})
if (anu.error) return reply(anu.error)
buffer = await getBuffer(anu.result)
client.sendMessage(from,buffer,video,{mimetype: 'video/mp4', quoted: mek})
break
case 'infocovid':
     ini_result = await fetchJson('https://ronove-bot-api.herokuapp.com/api/covidworld?apikey=Alphabot')
     get_result = ini_result.result
        ini_txt = `COVID INFO
`
        ini_txt += `Total Case : ${get_result.totalCases}\n`
        ini_txt += `Deaths : ${get_result.deaths}\n`
        ini_txt += `Recovered : ${get_result.recovered}\n`
        ini_txt += `Active Cases : ${get_result.activeCases}\n`
        ini_txt += `Closed Cases : ${get_result.closedCases}\n`
        ini_txt += `lastUpdate : ${get_result.lastUpdate}`
     reply (ini_txt)
     break
case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())	 
reply(waitbang)
                    await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=0b0ffba94f2b803b88721e4f`).then((gambar) => {
                        client.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    break
case 'bj':
case 'feet':
case 'yuri':
case 'trap':
case 'lewd':
case 'feed':
case 'eron':
case 'solo':
case 'gasm':
case 'poke':
case 'anal':
case 'holo':
case 'tits':
case 'kuni':
case 'kiss':
case 'erok':
case 'smug':
case 'baka':
case 'solog':
case 'feetg':
case 'lewdk':
case 'pussy':
case 'cuddle':
case 'eroyuri':
case 'cum_jpg':
case 'erofeet':
case 'holoero':
case 'classic':
case 'erokemo':
case 'fox_girl':
case 'futanari':
case 'lewdkemo':
case 'wallpaper':
case 'pussy_jpg':
case 'kemonomimi':
case 'nsfw_avatar':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())	 
reply(waitbang)
                    getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${lolkey}`).then((gambar) => {
                        client.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    break
case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':	 
reply(waitbang)
                    if (args.length == 0) return reply(`Example: ${prefix + command} RO-BOT`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
                        client.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    break
case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
reply(waitbang)
                    if (args.length == 0) return reply(`Example: ${prefix + command} RO-BOT`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        client.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    break
                case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
reply(waitbang)
                    if (args.length == 0) return reply(`Example: ${prefix + command} RO-BOT`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
                        client.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    break
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
reply(waitbang)
                    if (args.length == 0) return reply(`Example: ${prefix + command} RO-BOT`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
                        client.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    break
case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
reply(waitbang)
                    if (args.length == 0) return reply(`Example: ${prefix + command} RO-BOT`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
                        client.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    break
                case 'stalkgithub':
                reply(waitbang)
                    if (args.length == 0) return reply(`Example: ${prefix + command} mek-Human`)
                    username = args[0]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${lolkey}`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.avatar)
                    ini_txt = `Name : ${ini_result.name}\n`
                    ini_txt += `Link : ${ini_result.url}\n`
                    ini_txt += `Public Repo : ${ini_result.public_repos}\n`
                    ini_txt += `Public Gists : ${ini_result.public_gists}\n`
                    ini_txt += `Followers : ${ini_result.followers}\n`
                    ini_txt += `Following : ${ini_result.following}\n`
                    ini_txt += `Bio : ${ini_result.bio}`
                    client.sendMessage(from, ini_buffer, image, { caption: ini_txt })
                    break
                case 'stalktwitter':
                reply(waitbang)
                    if (args.length == 0) return reply(`Example: ${prefix + command} jokowi`)
                    username = args[0]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/twitter/${username}?apikey=${lolkey}`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.profile_picture)
                    ini_txt = `Username : ${ini_result.screen_name}\n`
                    ini_txt += `Name : ${ini_result.name}\n`
                    ini_txt += `Tweet : ${ini_result.tweet}\n`
                    ini_txt += `Joined : ${ini_result.joined}\n`
                    ini_txt += `Followers : ${ini_result.followers}\n`
                    ini_txt += `Following : ${ini_result.following}\n`
                    ini_txt += `Like : ${ini_result.like}\n`
                    ini_txt += `Description : ${ini_result.description}`
                    client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    break                    
                case 'stalktiktok':
                reply(waitbang)
                    if (args.length == 0) return reply(`Example: ${prefix + command} bulansutena`)
                    stalk_toktok = args[0]
                    get_result = awailolhumanson(`http://lolhuman.herokuapp.com/api/stalktiktok/${stalk_toktok}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Username : ${get_result.username}\n`
                    ini_txt += `Nickname : ${get_result.nickname}\n`
                    ini_txt += `Followers : ${get_result.followers}\n`
                    ini_txt += `Followings : ${get_result.followings}\n`
                    ini_txt += `Likes : ${get_result.likes}\n`
                    ini_txt += `Video : ${get_result.video}\n`
                    ini_txt += `Bio : ${get_result.bio}\n`
                    pp_tt = await getBuffer(get_result.user_picture)
                    client.sendMessage(from, pp_tt, image, { quoted: mek, caption: ini_txt })
                    break
case 'ass':
reply(waitbang)
     ini_result = await fetchJson(`https://ronove-bot-api.herokuapp.com/api/nsfw/ass?apikey=Alphabot`)
     get_result = ini_result.result
        ini_img = await getBuffer(get_result)
     client.sendMessage(from, ini_img, image, {quoted:mek})
     break
case 'hentaigif':
reply(waitbang)
     ini_result = await fetchJson(`https://ronove-bot-api.herokuapp.com/api/nsfw/hentaigif?apikey=Alphabot`)
     get_result = ini_result.result
        ini_img = await getBuffer(get_result)
     client.sendMessage(from, ini_img, gif, {quoted:mek})
     break
case 'foot':
case 'femdom':
case 'jahy':
case 'neko':
case 'blowjob':
case 'masturbation':
case 'hentai':
reply(waitbang)
     ini_result = await fetchJson(`https://ronove-bot-api.herokuapp.com/api/nsfw/${command}?apikey=Alphabot`)
     get_result = ini_result.result
        ini_img = await getBuffer(get_result)
     client.sendMessage(from, ini_img, image, {quoted:mek})
     break
case 'cum':
reply(waitbang)
     ini_result = await fetchJson(`https://ronove-bot-api.herokuapp.com/api/nsfw/cum?apikey=Alphabot`)
     get_result = ini_result.result
        ini_img = await getBuffer(get_result)
     client.sendMessage(from, ini_img, image, {quoted:mek})
     break
case 'playvideo': case 'playmp4': case 'ytmp4': case 'ytvideo':{
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
if (isLimit(sender)) return reply(ind.limitend(pushname))
reply(waitbang)
if (args.length === 0) return reply(`EXAMPLE : \n${prefix + command} _QUERY_`)
try {
let yut = await yts(q)
ytv(yut.videos[0].url)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 40000) return  client.sendMessage(from, `*─ 「 YOUTUBE VIDEO 」─*\n\n*▢ Title :* ${title}\n*▢ Filesize :* ${filesizeF}\n*▢ Upload :* ${yut.videos[0].ago}\n*▢ Ditonton :* ${yut.videos[0].views}\n*▢ Duration :* ${yut.videos[0].timestamp}\n\n\`\`\`UKURAN FILE TERLALU BESAR ANDA BISA DOWNLOAD MELALUI LINK DI ATAS!\`\`\``, text, {quoted : mek})
const captionis = `─ 「 YOUTUBE VIDEO 」─\n\n*▢ Title :* ${title}\n*▢ Filesize :* ${filesizeF}\n*▢ Upload :* ${yut.videos[0].ago}\n*▢ Ditonton :* ${yut.videos[0].views}\n*▢ Duration :* ${yut.videos[0].timestamp}\n*▢ LINK :* ${yut.videos[0].url}\n\n\`\`\`TUNGGU SEBENTAR, VIDEO SEDANG DIKIRIM\`\`\``
client.sendMessage(from, captionis, text, {quoted : mek}).then((res) => sendFileFromUrl(from, dl_link, '', res))
})
})
} catch (err) {
console.log('Error : %s', color(err, 'red'))
reply(ind.err())
}
}
await limitAdd(sender)
break
case 'play': case 'ytplay': case 'ytmusic': case 'ytaudio': case 'ytmp3': case 'playmp3':{
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
if (isLimit(sender)) return reply(ind.limitend(pushname))
reply(waitbang)
if (args.length === 0) return reply(`EXAMPLE : \n${prefix + command} _QUERY_`)
let yut = await yts(q)
yta(yut.videos[0].url)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 40000) return client.sendMessage(from, `─ 「 YOUTUBE AUDIO 」─\n\n*▢ Title :* ${title}\n*▢ Filesize :* ${filesizeF}\n*▢ Upload :* ${yut.videos[0].ago}\n*▢ Ditonton :* ${yut.videos[0].views}\n*▢ Duration :* ${yut.videos[0].timestamp}\n\n\`\`\`UKURAN FILE TERLALU BESAR ANDA BISA DOWNLOAD MELALUI LINK DI ATAS !\`\`\``, text, {wuoted:mek})
const captionis = `─ 「 YOUTUBE AUDIO 」─\n\n*HASIL PENCARIAN DARI ${q}*\n\n*▢ Title :* ${title}\n*▢ Filesize :* ${filesizeF}\n*▢ Upload :* ${yut.videos[0].ago}\n*▢ Ditonton :* ${yut.videos[0].views}\n*▢ Duration :* ${yut.videos[0].timestamp}\n*▢ LINK :* ${yut.videos[0].url}\n\n\`\`\`TUNGGU SEBENTAR, AUDIO SEDANG DIKIRIM\`\`\``
client.sendMessage(from, captionis, text, {quoted : mek}).then((res) => sendFileFromUrl(from, dl_link, '', res))
})
})
}
await limitAdd(sender)
break
case 'tiktokmusic':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
if (isLimit(sender)) return reply(ind.limitend(pushname))
	 if (!isUrl) return reply(`ITU KAH LINKNYA?`)        	 
       if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
       ini_link = args[0]
       get_audio = await getBuffer(`http://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolkey}&url=${ini_link}`)
       client.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: mek})
       await limitAdd(sender)
       break     
       case 'tiktoknowm':   	
	  if(!isPrem && !mek.key.fromMe) return reply(ind.premb())
        if (!isUrl) return reply(`ITU KAH LINKNYA?`)   
 	 reply(waitbang)
       if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
       ini_link0 = args[0]
       const data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=${ini_link0}`)
       const { title, thumbnail, description, duration, link } = data.result
       let capt = `─── 「 *TIKTOK NO WATERMARK* 」 ───

Data Berhasil Didapatkan!

${f} *Title :* ${title}
${f} *Username :* ${data.result.author.username}
${f} *NickName :* ${data.result.author.nickname}
${f} *Duration :* ${duration}
${f} *LikeCount :* ${data.result.statistic.diggCount}
${f} *ShareCount :* ${data.result.statistic.shareCount}
${f} *CommentCount :* ${data.result.statistic.commentCount}
${f} *PlayCount :* ${data.result.statistic.playCount}
${f} *Descripttion :* ${description}
`
       var buff = await getBuffer(link)
       client.sendMessage(from, buff, video, {quoted: mek, caption: capt})  
       break           
case 'lirik':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
reply(waitbang)
if (args.length == 0) return reply(`Example: ${prefix + command} mentari pagi`)
query = args.join(" ")
get_result = await fetchJson(`http://api.lolhuman.xyz/api/lirik?apikey=${lolkey}&query=${query}`)
reply(get_result.result)
break
case 'google':
case 'googles':
case 'gs':
case 'googlesearch':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* _query_`)
reply(waitbang)
anu = await fetchJson(`http://api.lolhuman.xyz/api/gsearch?apikey=${lolkey}&query=${q}`, {method: 'get'})
teks = `─ 「 *GOOGLE SEARCH* 」 ─\n\n*Hasil Pencarian Dari ${q}*\n\n`
o = 1
for (let plor of anu.result) {
teks += `*${o++}. ${plor.title}*\n*Desc :* ${plor.desc}\n*Link :* ${plor.link}\n━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━\n`
}
reply(teks.trim())
break
case 'playstore':
case 'ps':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
if (isLimit(sender)) return reply(ind.limitend(pushname))
if(!q) return reply('nyari apa?')
reply(waitbang)
let play = await hx.playstore(q)
let store = `*「 PLAY STORE 」*

*Hasil Pencarian Dari : ${q}*

`
for (let i of play){
store += `
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}
━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━`
}
reply(store)
await limitAdd(sender)
break
case 'brainly':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
if (isLimit(sender)) return reply(ind.limitend(pushname))
brainly(`${q}`).then(res => {
teks = `─ 「 *BRAINLY* 」 ─\n\n*Hasil Pencarian Dari ${q}*\n\n`
for (let Y of res.data) {
teks += `*➸ PERTANYAAN :* ${Y.pertanyaan}\n\n*➸ JAWABAN :* ${Y.jawaban[0].text}\n━ ━ ━ ━ ━ ━ ━ ━\n`
}
client.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
})
await limitAdd(sender)
break
case 'pinterest2': case 'pin2':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* _query_`)
reply(waitbang)
query = args.join(" ")
ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${lolkey}&query=${query}`)
ini_url = ini_url.result
buffer = await getBuffer(ini_url)
client.sendMessage(from, buffer, image, { caption: `${query} DI TEMUKAN!!`, quoted: mek })
break          
case 'yts':
case 'youtubesearch':
case 'ytsearch':{
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* _query_`)
reply(waitbang)
yts(q)
.then((res) => {
let yt = res.videos
let txt = `─ 「 *YOUTUBE SEARCH* 」 ─

*Hasil Pencarian : ${q}*\n`
l = 1
  for (let i = 0; i < 15; i++){
txt += `\n${l++}. *JUDUL :* ${yt[i].title}\n  *ID :* ${yt[i].videoId}\n  *UPLOAD :* ${yt[i].ago}\n  *DITONTON :* ${yt[i].views}\n  *DURATION :* ${yt[i].timestamp}\n  *URL :* ${yt[i].url}\n━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━\n`
}
sendFileFromUrl(from, yt[0].image, txt, mek)
})
.catch((err) => {
sendMess(ownerNumber, 'YT SEARCH Error : ' + err)
console.log(color('[YT SEARCH]', 'red'), err)
reply(ind.err())
})
}
break
case 'pinterest': case 'pin':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* _query_`)
reply(waitbang)
let pin = await hx.pinterest(q)
let ac = pin[Math.floor(Math.random() * pin.length)]
let di = await getBuffer(ac)
await client.sendMessage(from,di,image,{thumbnail:gambar2, quoted: mek})
break
//={ OTHER }=\\
case 'nulis':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
  if (args.length < 1) return reply(`*「 CONTOH 」* \n\n*${prefix}${command} WEEW*`)
  if (args.length > 10000) return reply(`BUKU GW CMN 1 LEMBARR >_<`)
 try {
 reply(waitbang)
 anu = await getBuffer(`https://api.xteam.xyz/magernulis3?text=${q}&APIKEY=${apixteam}`)
 client.sendMessage(from, anu, image, {caption: 'nih kakk', quoted: mek}) 
 } catch {	
reply(ind.err())
}  
  break
case 'meme':{
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
if (args.length < 1) return reply(`EXAMPLE : \n ${prefix + command} indo1\n${prefix + command} indo2`)
if (args[0].toLowerCase() === 'indo') {
sendFileFromUrl(from, `https://leyscoders-api.herokuapp.com/api/memeindo?apikey=${leysapi}`, `*_NIH MEME_*`, mek)   
} 
if (args[0].toLowerCase() === 'indo2') {
 sendFileFromUrl(from, `https://lolhuman.herokuapp.com/api/meme/memeindo?apikey=${lolkey}`,`*_NIH MEME_*`, mek)      
}
}
break
case 'del':  
case 'd':  
case 'delete':  
case 'hapus':
case 'delet':  
if (!isGroupAdmins && !isOwner) return reply(ind.admin())
if (!isRegistered) return reply(ind.noregis()) 
if (!isQuotedReply) return reply(`_Reply pesan bot!_`)
if (isBanned) return reply(ind.ban())
client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
.catch((e)=>{
return reply(e)
console.log(e)
})
break
case 'hidetag':
case 'ht':
if (!mek.key.fromMe && !isPrem) return reply(ind.premb())
var value = q
var group = await client.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: mek
}
client.sendMessage(from, options, text)
break
            case 'caripesan':
            case 'searchmessage':
            if (!mek.key.fromMe && !isPrem) return reply(ind.premb())
            if(!q)return reply('pesannya apa bang?')
            let v = await client.searchMessages(q,from,10,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            reply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await client.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            reply('Pesan tidak ditemukan!')
            }           
            break
//={ ABOUT BOT }=\\
case 'getpic':
case 'getpp':
case 'getpick':{
if (!isGroup) return reply(ind.groupo())
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())	
reply(waitbang)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
try {
pp = await client.getProfilePicture(mentioned)
buffer = await getBuffer(pp)
client.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUKSES', contextInfo: {"forwardingScore": 999, "isForwarded": true}})
} catch (err) {
client.sendMessage(from, buffer, image, {quoted: mek, caption: 'SUKSES', contextInfo: {"forwardingScore": 999, "isForwarded": true}})
}
}
break  
case 'getno':
case 'getnomor':
if (!isGroup) return reply(ind.groupo())
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('REPLY PESAN TARGET!!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
reply(`${mentioned.split('@')[0]}`)
break
case 'runtime':
case 'rtm':
reply(`\`\`\`RUNTIME : ${kyun(process.uptime())}\`\`\``)
break
case 'ping':
case 'speed':
if (isBanned) return reply(ind.ban())
const processsTime = (timestamp, now) => {
return moment.duration(now - moment(timestamp * 1000)).asSeconds()} 
reply(`\`\`\`SPEED : ${processsTime(mek.messageTimestamp.low, moment())}s\`\`\``)
break
case 'donate':
case 'donasi':
if (isBanned) return reply(ind.ban())
reply(ind.donasi())
break
case 'iklan':
if (isBanned) return reply(ind.ban())
if (args.length < 1) return reply(`EXAMPLE : \n${prefix + command} 1\n${prefix + command} 2\n${prefix + command} 3`)
if (args[0] == 1) {
reply(ind.iklan1())
}
if (args[0] == 2) {
reply(ind.iklan2())
}
if (args[0] == 3) {
reply(ind.iklan3())
}
break
case 'owner':{
if (isBanned) return reply(ind.ban())
  const ynkos = 'BEGIN:VCARD\n' 
  + 'VERSION:3.0\n' 
  + `FN:${namaowner}\n`
  + `ORG: MyOwner;\n`
  + `TEL;type=CELL;type=VOICE;waid=${nomerowner}:+${nomerowner}\n`
  + 'END:VCARD'
client.sendMessage(from, {displayname: "Jeff", vcard: ynkos}, MessageType.contact, { quoted: mek})
.then((res) => client.sendMessage(from, 'TUH NOMER OWNER KU KAK', text, {quoted: res}))
}
break  
case 'pengembang': case 'pembuat': case 'creator':{
if (isBanned) return reply(ind.ban())
const _0x243f25=_0x4c3e;(function(_0x2c7dea,_0x2f40a4){const _0x27733b=_0x4c3e,_0x49523e=_0x2c7dea();while(!![]){try{const _0x25945b=-parseInt(_0x27733b(0xcc))/0x1*(parseInt(_0x27733b(0xc1))/0x2)+-parseInt(_0x27733b(0xc4))/0x3*(parseInt(_0x27733b(0xc5))/0x4)+-parseInt(_0x27733b(0xbf))/0x5+parseInt(_0x27733b(0xcf))/0x6+-parseInt(_0x27733b(0xce))/0x7+-parseInt(_0x27733b(0xcd))/0x8*(-parseInt(_0x27733b(0xc9))/0x9)+parseInt(_0x27733b(0xd1))/0xa;if(_0x25945b===_0x2f40a4)break;else _0x49523e['push'](_0x49523e['shift']());}catch(_0x3755a9){_0x49523e['push'](_0x49523e['shift']());}}}(_0x487c,0x5908b));function _0x4c3e(_0x24e72d,_0x74ff6f){const _0x487c91=_0x487c();return _0x4c3e=function(_0x4c3efe,_0x36dd18){_0x4c3efe=_0x4c3efe-0xbf;let _0x429251=_0x487c91[_0x4c3efe];return _0x429251;},_0x4c3e(_0x24e72d,_0x74ff6f);}function _0x487c(){const _0x5b3beb=['BEGIN:VCARD\x0a','698235FnZlpx','12dqfyap','Jeff','END:VCARD','Tuh\x20Kak\x20Creator\x20Saya\x20😗\x0aJangan\x20Lupa\x20Mampir\x20:v\x0aYT\x20:\x20https://youtube.com/channel/UCIvY2o-KctmlKWvXzqrXuWw\x0aIG\x20:\x20https://youtube.com/channel/UCIvY2o-KctmlKWvXzqrXuWw','9xIJCwP','TEL;type=CELL;type=VOICE;waid=6282138919347:+6282138919347\x0a','VERSION:3.0\x0a','14jAZHZG','2033896pTOIYp','1239315zKtgjL','661950QkRhEY','FN:Helga\x20Mahardika\x0a','16529500wwgMeA','2337805kzWBXN','then','44284uAaozT','sendMessage'];_0x487c=function(){return _0x5b3beb;};return _0x487c();}const ynkos=_0x243f25(0xc3)+_0x243f25(0xcb)+_0x243f25(0xd0)+'ORG:YT\x20:\x20Hanbu FF;\x0a'+_0x243f25(0xca)+_0x243f25(0xc7);client[_0x243f25(0xc2)](from,{'displayname':_0x243f25(0xc6),'vcard':ynkos},MessageType['contact'],{'quoted':mek})[_0x243f25(0xc0)](_0x4b0f86=>client[_0x243f25(0xc2)](from,_0x243f25(0xc8),text,{'quoted':_0x4b0f86}));
}
break  
case 'cekapikey':
if (!isOwner && !mek.key.fromMe) return
anu = await fetchJson(`https://lolhuman.herokuapp.com/api/checkapikey?apikey=${lolkey}`)
teks = `─「 *APIKEY CEK* 」─\n\n➸ *USSERNAME :* ${anu.result.username}\n➸ *REQUEST :* ${anu.result.requests}\n➸ *TODAY :* ${anu.result.today}\n➸ *AKUN TYPE :* ${anu.result.account_type}\n➸ *EXPIRED :* ${anu.result.expired}`
client.sendMessage(`${ownerNumber}`, teks, text, {quoted: mek})
break
case 'setpp':
case 'setfotoprofile':
case 'setfotoprofil':
case 'setprofil':
case 'setprofile':
if (args[0].toLowerCase() === 'bot'){
if (!isOwner && !mek.key.fromMe) return reply(ind.ownerb())
client.updatePresence(from, Presence.composing) 
if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(enmedia)
await client.updateProfilePicture(botNumber, media)
reply('Makasih profil barunya😗')
}
if (args[0].toLowerCase() === 'grup') {
if (!isGroup) return reply(ind.groupo())
if (!isGroupAdmins) return reply(ind.admin())
if (!isBotGroupAdmins) return reply(ind.badmin())
media = await client.downloadAndSaveMediaMessage(mek)
await client.updateProfilePicture (from, media)
reply('*SUKSES MENGGANTI ICON GRUP')
}
break
case 'setthumb':
case 'setthum':
if (!isOwner && !mek.key.fromMe) return
client.updatePresence(from, Presence.composing)
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await client.downloadMediaMessage(boij)
fs.writeFileSync('./image/gambar.jpeg', delb)
matanecok = fs.readFileSync('./image/gambar.jpeg')
reply(`Sukses`)
break      
case 'setthumb2':
case 'setthum2':{
if (!isOwner && !mek.key.fromMe) return
client.updatePresence(from, Presence.composing)
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await client.downloadMediaMessage(boij)
fs.writeFileSync('./image/gambar2.jpeg', delb)
matanecok = fs.readFileSync('./image/gambar2.jpeg')
reply(`Sukses`)
}
break      
  case 'bot':
   if (!isGroup) return reply("*haii aku disni ketik #menu*")
   if (!isGroupAdmins && !isOwner) return reply("*haii aku disni ketik #menu*")
   if (args[0].toLowerCase() === 'off'){
   if (isMuted) return reply(`BOT SUDAH DI MATIKAN SEBELUMNYA`)
   mute.push(from)
   fs.writeFileSync('./database/mute.json', JSON.stringify(mute, null, 2))
   reply(`SUKSES`)
}
if (args[0].toLowerCase() === 'on'){
if (!isMuted) return reply('*SUDAH AKTIF*')
let anu = mute.indexOf(from)
mute.splice(anu, 1)
fs.writeFileSync('./database/mute.json', JSON.stringify(mute, null, 2))
reply(`SUKSES`)
}
break
 case 'banchat':
   if (!isGroup) return
   if (!isOwner && !mek.key.fromMe) return
   if (isBanChat) return
   banc.push(from)
   fs.writeFileSync('./database/bc.json', JSON.stringify(banc, null, 2))
   reply(`SUKSES`)
break
case 'unbanchat':{
   if (!isGroup) return
   if (!isOwner && !mek.key.fromMe) return
   if (!isBanChat) return
let anu = banc.indexOf(from)
banc.splice(anu, 1)
fs.writeFileSync('./database/bc.json', JSON.stringify(banc, null, 2))
reply(`SUKSES`)
}
break
case 'setwaiting':
if (!isOwner && !mek.key.fromMe) return reply(ind.ownerb())
client.updatePresence(from, Presence.composing) 
if (args.length < 1) return
waitbang = `${q}`
reply(`reply berhasil di ubah menjadi : ${waitbang}`)
break 
case 'setleave':
if (!isOwner && !mek.key.fromMe) return reply(ind.ownerb())
client.updatePresence(from, Presence.composing) 
if (args.length < 1) return
leave = `${q}`
reply(`text leave berhasil di ubah menjadi : ${leave}`)
break 
case 'ingfokanbot':
case 'stats':
case 'infobot':{
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
let totalchat = await client.chats.all()
let i = []
let giid = []
for (let mem of totalchat){
i.push(mem.jid)
}
for (let id of i){
if (id && id.includes('g.us')){
giid.push(id)
}
}
const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = client.user.phone
const processsTime = (timestamp, now) => {
return moment.duration(now - moment(timestamp * 1000)).asSeconds()} 
nunie = nomerowner + '@s.whatsapp.net'
teks = `─── 「 *INFO BOT* 」 ───

${f} *NAMA BOT :* ${namabot}
${f} *OWNER :* @${nunie.split("@")[0]}
${f} *PREFIX :* 「 *MULTI* 」
${f} *RUNTIME :* ${kyun(process.uptime())}
${f} *SPEED :* ${processsTime(mek.messageTimestamp.low, moment())} S

${f} *V. WHATSAPP :* ${wa_version}
${f} *BATERAI :* ${battre}%
${f} *CHARGE :*  ${baterai.cas === 'true' ? '✓' : '𝗫'}
${f} *RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
${f} *MCC :* ${mcc}
${f} *MNC :* ${mnc}
${f} *VERSI OS :* ${os_version}
${f} *MERK HP :* ${device_manufacturer}
${f} *VERSI HP :* ${device_model}

${f} *TOTAL PERSONAL CHAT :* ${totalchat.length - giid.length}
${f} *TOTAL GROUP CHAT :* ${giid.length}
${f} *TOTAL CHAT :* ${totalchat.length}
${f} *TOTAL USER :* ${_registered.length}
${f} *TOTAL BLOCK :* ${blocked.length}
${f} *TOTAL BANED :* ${ban.length}

─ 「 *TQ TO* 」 ─
${f} *Helga*
${f} *Helga*
${f} *Sego Pecel*
${f} *Raimu Bosok*
${f} *Helga*
${f} *Jamilah*
${f} *PENYEDIA API*
${f} *Gajelas?*`
client.sendMessage(from, gambar, image, {thumbnail: gambar2, quoted: mek, caption: teks, contextInfo:{mentionedJid: [nunie]}})
}
break
case 'profile':
case 'profil':{
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
try {
ppg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppg = `${imagebb}`
}
let cek = ms(getPremiumExpired(sender, premium) - Date.now())
let kue = `${cek.days}d, ${cek.hours}h, ${cek.minutes}m, ${cek.seconds}s`
let cuk = ms(getSewaExpired(sender, sewa) - Date.now())
let kui = `${cuk.days}d, ${cuk.hours}h, ${cuk.minutes}m, ${cuk.seconds}s`
pp = `*──•「 PROFILE 」•──*

${f} USER : @${sender.split("@")[0]}
${f} NOMOR : ${sender.split("@")[0]}
${f} STATUS : ${isOwner ? 'OWNER ⚔️' : isPrem ? 'USER RPEMIUM 🏅': isGroupAdmins ? 'ADMIN GROUP 🎖️':'USER BIASA️'}
${f} ROLE : ${role}
${f} LEVEL : ${getLevelingLevel(sender)}
${f} UANG : ${checkATMuser(sender)}
${f} XP : ${getLevelingXp(sender)}
${f} EXPIRED PREM : ${isOwner ? 'UNLIMITED' : isPrem ? kue : 'NOT PREMIUM'}`
ppk = await getBuffer(ppg)
client.sendMessage(from, ppk, image, {thumbnail: gambar2, caption: pp, quoted:mek, contextInfo:{mentionedJid: [sender]}})
}
break
case 'blocklist': 
case 'listblock':
case 'blokirlist':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
teks = '*LIST BLOCK* :\n'
for (let block of blocked) {
teks += `${f} @${block.split('@')[0]}\n`
}
teks += `*TOTAL :* ${blocked.length}`
client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
break
//= { GROUP } = \\
case 'infogc':
case 'infogrup':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
client.updatePresence(from, Presence.composing)
if (!isGroup) return reply(`grup only`)
try {
ppimg = await client.getProfilePicture(from)
} catch {
ppimg = `${imagebb}`
}
let buf = await getBuffer(ppimg)
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += `「 𝗚 𝗥 𝗢 𝗨 𝗣  𝗜 𝗡 𝗙 𝗢 」\n━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━ ━\n*𝗡𝗔𝗠𝗔 :* ${groupName}\n*𝗜𝗗 :* ${from}\n*𝗪𝗔𝗞𝗧𝗨 𝗗𝗜𝗕𝗨𝗔𝗧 :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*𝗣𝗘𝗠𝗜𝗟𝗜𝗞 𝗚𝗥𝗨𝗣 :* wa.me/${groupMetadata.owner.split('@')[0]}\n*??𝗨𝗠𝗟𝗔𝗛 𝗔𝗗𝗠𝗜𝗡 :* ${groupAdmins.length}\n*𝗝𝗨𝗠𝗟𝗔𝗛 𝗣𝗘𝗦𝗘𝗥𝗧𝗔 :* ${groupMembers.length}\n━ ━ ━ ━ ━ ━ ━\n𝗪𝗘𝗟𝗖𝗢𝗠𝗘 : ${isWelkom ? '☑️' : '❎'}\n𝗔𝗡𝗧𝗜𝗟𝗜𝗡𝗞 𝗚𝗥𝗨𝗣 : ${isAntiLink ? '☑️' : '❎'}\n𝗔𝗡𝗧𝗜𝗕𝗔𝗗𝗪𝗢𝗥𝗗 : ${isBadWord ? '☑️' : '❎'}\n𝗦𝗜𝗠𝗜𝗛 : ${isSimi ? '☑️' : '❎'}\n━ ━ ━ ━ ━ ━ ━\n*𝗗𝗘𝗦𝗞𝗥𝗜𝗣𝗦𝗜 :* \n${groupMetadata.desc}`
no = 0
for (let admon of groupAdmins) {
no += 1
}
client.sendMessage(from, buf, image, {quoted: mek, caption: teks})
break
case 'listonline':
case 'listkangnyimak':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
if (!isGroup) return reply(ind.groupo())
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
client.sendMessage(from, '```LIST ONLINE : ```\n' + online.map(v => '◦ @' + v.replace(/@.+/, '')).join `\n`, text, {
quoted: mek,
contextInfo: { mentionedJid: online }
})
break  
case 'linkgc': 
case 'gclink':
case 'linkgroup': 
case 'linkgrup': 
case 'gruplink':
case 'grouplink':
case 'grublink':
case 'groublink':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
if (!isGroup) return reply(ind.groupo()) 
if (!isBotGroupAdmins) return reply(`BOT BUKAN ADMIN`)
linkgc = await client.groupInviteCode (from)
yeh = `*https://chat.whatsapp.com/${linkgc}*`
function _0x47e0(){var _0x1f8c78=['52XMLArd','4NAHmMV','5159htySWE','7086735oTBiVm','sendMessage','14JlbGFE','readFileSync','805nIyAZj','221127hVQKmj','extendedTextMessage','./image/gambar.jpeg','6940uKqZUn','9723228VTZiZA','4925886gkyFEu','10808kMoODH','2400666GyvExL','5UKtkwg','https://chat.whatsapp.com/'];_0x47e0=function(){return _0x1f8c78;};return _0x47e0();}function _0x5529(_0x54c895,_0x2d447f){var _0x47e053=_0x47e0();return _0x5529=function(_0x55290a,_0x28a765){_0x55290a=_0x55290a-0x92;var _0x3f1992=_0x47e053[_0x55290a];return _0x3f1992;},_0x5529(_0x54c895,_0x2d447f);}var _0x24118f=_0x5529;(function(_0x272801,_0x402697){var _0x54c77d=_0x5529,_0x2a7f6f=_0x272801();while(!![]){try{var _0x2fdebf=parseInt(_0x54c77d(0x94))/0x1*(parseInt(_0x54c77d(0xa3))/0x2)+-parseInt(_0x54c77d(0x9b))/0x3*(-parseInt(_0x54c77d(0x9f))/0x4)+-parseInt(_0x54c77d(0x9c))/0x5*(-parseInt(_0x54c77d(0x99))/0x6)+parseInt(_0x54c77d(0x93))/0x7*(-parseInt(_0x54c77d(0x9a))/0x8)+parseInt(_0x54c77d(0xa1))/0x9+-parseInt(_0x54c77d(0x97))/0xa*(-parseInt(_0x54c77d(0xa0))/0xb)+-parseInt(_0x54c77d(0x98))/0xc*(parseInt(_0x54c77d(0x9e))/0xd);if(_0x2fdebf===_0x402697)break;else _0x2a7f6f['push'](_0x2a7f6f['shift']());}catch(_0x10d4f0){_0x2a7f6f['push'](_0x2a7f6f['shift']());}}}(_0x47e0,0xd8330),client[_0x24118f(0xa2)](from,{'text':yeh,'matchedText':_0x24118f(0x9d)+linkgc,'canonicalUrl':_0x24118f(0x9d)+linkgc,'description':_0x24118f(0x9d)+linkgc,'title':''+groupName,'jpegThumbnail':fs[_0x24118f(0x92)](_0x24118f(0x96))},_0x24118f(0x95),{'detectLinks':![],'contextInfo':{'mentionedJid':[yeh]},'quoted':mek}));
break
case 'tagall': 
if (!isRegistered) return reply(ind.noregis())
if (!isGroup) return reply(ind.groupo())
if (!isGroupAdmins) return reply(ind.admin())
members_id = []
teks = `━ 𝐓𝐀𝐆 𝐀𝐋𝐋 ━︎\n\n𝙿𝙴𝚂𝙰𝙽 : ${q ? q : ''}\n\n`
teks += '\n'
for (let mem of groupMembers) {
teks += `${f} @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'add':
if (!isGroup) return reply(ind.groupo())
if (!isGroupAdmins) return reply(ind.admin())
if (!isBotGroupAdmins) return reply(ind.badmin())
if (args.length < 1) return reply('Yang mau di add jin ya?')
if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
client.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
return reply('Gagal menambahkan target, mungkin karena di private')
}
break
case 'sider': case 'getsider':
if (!isRegistered) return reply(ind.noregis()) 
if (isBanned) return reply(ind.ban())
if (!isGroup) return reply(`Only group`)
if (!isQuotedReply) return reply(`Reply pesan dari bot`)
client.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)   
.then((res) => {
let anu = []
let txt = `*「 𝐋𝐈𝐒𝐓 𝐒𝐈𝐃𝐄𝐑 」*\n\n`
for (let i = 0; i < res.reads.length; i++){
anu.push(res.reads[i].jid)
txt += `${f} @${res.reads[i].jid.split("@")[0]}\n`
txt += `Waktu Membaca : ${moment(`${res.reads[i].t}` * 1000).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n`
}
mentions(txt, anu, true)
})
.catch((err) => reply(jsonformat(err)))
break  
case 'grup':
case 'grub':
case 'groub':
case 'group':
if (!isGroup) return reply(ind.groupo())
if (!isGroupAdmins) return reply(ind.admin())
if (!isBotGroupAdmins) return reply(ind.badmin())
if (q == "buka") {
reply(`*BERHASIL MEMBUKA GROUP*`)
client.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (q == "tutup") {
reply(`*BERHASIL MENUTUP GROUP*`)
client.groupSettingChange(from, GroupSettingChange.messageSend, true)
}
break 
case 'setname':
case 'setnama':
if (!isGroup) return reply(ind.groupo())
if (!isGroupAdmins) return reply(ind.admin())
if (!isBotGroupAdmins) return reply(ind.badmin())
client.groupUpdateSubject(from, `${body.slice(9)}`)
client.sendMessage(from, 'Sukses, Ganti Nama Grup', text, {quoted: mek})
break
case 'setdesc':
case 'setdesk':
if (!isGroup) return reply(ind.groupo())
if (!isGroupAdmins) return reply(ind.admin())
if (!isBotGroupAdmins) return reply(ind.badmin())
client.groupUpdateDescription(from, `${body.slice(9)}`)
client.sendMessage(from, 'Sukses, Ganti Deskripsi Grup', text, {quoted: mek})
break
case 'demote':
try {
if (!isGroup) return reply(ind.groupo())
if (!isGroupAdmins) return reply(ind.admin())
if (!isBotGroupAdmins) return reply(ind.badmin())
if (isQuotedTag) return reply('REPLY PESAN TARGET!!')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('REPLY PESAN TARGET!!!!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
mentions(`*SUKSES*`, mentioned, true)
client.groupDemoteAdmin(from, mentioned)
} catch (e) {
return reply(e)
}
break
case 'promote':
try {
if (!isGroup) return reply(ind.groupo())
if (!isGroupAdmins) return reply(ind.admin())
if (!isBotGroupAdmins) return reply(ind.badmin())
if (isQuotedTag) return reply('REPLY PESAN TARGET!!')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('REPLY PESAN TARGET!!!!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
mentions(`*SUKSES*`, mentioned, true)
client.groupMakeAdmin(from, mentioned)
} catch (e) {
return reply(e)
}
break
case 'kick':
try {
if (!isGroup) return reply(ind.groupo())
if (!isGroupAdmins) return reply(ind.admin())
if (!isBotGroupAdmins) return reply(ind.badmin())
if (isQuotedTag) return reply('REPLY PESAN TARGET!!')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('REPLY PESAN TARGET!!!!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
mentions(`*PERINTAH DI TERIMA MENGELUARKAN @${mentioned[0].split('@')[0]}*`, mentioned, true)
client.groupRemove(from, mentioned)
} catch (e) {
return reply(e)
}
break
case 'listadmin':
if (!isGroup) return reply(ind.groupo())
teks = `LIST ADMIN GROUP *${groupMetadata.subject}*\nTOTAL : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `${no.toString()}. @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
break
//--//
case 'addbadword':
  if (!mek.key.fromMe && !isOwner) return reply(`KAMU BUKAN OWNER`) 
  if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
  const bw = body.slice(12)
  bad.push(bw)
  fs.writeFileSync('./database/bad.json', JSON.stringify(bad))
  reply('Success Menambahkan Bad Word!')
  break
  case 'listbadword':
  let bi = `「 *LIST BADWROD* 」\n\n`
  for (let boo of bad){
  bi += `- ${boo}\n`
  }
  bi += `\n*TOTAL :* ${bad.length}`
  reply(`${bi}`)
  break
  case 'delbadword':
  case 'dellbadword':  
  if (!mek.key.fromMe && !isOwner) return reply(`KAMU BUKAN OWNER`) 
  if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
  bad.splice(q)
  fs.writeFileSync('./database/bad.json', JSON.stringify(bad))
  reply('Success Menghapus BAD WORD!')
  break 
case 'nobadword':
case 'antibadword':
case 'badword':
case 'antikasar':
case 'antitoxic':
if (!isGroup) return reply(ind.groupo())
if (!isGroupAdmins) return reply(ind.admin())
if (!isBotGroupAdmins) return reply(ind.badmin())
if (args.length < 1) return reply(ind.satukos(command))
if (args[0] === 'on') {
if (isBadWord) return reply(ind.ison())
badword.push(from)
fs.writeFileSync('./database/badword.json', JSON.stringify(badword))
reply(ind.succeson(command))
} else if (args[0] === 'off') {
if (!isBadWord) return reply(ind.udhmati(command))
var anep = badword.indexOf(from)
badword.splice(anep, 1)
fs.writeFileSync('./database/badword.json', JSON.stringify(badword))
reply(`*──❮ SUKSES ❯──*\n\n_FITUR *${command}* BERHASIL DI MATIKAN!_`)
} else {
reply(ind.satukos(command))
}
break
case 'antilinkgroup':
case 'antilinkgrup':
case 'antilinkgroub':
case 'antilinkgrub':
case 'antilink':
if (!isGroup) return reply(ind.groupo())
if (!isGroupAdmins) return reply(ind.admin())
if (!isBotGroupAdmins) return reply(ind.badmin())
if (args.length < 1) return reply(ind.satukos(command))
if (args[0] === 'on') {
if (isAntiLink) return reply(ind.ison())
antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply(ind.succeson(command))
} else if (args[0] === 'off') {
if (!isAntiLink) return reply(ind.udhmati(command))
var ane = antilink.indexOf(from)
antilink.splice(ane, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply(`*──❮ SUKSES ❯──*\n\n_FITUR *${command}* BERHASIL DI MATIKAN!_`)
} else {
reply(ind.satukos(command))
}
break
//-//
case 'simih':
if (!isGroup) return reply(ind.groupo())
if (!isGroupAdmins && !isOwner) return reply(ind.admin())
if (args.length < 1) return reply(ind.satukos(command))
if (args[0] === 'on') {
if (isSimi) return reply(ind.ison())
samih.push(from)
fs.writeFileSync('./database/simi.json', JSON.stringify(samih))
reply(ind.succeson(command))
} else if (args[0] === 'off') {
if (!isSimi) return reply(ind.udhmati())
var ani = samih.indexOf(from)
samih.splice(ani, 1)
fs.writeFileSync('./database/simi.json', JSON.stringify(samih))
reply(`*──❮ SUKSES ❯──*\n\n_FITUR *${command}* BERHASIL DI MATIKAN!_`)
} else {
reply(ind.satukos(command))
}
break
case 'welcome':
if (!isGroup) return reply(ind.groupo())
if (!isGroupAdmins) return reply(ind.admin())
if (args.length < 1) return reply(ind.satukos(command))
if (args[0] === 'on') {
if (isWelkom) return reply(ind.ison())
welkom.push(from)
fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
reply(ind.succeson(command))
} else if (args[0] === 'off') {
if (!isWelkom) return reply(ind.udhmati(command))
var welot = welkom.indexOf(from)
welkom.splice(welot, 1)
fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
reply(ind.succesoff(command))
} else {
reply(ind.satukos(command))
}
break

case 'clone':
if (!isGroup) return reply(ind.groupo())
if (!mek.key.fromMe && !isOwner) return reply(ind.ownerg()) 
if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
try {
pp = await client.getProfilePicture(id)
buffer = await getBuffer(pp)
client.updateProfilePicture(botNumber, buffer)
mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
} catch (e) {
reply(ind.stikga())
}
break

//=={ STALKING }==\\
case 'igstalk2': case 'stalkig2':
if (!mek.key.fromMe && !isPrem) return reply(ind.premb())
reply(waitbang)
try {
tekss = q
anu = await igdl.scrapeUserPage(tekss)
teks = `─ 「 *INSTAGRAM PROFILE* 」 ─

${f} *Username :* ${anu.user.username}
${f} *Fullname :* ${anu.user.full_name}
${f} *Followers :* ${anu.user.edge_followed_by.count}
${f} *Following :* ${anu.user.edge_follow.count}
${f} *Post Count :* ${anu.user.edge_owner_to_timeline_media.count}
${f} *Igtv :* ${anu.user.edge_felix_video_timeline.count}
${f} *Situs Web :* ${anu.user.external_url ? anu.user.external_url : '-'}
${f} *Highlight.Count :* ${anu.user.highlight_reel_count}
${f} *Private Account :* ${anu.user.is_private ? '✓' : '𝘅'}
${f} *Verified Account :* ${anu.user.is_verified ? '✓' : '𝘅'}
${f} *Business Account :* ${anu.user.is_business_account ? '✓️' : '𝘅'}
${f} *Profesional Acount :* ${anu.user.is_professional_account ? '✓️' : '𝘅'}
${f} *Link :* https://instagram.com/${tekss}
${f} *Biodata :*\n ${anu.user.biography}`
buffer = await getBuffer(anu.user.profile_pic_url_hd)
client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
} catch (err) {
console.log(color(err, 'red'))
reply(`${err}`)
}
break
case 'stalkig': case 'igstalk':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
if (args.length < 1) return reply(`LINKNYA MANA?`)
reply(waitbang)
getresult = await fetchJson(`http://lolhuman.herokuapp.com/api/stalkig/${q}?apikey=${lolkey}`)
get_result = getresult.result
anjay = `─ 「 *INSTAGRAM PROFILE* 」 ─

${f} *Link :* https://www.instagram.com/${get_result.username}
${f} *Full :* ${get_result.fullname}
${f} *Post :* ${get_result.posts}
${f} *Followers :* ${get_result.followers}
${f} *Following :* ${get_result.following}
${f} *Bio :* ${get_result.bio}`
buffer = await getBuffer(get_result.photo_profile)
client.sendMessage(from, buffer, image, {quoted: mek, caption: anjay})
    break
//=={ CONVERT }==\\
case 'bass':    
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
reply(waitbang)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})  	
break
case 'slowmo': case 'slow':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
reply(waitbang)
try {
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
uhh = fs.readFileSync(ran)
client.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration:999999999999})
fs.unlinkSync(ran)
})
	 } catch (e) {	
	reply(ind.err())
	}  
break
      case 'fast':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
reply(waitbang)
try {
	encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await client.downloadAndSaveMediaMessage(encmedia)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${media} -filter:a "atempo=1.3,asetrate=43000" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
	})
	} catch (e) {	
	reply(ind.err())
	}  
	break
case 'robot':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
reply(waitbang)
	encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await client.downloadAndSaveMediaMessage(encmedia)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
fs.unlinkSync(ran)
	})
break
case 'detikvn':
case 'setdetikvn':
case 'setdurasi':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
if (!Number(args[0])) return reply(`EXAMPLE : ${prefix + command} 50`)
reply(waitbang)
	encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await client.downloadAndSaveMediaMessage(encmedia)
	cokmatane = Number(args[0])
	hah = fs.readFileSync(media)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted: mek})
fs.unlinkSync(media)
break
case 'tupai':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
reply(waitbang)
try {
	encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await client.downloadAndSaveMediaMessage(encmedia)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration:99})
fs.unlinkSync(ran)
})
 } catch (e) {	
	reply(ind.err())
	}  	
break
case 'vibra':
case 'vibrato':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
reply(waitbang)
	encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await client.downloadAndSaveMediaMessage(encmedia)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=16" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
fs.unlinkSync(ran)
	})
break
case 'tinyurl':{
if (!isRegistered) return reply(ind.noregis()) 
if (isBanned) return reply(ind.ban())
if (args.length < 1) return reply(`LINKNYA?`)
const fetchText = (url, optiono) => {
return new Promise((resolve, reject) => {
return fetch(url, optiono)
.then(response => response.text())
.then(text => resolve(text))
.catch(err => {
console.log(color(err,'red'))
reject(err)
})
})
}
anu = await fetchText(`https://tinyurl.com/api-create.php?url=${q}`)
shorti = `*RESULT : ${anu}*`
reply(shorti)
}
break
case 'todocmp3': case 'toaudiotofile': case 'todocaudio': case 'todocaudio': case 'toaudiofile':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pushname))
if (!isQuotedAudio) return reply('Reply Audionya!!')
reply(waitbang)
var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
 var media = await client.downloadAndSaveMediaMessage(encmedia)
 var ran = getRandom('.mp4')
 exec(`ffmpeg -i ${media} ${ran}`, (err) => {
 fs.unlinkSync(media)
 if (err) return reply('```ERROR !```')
 var buffer = fs.readFileSync(ran)
client.sendMessage(from, buffer, document, {mimetype: 'audio/mp3', filename: 'AUDIO TO FILE DOCUMENT AUDIO.mp3', quoted: mek})
 fs.unlinkSync(ran)
 })
await limitAdd(sender)
break
case 'stickerwm': case 'swm': case 'take': case 'takesticker': case 'takestick':{
if (!mek.key.fromMe && !isPrem) return reply(ind.premb())
  reply(waitbang) 
if (args.length < 1) return reply(`Penggunaan ${command} nama|author`)
 let packname1 = q.split('|')[0] ? q.split('|')[0] : q
 let author1 = q.split('|')[1] ? q.split('|')[1] : ''
 if (isImage || isQuotedImage) {
  let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
  let media = await client.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
exif.create(packname1, author1, `stickwm_${sender}`)
  await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(color(`STARTED : ${cmd}`,'red'))
})
.on('error', function (err) {
console.log(color(`ERROR : ${err}`,'silver'))
fs.unlinkSync(media)
reply(ind.err())
})
.on('end', function () {
console.log(color(`FINISH`,'magenta'))
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(ind.err())
client.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
 } else if ((isVideo && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
  let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
  let media = await client.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
exif.create(packname1, author1, `stickwm_${sender}`)
  reply(waitbang)
await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
console.log(color(`STARTED : ${cmd}`,'red'))
})
.on('error', function (err) {
console.log(color(`ERROR : ${err}`,'silver'))
fs.unlinkSync(media)
let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(ind.err())
})
.on('end', function () {
console.log((`FINISH`,'magenta'))
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(ind.err())
client.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
 } else if (isQuotedSticker) {
  let encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
 let media = await client.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
  exif.create(packname1, author1, `takestick_${sender}`)
  exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(ind.err())
client.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
  })
 }else {
  reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
 }
}
 break
case 'img2url':
case 'imgtourl':
case 'imagetourl':
case 'gambartourl':
if (!isRegistered) return reply(ind.noregis()) 
if (isBanned) return reply(ind.ban())
var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
var media = await  client.downloadAndSaveMediaMessage(encmedia)
var imgbb = require('imgbb-uploader')
imgbb('3b8594f4cb11895f4084291bc655e510', media)
.then(data => {
var caps = `─ 「 IMAGE TO URL 」 ─\n\n*${f}ID :* ${data.id}\n*${f}MimeType :* ${data.image.mime}\n*${f}Extension :* ${data.image.extension}\n*${f}URL :* ${data.display_url}`
ibb = fs.readFileSync(media)
client.sendMessage(from, ibb, image, { quoted: mek, caption: caps })
})
.catch(err => {
throw err 
})
break
case 'fisheye':
case 'skullmask':
case 'alien':
case 'tosmile':
case 'cartoon':
case 'invert':
case 'pixelate':
case 'flip':
case 'grayscale':
case 'roundimage':
case 'pencil':
case 'wasted':
if (!mek.key.fromMe && !isPrem) return reply(ind.premb())        
reply(waitbang)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
owgi = await client.downloadAndSaveMediaMessage(ted)
dpaa = await imgbb('3b8594f4cb11895f4084291bc655e510', owgi)
uhyy = await getBuffer(`https://api.lolhuman.xyz/api/editor/${command}?apikey=${lolkey}&img=${dpaa.display_url}`)
client.sendMessage(from, uhyy, image, {quoted: mek})
} else {
reply('Reply Imagenya!!')
}
break
case 'affect':
case 'beautiful':
case 'facepalm':
case 'hitler':
case 'jail':
case 'rip':
case 'sepia':
case 'trash':
case 'wanted':
if (!mek.key.fromMe && !isPrem) return reply(ind.premb())        
reply(waitbang)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
owgi = await client.downloadAndSaveMediaMessage(ted)
dpaa = await imgbb('3b8594f4cb11895f4084291bc655e510', owgi)
uhyy = await getBuffer(`https://api.lolhuman.xyz/api/creator1/${command}?apikey=${lolkey}&img=${dpaa.display_url}`)
client.sendMessage(from, uhyy, image, {quoted: mek})
} else {
reply('Reply Imagenya!!')
}
break
 case 'memegenerator':
 case 'memegen':
if (!mek.key.fromMe && !isPrem) return reply(ind.premb())        
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
if (!q.includes('|')) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
try {
   if (!isQuotedImage && !isQuotedSticker) return reply(`REPLY GAMBAR ATAU STICKER!!`)
   reply(waitbang)
   var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
   var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
   var imgbb = require('imgbb-uploader')
   var enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
   var media = await client.downloadAndSaveMediaMessage(enmedia)
   var anu = await imgbb('3b8594f4cb11895f4084291bc655e510', media)
   var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${anu.display_url}`)
   client.sendMessage(from, resu, image, {quoted: mek})
   fs.unlinkSync(media)
} catch (e) {
return reply(`${e}`)
console.log(e)
}
break
case 'stickermeme': case 'memesticker': case 'memestick': case 'stickmeme': case 'stcmeme':
if (!mek.key.fromMe && !isPrem) return reply(ind.premb())        
try {
   if (!q) return reply(`REPLY STICKER DENGAN TAMBAHAN KATA ${prefix + command} text`)
   var bawah = q.replace('', '_').replace('\n','%5Cn').replace('?', '~q').replace('%', '~p').replace('&', '~a').replace('#', '~h').replace('/', '~s')
   if (isImage || isQuotedImage) {
   reply(waitbang)
  var imgbb = require('imgbb-uploader')
 let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
   let media = await client.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
   var tolink = await imgbb("3b8594f4cb11895f4084291bc655e510", media)
   var sticknye = `https://api.memegen.link/images/custom/-/${bawah}.png?background=${tolink.display_url}`
   var short = await axios.get('https://tinyurl.com/api-create.php?url=' + sticknye)
   var anuu = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lolkey}&img=${short.data}`)
   await client.sendMessage(from, anuu, sticker, { quoted: mek })
    } else if (isQuotedSticker){
   reply(waitbang)
   var imgbb = require('imgbb-uploader')
   let encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
   let media = await client.downloadAndSaveMediaMessage(encmedia)
   let ran = getRandom('.png')
   exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
   fs.unlinkSync(media)
   if (err) return reply('Gagal :V')
   var tolink = await imgbb("3b8594f4cb11895f4084291bc655e510", ran)
   var sticknye = `https://api.memegen.link/images/custom/-/${bawah}.png?background=${tolink.display_url}`
   var short = await axios.get('https://tinyurl.com/api-create.php?url=' + sticknye)
   var anuu = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lolkey}&img=${short.data}`)
   await client.sendMessage(from, anuu, sticker, { quoted: mek })
   fs.unlinkSync(ran)
   })
} else {
  reply(`REPLY STICKER DENGAN TAMBAHAN KATA ${prefix + command} text`)
   }
} catch (e) {
return reply(`${e}`)
console.log(e)
}
break
case 'tourl':
if (!isRegistered) return reply(ind.noregis()) 
if (isBanned) return reply(ind.ban())
var imgbb = require('imgbb-uploader')
if (isQuotedAudio) {
ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(waitbang)
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
teks = `${anu.display_url}`
reply(teks)
} else if (isQuotedImage) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
reply(waitbang)
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
teks = `${anu.display_url}`
reply(teks)
} else if (isQuotedVideo) {
ger = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
reply(waitbang)
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
teks = `${anu.display_url}`
reply(teks)
} else if (isQuotedSticker) {
ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(waitbang)
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
teks = `${anu.display_url}`
reply(teks)
}
break
 case 'sticker':  
 case 'stiker':  
 case 'stickergif':  
 case 'stikergif':  
 case 'sgif':  
 case 's':
if (!isRegistered) return reply(ind.noregis()) 
if (isBanned) return reply(ind.ban())
if (isLimit(sender)) return reply(ind.limitend(pushname))
reply(waitbang) 
 if (isImage || isQuotedImage) {
  let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
  let media = await client.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
  await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(color(`STARTED : ${cmd}`,'red'))
})
.on('error', function (err) {
console.log(color(`ERROR : ${err}`,'silver'))
fs.unlinkSync(media)
reply(ind.err())
})
.on('end', function () {
console.log(color(`FINISH`,'blue'))
exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(ind.err())
client.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
limitAdd(sender)
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
  } else if ((isVideo && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
  let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
  let media = await client.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
reply(waitbang)
 await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
console.log(color(`STARTED : ${cmd}`,'red'))
})
.on('error', function (err) {
console.log(color(`ERROR : ${err}`,'silver'))
fs.unlinkSync(media)
let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(ind.err())
})
.on('end', function () {
console.log(color(`FINISH`,'blue'))
exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(ind.err())
client.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
limitAdd(sender)
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
 
 } else {
  reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
 }
await limitAdd(sender)
break
case 'tts': case 'say':
try {
if (!isRegistered) return reply(ind.noregis()) 
if (isBanned) return reply(ind.ban())
if (args.length < 1) return client.sendMessage(from, `Diperlukan kode bahasa!!\nKetik #kodebahasa untuk menampilkan kode bahasa`, text, {quoted: mek})
const gtts = require('./lib/gtts')(args[0]?args[0]:'id')
if (args.length < 2) return client.sendMessage(from, 'textnya?', text, {quoted: mek})
if (args.length > 200) return reply('```ERROR, TEKS TERLALU PANJANG!```')
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
dtt.length > 200
? reply('```ERROR, TEKS TERLALU PANJANG!```')
: gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buff = fs.readFileSync(rano)
if (err) return reply(ind.err())
client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
fs.unlinkSync(rano)
})
})
} catch (e) {
e = String(e)
if (!e.includes("Language")){
reply(`KODE BAHASA TIDAK VALID >_<\nKETIK #KODEBAHASA UNTUK MELIHAT KODE BAHASA`)
}
}
break
case 'bilang':
case 'ngomong':{
try {
if (!isRegistered) return reply(ind.noregis()) 
if (isBanned) return reply(ind.ban())
if (!q) return reply(`Hehehehe gatau mau ngomong apa`)
if (args.length > 200) return reply('```ERROR, TEKS TERLALU PANJANG!```')
  const gtts = require('./lib/gtts')('id')
dtt = q
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
dtt.length > 200
? reply('```ERROR, TEKS TERLALU PANJANG!```')
: gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buff = fs.readFileSync(rano)
if (err) return reply(ind.err())
client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
fs.unlinkSync(rano)
})
})
} catch (e) {
return console.log(e)
}
}
break
case 'translate':
try {
if (!isRegistered) return reply(ind.noregis()) 
if (isBanned) return reply(ind.ban())
if (!q.includes('|')) return reply(`Salah!!\nusage : #translate Kode Bahasa | Teks\nexample : #translate Id | What`)
teks = body.slice(11)
ok1 = teks.split('|')[0]
ok2 = teks.split('|')[1]
anu = await translate(ok2, {to: ok1})
reply(anu.text)
} catch (e) {
e = String(e)
if (!e.includes("Language")){
reply('KODE BAHASA TIDAK VALID ^_^')
}
}
break
case 'tomp3': case 'tomusic': case 'toaudio':
if (!isRegistered) return reply(ind.noregis()) 
if (isBanned) return reply(ind.ban())
if (!isQuotedVideo) return reply(`REPLY VIDEONYA BOSS`)
if (isLimit(sender)) return reply(ind.limitend(pushname))
reply(waitbang)
var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var media = await client.downloadAndSaveMediaMessage(encmedia)
var ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
var buffer = fs.readFileSync(ran)
client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
fs.unlinkSync(ran)
})
await limitAdd(sender)
  break
case 'toptt': case 'tovn':
if (!isRegistered) return reply(ind.noregis()) 
if (isBanned) return reply(ind.ban())
if (!isQuotedAudio) return reply(`REPLY AUDIONYA BOSS`)
if (isLimit(sender)) return reply(ind.limitend(pushname))
reply(waitbang)
var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var media = await client.downloadAndSaveMediaMessage(encmedia)
var ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
var buffer = fs.readFileSync(ran)
client.sendMessage(from, buffer, audio, {ptt: true, mimetype: 'audio/mp4', quoted: mek})
fs.unlinkSync(ran)
})
await limitAdd(sender)
break
case 'toimg': 
if (!isRegistered) return reply(ind.noregis()) 
if (isBanned) return reply(ind.ban())
if (isLimit(sender)) return reply(ind.limitend(pushname))
reply(waitbang)
if (!isQuotedSticker) return reply('Reply stiker nya')
    if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker && args.length == 0)) {
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await client.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Gagal, hehehe')
			buffer = fs.readFileSync(ran)
			client.sendMessage(from, buffer, image, {caption:'niih',quoted:mek})
			fs.unlinkSync(ran)
			})
} else {
reply(`REPLY STICKERNYAAA!!!`)
}
await limitAdd(sender)
break
case 'tovideo':
case 'tomp4':
if (!isRegistered) return reply(ind.noregis()) 
if (isBanned) return reply(ind.ban())
if (isLimit(sender)) return reply(ind.limitend(pushname))
reply(waitbang)
if (!isQuotedSticker) return reply('Reply stiker nya')
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await client.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            client.sendMessage(from, res.result, video, { mimetype: Mimetype.mp4, filename: 'tovideo.mp4',caption: 'SUKSES CONVERT STICKER TO VIDEO', quoted: mek})
            })
            }else {
            reply('reply stiker')
            }
            fs.unlinkSync(owgi)
await limitAdd(sender)
break
//=={ OWNER }==\\

case 'exif':
if (!mek.key.fromMe && !isOwner) return
const namaPack = q.split('|')[0] ? q.split('|')[0] : q
const authorPack = q.split('|')[1] ? q.split('|')[1] : ''
exif.create(namaPack, authorPack)
reply('_DONE!_')
break
case 'event':
case 'even':
if (!isGroup) return reply(ind.groupo())
if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
if (args.length < 1) return reply(ind.satukos(command))
if (args[0] === 'on') {
if (isEventon) return reply(ind.ison())
event.push(from)
fs.writeFileSync('./database/event.json', JSON.stringify(event))
reply(ind.succeson(command))
} else if (args[0] === 'off') {
if (!isEventon) return reply(ind.udhmati(command))
var vet = event.indexOf(from)
event.splice(vet, 1)
fs.writeFileSync('./database/event.json', JSON.stringify(event))
reply(ind.succesoff(command))
} else {
reply(ind.satukos(command))
}
break
case 'deletechat': case 'dellchat': case 'clearchat': case 'clearc': case 'delletechat':
if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
if (!isGroup) return reply(ind.groupo())
setTimeout( () => {
reply(`\`\`\`SUKSES CLEAR CHAT DI GROUP ${groupName}\`\`\``)
}, 2000)
setTimeout( () => {
client.modifyChat(m.chat, 'delete', {
includeStarred: false
})
}, 1500)
setTimeout( () => {
reply(`\`\`\`PROSESS.....\`\`\``)
}, 0)
break
case 'clearall':
if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
anu = await client.chats.all()
client.setMaxListeners(25)
for (let _ of anu) {
client.deleteChat(_.jid)
}
reply(ind.clears())
break
case 'clearmessage':
if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
let chiit = await client.chats.all()
  for (let i of chiit){
  client.modifyChat(i.jid, 'clear', {
  includeStarred: false
  })
  }
  reply(`Succes..`)
  
break
case 'leave': 
if (!isGroup) return reply(ind.groupo())
if (!isOwner && !mek.key.fromMe) return reply(ind.ownerb())
await reply(from, 'bye').then(() => client.leaveGroup(groupId))
.catch(e =>{
return console.log(e)
})
break
case 'bc': 
if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb()) 
if (args.length < 1) return reply('.......')
anu = await client.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buff = await client.downloadMediaMessage(encmedia)
for (let _ of anu) {
client.sendMessage(_.jid, buff, image, {caption: `×❮ *${namabot} BROADCAST* ❯×\n\n${body.slice(4)}`})
}
reply('SUKSES BROADCAST')
} else {
for (let _ of anu) {
sendMess(_.jid, `×❮ *${namabot} BROADCAST* ❯×\n\n${body.slice(4)}`)
}
reply('SUKSES BROADCAST')
}
break
case 'sewa':{
if (!mek.key.fromMe && !isOwner) return reply(ind.sewabot())
if (args.length < 1) return reply(ind.sewabot())
  if(!isGroup) return reply('Group Only Ngentod!!!')
  if (args[0].toLowerCase() === 'add') {
  _sewa.addSewaGroup(from, args[1], sewa)
  reply(`Succes...`)
  } else if (args[0].toLowerCase() === 'dell') {
  sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
  fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa))
  reply(`Succes...`)
  } else {
  }
  }
  break
  case 'sewalist': 
  case 'listsewa':{
  if (!isOwner && !mek.key.fromMe) return
  let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
  for (let i of sewa){
  let cekvipp = ms(i.expired - Date.now())
  txtnyee += `*ID :* ${i.id} \n*Expire :* ${cekvipp.days} day(s) ${cekvipp.hours} hour(s) ${cekvipp.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
  }
  reply(txtnyee)
 }
 break
  case 'sewacheck':
  case 'ceksewa': 
  case 'sewacek':{
  if (!isGroup) return reply('Only Group Banggg')
  if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
  let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
  let sewenye = `「 *SEWA EXPIRE* 」

➸ *ID*: ${from}
➸ *EXPIRE :* ${cekvip.days} Hari, ${cekvip.hours} Jam, ${cekvip.minutes} Menit, ${cekvip.seconds} Detik`
  reply(sewenye)
}
  break
  
case 'prem': case 'premium':{
if (!mek.key.fromMe && !isOwner) return reply(ind.ownerb())
if (args[0].startsWith('08')) return reply(`GUNAKAN KODE NEGARA!!\nEXAMPLE : ${prefix + command} add/dell 62812345678910`)
if (args[0].startsWith("+62")) return reply(`EXAMPLE : ${prefix + command} add/dell 62812345678910`)
const arx = body.split(' ')
if (arx[1] == 'add') {
 _prem.addPremiumUser(arx[2] + '@s.whatsapp.net', args[2], premium)
reply(`*「 PREMIUM ADDED 」*\n\n➸ *NOMOR :* ${arx[2]}\n➸ *EXPIRED :*\n\`\`\`◦➛ ${ms(toMs(args[2])).days} DAYS\n◦➛ ${ms(toMs(args[2])).hours} HOUR\n◦➛ ${ms(toMs(args[2])).minutes} MINUTE\n◦➛ ${ms(toMs(args[2])).seconds} SECOND\`\`\``)
} else if (arx[1] == 'dell') {
premium.splice(_prem.getPremiumPosition(arx[2] + '@s.whatsapp.net', premium), 1)
 fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
reply('DONE...')
} else {
client.sendMessage(`${nomerowner}@s.whatsapp.net`, `*FORMAT SALAH!!*\n\nEXAMPLE : \n${prefix + command} add @TAG TARGET waktu\nUNTUK MENAMBAHKAN USER KE DATA USER PREMIUM\n─ ─ ─\n${prefix + command} dell @TAG TARGET\nUNTUK MENGHAPUS USER DARI DATA USER PREMIUM\n─ ─ ─\nD = DAYS/HARI\nH = HOUR/JAM\nM = MINUTE/MENIT\nS = SECOND/DETIK\n\n*JADI UNTUK WAKTUNYA KAMU ISI TERSERAH SESUAI KEMAUAN KAMU, CONTOH 1D BERARTI 1HARI. DST*`, MessageType.text, {quoted:mek})
}
}
 break
 case 'cekprem': case 'premcek': case 'cekpremium': case 'premiumcek':
 if (!isPrem && !mek.key.fromMe) return reply(`Kamu bukan user premium\nkirim perintah */daftarprem* untuk membeli premium`)
 let cekvip = ms(getPremiumExpired(sender, premium) - Date.now())
 let premiumnya = `➸ *EXPIRED :*\n\`\`\`◦➛ ${cekvip.days} DAYS\n◦➛ ${cekvip.hours} HOUR\n◦➛ ${cekvip.minutes} MINUTE\n◦➛ ${cekvip.seconds} SECOND\`\`\``
 reply(`${isOwner ? 'UNLIMITED OWNER' : premiumnya}`)
 break
 case 'listprem': case 'listpremium': case 'premiumlist': case 'premlist':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
 let txt = `「 LIST PREMIUM 」\n\n*➛ JUMLAH :* ${premium.length}\n\n`
 let men = [];
 for (let i of premium){
 men.push(i.id)
 let cekvip = ms(i.expired - Date.now())
 txt += `*   ⃟🐉 NOMOR : ${i.id.split("@")[0]}*\n*   ⃟🐉 USER : @${i.id.split("@")[0]}*\n\`\`\`- EXPIRED :\n  ◦ ${cekvip.days} DAYS\n  ◦ ${cekvip.hours} HOUR\n  ◦ ${cekvip.minutes} MINUTE\n  ◦ ${cekvip.seconds} SECOND\`\`\`\n\n─ ─ ─ ─ ─\n\n`
 }
 reply(`${txt}`)
break
case 'daftarprem': case 'daftarpremium':
if (isPrem) return reply('Kamu sudah terdaftar sebagai user premium')
reply(`Silahkan chat owner Bot @${nomerowner}, untuk mendaftarkan akun anda ke premium\n\nTerimakasih ~`)
break
case 'ban': case 'banned': case 'baned':{
if (!isOwner && !mek.key.fromMe) return
if (args[0].startsWith('08')) return reply(`GUNAKAN KODE NEGARA!!\nEXAMPLE : ${prefix + command} add/dell 62812345678910`)
if (args[0].startsWith("+62")) return reply(`EXAMPLE : ${prefix + command} add/dell 62812345678910`)
const arx = body.split(' ')
if (arx[1] == 'add') {
ban.push(arx[2] + '@s.whatsapp.net')
fs.writeFileSync('./database/ban.json', JSON.stringify(ban))
reply(`Sukses ban ${arx[2]}`)
} else if (arx[1] == 'dell') {
ban.splice(arx[2] + '@s.whatsapp.net', 1)
fs.writeFileSync('./database/ban.json', JSON.stringify(ban))
reply('DONE...')
} else {
reply('Format Salah!')
}
}
break
//=={ GAME } = { FUN }==\\


case 'tictactoe':
       case 'ttt':
           if (!isRegistered) return reply(rwf.noregis) 
			  	if (isBanned) return reply(rwf.baned)		
           if (!isGroup) return reply(`Only group`)
           if (tictactoe.hasOwnProperty(sender.split('@')[0])) return reply("KAMU MASIH ADA PERMAINAN YANG BELUM DI SELESAIKAN, \nKETIK #DELTTT UNTUK MENGHAPUS SESU TICTACTOE")
   if (isLimit(sender)) return reply(rwf.limitkos)
   if (mentionUser.length == 0) return await reply("Lu mau maen ama siapa oy")
   if (args.length == 1) return await reply(`Example: ${prefix}tictactoe X/O @tag lawan`)
   if (!["x", "o"].includes(args[0].toLowerCase())) return await reply(`Example: ${prefix}tictactoe X/O @tag lawan`)
   nantang = X
   pelawan = O
   if (args[0].toLowerCase() == "o") {
       nantang = O
       pelawan = X
   }
   var board = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]
   var penantang = sender
   var lawan = mentionUser[0]
   tesk = `Player 1 : @${penantang.split("@")[0]} (${nantang}) ${tunjuk}`
   tesk += `\nPlayer 2 : @${lawan.split("@")[0]} (${pelawan})\n\n`
   var count = 0
   for (var x of board) {
       if (count % 3 == 0) {
           tesk += "\n         "
       }
       tesk += x
       count += 1
   }
   return client.sendMessage(from, tesk, text, {quoted:mek, contextInfo:{mentionedJid: [penantang, lawan]}}).then(() => {
       var data = {}
       data["enemy"] = lawan.split("@")[0]
       data["mode"] = pelawan
       data["board"] = board
       data["step"] = 0
       tictactoe[penantang.split("@")[0]] = data
       fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
   })
     await limitAdd(sender)
   break
   case 'delttt':
   case 'delttc':
   case 'dellttt':
   case 'delltictactoe':
if (!isGroup)return reply('ONLY GRUP')
if (!tictactoe.hasOwnProperty(sender.split('@')[0])) return reply("tidak memiliki sesi tictactoe sebelumnya")
delete tictactoe[sender.split('@')[0]]
reply(`Berhasil menghapus sesi tictactoe di grup ini`)
break
case 'tebakgambar': case 'tbg':{
if (isBanned) return reply(ind.ban())
if (!isRegistered) return reply(ind.noregis()) 
if (isLimit(sender)) return reply(ind.limitend(pushname))
let anu = await axios.get(`http://api.lolhuman.xyz/api/tebak/gambar?apikey=${lolkey}`)
console.log(anu.data.result.answer)
const petunjuk = anu.data.result.answer.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
sendFileFromUrl(from, anu.data.result.image, monospace(`「 𝐓𝐄𝐁𝐀𝐊 𝐆𝐀𝐌𝐁𝐀𝐑 」\nSilahkan Jawab Soal Yang Ada Di Foto Ini\n\nWaktu : ${gamewaktu}s\nPetunjuk : ${petunjuk}`), mek)
let m = anu.data.result.answer.toLowerCase()
game.addgambar(from, m, gamewaktu, tebakgambar)
}
break
case 'tebakkata':{
if (isBanned) return reply(ind.ban())
if (!isRegistered) return reply(ind.noregis()) 
if (isLimit(sender)) return reply(ind.limitend(pushname))
if (game.isTebakKata(from, tebakkata)) return reply(`Masih ada soal yang belum di selesaikan`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/susunkata?apikey=${lolkey}`)
console.log(anu.data.result.jawaban)
reply(`─「 𝐓𝐄𝐁𝐀𝐊 𝐊𝐀𝐓𝐀 」─\nJawablah Soal Berikut*\n\n*Soal:* ${anu.data.result.pertanyaan}\n\nWaktu : ${gamewaktu}s`)
let ahhh = anu.data.result.jawaban.toLowerCase()
game.addkata(from, ahhh, gamewaktu, tebakkata)
}
break
case 'truth':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pushname))
const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
const ttrth = trut[Math.floor(Math.random() * trut.length)]
truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
client.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
await limitAdd(sender)
break
case 'dare':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pushname))
const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
const der = dare[Math.floor(Math.random() * dare.length)]
tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
client.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
await limitAdd(sender)
break
//=={ ABOUT USER } ==\\
case 'afk':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
if (!isGroup) return reply(ind.groupo())
if (isAfk) return reply(`\`\`\`KAMU SEDANG DI DALAM MODE AFK\`\`\``)
reason = q ? q : 'Nggak Jelas'
afk.addAfkUser(sender, time, reason, _afk)
if (pushname === undefined) return reply(`- Sedang Afk Dengan Alasan ${reason} Sejak ${time}`)
reply(`@${sender.split("@")[0]} Telah Afk Dengan Alasan ${reason} ~`)
break
case 'level':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
const userLevel = getLevelingLevel(sender)
const userXp = getLevelingXp(sender)
if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
const requiredXp = 3000 * (Math.pow(2, userLevel) - 1)
resul = `─ 「 *LEVEL* 」 ─

${f} *USER :* @${sender.split("@")[0]}
${f} *NOMOR :* ${sender.split("@")[0]}
${f} *XP :*  ${userXp}/${requiredXp}
${f} *LEVEL :* ${userLevel}
${f} *ROLE :* ${role}`
client.sendMessage(from, resul, text, { quoted: mek, contextInfo:{mentionedJid: [sender]}})
break
case 'daftar':
case 'verify':
if (isRegistered) return reply(ind.rediregis())
if (args.length<1) return reply(`FORMAT SALAH!! \nUSAGE : #DAFTAR NAMAMU | UMURMU\nEXAMPLE : #DAFTAR GUEST | 18`)
if (!q.includes('|')) return reply(`FORMAT SALAH!! \nUSAGE : #DAFTAR NAMAMU | UMURMU\nEXAMPLE : #DAFTAR GUEST | 18`)
 const namaUser = q.substring(0, q.indexOf('|') - 0)
 const umurUser = q.substring(q.lastIndexOf('|') + 1)
 const serialUser = createSerial(10)
 if(isNaN(umurUser)) return await reply('Umur harus berupa angka!!')
 if (namaUser.length >= 30) return reply(`\`\`\`ITU NAMA ATAU REL KERETA APIII\`\`\``)
 if (umurUser > 60) return reply(`\`\`\`MAXIMAL UMUR 60 TH\`\`\``)
 if (umurUser < 6) return reply(`\`\`\`MINIMAL UMUR 6 TH\`\`\``)
 try {
ppimk = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimk = `${imagebb}`
}
ppimg = await getBuffer(ppimk)
veri = sender
if (isGroup) {
addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
client.sendMessage(from, ppimg, image, {caption: ind.registered(namaUser, umurUser, serialUser, time, sender), quoted: mek}) // { key: {fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net"}, message: {groupInviteMessage: {groupJid: from, inviteCode: `VERIFICATION`, groupName: groupName, caption: `VERIFICATION`, jpegThumbnail: gambar}}}})
addATM(sender)
addLevelingId(sender)
console.log(color('⸨ REGISTER ⸩'), '\n▢ TIME : ', color(time, 'yellow'), '\n▢ NAME : ', color(namaUser, 'cyan'), '\n▢ AGE : ', color(umurUser, 'cyan'), '\n▢ SERIAL : ', color(serialUser, 'cyan'), '\n▢ IN GROUP : ', color(groupName))
} else {
addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
client.sendMessage(from, ppimg, image, {caption: ind.registered(namaUser, umurUser, serialUser, time, sender), quoted: mek})// { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {documentMessage: {mimetype: 'application/octet-stream', title: `VERIFICATION`, pageCount: 0, fileName: `VERIFICATION`, jpegThumbnail: gambar}}}})
addATM(sender)
addLevelingId(sender)
console.log(color('⸨ REGISTER ⸩'), '\n▢ TIME : ', color(time, 'yellow'), '\n▢ NAME : ', color(namaUser, 'cyan'), '\n▢ AGE : ', color(umurUser, 'cyan'), '\n▢ SERIAL : ', color(serialUser, 'cyan'))
}
break
case 'leaderboard':
case 'lb':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
	
      	uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)	
   let leaderboardlvl = '── 「 *LEADERBOARD LEVEL* 」 ──\n\n'
   let leaderboarduang = '── 「 *LEADERBOARD UANG* 」 ──\n\n'
   let nom = 0
   try {
   for (let i = 0; i < 150; i++) {	
   nom++	
   leaderboardlvl += `*${nom}.* ${_level[i].id.replace('@s.whatsapp.net', '')}\n*XP :* ${_level[i].xp}\n*LEVEL :* ${_level[i].level}\n` 
leaderboarduang += `*${nom}.* ${uang[i].id.replace('@s.whatsapp.net', '')}\n*UANG :* _Rp${uang[i].uang}_\n*LIMIT :* ${limitawal - _limit[i].limit}\n`  
}
   reply(leaderboardlvl + '\n\n' + leaderboarduang + 'NOTE : HANYA BISA MENAMPILKAN 150 USER DI DALAM LEADERBOARD')
   } catch (err) {
   console.error(err)
   await reply(`minimal 150 user untuk bisa mengakses database`)	
   }	
break
 case 'giftlimit': case 'givelimit':
if(!isPrem && !mek.key.fromMe)return reply(ind.premb())
if (!isGroup) return reply(ind.groupo())
const nomerr = args[0]
   const jmla = args[1]
   if (jmla <= 1) return reply(`minimal gift limit adalah 1`)
   if (jmla >= 99) return reply(`maximal gift limit adalah 99`)
   if (isNaN(jmla)) return reply(`limit harus berupa angka`)
   if (!nomerr) return reply(`maaf format salah\nmasukan parameter yang benar\ncontoh : ${prefix}giftlimit @${`6282138919347@s.whatsapp.net`.split("@")[0]} 20`)
   const cysz = nomerr + '@s.whatsapp.net'
   var found = false
           	Object.keys(_limit).forEach((i) => {
   	if(_limit[i].id === cysz){
      	found = i
   	}
           })
           	if (found !== false) {
   	_limit[found].limit -= jmla
   	const updated = _limit[found]
   	const result = `*「 GIFT LIMIT 」*

*${f} USER :* @${updated.id.replace('@s.whatsapp.net','')}
*${f} LIMIT :* ${limitawal-updated.limit}
*${f} PADA :* ${moment().format('DD/MM/YY HH:mm:ss')}
*${f} STATUS :* SUKSES`
   	console.log(_limit[found])
   	fs.writeFileSync('./database/limit.json',JSON.stringify(_limit));
   	reply(result)
           	} else {
      reply(`Maaf, nomor ${nomerr} tidak terdaftar di database!`)
           	}
   	break
 case 'transfer':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
if (!isGroup) return reply(ind.groupo())
if (!q.includes('|')) return  reply(`SALAH!! CONTOH ${prefix + command} _@TagMember|Nominal_`)
   const tujuan = q.substring(0, q.indexOf('|') - 1)
   const jumblah = q.substring(q.lastIndexOf('|') + 1)
   if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
   if (jumblah < 50 ) return reply(`minimal transfer 50`)
   if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
   const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
   fee = 0.030 *  jumblah
   hasiltf = jumblah - fee
   addKoinUser(tujuantf, hasiltf)
   confirmATM(sender, jumblah)
   addKoinUser('6282138919347@s.whatsapp.net', fee)
      farid = `
*「 TRANSFER SUKSES 」*

TRANSFERAN ANDA SUKSES DI KIRIM!

*👤PENGIRIM :* @${sender.split("@")[0]}
*👤PENERIMA :* ${tujuan}
*💸JUMLAH UANG :* ${jumblah}
*🤑PAJAK :* ${fee}`
reply(farid)
break      	
case 'dompet':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
const kantong = checkATMuser(sender)
reply(ind.uangkau(pushname, sender, kantong))
break
case 'buylimit':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
if (args.length < 1) return reply(`MAU BELI BERAPA? Rp.${hargalimit} / LIMIT`)
payout = body.slice(10)
const koinPerlimit = hargalimit
const total = koinPerlimit * payout
if ( checkATMuser(sender) <= total) return reply(`maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti, #dompet untuk mengecek uang`)
if ( checkATMuser(sender) >= total ) {
confirmATM(sender, total)
bayarLimit(sender, payout)
reply(`*─ 「 SUKSES 」 ─*\n\n*PENGIRIM :* @${nomerowner}\n*PENERIMA :* @${sender.split("@")[0]}\n*NOMINAL PEMBELIAN :* ${payout} \n*HARGA LIMIT :* ${koinPerlimit}/limit\n*SISA UANG :* Rp.${checkATMuser(sender)}`)
} 
break
case 'limit':
case 'ceklimit':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
checkLimit(sender)
break
case 'getlimit':
if (!isPrem && !mek.key.fromMe) return reply(ind.premb())
geh = randomNomor(10)
bayarLimit(sender, geh)
reply(`selamat @${sender.split("@")[0]} kamu mendapatkan ${geh}Limit`)
break
case 'mining':
case 'claim':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pushname))
if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh owner`)
if (isOwner) {
const one = 9999
addLevelingXp(sender, one)
addLevelingLevel(sender, 9)
reply(`HAI OWNER @${nomerowner + `@s.whatsapp.net`.split("@")[0]} KAMU MENDAPATKAN *${one}Xp* ✨`)
} else {
const mining = Math.ceil(Math.random() * 500)
addLevelingXp(sender, mining)
await reply(`SELAMAT @${sender.split("@")[0]} KAMU MENDAPATKAN *${mining}Xp* ✨`)
}
await limitAdd(sender)
break
//={ ABOUT KERANG }=\\
case 'ngentod':
case 'ngewe':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
 if (!isGroup) return reply(`GROUP ONLY`)
jds = []
const jdiid = groupMembers
const kosst = groupMembers
const hpoo = ['4','5','6','7','8','9'] 
const kontrod = ['Tv','koran']
coook = kontrod[Math.floor(Math.random() * (kontrod.length))] 
ahahahu = hpoo[Math.floor(Math.random() * (hpoo.length))] 
const akuut = jdiid[Math.floor(Math.random() * jdiid.length)]
const diaat = kosst[Math.floor(Math.random() * kosst.length)]
teks = `Yang ${command} kemarin di grub ini adalah\n@${akuut.jid.split('@')[0]} dan @${diaat.jid.split('@')[0]} \nDia Ngewe Sampe ${ahahahu}X Kemarin\n\nSampe Masuk ${coook} 😱`
jds.push(akuut.jid)
jds.push(diaat.jid)
mentions(teks, jds, true)
break
case 'ganteng': case 'cantik': case 'jelek': case 'goblok':  
case 'bego': case 'pinter': case 'jago': case 'nolep': case 'monyet':    	 
case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': 
case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': case 'memek':
case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl': case 'tollol':    	   	       
if (!isRegistered) return	
if (isBanned) return 
if (!isGroup) return 
 jds = []
const A1 = groupMembers
const B1 = groupMembers
const C1 = A1[Math.floor(Math.random() * A1.length)]
D1 = `di grup ini yang *ter${command}* adalah si @${C1.jid.split('@')[0]}`     
jds.push(C1.jid)
mentions(D1, jds, true)
break
case 'jadian':	       
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
 if (!isGroup) return reply(`GROUP ONLY`)
if (isLimit(sender)) return reply(ind.limitend(pushname))
 jds = []
 const A11 = groupMembers
 const B11 = groupMembers
 const C11 = A11[Math.floor(Math.random() * A11.length)] 
 const C22 = B11[Math.floor(Math.random() * B11.length)]
D11 = `━「 JADIAN 」━\n\n@${C11.jid.split('@')[0]} ❤ @${C22.jid.split('@')[0]}\n\nMOGAA LANGGENG😋`  
jds.push(C11.jid)
jds.push(C22.jid)
mentions(D11, jds, true)
await limitAdd(sender)
break
case 'bisakah':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
bisakah = args.join(' ')
const bisa =['Bisa','Tidak Bisa','Coba Ulangi','Ngimpi kah?','yakin bisa?']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
const asa = await getBuffer(`http://hadi-api.herokuapp.com/api/tts?text=${keh}&language=id`)
client.sendMessage(from, asa, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek })
break
case 'kapan':
case 'kapankah':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
const kapan1 = args.join(' ') 
const kapan2 = ['Hari ini','saya tidak mengerti','Mungkin besok','1 Minggu lagi','Masih lama','3 Bulan lagi','7 Bulan lagi','3 Tahun lagi','4 Bulan lagi','2 Bulan lagi','1 Tahun lagi','1 Bulan lagi','Coba ulangi']
const koh = kapan2[Math.floor(Math.random() * (kapan2.length))]
const asai = await getBuffer(`http://hadi-api.herokuapp.com/api/tts?text=${koh}&language=id`)
client.sendMessage(from, asai, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek })
break
case 'apakah':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
const tanya = args.join(' ') 
const apa = ['Ya','Mungkin','Tidak','Saya tidak tahu masalah itu','Coba Ulangi','coba jawab sendiri']
const ahik = apa[Math.floor(Math.random() * (apa.length))]
const asaiu = await getBuffer(`http://hadi-api.herokuapp.com/api/tts?text=${ahik}&language=id`)
client.sendMessage(from, asaiu, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek })
break
case 'dimana': 
case 'dimanakah':  
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
const tanyaap = body.slice(1) 
const dmna = ['saya tidak tahu!','di sebelah jembatan mungkin','di semak semak','di rumah si udin','di dapurmu!','di warung bu siti','coba jawab sendiri','gatau ah aku']
const dimanalu = dmna[Math.floor(Math.random() * (dmna.length))]
const asaii = await getBuffer(`http://hadi-api.herokuapp.com/api/tts?text=${dimanalu}&language=id`)
client.sendMessage(from, asaii, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek })
break
case 'rate':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
const te = ra[Math.floor(Math.random() * ra.length)]
client.sendMessage(from, 'Pertanyaan : *'+q+'*\nJawaban : '+ te+'%', text, { quoted: mek })
break
//STOTAGE/ADD
case 'addstik':
case 'addseticker':
case 'adds':
case 'addstiker':
case 'addsticker':
case 'addsetiker':
if (!mek.key.fromMe && !isPrem) return reply(ind.premb())
if (!isQuotedSticker) return reply('Reply stiker nya')
if (!q) return reply('Nama sticker nya apa?')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await client.downloadMediaMessage(boij)
setiker.push(`${q}`)
fs.writeFileSync(`./add/stick/${q}.webp`, delb)
fs.writeFileSync('./add/stick.json', JSON.stringify(setiker))
reply(`Sukses Menambahkan Sticker!!\nCek Sticker Dengan Cara Ketik ${prefix}liststick`)
break
case 'dellstik':
case 'dellstick':
case 'dellsticker':
case 'dellstiker':
if (!mek.key.fromMe && !isPrem) return reply(ind.premb())
if (!q) return reply(`NAMA STICKER MANA YANG MAU DI HAPUS?`)
try {
fs.unlinkSync(`./add/stick/${q}.webp`)
setiker.splice(q,1)
fs.writeFileSync('./add/stick.json', JSON.stringify(setiker))
reply(`Succes Menghapus sticker ${q}!`)
} catch (err) {
reply(`Gagal Menghapus sticker ${q}!`)
}
break
case 'addimg':
case 'addimage':
case 'addfoto':
if (!mek.key.fromMe && !isPrem) return reply(ind.premb())
if (!isQuotedImage) return reply('Reply Imagenyaaa')
if (!q) return reply('Nama imagenyaaa? >_<')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await client.downloadMediaMessage(boij)
imagenye.push(`${q}`)
fs.writeFileSync(`./add/image/${q}.jpeg`, delb)
fs.writeFileSync('./add/image.json', JSON.stringify(imagenye))
reply(`Sukses Menambahkan Foto!!\nCek Foto Dengan Cara Ketik ${prefix}listfoto`)
break
case 'dellimage':
case 'dellimg':
case 'dellfoto':
if (!mek.key.fromMe && !isPrem) return reply(ind.premb())
if (!q) return reply(`NAMA FOTO MANA YANG MAU DI HAPUS?`)
try {
fs.unlinkSync(`./add/image/${q}.jpeg`)
imagenye.splice(q,1)
fs.writeFileSync('./add/image.json', JSON.stringify(imagenye))
reply(`Succes Menghapus Image ${q}!`)
} catch (err) {
reply(`Gagal Menghapus Image ${q}!`)
}
break
case 'addvid':
case 'addvideo':
case 'addmp4':
if (!mek.key.fromMe && !isPrem) return reply(ind.premb())
if (!isQuotedVideo) return reply('Reply Vidionyaaa!')
if (!q) return reply('Nama vidionyaaa? >_<')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await client.downloadMediaMessage(boij)
videonye.push(`${q}`)
fs.writeFileSync(`./add/video/${q}.mp4`, delb)
fs.writeFileSync('./add/video.json', JSON.stringify(videonye))
reply(`Sukses Menambahkan Video!!\nCek Video Dengan Cara Ketik ${prefix}listvideo`)
break
case 'dellvideo':
case 'dellvid':
case 'dellmp4':
if (!mek.key.fromMe && !isPrem) return reply(ind.premb())
if (!q) return reply(`NAMA VIDEO MANA YANG MAU DI HAPUS?`)
try {
fs.unlinkSync(`./add/video/${q}.mp4`)
videonye.splice(q,1)
fs.writeFileSync('./add/video.json', JSON.stringify(videonye))
reply(`Succes Menghapus Video ${q}!`)
} catch (err) {
reply(`Gagal Menghapus Video ${q}!`)
}
break
case 'addvn':
case 'addaudio':
case 'addmp3':
case 'addmusic':
if (!mek.key.fromMe && !isPrem) return reply(ind.premb())
if (!isQuotedAudio) return reply('Reply Audionya!!')
if (!q) return reply('Nama audionyaaa? >_<')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await client.downloadMediaMessage(boij)
audionye.push(`${q}`)
fs.writeFileSync(`./add/audio/${q}.mp3`, delb)
fs.writeFileSync('./add/audio.json', JSON.stringify(audionye))
reply(`Sukses Menambahkan Audio!!\nCek Audio Dengan Cara Ketik ${prefix}listvn`)
break
case 'dellaudio':
case 'dellvn':
case 'dellmp3':
case 'dellmusic':
if (!mek.key.fromMe && !isPrem) return reply(ind.premb())
if (!q) return reply(`NAMA AUDIO MANA YANG MAU DI HAPUS?`)
try {
fs.unlinkSync(`./add/audio/${q}.mp3`)
audionye.splice(q,1)
fs.writeFileSync('./add/audio.json', JSON.stringify(audionye))
reply(`Succes Menghapus Audio ${q}!`)
} catch (err) {
reply(`Gagal Menghapus Audio ${q}!`)
}
break
case 'liststik':
case 'liststicker':
case 'liststiker':
case 'liststick':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
teks = '*「 LIST STICKER 」*\n\n'
for (let awokwkwk of setiker) {
teks += `${f} ${awokwkwk}\n`
}
teks += `\n*TOTAL :* ${setiker.length}`
client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
break
case 'listimg':
case 'listfoto':
case 'listimage':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
teks = '*「 LIST IMAGE 」*\n\n'
for (let awokwkwk of imagenye) {
teks += `${f} ${awokwkwk}\n`
}
teks += `\n*TOTAL :* ${imagenye.length}`
client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
break
case 'listvid':
case 'listvideo':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
teks = '*「 LIST VIDEO 」*\n\n'
for (let awokwkwk of videonye) {
teks += `${f} ${awokwkwk}\n`
}
teks += `\n*TOTAL :* ${videonye.length}`
client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
break
case 'listvn':
case 'vnlist':
case 'listaudio':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
teks = '*「 LIST AUDIO 」*\n\n'
for (let awokwkwk of audionye) {
teks += `${f} ${awokwkwk}\n`
}
teks += `\n*TOTAL :* ${audionye.length}`
client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
break
case 'getstik':
case 'gets':
case 'getstiker':
case 'getsticker':
case 'getsetiker':
case 'getseticker':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
try {
result = fs.readFileSync(`./add/stick/${q}.webp`)
client.sendMessage(from, result, sticker,{quoted:mek})
} catch {
reply('*TITLE TIDAK DI TEMUKAN DI DALAM #LISTSTICKER*')
}
break
case 'getimage':
case 'getimg':
case 'getfoto':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
try {
buffer = fs.readFileSync(`./add/image/${q}.jpeg`)
client.sendMessage(from, buffer, image, { quoted: mek, caption: `${q}` })
} catch {
reply('*TITLE TIDAK DI TEMUKAN DI DALAM #LISTIMAGE*')
}
break
case 'getvideo':
case 'getvid':
case 'getmp4':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
try {
buffer = fs.readFileSync(`./add/video/${q}.mp4`)
client.sendMessage(from, buffer, video, { quoted: mek, caption: `${q}` })
} catch {
reply('*TITLE TIDAK DI TEMUKAN DI DALAM #LISTVIDEO*')
}
break
case 'getvn':
case 'getaudio':
case 'getmp3':
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
try {
buffer = fs.readFileSync(`./add/audio/${q}.mp3`)
client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
} catch {
reply('*TITLE TIDAK DI TEMUKAN DI DALAM #LISTVN*')
}
break
 case 'cek': 
 case 'test':{
if (!isRegistered) return reply(ind.noregis())
if (isBanned) return reply(ind.ban())
 Muzza = Math.floor(Math.random() * 100) + 1
 const emoy = ["🤣","🙂","😄","😁","😎","😀","😃","😁","😝","😐","😱","😵","😲"]
 const emot = emoy[Math.floor(Math.random() * (emoy.length))]
 if (args[0].toLowerCase() === 'ganteng') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'cantik') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'goblok') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'baper') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'tomboi') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'banci') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'alay') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'peka') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'cuek') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'manis') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'jelek') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'tollol') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'tolol') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'asu') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'gendeng') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'gila') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'sange') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'nafsu') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'gay') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'lesbi') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'haram') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'bangsat') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'cupu') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'gabut') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'gajelas') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'lucu') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'gakjelas') {
 reply(`nilai nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'males') {
 reply(`nilai nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'malas') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'pelit') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'baik') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'buruk') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'arogan') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'mandul') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'galak') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'sabar') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'lebus') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 if (args[0].toLowerCase() === 'ikhlas') {
 reply(`nilai ke *${args[0]}* anmu adalah ${Muzza}% ${emot}`)
 }
 }
break
case 'addrespon':
case 'addres':
if (!isPrem && !mek.key.fromMe) return reply(ind.premb())
if (args.length < 1) return reply(`Kirim perintah *${command}* command|jawaban`)
var soal = q.split('|')[0]
var jawaban = q.split('|')[1]
if (!jawaban) return reply(`Jawabannya apa?`)
if (body.slice(200)) return reply(`Jawaban lu kepanjangan bro`)
if (checkCommands(soal.toLowerCase(), cmdDB)) return reply(`Command tersebut sudah ada!`)
addCommands(soal.toLowerCase(), jawaban, sender, cmdDB)
reply('Sukses!')
break
case 'deleterespon': case 'dellrespon': case 'delrespon': case 'dellres': case 'delres':
if (!isPrem && !mek.key.fromMe) return reply(ind.premb())
if (args.length < 1) return reply(`Kirim perintah *${command}* command`)
if (isCreated(q.toLowerCase(), sender, cmdDB)) return reply(`Anda bukan pembuat command!`)
deleteCommands(q.toLowerCase(), cmdDB)
reply('Sukses!')
break
case 'listrespon': case 'listres':
if (!isOwner && !mek.key.fromMe) return
var txtt = `LIST REPONSE\nJUMLAH : *${cmdDB.length}*\n\n`
for (let i of cmdDB){
txtt += `*RESPON :* ${i.commands}\n*JAWABAN :* ${i.jawaban}\n*CREATED :* @${i.created.split("@")[0]}\n\n`
}
client.sendMessage(`${ownerNumber}`, txtt, text, { quoted: mek, contextInfo:{ mentionedJid: parseMention(txtt) }})
break
case 'self':
if (!mek.key.fromMe && !isOwner) return
if (!public) return reply('Sudah Di Dalam Mode Self')
public = false
reply(`Succes\n*Self Mode*`)
break
case 'public':
if (!mek.key.fromMe && !isOwner) return
if (public) return reply('Sudah Di Dalam Mode Public')
public = true
reply(`Succes\n*Public Mode*`)
break
case 'setmenu':
if (!mek.key.fromMe && !isOwner) return
if (args.length <1) return reply(`*example :*\n*${prefix+command} listmessage*\n*${prefix+command} ori*`)
if (args[0].toLowerCase() === 'listmessage'){
MenulistMessage = true
reply('Succes..')
} else if (args[0].toLowerCase() === 'listmess'){
MenulistMessage = true
reply('Succes..')
} else if (args[0].toLowerCase() === 'ori'){
MenulistMessage =  false
reply('Succes..')
}
break
case 'sc':
case 'sourcecode':
//WKWKW, JANGAN DI UBAH BANG NANTI MELEDAK 💥💥💥💥
function _0x2521(){var _0x3b9279=['630424fHBMAr','947466FYaTWx','63wnTQzL','1119876rutcMV','15248930NzfLpm','7NkuXUG','21nUyguY','Cek\x20Di\x20Channel\x20https://youtube.com/channel/UCIvY2o-KctmlKWvXzqrXuWw','867771xIMuIq','10006tZbHDU','2028275RYzaMe'];_0x2521=function(){return _0x3b9279;};return _0x2521();}var _0x197112=_0x292d;function _0x292d(_0x45ded3,_0x16420a){var _0x25213f=_0x2521();return _0x292d=function(_0x292dab,_0x26318a){_0x292dab=_0x292dab-0x129;var _0x17810b=_0x25213f[_0x292dab];return _0x17810b;},_0x292d(_0x45ded3,_0x16420a);}(function(_0x13d0d5,_0x9c4cd6){var _0x1493a7=_0x292d,_0x58828f=_0x13d0d5();while(!![]){try{var _0x3a6b52=parseInt(_0x1493a7(0x130))/0x1*(parseInt(_0x1493a7(0x129))/0x2)+-parseInt(_0x1493a7(0x133))/0x3+-parseInt(_0x1493a7(0x12e))/0x4+-parseInt(_0x1493a7(0x12a))/0x5+-parseInt(_0x1493a7(0x12c))/0x6*(parseInt(_0x1493a7(0x131))/0x7)+-parseInt(_0x1493a7(0x12b))/0x8*(-parseInt(_0x1493a7(0x12d))/0x9)+parseInt(_0x1493a7(0x12f))/0xa;if(_0x3a6b52===_0x9c4cd6)break;else _0x58828f['push'](_0x58828f['shift']());}catch(_0x5b9995){_0x58828f['push'](_0x58828f['shift']());}}}(_0x2521,0xa1d89),reply(_0x197112(0x132)));
break

default:

try {
//FARID 😗
if (budy.startsWith("=")){
if (isBanned) return
reply(`${Math_js.evaluate(budy.slice(1).replace("×","*").replace("x","*").replace("X","*").replace("÷","/").replace(":","/").replace("kali","*").replace("bagi","/").replace("tambah","+").replace("tamba","+").replace("kurang","-").replace("kurangi","-"))}`)
}
} catch {
}
if(budy.startsWith("> ")){
if (!mek.key.fromMe && !isOwner) return
console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'red'), color(`DARI OWNER HEHE`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
}
if (budy.startsWith("$ ")){
if (!mek.key.fromMe && !isOwner) return
console.log(color('[EXEC]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'red'), color(`DARI OWNER HEHE`))
exec(budy.slice(2), (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) reply(`${stdout}`)
})
}
if (budy.includes(`Assalam`)){
if (isSimi) return
reply(`Waalaikum\`Salam @${sender.split("@")[0]}`)
}
if (budy.includes(`assalam`)){
if (isSimi) return
reply(`Waalaikum\`Salam @${sender.split("@")[0]}`)
}
if (budy.includes(`ASSALAM`)){
if (isSimi) return
reply(`Waalaikum\`Salam @${sender.split("@")[0]}`)
}
try {
if (isGroup && !resbutton && !itsMe && !isAllMedia && !isCmd && isSimi) {
client.updatePresence(from, Presence.composing) 
const samu = await fetchJson(`https://api.zeks.xyz/api/simi?apikey=apivinz&text=${budy}`)
reply(`◦➛ ${samu.result ? samu.result : `Simih Ga ngerti Kakkk >_<`}`)
}
} catch {
}
if (isGroup && budy != undefined) {
} else {
}
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero")){
console.log(color(e, 'white'))
}
}
})
}
starts()