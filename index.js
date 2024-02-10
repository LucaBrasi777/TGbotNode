// import TelegramBot from 'node-telegram-bot-api';
// const payment_token = "5334985814:TEST:551862"
// const token = '6985342414:AAFxpkOhbpnMLBgpI_j9AX_jrHIuNwQrmug';
// const webAppUrl = 'https://biznewschannel.com/';
// //const webAppUrl2 = 'https://biznewschannel/';
// const bot = new TelegramBot(token, { polling: true });




// bot.on('message', async (msg) => {
//   const chatId = msg.chat.id;
//   const text = msg.text;

//   if (text === '/start') {
//     // Используйте keyboard для обычных кнопок
//     await bot.sendMessage(chatId, 'Wellcome to bot', {
//       reply_markup: {
//         keyboard: [
//           [{ text: 'Setting posting', web_app: { url: webAppUrl } }]
//         ]
//       }
//     });

    
    
//     await bot.sendMessage(chatId, 'Start', {
//       reply_markup: {
//         inline_keyboard: [
//           [{ text: 'Fill in the form', url: webAppUrl }]
//         ]
//       }
//     });
//   }


// //   if(msg?.web_app_data?.data){
// //     try{
// //       const data = JSON.parse(msg?.web_app_data?.data)
// //     await bot.sendMessage(chatId,'Thank you bro')
// //     await bot.sendMessage(chatId,'You country' + data?.country)
// //     await bot.sendMessage(chatId,'You language' + data?.language)
     
// //  setTimeout(async () => {
// //   await bot.sendMessage(chatId,'Gavor joba')
// //  },3000)


// //     } catch (e){
// //       console.log(e)
// //     }
   
// //   }
// });

// const getInvoice = (id) => {
//   const invoice = {
//     chat_id: 1002022447271, // Уникальный идентификатор целевого чата или имя пользователя целевого канала
//     provider_token: payment_token, // токен выданный через бот @SberbankPaymentBot 
//     start_parameter: 'get_access', //Уникальный параметр глубинных ссылок. Если оставить поле пустым, переадресованные копии отправленного сообщения будут иметь кнопку «Оплатить», позволяющую нескольким пользователям производить оплату непосредственно из пересылаемого сообщения, используя один и тот же счет. Если не пусто, перенаправленные копии отправленного сообщения будут иметь кнопку URL с глубокой ссылкой на бота (вместо кнопки оплаты) со значением, используемым в качестве начального параметра.
//     title: 'InvoiceTitle', // Название продукта, 1-32 символа
//     description: 'InvoiceDescription', // Описание продукта, 1-255 знаков
//     currency: 'RUB', // Трехбуквенный код валюты ISO 4217
//     prices: [{ label: 'Invoice Title', amount: 100 * 100 }], // Разбивка цен, сериализованный список компонентов в формате JSON 100 копеек * 100 = 100 рублей
//     photo_url: 'https://s3.eu-central-1.wasabisys.com/ghashtag/JavaScriptBot/Unlock.png', // URL фотографии товара для счета-фактуры. Это может быть фотография товара или рекламное изображение услуги. Людям больше нравится, когда они видят, за что платят.
//     photo_width: 500, // Ширина фото
//     photo_height: 281, // Длина фото
//     payload: { // Полезные данные счета-фактуры, определенные ботом, 1–128 байт. Это не будет отображаться пользователю, используйте его для своих внутренних процессов.
//       unique_id: `${id}_${Number(new Date())}`,
//       provider_token: payment_token 
//     }
//   }

//   return invoice
// }





// import TelegramBot from 'node-telegram-bot-api';
// import stripe from 'stripe';

// const STRIPE_SECRET_KEY = 'sk_test_51OazU7CEAUiVgq2v9f36loao1miREJDYbgb7nrsoQkm7wyO7irQqNU0j6STMvM8D5oF2HkSralI1SyfcbfNgRJ9X00vvJkSUO1';
// const stripeInstance = stripe(STRIPE_SECRET_KEY);

// const payment_token = "5334985814:TEST:551862";
// const token = '6985342414:AAFxpkOhbpnMLBgpI_j9AX_jrHIuNwQrmug';
// const webAppUrl = 'https://biznewschannel.com/';
// const bot = new TelegramBot(token, { polling: true });

// bot.on('message', async (msg) => {
//   const chatId = msg.chat.id;
//   const text = msg.text;

//   if (text === '/start') {
//     await bot.sendMessage(chatId, 'Welcome to bot', {
//       reply_markup: {
//         keyboard: [
//           [{ text: 'Setting posting', web_app: { url: webAppUrl } }]
//         ]
//       }
//     });

//     await bot.sendMessage(chatId, 'Start', {
//       reply_markup: {
//         inline_keyboard: [
//           [{ text: 'Fill in the form', url: webAppUrl }]
//         ]
//       }
//     });
//   }
// });

// bot.onText(/\/startpayment/, async (msg) => {
//     const chatId = msg.chat.id;
    
//     const session = stripe.checkout.sessions.create({
//         payment_method_types: ['crypto'],
//         line_items: [{
//             price_data: {
//                 currency: 'usd',
//                 product_data: {
//                     name: 'Product Name',
//                 },
//                 unit_amount: 1000,
//             },
//             quantity: 1,
//         }],
//         mode: 'payment',
//         success_url: 'https://biznewschannel.com',
//         cancel_url: 'https://goodnewsexpress.com',
//     });

//     bot.sendMessage(chatId, `Оплатите заказ по следующей ссылке: ${session.url}`);
// });

// bot.startPolling();
import TelegramBot from 'node-telegram-bot-api';
import stripe from 'stripe';

const STRIPE_SECRET_KEY = 'sk_test_51OazU7CEAUiVgq2v9f36loao1miREJDYbgb7nrsoQkm7wyO7irQqNU0j6STMvM8D5oF2HkSralI1SyfcbfNgRJ9X00vvJkSUO1';
const stripeInstance = stripe(STRIPE_SECRET_KEY);

const payment_token = "5334985814:TEST:551862";
const token = '6985342414:AAFxpkOhbpnMLBgpI_j9AX_jrHIuNwQrmug';
const webAppUrl = 'https://biznewschannel.com/';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === '/start') {
    await bot.sendMessage(chatId, 'Welcome to bot', {
      reply_markup: {
        keyboard: [
          [{ text: 'Setting posting', web_app: { url: webAppUrl } }]
        ]
      }
    });

    await bot.sendMessage(chatId, 'Start', {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Fill in the form', url: webAppUrl }]
        ]
      }
    });
  }
});

bot.onText(/\/paystandart/, async (msg) => {
    const chatId = msg.chat.id;
    
    const session = await stripeInstance.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
            price_data: {
                currency: 'usd',
                product_data: {
                    name: 'Product Name',
                },
                unit_amount: 1000,
            },
            quantity: 1,
        }],
        mode: 'payment',
        success_url: 'https://biznewschannel.com/good',
        cancel_url: 'https://biznewschannel.com/no',
    });

    bot.sendMessage(chatId, `Оплатите заказ по следующей ссылке: ${session.url}`);
});

bot.startPolling();
