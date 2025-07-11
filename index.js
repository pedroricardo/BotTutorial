const Discord = require('discord.js')
const client = new Discord.Client()
  

client.on("ready", () => {
  console.log("Estou online!deedd")  
})

client.on("message", (message) =>{ 

    if(message.author.bot == true) return
    if(message.channel.type == "dm") return



    if(message.content == "ping"){
      message.channel.send("Pong!")
    }
    if(message.content == "avatar"){
      message.channel.send(`https://cdn.discordapp.com/avatars/518900443569717252/${message.author.avatar}.webp`)
    }
 
  })


client.login('TOKEN')

