const hamMenu = document.querySelector(".menu");
const offMenu = document.querySelector(".offScreenMenu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offMenu.classList.toggle("active");
});


// Pre-Loader
window.addEventListener("load", () => {
  const loader = document.querySelector(".preloader");

  loader.classList.add("preloader_hidden");

  loader.addEventListener("transitionend", () => {
      document.body.removeChild("loader");
  })
});

// sticky Navigation
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Carousel
const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);

// Read More on About
let noOfCharac = 760;
let contents = document.querySelectorAll(".southlands_history");
contents.forEach(content => {
    if(content.textContent.length < noOfCharac){
        content.nextElementSibling.style.display = "none";
    }
    else{
        let displayText = content.textContent.slice(0,noOfCharac);
        let moreText = content.textContent.slice(noOfCharac);
        content.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
    }
});

function readMore(btn){
    let post = btn.parentElement;
    post.querySelector(".dots").classList.toggle("hide");
    post.querySelector(".more").classList.toggle("hide");
    btn.textContent == "Read More" ? btn.textContent = "Read Less" : btn.textContent = "Read More";
}

// Hero Section Carousel
const heroItems = document.querySelectorAll('.hero-item');
const heroControls = document.querySelectorAll('.hero-controls button');
let currentIndex = 0;

    function showHeroItem(index) {
      heroItems.forEach((item, i) => {
        item.classList.toggle('active_hero', i === index);
      });

      heroControls.forEach((button, i) => {
        button.classList.toggle('active_hero', i === index);
      });
    }

    function autoRotateHero() {
      currentIndex = (currentIndex + 1) % heroItems.length;
      showHeroItem(currentIndex);
    }

    heroControls.forEach((button, index) => {
      button.addEventListener('click', () => {
        currentIndex = index;
        showHeroItem(currentIndex);
      });
    });

    setInterval(autoRotateHero, 9000);
