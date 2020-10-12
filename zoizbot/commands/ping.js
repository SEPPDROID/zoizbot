// ping pong example from the documentation with async await
// make all the calculations you want and change the message
exports.run = async(zoizbot, message, args) => {
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(zoizbot.ws.ping)}ms`);
}