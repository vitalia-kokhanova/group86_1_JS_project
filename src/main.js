import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase.js";
initializeApp(firebaseConfig);

// Пример для начала
/*
import renderAbout from "./src/renderAbout";
import renderHome from "./src/renderHome";
import renderContacts from "./src/renderContacts";
import renderProducts from "./src/renderProducts";

document.addEventListener("DOMContentLoaded", () => {
	const appContainer = document.querySelector("#app");
	const path = window.location.pathname;
	switch (path) {
		case "/":
			renderHome(appContainer);
			break;
		case "/about":
			renderAbout(appContainer);
			break;
		case "/contacts":
			renderContacts(appContainer);
		case "/products":
			renderProducts(appContainer);
	}
});
*/
import { appContainer } from "./vars.js";
import { renderHome } from "./pages/homePage.js";
import { renderBasket } from "./pages/basketPage.js";
import { renderProfile } from "./pages/profilePage.js";
import { renderCatalog } from "./pages/catalogPage.js";

document.addEventListener("DOMContentLoaded", () => {
	const path = window.location.pathname;
	switch (path) {
		case "/":
			renderHome(appContainer);
			break;
		case "/basket":
			renderBasket(appContainer);
			break;
		case "/profile":
			renderProfile(appContainer);
		case "/catalog":
			renderCatalog(appContainer);
	}
});
