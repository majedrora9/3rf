const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const { Client, Intents } = require('discord.js');

const client = new Client({ 
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILD_MEMBERS,
	],
});

app.get('/', (req, res) => {
	res.send('Hello world')
})

app.listen(port, () => {
	console.log(`the app is listening on port ${port}`)
})

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity('3RF', { type: 'PLAYING' });
});

client.on('messageCreate', async (message) => {
	if (message.content === 'خط') {
		const filePath = 'files/line.png';
		try {
			await message.delete()
			await message.channel.send({ files: [filePath] });
		} catch (error) {
			console.error('Error while sending the file:', error);
		}
	}
});

client.on('messageCreate', async (message) => {
	if (message.content === '!rules') {
	 message.delete()
	 message.channel.send({ files: [`files/rules.png`] });
	 message.channel.send({ content: `__<:staff:1254796187823898708> قـوانـيـن خـادمـنـا__
  <:dot:1254796262503350314> يجب على جميع الاعضاء ان يحترموا بعضهم البعض
  <:dot:1254796262503350314> يمنع التحريض على الكراهية
  <:dot:1254796262503350314> التزم بحقوق النشر كـ الروابط، الاساءة، الاستفزاز
  <:dot:1254796262503350314> لاتزعج الاخرين او طاقم الادارة
  <:dot:1254796262503350314> يمنع نشر الاعلانات، الروابط
  <:dot:1254796262503350314> التزم بالموضوعية ولاتنشر السياسة، او الاقتصاد
  <:dot:1254796262503350314> التزم بقوانين الديسكورد عامةً
  <:dot:1254796262503350314> لكل روم قانونه، احترمه، التزمه`, files: [`files/line.png`] })
	}
});

client.login(process.env.token);
