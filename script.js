const countries = document.querySelector(".countries");
const ul = countries.querySelectorAll("ul"); //get all 'ul' from 'countries' element

for (const element of ul) {
  element.classList.add("hide"); //use 'For...of' loop in order to each element in <ul> has class hide(from CSS)
}

countries.addEventListener("click", g, false);
function g(e) {
  if (e.target.tagName != "SPAN") return; // when we click on element with 'span' tag -> retutn(doing nothing)

  let childrenContainer = e.target.parentNode.querySelectorAll("ul"); //when we click on parents element we get all his children elements
  if (!childrenContainer) return;

  for (const element of childrenContainer) {
    if (element.classList.contains("show")) {
      element.classList.remove("show");
      element.classList.add("hide");
    } else {
      if (element.parentNode !== e.target.parentNode) return;
      element.classList.remove("hide");
      element.classList.add("show");
    }
  }
}
