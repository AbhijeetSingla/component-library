let darkMode = localStorage.getItem("darkMode");
let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
let light = window.matchMedia("(prefers-color-scheme: light)").matches;
const themeCSSPath = document.querySelector('link[id="mode-select"]');
const themeToggleButton = document.querySelector("#theme-toggle-button");

function toggleTheme() {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode === "enabled") {
        darkMode = localStorage.setItem("darkMode", "disabled");
        themeCSSPath.setAttribute("href", "/css/light.css");
    } else {
        darkMode = localStorage.setItem("darkMode", "enabled");
        themeCSSPath.setAttribute("href", "/css/dark.css");
    }
}

if (light) {
	themeCSSPath.setAttribute("href", "/css/light.css");
    darkMode = localStorage.setItem("darkMode", "disabled");
} else if (dark) {
	themeCSSPath.setAttribute("href", "/css/dark.css");
    darkMode = localStorage.setItem("darkMode", "enabled");
} else {
    themeCSSPath.setAttribute("href", "/css/light.css");
    darkMode = localStorage.setItem("darkMode", "disabled");
}

themeToggleButton.addEventListener("click", toggleTheme);