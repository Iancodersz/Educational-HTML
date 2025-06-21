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

const greetings = ["• Hello!","• Hello!", "• Oi ya!", "• Hola!", "• Bonjour!", "• Ciao", "• Guten Tag!", "• 안녕하세요", "• مرحبًا"];
    const textElement = document.querySelector(".hello-text");
    const preloader = document.querySelector(".preloader");
    const mainContent = document.querySelector(".main-content");

    let index = 0;

    function changeText() {
      textElement.classList.remove("show");

      setTimeout(() => {
        index = (index + 1) % greetings.length;
        textElement.textContent = greetings[index];
        textElement.classList.add("show");
      }, 500);
    }

    textElement.classList.add("show");
    let interval = setInterval(changeText, 500);

    setTimeout(() => {
      clearInterval(interval);
      preloader.classList.add("fade-out");
      mainContent.style.display = "block";
    }, 500 * (greetings.length));
