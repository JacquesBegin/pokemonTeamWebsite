
function createNavbarDropDownMenu() {
  let menuPanel = document.getElementById("navbarLinks");
  document.getElementById("navbarMenu").addEventListener("click", () => {
    if (menuPanel.style.display === "block") {
      menuPanel.style.display = "none";
    } else {
      menuPanel.style.display = "block";
    }
  });
}

function resetNavbarMenuOnResize() {
  let menuPanel = document.getElementById("navbarLinks");
  window.onresize = () => {
    if (window.innerWidth >= "768") {
      if (menuPanel.style.display === "none") {
        menuPanel.style.display = "block";
      }
    } else {
      menuPanel.style.display = "none";
    }
    
  }
}

createNavbarDropDownMenu();
resetNavbarMenuOnResize();