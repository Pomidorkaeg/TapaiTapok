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




