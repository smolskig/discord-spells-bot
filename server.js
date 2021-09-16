require('dotenv').config();
const Discord = require('discord.js') 
const commandController = require('./Controller/commandController');

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    commandController(msg)
});

client.login(process.env.BOT_URL);