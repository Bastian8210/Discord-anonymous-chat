var XMLHttpRequest = require('xhr2');
const Discord = require("discord.js");
const myChannelId = '942834173712937020'
const { Client, Intents, WebhookClient, MessageEmbed, webhook,   } = require("discord.js");
const client = new Client({
intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
const Myhook = 'https://discord.com/api/webhooks/946052798104105051/ChCO38Yjft8_aNZoavzI088wpucQL33JXqnKy8C01RQ7p75vVrksBABWzz24mRrdwDbz'



client.on("ready", () => {
  console.log("Are you ready kids, cause I am if you know what i mean");
});

client.on("messageCreate", (message) => {
  if(message.channel.id === myChannelId) {
  if (message.author.bot) return;
  if (message.content.startsWith("")) {
    message.delete(message);
    message.channel.send("```" + "Anonym:" + " " + message.content + "```");
      console.log("-------------------------------------------------------------------------")
    console.log(message.author.tag + " " + "sent message" + " " + "---" + " " + message.content + " " + "---" + " " + "in darkchat") 
    console.log("-------------------------------------------------------------------------")

    const embed = new MessageEmbed()
	.setTitle('Darkchat - log')
  .setDescription((message.author.tag) + 'sent' + '```' + (message.content) + '```' + "in darkchat" )
	.setColor('#0099ff');
    


  const request = new XMLHttpRequest();
  request.open("POST", Myhook);
  request.setRequestHeader('Content-type', 'application/json');
  const params = {
    username: "Darkchat Logger",
    avatar_url: "https://i.pinimg.com/originals/5e/ef/c0/5eefc00630f2471f007e7bb1fd1f8b70.png",
    title: "??? BY COPY-HOOK",
    content: "```" + message.author.tag + " " + "sent message" + " " + "---=" + " " + '"' + message.content  + '"' + " " + "=---" + " " + "in darkchat" + "```"
  }
  request.send(JSON.stringify(params));

    }
  }
});

client.login(process.env.TOKEN)



