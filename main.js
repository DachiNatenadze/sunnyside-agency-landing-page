const burgerMenu = document.querySelector(".burgerIcon");
const navigation = document.querySelector(".navburger");
burgerMenu.addEventListener("click", () => {
  navigation.classList.toggle("navigationActive");
});
