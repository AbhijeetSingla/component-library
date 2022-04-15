let darkMode = localStorage.getItem("darkMode");
let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
let light = window.matchMedia("(prefers-color-scheme: light)").matches;
const themeCSSPath = document.querySelector('link[id="mode-select"]');
const themeToggleButton = document.querySelector("#theme-toggle-button");

function toggleTheme() {
    darkMode = localStorage.getItem("darkMode");

    if (darkMode === "enabled") {
        localStorage.setItem("darkMode", "disabled");
        themeCSSPath.setAttribute("href", "/css/light.css");    
    } else if (dark && darkMode === null) {
        localStorage.setItem("darkMode", "enabled");
        themeCSSPath.setAttribute("href", "/css/dark.css");
    } else if (light && darkMode === null) {
        localStorage.setItem("darkMode", "disabled");
        themeCSSPath.setAttribute("href", "/css/light.css");
    } else {
        localStorage.setItem("darkMode", "enabled");
        themeCSSPath.setAttribute("href", "/css/dark.css");    
    }
}

if (light && darkMode === null) {
	themeCSSPath.setAttribute("href", "/css/light.css");
} else if (dark && darkMode === null) {
	themeCSSPath.setAttribute("href", "/css/dark.css");
} else {
    themeCSSPath.setAttribute("href", "/css/light.css");
}

if (darkMode === "disabled") {
    themeCSSPath.setAttribute("href", "/css/light.css");
} else if (darkMode === "enabled") {
    themeCSSPath.setAttribute("href", "/css/dark.css");
} else {}

themeToggleButton.addEventListener("click", toggleTheme);