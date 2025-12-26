const modal = document.getElementById("myModal");
const closeModalBtn = document.getElementById("closeModal");
const modalForm = document.getElementById("modalForm");
const categoryField = document.getElementById("categoryField");
const shopField = document.getElementById("shopField");
const modalTitle = document.getElementById("modalTitle");

const openModalButtons = document.querySelectorAll(".open-modal-btn");

function openModal(event) {
  // Получаем категорию и название магазина из data-атрибутов кнопки
  const category = event.currentTarget.getAttribute("data-category");
  const shopName = event.currentTarget.getAttribute("data-shop") || "";

  // Устанавливаем значение категории и магазина в скрытые поля формы
  categoryField.value = category;
  shopField.value = shopName;

  // Устанавливаем заголовок в h2 в зависимости от категории
  if (category === "1" && shopName) {
    modalTitle.textContent = `Получить презентацию франщизы: ${shopName}`;
  } else {
    modalTitle.textContent = "Отправьте заявку на размещение франшизы";
  }

  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

openModalButtons.forEach((button) => {
  button.addEventListener("click", openModal);
});

closeModalBtn.addEventListener("click", closeModal);

modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

modalForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Получаем данные из формы
  const formData = new FormData(modalForm);
  const category = formData.get("category");
  const shop = formData.get("shop");

  // В реальном приложении здесь отправка на сервер
  alert(
    `Форма отправлена!\n` +
      `Категория: ${category === "1" ? "Карточка товара" : "Размещение"}\n` +
      `${shop ? `Магазин: ${shop}\n` : ""}` +
      `Имя: ${
        modalForm.querySelector('input[type="text"]').value || "не указано"
      }\n` +
      `Email: ${
        modalForm.querySelector('input[type="email"]').value || "не указано"
      }\n` +
      `Сообщение: ${modalForm.querySelector("textarea").value || "не указано"}`
  );

  closeModal();
  modalForm.reset();
  // Сбрасываем скрытые поля
  categoryField.value = "";
  shopField.value = "";
  // Сбрасываем заголовок
  modalTitle.textContent = "Заголовок модального окна";
});
