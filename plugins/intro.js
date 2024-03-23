let handler = async m => {

let intro = `╭─── *「 Card Intro 」*       
│ *Nama     :* 
│ *Umur      :* 
╰──────────────`
m.reply(intro)
}
handler.command = /^(intro)$/i

module.exports = handler