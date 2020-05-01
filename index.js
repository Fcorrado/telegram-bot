const TelegramBot = require("node-telegram-bot-api");
const token = "1133223306:AAH9c3cWzBqoE5dqxyy4j6FC-5v6W5J2-mQ";

const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
	"gato el que lee";

});

bot.on("message", (msg) => {
	var Hi = "hola";
	if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
		bot.sendMessage(msg.chat.id, "Gatito el que lee");
	}
});

bot.on("message", (msg) => {
	var maurito = "maurito";
	if (msg.text.toString().toLowerCase().indexOf(maurito) === 0) {
		bot.sendMessage(msg.chat.id, "Es muy bonito");
	}
});

bot.on("message", (msg) => {
	var camit = "camit";
	if (msg.text.toString().toLowerCase().indexOf(camit) === 0) {
		bot.sendMessage(msg.chat.id, "Es muy bonita");
	}
});

bot.on("message", (msg) => {
	var sakurita = "sakurita";
	if (msg.text.toString().toLowerCase().indexOf(sakurita) === 0) {
		bot.sendMessage(msg.chat.id, "Es muy bonita");
	}
});

bot.on("message", (msg) => {
	var bye = "bye";
	if (msg.text.toString().toLowerCase().indexOf(bye) === 0) {
		bot.sendMessage(msg.chat.id, "Chau gato");
	}
});

bot.on("message", (msg) => {
	var gatitos = ["maurito", "camit", "sakurita", "flor"];
	if (msg.text.toString().toLowerCase().indexOf(gatitos) === 0) {
		bot.sendMessage(msg.chat.id, "Lista de gatos");
	}
});
