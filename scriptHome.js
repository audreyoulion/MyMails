/* DARK MODE HOME PAGE */

var darkMode = document.getElementById("dark-mode");
var mainButtons = document.getElementsByClassName("main-button");
var illustration = document.getElementById("illustration");
var texts = document.getElementsByClassName("home-texts");

darkMode.addEventListener("click", function () {

    if (this.textContent == "Dark mode") {

        document.body.style.backgroundColor = "#1F2933";
        illustration.className = "right-side-dm";

        for (var i = 0; i < texts.length; i++) {
            texts[i].style.color = "#F5F7FA";
        }

        document.getElementsByClassName("header")[0].style.backgroundColor = "#616E7C";

        darkMode.textContent = "Light mode";

    } else if (this.textContent == "Light mode") {

            document.body.style.backgroundColor = "#e8e1df";
            illustration.className = "right-side";
        
            for (var i = 0; i < texts.length; i++) {
                texts[i].style.color = "#3b4969";
            }
        
            document.getElementsByClassName("header")[0].style.backgroundColor = "#A19EDA";
        
            darkMode.textContent = "Dark mode";
    }

})