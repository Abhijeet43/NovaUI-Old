const modal = document.querySelector(".modal");
const modalOpenBtn = document.querySelector(".modal-open");
const modalDismissBtn = document.querySelector(".modal-dismiss");
const modalOverlay = document.querySelector(".modal-overlay");

modalOpenBtn.addEventListener("click", () => {
  openModal();
});

modalDismissBtn.addEventListener("click", () => {
  closeModal();
});

const openModal = () => {
  modal.classList.add("active");
  modalOverlay.classList.add("active");
};

const closeModal = () => {
  modal.classList.remove("active");
  modalOverlay.classList.remove("active");
};
