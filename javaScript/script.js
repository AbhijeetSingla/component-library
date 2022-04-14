let darkMode = localStorage.getItem("darkMode");
let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
let light = window.matchMedia("(prefers-color-scheme: light)").matches;
const themeCSSPath = document.querySelector('link[id="mode-select"]');
const themeToggleButton = document.querySelector("#theme-toggle-button");

function toggleTheme() {
    darkMode = localStorage.getItem("darkMode");
    console.log(darkMode + "4");
    if (darkMode === "enabled") {
        localStorage.setItem("darkMode", "disabled");
        themeCSSPath.setAttribute("href", "/css/light.css");
        console.log(darkMode + "5");
    } else {
        localStorage.setItem("darkMode", "enabled");
        themeCSSPath.setAttribute("href", "/css/dark.css");
        console.log(darkMode + "6");
    }
}

if (light) {
	themeCSSPath.setAttribute("href", "/css/light.css");
    localStorage.setItem("darkMode", "disabled");
    console.log(darkMode + "1");
} else if (dark) {
	themeCSSPath.setAttribute("href", "/css/dark.css");
    localStorage.setItem("darkMode", "enabled");
    console.log(darkMode + "2");
} else {
    themeCSSPath.setAttribute("href", "/css/light.css");
    localStorage.setItem("darkMode", "disabled");
    console.log(darkMode + "3");
}

themeToggleButton.addEventListener("click", toggleTheme);