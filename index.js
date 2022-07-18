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

function hidePage(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}

function showPage(id) {
  console.warn("show", id);
  document.getElementById(id).style.display = "block";
}

function showHomePage() {
  hidePage("skills");
  hidePage("projects");
  hidePage("languages");
  showPage("home");
}

function showSkillsPage() {
  hidePage("home");
  hidePage("projects");
  hidePage("languages");
  showPage("skills");
}

function showProjectsPage() {
  hidePage("home");
  hidePage("skills");
  hidePage("languages");
  showPage("projects");
}

function showLanguagesPage() {
  hidePage("home");
  hidePage("skills");
  hidePage("projects");
  showPage("languages");
}

showHomePage();
