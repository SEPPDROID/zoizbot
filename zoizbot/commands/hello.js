/*
 *  Message example. When you >hello it will say hello to you 
 *  Added the reply so you dont have to get the member declaration but let the "discord.js" handle it
 *  Check out readme for more information
 *  catching errors is indeed the preferred way of debugging your commands. Nodejs is terrible in debugging
 *  make sure you use a decent IDE
 *  
 */
exports.run = (zoizbot, message, args) => {
    message.channel.send("Hello!").catch(console.error);
    message.reply("Thank you for waking me up, i nearly fell asleep :)");
}