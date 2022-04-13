let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
let light = window.matchMedia("(prefers-color-scheme: light)").matches;
const toggle = document.querySelector('link[id="mode-select"]')
console.log("matched");

let html = document.querySelector("html");

if (light) {
	html.setAttribute("class", "light-mode");
    toggle.setAttribute("href", "/css/light.css")
} else if (dark) {
	html.setAttribute("class", "dark-mode");
    toggle.setAttribute("href", "/css/dark.css")
} else {
    html.setAttribute("class", "light-mode");
    toggle.setAttribute("href", "/css/light.css")
}