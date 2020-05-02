const TelegramBot = require("node-telegram-bot-api");
const token = "1133223306:AAH9c3cWzBqoE5dqxyy4j6FC-5v6W5J2-mQ";
const https = require("https");

const bot = new TelegramBot(token, { polling: true });

function getMeme(callback) {
	var data2;
	https
		.get("https://meme-api.herokuapp.com/gimme", (resp) => {
			let data = "";

			// A chunk of data has been recieved.
			resp.on("data", (chunk) => {
				data += chunk;
			});

			// The whole response has been received. Print out the result.
			resp.on("end", () => {
				console.log(JSON.parse(data).url);
				data2 = JSON.parse(data).url;
				callback(data2);
			});
		})
		.on("error", (err) => {
			console.log("Error");
			console.log("Error: " + err.message);
		});
}

bot.on("message", (msg) => {
	var meme = "meme";
	if (msg.text.toString().toLocaleLowerCase().indexOf(meme) === 0) {
		getMeme(function (elMeme) {
			let epoch = new Date().getTime();
			bot.sendPhoto(msg.chat.id, elMeme + "?time=" + epoch);
		});
	}
});

bot.on("polling_error", (err) => console.log(err));
