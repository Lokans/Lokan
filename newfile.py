import telebot
from telebot import types

bot = telebot.TeleBot("7899966999:AAFaQeVG7ZZWoE6Fo1NoR7yJmmgK_38u-Cs")

data = {
    "5365425194": {"UserName": "youcef1", "Téléphone": "0551976603", "Email": "mafdamafiya@gmail.com", "code": "12345", "Sold": "2000 Da"},
	"0551976603": {"UserName": "youcef1", "Téléphone": "0551976603", "Email": "mafdamafiya@gmail.com", "code": "12345", "Sold": "2700 Da"},
}

@bot.message_handler(commands=['start', 'help'])
def send_welcome(message):
    bot.reply_to(message, f"Welcome {message.from_user.full_name} your ID {message.from_user.id}")

@bot.message_handler(func=lambda message: True)
def echo_all(message):
    code = message.text
    if code in data:
        product_data = data[code]
        response = f"UserName: {product_data['UserName']}\n"
        response += f"Téléphone: {product_data['Téléphone']}\n"
        response += f"Email: {product_data['Email']}\n"
        response += f"Code: {product_data['code']}\n"
        response += f"Solde: {product_data['Sold']}"
        bot.reply_to(message, response)
    else:
        bot.reply_to(message, "Erreur:\nLe numéro de téléphone n'est pas enregistré ")

bot.infinity_polling()