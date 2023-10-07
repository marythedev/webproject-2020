document.querySelector('#ultra-small-screen .language-dropdown').onchange = function () {
    window.location.href = this.value;
}

document.querySelector('#small-screen .language-dropdown').onchange = function () {
    window.location.href = this.value;
}

document.querySelector('#large-screen .language-dropdown').onchange = function () {
    window.location.href = this.value;
}

var navExpanded = false;
document.getElementById('menu-button-small').addEventListener('click', () => {
    if (navExpanded) {
        document.querySelector('#small-screen #nav-links').style.display = "none";
        document.querySelector('#small-screen .line1').classList.remove("nav-expanded");
        document.querySelector('#small-screen .line2').classList.remove("nav-expanded");
        document.querySelector('#small-screen .line3').classList.remove("nav-expanded");
        navExpanded = false;
    }
    else {
        document.querySelector('#small-screen #nav-links').style.display = "block";
        document.querySelector('#small-screen .line1').classList.add("nav-expanded");
        document.querySelector('#small-screen .line2').classList.add("nav-expanded");
        document.querySelector('#small-screen .line3').classList.add("nav-expanded");
        navExpanded = true;
    }
})

document.getElementById('menu-button-ultra-small').addEventListener('click', () => {
    if (navExpanded) {
        document.querySelector('#ultra-small-screen #nav-links').style.display = "none";
        document.querySelector('#ultra-small-screen .line1').classList.remove("nav-expanded");
        document.querySelector('#ultra-small-screen .line2').classList.remove("nav-expanded");
        document.querySelector('#ultra-small-screen .line3').classList.remove("nav-expanded");
        navExpanded = false;
    }
    else {
        document.querySelector('#ultra-small-screen #nav-links').style.display = "block";
        document.querySelector('#ultra-small-screen .line1').classList.add("nav-expanded");
        document.querySelector('#ultra-small-screen .line2').classList.add("nav-expanded");
        document.querySelector('#ultra-small-screen .line3').classList.add("nav-expanded");
        navExpanded = true;
    }
})