(() => {
    const menuButton = document.querySelector("#menu-button");
    const menuList = document.querySelector("#menu-list");
  
    menuButton.addEventListener("click", (evt) => {
      evt.preventDefault();
      menuButton.classList.toggle("menu__toggle-button--crossed");
      menuList.classList.toggle("menu__list--showed");
    });
  })();