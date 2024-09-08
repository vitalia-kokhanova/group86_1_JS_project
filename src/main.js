import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase";
const app = initializeApp(firebaseConfig);

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
