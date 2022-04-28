const header = document.querySelector(".header");
const liContact = document.querySelector("#contactID");

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
const arrayContact = [btnContact, liContact];
console.log(btnContact, liContact);
arrayContact.forEach((contact) => {
  contact.addEventListener("click", (e) => {
    document.querySelector("form").scrollIntoView({ behavior: "smooth" });
  });
});
