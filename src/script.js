let content = document.getElementById("pageContent");
let menu = document.getElementById("menu");
let button = document.getElementById("toggleButt");
let isHidden = false;
loadPage(0);

function loadPage(i) {
    content.innerHTML = pages[i];
}

function changePosition() {
    if(!isHidden) {
        isHidden = true
        menu.style.height = "0px";
        button.value = "Show";
    }
    else {
        isHidden = false;
        menu.style.height = "500px";
        button.value = "Hide";
    }
}