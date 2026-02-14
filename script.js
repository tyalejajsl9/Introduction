const greetingEl = document.getElementById("greeting");
const subtitleEl = document.getElementById("subtitle");
const keyboardIcon = document.querySelector('.keyboard-icon');

window.history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

const greetings = [
  "Hello 👋",
  "こんにちは 👋",
  "你好 👋",
  "Hola 👋",
  "Bonjour 👋",
  "Ciao 👋",
  "Olá 👋",
  "Привет 👋",
  "안녕하세요 👋"
];


function showGreeting(i) {
  if (i >= greetings.length) {
    subtitleEl.classList.add("show");
    keyboardIcon.style.display = 'block';
    setTimeout(() => {
      keyboardIcon.classList.add('show');
      keyboardIcon.classList.remove('hide');
    }, 1000);

    setTimeout(() => {
      document.body.classList.add("scroll-enabled");
    }, 1600);

    return;
  }

  greetingEl.classList.remove("fade-up");
  void greetingEl.offsetWidth;
  greetingEl.classList.add("fade-up");
  greetingEl.textContent = greetings[i];

  setTimeout(() => {
    showGreeting(i + 1);
  }, 1000);
}

window.addEventListener('load', () => {
  window.scrollTo(0, 0);
  setTimeout(() => {
    showGreeting(0);
  }, 200);
});

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    keyboardIcon.classList.add('hide');
    keyboardIcon.classList.remove('show');
  } else {
    keyboardIcon.classList.remove('hide');
    keyboardIcon.classList.add('show');
  }

  lastScrollY = currentScrollY;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, {
  threshold: 0.1
});

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  observer.observe(card);
});

const scrollIcon = document.getElementById("scrollIcon");

scrollIcon.addEventListener("click", () => {
  const nextSection = document.querySelector(".card");
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
});

