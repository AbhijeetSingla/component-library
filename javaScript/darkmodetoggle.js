let darkMode = localStorage.getItem("darkMode");
let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
let light = window.matchMedia("(prefers-color-scheme: light)").matches;
const themeCSSPath = document.querySelector('link[id="mode-select"]');
const themeToggleButton = document.querySelector("#theme-toggle-button");
const initialPath = themeCSSPath.getAttribute("href");
const lightLink = initialPath + "/css/light.css";
const darkLink = initialPath + "/css/dark.css";

function toggleTheme() {
    darkMode = localStorage.getItem("darkMode");

    if (darkMode === "enabled") {
        localStorage.setItem("darkMode", "disabled");
        themeCSSPath.setAttribute("href", lightLink);    
    } else if (dark && darkMode === null) {
        localStorage.setItem("darkMode", "disabled");
        themeCSSPath.setAttribute("href", lightLink);
    } else if (light && darkMode === null) {
        localStorage.setItem("darkMode", "enabled");
        themeCSSPath.setAttribute("href", darkLink);
    } else {
        localStorage.setItem("darkMode", "enabled");
        themeCSSPath.setAttribute("href", darkLink);    
    }
}

if (light && darkMode === null) {
	themeCSSPath.setAttribute("href", lightLink);
} else if (dark && darkMode === null) {
	themeCSSPath.setAttribute("href", darkLink);
} else {
    themeCSSPath.setAttribute("href", lightLink);
}

if (darkMode === "disabled") {
    themeCSSPath.setAttribute("href", lightLink);
} else if (darkMode === "enabled") {
    themeCSSPath.setAttribute("href", darkLink);
} else {console.error("idk *shrug*")}

themeToggleButton.addEventListener("click", toggleTheme);