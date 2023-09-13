// Підключення функціоналу "Чертоги Фрілансера"
// Підключення списку активних модулів

const scrollContent = document.querySelector(".hero__right");

// Функція для автоматичної прокрутки контенту до низу
function scrollToBottom() {
  scrollContent.scrollTop = scrollContent.scrollHeight;
}

// Викликаємо функцію одразу після завантаження сторінки та при оновленні контенту
scrollToBottom();
const btnAll = document.querySelector(".benefit__button-all");
if (btnAll) {
  btnAll.addEventListener("click", (e) => {
    e.preventDefault();
    btnAll.closest(".benefit").classList.add("benefit--active");
  });
}
// window.addEventListener("scroll", (e) => {
//   console.log(window.scrollY);
//   const photoBlock = document.querySelector(".hero__right");
//   if (photoBlock) {
//     photoBlock.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }
// });
