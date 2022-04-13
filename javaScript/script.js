let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
let light = window.matchMedia("(prefers-color-scheme: light)").matches;
const themeCSSPath = document.querySelector('link[id="mode-select"]');
const themeToggleButton = document.querySelector("#theme-toggle-button");

function toggleTheme() {
    themeCSSPath.setAttribute("href", "/css/light.css");
}

if (light) {
	themeCSSPath.setAttribute("href", "/css/light.css");
} else if (dark) {
	themeCSSPath.setAttribute("href", "/css/dark.css");
} else {
    themeCSSPath.setAttribute("href", "/css/light.css");
}

themeToggleButton.addEventListener("click", toggleTheme);