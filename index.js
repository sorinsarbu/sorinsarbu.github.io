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
  document
    .querySelector(`a[data-page=${activePage}]`)
    .classList.remove("active");
  document.querySelector(`a[data-page=${nextPage}]`).classList.add("active");
  activePage = nextPage;
}

function initEvents() {
  document
    .getElementById("top-menu-bar")
    .addEventListener("click", function (e) {
      if (e.target.matches("a")) {
        var id = e.target.getAttribute("data-page");
        showPage(id);
      }
    });
}

showPage(activePage);
initEvents();

function displaySkills(skills) {
  console.info("displaySkills");

  var ul = document.querySelector("#skills ul");
  var skills = [
    { name: "js", endorcements: 15, favorite: true },
    { name: "css", endorcements: 5, favorite: true },
    { name: "html", endorcements: 10, favorite: false },
  ];
  skills.sort(function (a, b) {
    return b.endorcements - a.endorcements;
    // if (a.name.toLowerCase < b.name.toLowerCase) {
    //   return -1;
    // }
    // if (a.name.toLowerCase > b.name.toLocaleLowerCase) {
    //   return 1;
    // }
    // return 0;
  });

  console.info(skills);
  for (var i = 0; i < skills.length; i = i++) {
    ul.innerHTML +=
      "<li>${skills[i].name} - ${skills[i].endorcements} - <li>${skills[i].favorite}</li>";
  }
}

function loadSkills() {
  fetch("skills.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (skills) {
      console.warn("am primit sau nu?", skills);
      displaySkills(skills);
    });
}
loadSkills();
