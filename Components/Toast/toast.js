const toast = document.querySelector(".toast");
const toastBtn = document.querySelector(".btn-toast");
const toastDismissBtn = document.querySelector(".toast-dismiss");

const closeToast = () => {
  toast.classList.remove("active");
};

const openToast = () => {
  toast.classList.add("active");
};

toastBtn.addEventListener("click", () => {
  openToast();
  setTimeout(() => {
    closeToast();
  }, 3000);
});

toastDismissBtn.addEventListener("click", () => {
  closeToast();
});
