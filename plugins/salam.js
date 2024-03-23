let handler = async m => {

let intro = `وَعَلَيْكُم ٱلسَّلَامُ`
m.reply(intro)
}
handler.customPrefix = /^(assalamualaikum|aslm|salam)$/i
handler.command = new RegExp

module.exports = handler