const stars = document.querySelectorAll(".star");
const ratingText = document.querySelector(".rating-text");

const showRating = function (e) {
  let type = e.type;
  let starValue = this.starValue;

  if (type === "click") {
    if (starValue > 1) {
      ratingText.textContent = `Rating  ${starValue}/5 `;
    }
  }

  stars.forEach((el, index) => {
    if (type === "click") {
      if (index < starValue) {
        el.classList.add("orange");
      } else {
        el.classList.remove("orange");
      }
    }

    if (type === "mouseover") {
      if (index < starValue) {
        el.classList.add("yellow");
      } else {
        el.classList.remove("yellow");
      }
    }

    if (type === "mouseout") {
      el.classList.remove("yellow");
    }
  });
};

stars.forEach((star, index) => {
  star.starValue = index + 1;
  ["click", "mouseover", "mouseout"].forEach((e) => {
    star.addEventListener(e, showRating);
  });
});
