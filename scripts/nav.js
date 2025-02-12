// fetch('navigation.html')
// .then(res => res.text())
// .then(text => {
//   let oldelem =   document.querySelector("script#replace_with_navbar");
//   let newelem = document.createElement("div");
//   newelem.innerHTML = text;
//   oldelem.parentNode.replaceChild(newelem, oldelem);
// })

function burgerMenu() {
    var checkBox = document.getElementById("burger-menu-check");
    var menu = document.getElementById("menu");
    menu.classList.toggle('active');
        
    // If the checkbox is checked, display the menu
    if (checkBox.checked == true) {
        // menu.classList.add('menuOpened');
        // menu.classList.remove('menuClosed');
    } else {
        // menu.classList.add('menuClosed');
        // menu.classList.remove('menuOpened');
    }

    // animation-name: menuItems;
    // animation-direction: reverse;
    // animation-duration: 1s;

}


var lastScroll = 0;
    
window.addEventListener("scroll", (event) => {
    const navBar = document.getElementById('navbar');
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value
    if (currentScroll > 0 && lastScroll <= currentScroll) {
        lastScroll = currentScroll;
        navBar.classList.add('--scrolled');
    } else {
        lastScroll = currentScroll;
        navBar.classList.remove('--scrolled');
    }

});