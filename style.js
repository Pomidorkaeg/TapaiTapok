function confirmWithdrawal() {
    const amount = document.getElementById('withdraw-amount').value;
    const method = document.getElementById('withdraw-method').value;
    const contact = document.getElementById('withdraw-contact').value;

    const maxAmount = (count / 100).toFixed(2); // Максимальная сумма для вывода

    localStorage.setItem('counter', count1); // It should be `count` instead of `count1`.


    // Проверка, что сумма не больше доступного баланса
    if (!amount || amount <= 0 || amount > maxAmount) { 
        alert('Пожалуйста, введите правильную сумму (не больше доступного баланса).');
        return;
    }

    // Проверка номера телефона или карты
    const phoneOrCardPattern = /^[0-9]{10,16}$/; // Регулярное выражение для номера телефона или карты (10-16 цифр)
    if (!phoneOrCardPattern.test(contact)) {
        alert('Пожалуйста, введите правильный номер телефона или карты (10-16 цифр).');
        return;
    }

    // Если все проверки пройдены, показываем кнопку подтверждения перевода
    document.getElementById('confirmation').style.display = 'block';
    document.getElementById('modal').style.display = 'none';
}
// Обработчик для скрытия клавиатуры при нажатии Enter
document.getElementById('promo-code-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        // Убираем фокус с поля ввода, чтобы закрыть клавиатуру
        this.blur();
        validatePromoCode(); // Пытаемся ввести промокод
    }
});



// Функция для обновления счетчика и отображения рублевого эквивалента
function updateTonCounter() {
    const rubles = (count / 100).toFixed(2);
    document.getElementById('ton-counter').innerText = rubles;
}
const TELEGRAM_BOT_TOKEN = '7438872799:AAGCUTf5cvb_4mTDxScMbBWlrYhPsk2gxio';  // Ваш токен бота
const CHANNEL_USERNAME = '@vaegor';  // Username канала в Telegram

// Функция для проверки подписки пользователя на канал
async function checkSubscription(userId) {
const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getChatMember?chat_id=${CHANNEL_USERNAME}&user_id=${userId}`);
const data = await response.json();

// Проверяем статус пользователя
if (data.ok && data.result.status === 'member') {
    return true;  // Пользователь подписан
} else {
    return false;  // Пользователь не подписан
}
}

// Функция для добавления 250 коинов на счет
async function addTelegramBonus(userId) {
// Проверяем подписку
const isSubscribed = await checkSubscription(userId);

if (isSubscribed) {
    // Получаем текущий счет
    let count = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;

    // Добавляем 250 коинов (2.5 рубля) на счет
    let newCount = count + 250;
    localStorage.setItem('counter', newCount);  // Сохраняем новый счет в localStorage

    // Обновляем счет на странице
    document.getElementById('counter').innerText = newCount;
    updateTonCounter();  // Обновляем рублевый эквивалент

    alert('Вы подписались на канал! Вам начислено 250 коинов (2.5 рубля).');
} else {
    alert('Вы не подписаны на канал. Пожалуйста, подпишитесь и попробуйте снова.');
}
}
