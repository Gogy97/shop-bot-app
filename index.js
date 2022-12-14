const TelegramBot = require('node-telegram-bot-api')

const token = "5567204987:AAFJ3UL1M6KsOAx3a4ppv-I113kv4T-i3so";

const webAppUrl = 'https://delightful-madeleine-ec1dcf.netlify.app/'


const bot = new TelegramBot(token, {polling: true});


bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text

    if (text === '/start') {
        await bot.sendMessage(chatId, 'Ниже появится кнопк заполни форму', {
            reply_markup: {
                keyboard: [
                    [{text: "Заполнить форму", web_app: {url: webAppUrl + '/form'}}]
                ]


            }
        })

        await bot.sendMessage(chatId, 'Заходи в наш интернет магазин', {
            reply_markup: {
                inline_keyboard: [
                    [{text: "Сделать заказ", web_app: {url: webAppUrl}}]
                ]
            }


        })

    }
    if (msg?.web_app_data?.data) {
        try {
            const data = JSON.parse(msg?.web_app_data?.data)

            await bot.sendMessage(chatId,'спасибо за обратную связь')
            await bot.sendMessage(chatId,'ваша страна ' + data?.country)
            await bot.sendMessage(chatId,'ваша улица ' + data?.street)
            setTimeout(async () => {
                await bot.sendMessage('Вся информация в этом чате')
            }, 3000)
        } catch (e) {
            console.log(e)
        }
    }



});
