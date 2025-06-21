function toggleDropdownMain() {
  const menu = document.getElementById("dropdown-menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

window.onclick = function (event) {
  if (!event.target.matches('.dropdown-button')) {
    const menu = document.getElementById("dropdown-menu");
    if (menu && menu.style.display === "block") {
      menu.style.display = "none";
    }
  }
};

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function () {
  let items = document.querySelectorAll('.item');
  document.querySelector('.slide').appendChild(items[0]);
});

prev.addEventListener('click', function () {
  let items = document.querySelectorAll('.item');
  document.querySelector('.slide').prepend(items[items.length - 1]);
});