const divs = document.querySelectorAll("div");

console.log(divs);

// if window scroll down where the pageYoff > the size of div
// we add template;
window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  divs.forEach((div) => {
    const divTop = div.getBoundingClientRect().top;

    if (divTop < triggerBottom) {
      div.classList.add("show");
    } else {
      div.classList.remove("show");
    }
  });
}

checkBoxes();
