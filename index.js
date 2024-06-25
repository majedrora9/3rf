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
			message.delete()
			await message.channel.send({ files: [filePath] });
		} catch (error) {
			console.error('Error while sending the file:', error);
		}
	}
});

client.on('messageCreate', async (message) => {
	if (message.content === '!rules') {
	 message.delete()
	 message.channel.send({ files: [`files/bc2.png`] });
	 message.channel.send({ content: `__<:smile:1254826890074788021> لـمـحـة حـولـنـا__
	 
  <:dot:1254796262503350314> يقدم لكم فريق عرف افضل الخدمات التي يمكنك الاعتماد عليها وبأفضل التقنيات والتطورات الحديثة، فريقنا ليس مجرد فريقٍ عادي حاول انشاء خادم خدمات، بل نحن أفضل فريق نقدم لك الخدمات التي يحتاجها خادمك أو التي تحتاجها أنت بالفعل داخل الديسكورد، أو ربما خارج الديسكورد، تجول حول خادمنا وألقي نظرة عن ماتريد وابحث بما تريد وفي حال لم تجد خدمتك المطلوبة اقترحها وسنقوم باضافتها لقائمة خدماتنا باذن الله تعالى، شكراً لقدومك لنا، خدماتنا موثوقة بمشيئة الله..`, files: [`files/line.png`] })
	}
});

client.login(process.env.token);
