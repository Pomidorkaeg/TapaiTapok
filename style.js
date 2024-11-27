function confirmWithdrawal() {
    const amount = document.getElementById('withdraw-amount').value;
    const method = document.getElementById('withdraw-method').value;
    const contact = document.getElementById('withdraw-contact').value;

    const maxAmount = (count / 100).toFixed(2); // Максимальная сумма для вывода

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

// Проверка промокода
function validatePromoCode() {
    const promoCodeInput = document.getElementById('promo-code-input').value;
    const promoCodeMessage = document.getElementById('promo-code-message');

    if (promoCodeInput === "VALIDPROMO") {  // Пример проверочного промокода
        const addedAmount = 100; // Пример добавления валюты
        let count = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;
        count += addedAmount;
        localStorage.setItem('counter', count);
        updateTonCounter(count);  // Функция обновления валюты на экране
        promoCodeMessage.style.display = 'none';  // Скрываем сообщение об ошибке
        alert(`Промокод принят! Вы получили ${addedAmount} валюты.`);
    } else {
        promoCodeMessage.style.display = 'block';  // Показываем ошибку
    }
}

function updateTonCounter(count) {
    const rubles = (count / 100).toFixed(2);
    document.getElementById('ton-counter').innerText = rubles;
}

