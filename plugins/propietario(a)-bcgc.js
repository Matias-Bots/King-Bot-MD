import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of groups) { 
conn.sendButton(id, `*ā­āā[ š¾šššššš¾š¼šæš | ššššš¾š ]āāāā¬£*\n*ā*\n*āš* ${text}\n*ā*\n*ā°āāāāāāāāāāāāāāāāāāā¬£*`, 'ā *š¾šššššš¾š¼šæš šššš¾šš¼š*\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['š šš£šš¤ ššššššš”', '.cuentasnb'],['š® ššš£šŖ', '.menu']], false, { 
contextInfo: { externalAdReply: {
title: 'š”ššš¢šš¢š§-š š | š”š²šøš¼ šš¼š',
body: 'Super Bot WhatsApp', 
sourceUrl: ``, 
thumbnail: fs.readFileSync('./media/menus/Menu3.jpg') }}})}
m.reply(`${iig} ā *El mensaje fue enviado a ${groups.length} Grupo(s)*\n*Es posible que no se haya enviado a todos los Grupos. Disculpe.*\n\nā *The message was sent to ${groups.length} Group's*\n*May not have been sent to all Groups. Excuse me.*`)
}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(comunicargrupo|comunicadogrupo|comunicargrupos|comunicadogrupos|broadcastgc|bcgc)$/i
handler.rowner = true
handler.exp = 500
//handler.owner = true
export default handler
