const burgerMenu = document.querySelector(".burgerIcon");
const navigation = document.querySelector("nav");
burgerMenu.addEventListener("click", () => {
  navigation.classList.toggle("navigationActive");
});
