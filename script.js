//function to toggle (show/hide) hamburger navigation menu
function toggleMenu() {
    const menu = document.querySelector(".menu-links");             //querySelector = selects first element in HTML doc that matches CSS selector passed to it
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");                                  //toggle("open") = check if class "open" is already applied to element
    icon.classList.toggle("open");                                  
}