const modal = document.getElementById("myModal");
const thanksModal = document.getElementById("thanks");
const closeModalBtn = document.getElementById("closeModal");
const modalForm = document.getElementById("modalForm");
const categoryField = document.getElementById("categoryField");
const shopField = document.getElementById("shopField");
const modalTitle = document.getElementById("modalTitle");
const thanksBtn = document.querySelector(".thanks-btn");

const openModalButtons = document.querySelectorAll(".open-modal-btn");

function openModal(event) {
  const category = event.currentTarget.getAttribute("data-category");
  const shopName = event.currentTarget.getAttribute("data-shop") || "";

  categoryField.value = category;
  shopField.value = shopName;

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

  const formData = new FormData(modalForm);
  const category = formData.get("category");
  const shop = formData.get("shop");

  thanksModal.style.display = "flex";

  thanksBtn.addEventListener("click", function (e) {
    e.preventDefault();
    thanksModal.style.display = "none";
  });

  closeModal();
  modalForm.reset();
  categoryField.value = "";
  shopField.value = "";
  modalTitle.textContent = "Заголовок модального окна";
});
