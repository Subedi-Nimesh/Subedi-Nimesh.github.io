 // Wrap all the initialization in a single DOMContentLoaded event listener
 document.addEventListener("DOMContentLoaded", function() {
  setupBraketsAnimation();
  // ScrollTrigger.refresh();
});

/////////////////////////
//Animation for brackets
/////////////////////////
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check localStorage for theme preference
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
}

// Toggle Dark Mode
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

/////////////////////////
//Animation for brackets
/////////////////////////
function setupBraketsAnimation() {
  var brakets = document.querySelector('.brakets');
  var symbols = ['</>', '[ ]', '( )'];
  var currentSymbol = 0;
  gsap.set(document.createElement('div'), { willChange: 'opacity, transform' });

  function animateBrackets() {
    var tl = gsap.timeline();

    tl.to(brakets, {
      rotation: 360,
      duration: 2,
      ease: 'bounce.out'
    })
      .to(brakets, {
        y: 50,
        opacity: 0,
        duration: 0.5,
        onComplete: changeSymbol
      })
      .set(brakets, {
        y: -50,
        rotation: 0 // Reset rotation
      })
      .to(brakets, {
        y: 0,
        opacity: 1,
        duration: 0.5
      });
  }

  function changeSymbol() {
    brakets.textContent = symbols[currentSymbol];
    currentSymbol = (currentSymbol + 1) % symbols.length;
  }

  animateBrackets();
  setInterval(animateBrackets, 5000);
}

/////////////////////////
//Trigger Animation
/////////////////////////
window.onscroll = function() {
  myFunction()
};

function myFunction() {
  if (document.documentElement.scrollTop > 280) {
    document.getElementById("BYUI").classList.add("animation");
  }
  if (document.documentElement.scrollTop > 420) {
    document.getElementById("WILMU").classList.add("animation");
  }
}

/////////////////////////
//School Link
/////////////////////////
function schoolLink(link) {
  window.location = "http://www." + link + ".edu/"; 
}


/////////////////////////
//Add activities here
/////////////////////////
// document.getElementById('contact-form').addEventListener('submit', function (e) {
//   e.preventDefault();
//   alert('Thank you for your message!');
// });