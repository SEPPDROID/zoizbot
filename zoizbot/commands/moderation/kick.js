exports.run = async (zoizbot, message, args) => {
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