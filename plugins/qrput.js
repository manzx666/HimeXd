let fetch = require('node-fetch')

let handler = async (m, { conn, command }) => {
    let buffer = await fetch(https://telegra.ph/file/896db9d9bb6086d47dbd9.jpg).then(res => res.buffer())
    conn.sendFile(m.chat, buffer, 'putxd.jpg', *SILAKAN DISCAN YA BOSSKU.*, m)
}

handler.help = handler.command = ['qrtng']
handler.tags = ["owner"]
module.exports = handler