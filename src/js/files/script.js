// Підключення функціоналу "Чертоги Фрілансера"
// Підключення списку активних модулів

const scrollContent = document.querySelector(".hero__right");

// Функція для автоматичної прокрутки контенту до низу
function scrollToBottom() {
  scrollContent.scrollTop = scrollContent.scrollHeight;
}

// Викликаємо функцію одразу після завантаження сторінки та при оновленні контенту
scrollToBottom();
