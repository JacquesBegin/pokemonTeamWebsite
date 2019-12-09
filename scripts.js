
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



createNavbarDropDownMenu();