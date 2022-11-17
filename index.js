const TelegramBot = require('node-telegram-bot-api')

const token ="5567204987:AAFJ3UL1M6KsOAx3a4ppv-I113kv4T-i3so";

const webAppUrl = 'https://google.com.ua'
const bot = new TelegramBot(token, {polling: true});


bot.on('message', async(msg) => {
    const chatId = msg.chat.id;
    const text = msg.text

    if(text === '/start'){
        await bot.sendMessage(chatId,'Ниже появится кнопк заполни форму',{
            reply_markup:{
                keyboard:[
                    [{text: "Заполнить форму", web_app:{url:webAppUrl}}]
                ]


            }
        })

        await bot.sendMessage(chatId,'Заходи в наш интернет магазин',{
            reply_markup:{
                inline_keyboard:[
                    [{text: "Сделать заказ", web_app:{url:webAppUrl}}]
                ]


            }
        })
    }



});