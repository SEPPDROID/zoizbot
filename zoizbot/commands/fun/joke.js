exports.run = async (zoizbot, message, args) => {
	const Discord = require('discord.js'); // for some reason the jokeembed build needs discord.js defined again. whatever
	var http = require("https");

	const jokeconfig = require("./apiconfigs/joke.json"); // keep the code clean and save the variables in a config file

	const jokeloader = new Discord.MessageEmbed() // a litle feedback for if the api is slow, or the server's connection. with a nice embed for the loading joke message 
		.setColor('#0099ff')
		.setDescription("Requesting a funny joke...")

	const joke = await message.channel.send(jokeloader); // send the loading embed

	var req = http.request(jokeconfig, function (res) { // requesting the "joke" API and pleuring it in a chunk
		var chunks = [];

		res.on("data", function (chunk) {
			chunks.push(chunk);
		});

		res.on("end", function () {
			const body = Buffer.concat(chunks);
			//console.log(body.toString()); // just a debug to see if the api be spitting the joke. Only logging body would lead to unreadable bytes, so we use toString. Simple and easy!
			const jokebody = (JSON.parse(body.toString())); // i cant belive a JSON.parse worked actually // i like saving every thing in a const, i wish that worked with my parents marriage...

			//message.channel.send(jokebody.content); // Check if our joke JSON parses correctly by only displaying the "content".

			// the jokes arent that funny so lets make it goooooodlooking with a simple embed we also used in embeddedkick example

			const jokeembed = new Discord.MessageEmbed()
				.setColor('#0099ff')
				.setTitle('Joke API')
				.setURL('https://rapidapi.com/LemmoTresto/api/joke3/details')
				.setDescription(jokebody.content)
				.addFields(
					{ name: 'Joke upvotes', value: jokebody.upvotes, inline: true },
					{ name: 'Joke downvotes', value: jokebody.downvotes, inline: true },
				)
				.setTimestamp()
				.setFooter(`joke API example - Joke id: ${jokebody.id}`);

			joke.edit(jokeembed); // finally edit the jokes content
		});
	});

	req.end();

}