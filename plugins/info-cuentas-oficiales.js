let media = './media/menus/Menuvid2.mp4'
let handler = async (m, { conn, command }) => {
let str = `
π π½ππππππππΏπ(πΌ) πΌ ππΌπ πΎπππππΌπ ππππΎππΌπππ
π ππππΎπππ ππ πππ πππππΎππΌπ πΌπΎπΎπππππ
βββββββββββββββββ
β *INSTAGRAM*
*${md}*
βββββββββββββββββ
*Si tienen dudas, sugerencias, o preguntas solo escriban por Instagram.*\n
*If you have doubts, suggestions or questions just write on Instagram.*
`.trim()
  
conn.sendHydrated(m.chat, str, wm, media, 'https://github.com/Sofiaperez18/NEKOBOT-MD.git', 'π‘πππ’ππ’π§-π π', null, null, [
['ππ§πͺπ₯π€π¨ πππππππ‘ππ¨ | ππ§π€πͺπ₯π¨ π°', '.grupos'],
['πΎπ§ππππ€π§π | πΎπ§πππ©π€π§ π₯°', '#owner'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu']
], m,)}

handler.command = /^cuentasoficiales|nekoig|cuentanb|cuentanb|accounts|nekooccounts|account|igneko|cuentasdeneko|cuentasdenekobot|cuentanekobot|cuentasnekobot$/i
handler.exp = 100
export default handler
