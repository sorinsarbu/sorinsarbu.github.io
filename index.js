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

function hideAllPages() {
  hide("skills");
  hide("projects");
  hide("languages");
  hide("home");
}

var activePage = "home";

function showPage(id) {
  console.warn("please show me this page", id);
  hideAllPages();
  show(id);
  document.getElementById("menu-" + activePage).classList.remove("active");
  document.getElementById("menu-" + id).classList.add("active");
  activePage = id;
}

showPage(activePage);
