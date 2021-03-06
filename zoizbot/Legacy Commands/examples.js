
/*
 * This is for your reference. this is how we did it first
 * check commit 459446526602d35af9cec596b552cddeeac4c992
 * 
 * we now use a "handler" and keep it organised with command files
 * 
 */

zoizbot.on("message", async message => {

    if (message.author.bot) return; // dont listen to other bots
    if (!message.content.startsWith(config.prefix)) return; // dont waste time listening to non prefix messages

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g); // cut the arguments away from the command.
    const command = args.shift().toLowerCase();


    //ping pong, example from documentation
    if (command === "ping") {
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(zoizbot.ws.ping)}ms`);
    }

    //simple kick command
    if (command === "kick") {
        //if (!message.member.roles.cache.some(r => ["Administrator", "Moderator"].includes(r.name))) checks the roles for permissions
        if (!message.member.hasPermission("KICK_MEMBERS"))
            return message.reply("Sorry, you don't have permissions to use this!");

        let member = message.guild.member(message.mentions.users.first()) || message.mentions.members.first(args[0])
        if (!member)
            return message.reply("Please mention a valid member of this server");
        if (!member.kickable)
            return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");

        let KickReason = args.slice(1).join(' '); // slicing the arguments
        if (!KickReason) KickReason = "No reason provided";


        await member.kick(KickReason)
            .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`)); // now an adios moment
        message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${KickReason}`);

    }

    //simple ban command

    if (command === "ban") {
        if (!message.member.hasPermission("BAN_MEMBERS"))
            return message.reply("Sorry, you don't have permissions to use this!")

        let member = message.guild.member(message.mentions.users.first()) || message.mentions.members.first(args[0])

        if (!member)
            return message.reply("Please mention a valid member of this server")
        if (member.hasPermission("BAN_MEMBERS"))
            return message.reply("I cannot ban this user! Invalid Permissions")
        let banReason = args.join(" ").slice(22);
        if (!banReason) {
            banReason = "No reason provided"
        }

        member.ban({ reason: banReason })
        return message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${banReason}`)
    }

    //simple purge example command

    if (command === "purge") {
        const deleteCount = parseInt(args[0], 10);

        if (!deleteCount || deleteCount < 2 || deleteCount > 100)
            return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");

        const fetched = await message.channel.messages.fetch({ limit: deleteCount });
        message.channel.bulkDelete(fetched)
            .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
    }

    else return
});




