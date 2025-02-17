// Wrap all the initialization in a single DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", function () {
  setupBraketsAnimation();
  // loadNavigation();
  loadTheme();
});

/////////////////////////
//Loading Navigation in all pages
/////////////////////////
function loadNavigation() {
  // fetch('navigation.html', {
  //   method: 'GET',
  //   credentials: 'include'
  // })
  //   .then(response => response.text())
  //   .then(data => {
  //     document.getElementById('header').innerHTML = data;
  //   });

}


/////////////////////////
//Toggle for dark theme
/////////////////////////
function loadTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Check localStorage for theme preference
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.checked = true;
  }

  // Toggle Dark Mode
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  });
}


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
// window.onscroll = function () {
//   myFunction()
// };

// function myFunction() {
//   if (document.documentElement.scrollTop > 280) {
//     document.getElementById("BYUI").classList.add("animation");
//   }
//   if (document.documentElement.scrollTop > 420) {
//     document.getElementById("WILMU").classList.add("animation");
//   }
// }

/////////////////////////
//School Link
/////////////////////////
function schoolLink(link) {
  window.location = "http://www." + link + ".edu/";
}


/////////////////////////
//Go To Top Button
/////////////////////////
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }

  if (document.documentElement.scrollTop > 280) {
    document.getElementById("BYUI").classList.add("animation");
  }

  if (document.documentElement.scrollTop > 420) {
    document.getElementById("WILMU").classList.add("animation");
  }
}

// When the user clicks on the button, scroll to the top of the document
function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

/////////////////////////
//Displaying the modal
/////////////////////////
function displayModal(card) {
  if (window.innerWidth > 768) {
    card.classList.add('modal');
    document.body.style.overflow = "hidden";
    card.firstElementChild.classList.add('animate');  
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == card) {
      card.classList.remove('modal');
      card.firstElementChild.classList.add('animate');
      document.body.style.overflow = "";
    }

  }
}