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
      localStorage.setItem("theme", "dark");
    }

    function setLightMode() {
      $("body").removeAttr("theme");
      localStorage.setItem("theme", "light");
    }
  });