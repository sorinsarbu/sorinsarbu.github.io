// console.info(2);
// console.debug(2 + 3);
// console.warn(6 * 3 - 10);
// console.error("started");

var myName = "Sorin";
var age = 42;
// console.info("My name is " + myName = ", I'm " + age + " years old.");
age = 30;
// console.info("My name is " + myName = ", I'm " + age + " years old.");
age = 31;
// console.info("My name is " + myName = ", I'm " + age + " years old.");

function hide(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}

function show(id) {
  console.warn("show", id);
  document.getElementById(id).style.display = "block";
}

var activePage = "skills";

function showPage(nextPage) {
  console.warn("change", activePage, "to", nextPage);
  hide(activePage);
  show(nextPage);
  document.getElementById("menu-" + activePage).classList.remove("active");
  document.getElementById("menu-" + nextPage).classList.add("active");
  activePage = nextPage;
}

function initEvents() {
  document
    .getElementById("top-menu-bar")
    .addEventListener("click", function (e) {
      if (e.target.matches("a")) {
        var id = e.target.id.substring(5);
        console.warn("click pe menu", id, e.target.matches("a"));
        showPage(id);
      }
    });
}

showPage(activePage);
initEvents();
