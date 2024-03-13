import TelegramBot from "node-telegram-bot-api";
//const testKey = "6469a721bede21a8ed89";
import stripe from "stripe";
import axios from "axios";
// import { config } from "dotenv";
// config();
const botToken = '6985342414:AAFxpkOhbpnMLBgpI_j9AX_jrHIuNwQrmug';
const bot = new TelegramBot(botToken);

const webAppUrl = "https://biznewschannel.com";

const webhookUrl = `https://api.telegram.org/bot${botToken}/setWebhook`;
const serverUrl = 'https://4v-news-telegram-bot.azurewebsites.net/';



axios.post(webhookUrl, { url: serverUrl })
  .then(response => {
    console.log('Вебхук успешно установлен:', response.data);
  })
  .catch(error => {
    console.error('Ошибка при установке вебхука:', error);
  });


  bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === "/start") {
    await bot.sendMessage(
      chatId,
      `<i>Вас приветствует</i> <b>SettingNewsBot - бот для постинга</b><i> последних новостей ,публикаций и статей </i> <b><a href="https://biznewschannel.com/video">подробнее на сайте</a></b>`,
      {
        parse_mode: "HTML",
        reply_markup: {
          keyboard: [
            [
              { text: "🌐 Оплата криптой" },
              { text: "📰 Постинг", web_app: { url: webAppUrl } },
            ],
            [{ text: "💳 Оплатить стандарт" }],
            [{ text: "🔍 Запрос к API Crypto Pay" }],

            [{ text: "Создать счет", callback_data: "create_invoice" }],

            [{ text: "Закрыть" }],
          ],
        },
      }
    );
  }
});

// bot.on("callback_query", async (callbackQuery) => {
//   const chatId = callbackQuery.message.chat.id;
//   const data = callbackQuery.data;

//   if (data === "pay_standard") {
//     // Здесь вызывайте функцию или код для оплаты стандартного пакета
//     // Например, вызов функции payStandard()
//     await bot.answerCallbackQuery(callbackQuery.id, { text: "Оплата стандартного пакета" });
//   } else if (data === "api_request") {
//     // Вызов функции для выполнения запроса к API Crypto Pay
//     await makeApiRequest(chatId);
//     await bot.answerCallbackQuery(callbackQuery.id, { text: "Запрос к API Crypto Pay" });
//   }
// });

// Функция для выполнения запроса к API Crypto Pay

// async function makeApiRequest(chatId) {
//   try {
//     const response = await axios.get("https://fake-api-for-testing.com/getMe", {
//       headers: {
//         'Crypto-Pay-API-Token': '158118:AAwsLcGqviK9MwvLOD8TCtwZqllzbeXLXYL',
//       },
//     });

//     // Обработка успешного ответа
//     await bot.sendMessage(chatId, `Ответ от API Crypto Pay: ${JSON.stringify(response.data)}`);
//   } catch (error) {
//     console.log(error)
//     await bot.sendMessage(chatId, `Ошибка при запросе к API Crypto Pay: ${error.message}`);
//   }
// }

// async function createInvoice() {
//   try {
//     const response = await axios.post("https://fake-api-for-testing.com/createInvoice", {
//       asset: 'USDT',
//       amount: '10.00',
//       currency_type: 'crypto',
//       description: 'Оплата заказа',
//     }, {
//       headers: {
//         'Crypto-Pay-API-Token': '158118:AAwsLcGqviK9MwvLOD8TCtwZqllzbeXLXYL',
//         'Content-Type': 'application/json',
//       },
//     });

// Обработка успешного ответа
//     console.log('Создан счет:', response.data);
//   } catch (error) {
//     // Обработка ошибок
//     console.error('Ошибка при создании счета:', error.message);
//   }
// }

// // Вызов функции для создания счета
// createInvoice();

//STRIPE

const STRIPE_SECRET_KEY =
  "sk_test_51OazU7CEAUiVgq2v9f36loao1miREJDYbgb7nrsoQkm7wyO7irQqNU0j6STMvM8D5oF2HkSralI1SyfcbfNgRJ9X00vvJkSUO1";
const stripeInstance = stripe(STRIPE_SECRET_KEY);

//const payment_token = "5334985814:TEST:551862";

//STRIPE STARDANT
bot.onText(/\/paystandart/, async (msg) => {
  const chatId = msg.chat.id;

  const session = await stripeInstance.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Product Name",
          },
          unit_amount: 1000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "https://biznewschannel.com/good",
    cancel_url: "https://biznewschannel.com/no",
  });

  bot.sendMessage(
    chatId,
    `<i>Оплатите пакет</i> <b>Cтандарт</b> <i>по следующей ссылке:</i>${session.url}`,
    { parse_mode: "HTML" }
  );
});
//STRIPE BUSINESS
bot.onText(/\/paybusiness/, async (msg) => {
  const chatId = msg.chat.id;

  const session = await stripeInstance.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Product Name",
          },
          unit_amount: 1000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "https://biznewschannel.com/good",
    cancel_url: "https://biznewschannel.com/no",
  });

  bot.sendMessage(
    chatId,
    `<i>Оплатите пакет</i> <b>Бизнес</> <i>по следующей ссылке:</i>${session.url}`,
    { parse_mode: "HTML" }
  );
});
//STRIPE PREMIUM
bot.onText(/\/paypremium/, async (msg) => {
  const chatId = msg.chat.id;

  const session = await stripeInstance.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Product Name",
          },
          unit_amount: 1000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "https://biznewschannel.com/good",
    cancel_url: "https://biznewschannel.com/no",
  });

  bot.sendMessage(
    chatId,
    `<i>Оплатите пакет </i><b>Премиум</b><i> по следующей ссылке:</i>${session.url}`,
    { parse_mode: "HTML" }
  );
});

bot.startPolling();
