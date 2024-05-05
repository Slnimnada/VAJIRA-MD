const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
global.email = 'vajirarathnayaka891@gmail.com'
global.github = 'https://github.com/VajirTech/VAJIRA-MD'
global.location = 'Srilanka Colombo'
global.packname = '𝚜𝚝𝚒𝚌𝚔𝚎𝚛 𝚋𝚢';
global.author = '𝙵𝙰𝙲𝙺𝙴𝚁 𝙼𝙳';
global.mess = {
    banned: '`You are *Banned* fron using commands!`',
    bangc: '`This Group is *Banned* from using Commands!`',
    success: '`✓ Success`',
    admin: '`This feature is only for group admins`',
    botAdmin: '`I am not an admin!`',
    owner: '`You are not my owner`',
    group: '`You can use this command only in groups ❌`',
    private: '`Feature is used only for private chats!`',
    bot: '`Bot number user special features`',
    wait: '*Processing Your request*',
    endLimit: '`Your daily limit has expired, the limit will be reset every 12 hours`',
}

global.owner = [process.env.OWNER_NUMBER] || ['94764009065'] // Owner number , (අයිතිකරුගේ නම්බර් එක )

module.exports = {    
SESSION_ID: process.env.SESSION_ID || 'youre session id',
POSTGRESQL_URL: process.env.POSTGRESQL_URL || 'postgres://izumimd_meje_user:0Vhm5vKGZ7ORt2FlJBQf4d6EtRdeuE8z@dpg-cn0o2imn7f5s73fa46q0-a.frankfurt-postgres.render.com/izumimd_meje',
PREFIX:  process.env.PREFIX || ['.'] ,
LANG:  process.env.LANG || 'SI' ,    
ANTI_BAD: process.env.ANTI_BAD || true  ,
AUTO_REACT:  process.env.AUTO_REACT  || true  ,    
AUTO_TYPING:  process.env.AUTO_TYPING  || false  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,
AUTO_READ:  process.env.AUTO_READ  || true  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,    
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,            
WORK_TYPE: process.env.WORK_TYPE || 'public'  ,
ANTI_LINK: process.env.ANTI_LINK || false  ,
ANTI_BOT: process.env.ANTI_BOT || false  ,
OWNER_NUMBER: process.env.OWNER_NUMBER || '94764009065'  ,    
ALIVE: process.env.ALIVE || `╔═════ೋೋ═════╗ 
*
𝗜𝗠 💖 ɢɪʀʟ 🥺𒋨♥️᭄ 😇
**නම=😌⃟⌘࿔⃝❤️සොනායා බබා*
*ගම=❤️⃝😒ꦿ࿔හලාවත*
*වයස=❤️⃝➤⃟̱̱̱̱̄̄̄̄😉 🙈*

*දිනේ=🌹⃝✥⃟☺️0000.04.15*

*🌹⃝✥⃟☺️᭄ꦿ~මහද 🌹⃝⃘̉̉̉̉̉̉🧚පුරා ۝⃟̥̩̩̩̥̩̥͚̮💍ප්‍රේම කරා 🌹⃝❤️࿔⃟࿔ආසම 😒⃟🌹⃟̩̩̩̥ꦿ࿓හීනෙ ඔයා.❤️⃟✦⃝̮̮̮̯̯̯😌*`,
OWNER_NAME: process.env.OWNER_NAME || 'shashiya' ,     
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || true  ,    
AUTO_VOICE:  process.env.AUTO_VOICE  || true  ,
AUTO_STICKER: process.env.AUTO_STICKER || true  ,
WELCOME:  process.env.WELCOME  || false ,    
NUMBER_212_BLOCK: process.env.NUMBER_212_BLOCK || false  ,
FOOTER: process.env.FOOTER ||  '©ＺＯＮＡＹＡ - ＭＤ - Ｖ 2.0',
LOGO: process.env.LOGO || `https://telegra.ph/file/0ee8ccbdd85387424df66.jpg` ,
IMAGE: process.env.IMAGE || `https://telegra.ph/file/0ee8ccbdd85387424df66.jpg`     
};
