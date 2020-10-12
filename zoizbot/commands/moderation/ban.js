exports.run = async (zoizbot, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS"))
            return message.reply("Sorry, you don't have permissions to use this!")

        let member = message.guild.member(message.mentions.users.first()) || message.mentions.members.first(args[0])

        if (!member)
            return message.reply("Please mention a valid member of this server")
        if (message.member.hasPermission("BAN_MEMBERS"))
            return message.reply("I cannot ban this user! Invalid Permissions")
        let banReason = args.join(" ").slice(22);
        if (!banReason) {
            banReason = "No reason provided"
        }

        member.ban({ reason: banReason })
        return message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${banReason}`)
}