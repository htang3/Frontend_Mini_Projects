const header = document.querySelector(".header");

window.addEventListener("scroll", scrollNav);
function scrollNav() {
  if (window.scrollY > header.offsetHeight + 150) {
    header.classList.add("active");
    console.log(header.classList);
  } else {
    header.classList.remove("active");
  }
}
const btnContact = document.querySelector("#contact");

btnContact.addEventListener("click", (e) => {
  document.querySelector("form").scrollIntoView({ behavior: "smooth" });
});
