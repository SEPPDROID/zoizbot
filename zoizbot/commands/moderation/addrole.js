//simple add role to user command.
// im done. im not going to finish it, Adios see you in another project
exports.run = async (zoizbot, message, args) => {

    if (!message.member.hasPermission("MANAGE_ROLES"))
        return message.reply("Sorry, you don't have permissions to use this!")

    let member = message.mentions.members.first();
    let role = message.mentions.roles.first();

    if (!member)
        return message.reply("Please mention a valid member of this server");
    if (!role || role.length < 1)
        return message.reply("Please provide the role you want to add.");
    
    member.roles.add(role).catch(console.error);

    // TODO: catch the errors and reply . cant be bothered at the moment

    //member.roles.remove(role).catch(console.error); //remove

}