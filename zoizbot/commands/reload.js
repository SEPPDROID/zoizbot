/*
 * a command that reloads the command you have edited to memory
 * so you dont have to reboot the bot
 * good for testing, not so much for production
 * ive added the permission test, to make sure not everybody spams reload
 */
exports.run = (zoizbot, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR"))
        return message.reply("Sorry, you don't have permissions to use this!");
    if (!args || args.length < 1) return message.reply("Please provide the command name to reload.");
    const commandName = args[0];
    if (!zoizbot.commands.has(commandName)) {
        return message.reply("That command does not exist");
    }
    delete require.cache[require.resolve(`./${commandName}.js`)];
    zoizbot.commands.delete(commandName);
    const props = require(`./${commandName}.js`);
    zoizbot.commands.set(commandName, props);
    message.reply(`The command ${commandName} has been reloaded`);
};