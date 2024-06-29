const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919064763129";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_15_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjE5LFxuICAgICAgICA0MSxcbiAgICAgICAgOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIxLFxuICAgICAgICA5MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjM2LFxuICAgICAgICA1NCxcbiAgICAgICAgODAsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTYwLFxuICAgICAgICAzNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMixcbiAgICAgICAgMTM0LFxuICAgICAgICA2MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDc4LFxuICAgICAgICA1NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzksXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY2LFxuICAgICAgICA0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUyLFxuICAgICAgICA5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDc3LFxuICAgICAgICA0LFxuICAgICAgICA3NixcbiAgICAgICAgMTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDg3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDMwLFxuICAgICAgICAyNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxODIsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDY4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDY4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTgyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjA1LFxuICAgICAgICA5NSxcbiAgICAgICAgODIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODYsXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTYxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDksXG4gICAgICAgIDM1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDM5LFxuICAgICAgICA3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTEzLFxuICAgICAgICA4NSxcbiAgICAgICAgODcsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgNjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODYsXG4gICAgICAgIDIxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzMixcbiAgICAgICAgMjQyLFxuICAgICAgICA4MSxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODcsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzYsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTcxLFxuICAgICAgICA3OSxcbiAgICAgICAgODgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA2NixcbiAgICAgICAgMTYsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDM1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjExLFxuICAgICAgICA2NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAzNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1NixcbiAgICAgICAgOTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTksXG4gICAgICAgIDczLFxuICAgICAgICA4NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2LFxuICAgICAgICA4NixcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNnRTWktHdjhkS29DL3BERWRWQnRjMW9UODhwdmE0UUt2dnJqeDZvdHVXWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTc3OTc3MzkyNDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjM4Qzc1QzVFRjkzMjUyRTEyNUQ0MEU5RTVDNTAzM0Y1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTY2MzMwMVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxNzc5NzczOTI0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOUFBNDk0RjA3NTMyNjcxMjZGQkNCM0E2RTI1NTJFNTJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5NjYzMzAxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIl9pTEJSNGhBVEpPQmhDR0k1dGtlWFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDFmNzhjYzctMmZkMi00N2Q0LTg1MjctNTZiYjEyZmI4YjE1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOCxcbiAgICAgIDMzLFxuICAgICAgMjU0LFxuICAgICAgMTgyLFxuICAgICAgMTQ1LFxuICAgICAgMixcbiAgICAgIDEwNyxcbiAgICAgIDQxLFxuICAgICAgNTcsXG4gICAgICAxNDgsXG4gICAgICA3MyxcbiAgICAgIDE4OSxcbiAgICAgIDEwNSxcbiAgICAgIDI1MyxcbiAgICAgIDE5LFxuICAgICAgNzEsXG4gICAgICAxODksXG4gICAgICAxOTgsXG4gICAgICAyMDIsXG4gICAgICAzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MSxcbiAgICAgIDI0NixcbiAgICAgIDYwLFxuICAgICAgMTY4LFxuICAgICAgMjAxLFxuICAgICAgNjIsXG4gICAgICA5NSxcbiAgICAgIDUwLFxuICAgICAgOTYsXG4gICAgICAyMTgsXG4gICAgICAyNTEsXG4gICAgICA0MyxcbiAgICAgIDI0OSxcbiAgICAgIDI1MixcbiAgICAgIDExNCxcbiAgICAgIDIyMixcbiAgICAgIDExMSxcbiAgICAgIDE5NCxcbiAgICAgIDIzNSxcbiAgICAgIDYxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZNWjZLTk1SXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTc3OTc3MzkyNDY6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDA0MjQ2NTE2Mjg3NzA6OUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJCb3QgVXNlcvCfmYJcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQRHFyb0FERUwzMS83TUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImlGajhBa2VCZmRmb2k1TnF2QUF4YVJpU0d0b1htUTErR0JIcElwa1dLV0k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaGNaQ2krQWswZEtPVmdwY2hucU92TjFnaVgyeEd5ZlZFUWJkZ0F2RENoRWR4eENmYWZjOURRSWJKUm5Qckl4OTJ1cldjS2dScDRTM29SUTdhMS9OQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZjBjaEhNdWVpOFZHYXFSeUE5WjZlbEJVTDcwd3QxVFViUmtFZWNGdm56UFZoOGdHKzAwQWcxRjFQcW1SQmdUbkVycFBySzQ3Qml1dEE5aHVXUmx0Qnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE3Nzk3NzM5MjQ2OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NjYzMjk2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRWkvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFaS8uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
