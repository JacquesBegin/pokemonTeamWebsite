// TODO: navbar links need to be removed after clicked
// TODO: clicking off of navbar links must close menu


document.addEventListener("click", function(event) {
  if (window.innerWidth < "768") {
    let menuPanel = document.getElementById("navbarLinks");
    let targetElement = event.target;
    console.log("targetElement", targetElement);

    // if (!targetElement.closest("#navbarLinks")) {
    //   // menuPanel.style.display = "none";
    // }
  
  
  }
});

function createNavbarDropDownMenu() {
  let menuPanel = document.getElementById("navbarLinks");
  document.getElementById("navbarMenuIcon").addEventListener("click", () => {
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