var loader = document.querySelector(".loader");

function vanish() {
	loader.classList.add("disappear");
}

window.addEventListener("load", vanish);
