$(document).ready(function() {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      setDarkMode();
    }
    
    $("#change-theme").click(function() {
      setTheme();
    });

    function setTheme() {
      let currentTheme = $("body").attr("theme");
      if (currentTheme === "dark") {
        setLightMode();
      } else {
        setDarkMode();
      }
    }

    function setDarkMode() {
      $("body").attr("theme", "dark");
      $(".header__left__logo__img").attr("src", "./images/youtube-logo-dark.png");
      $("#change-theme i").toggleClass("fa-solid fa-moon fa-regular fa-lightbulb");
      localStorage.setItem("theme", "dark");
    }

    function setLightMode() {
      $("body").removeAttr("theme");
      $(".header__left__logo__img").attr("src", "./images/youtube-logo-light.png");
      $("#change-theme i").toggleClass("fa-solid fa-moon fa-regular fa-lightbulb");
      localStorage.setItem("theme", "light");
    }
  });