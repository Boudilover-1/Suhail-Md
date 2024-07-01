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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919332479464";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_26_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDksXG4gICAgICAgIDYzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjksXG4gICAgICAgIDY2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgNixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDQxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzMixcbiAgICAgICAgOCxcbiAgICAgICAgMTY2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTg0LFxuICAgICAgICA0NyxcbiAgICAgICAgODYsXG4gICAgICAgIDIsXG4gICAgICAgIDIsXG4gICAgICAgIDQ4LFxuICAgICAgICA1MixcbiAgICAgICAgOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDY0LFxuICAgICAgICAzMSxcbiAgICAgICAgODMsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODgsXG4gICAgICAgIDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDgxLFxuICAgICAgICAyMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDk2LFxuICAgICAgICA5MixcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTkyLFxuICAgICAgICA4MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUxLFxuICAgICAgICA3OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTc0LFxuICAgICAgICA1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjksXG4gICAgICAgIDcsXG4gICAgICAgIDU0LFxuICAgICAgICAzMixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDMyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzksXG4gICAgICAgIDM2LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTksXG4gICAgICAgIDY4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTUsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODEsXG4gICAgICAgIDI5LFxuICAgICAgICA5NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDk1LFxuICAgICAgICA5MSxcbiAgICAgICAgNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTMwLFxuICAgICAgICA0MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDgxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIrWWI5cUtTRm1aa0JIaWVnSmpVY1phNTgvckJqdllOOGppUjR6bitZeEUwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxNzc5NzczOTI0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMkMwNjlGMjE0NEZBN0JCNTYzQjg0ODhFRjc4RTg4M0JcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5ODA0MzY2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE3Nzk3NzM5MjQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2RjAyNEY4MTJBRDhEREJDODU2MUI2ODU4NzlGRUJDMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk4MDQzNjdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVDNSeklQY2lUSU96a2hYblpMT243Z1wiLFxuICBcInBob25lSWRcIjogXCIxZTg5ZWVkZi04NWYxLTQ3OTQtYWNhYi1kY2Q3MGViNDBkODVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgzLFxuICAgICAgMjA2LFxuICAgICAgNDgsXG4gICAgICAzLFxuICAgICAgNTgsXG4gICAgICA1MixcbiAgICAgIDE2MCxcbiAgICAgIDk3LFxuICAgICAgMjM0LFxuICAgICAgMjI1LFxuICAgICAgMTY2LFxuICAgICAgMTMzLFxuICAgICAgMTMzLFxuICAgICAgMTQ0LFxuICAgICAgMTMzLFxuICAgICAgODcsXG4gICAgICAxMzksXG4gICAgICAxNDIsXG4gICAgICAxNDgsXG4gICAgICAyMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU3LFxuICAgICAgMTQ0LFxuICAgICAgNyxcbiAgICAgIDE0NixcbiAgICAgIDEwOCxcbiAgICAgIDksXG4gICAgICA4LFxuICAgICAgMTksXG4gICAgICAyNDMsXG4gICAgICA1LFxuICAgICAgOTUsXG4gICAgICA2NSxcbiAgICAgIDE5OCxcbiAgICAgIDIzMSxcbiAgICAgIDE1OSxcbiAgICAgIDIxOCxcbiAgICAgIDQzLFxuICAgICAgMTk2LFxuICAgICAgMTk4LFxuICAgICAgMTQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjk4QUM4UlBKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTc3OTc3MzkyNDY6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQwNDI0NjUxNjI4NzcwOjEyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkJvdCBVc2Vy8J+ZglwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BQcXJvQURFTWZEaUxRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaUZqOEFrZUJmZGZvaTVOcXZBQXhhUmlTR3RvWG1RMStHQkhwSXBrV0tXST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI5NFIwb2Z4dG1kcm8wTkk2eXFIcm05NnlWRmxHSkZWTkMvaVZuaEpHaU1SU1kySXRpOXViL1F0YmN1N3B3cUkyekxUQXJMalo1NXhQOFNoTENURTlBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJKVHhINkZINXFmOGNjZU1jQzczSE50bmFoeTZxVTB2VWVRM2lqWVZCbjZUTkhlWU82MHFkSG1PYXMrV3NQQWpuK2lJQy95OGpzb0xvem92UkorTXhqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTc3OTc3MzkyNDY6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5ODA0MzYyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQUMvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBQy8uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
