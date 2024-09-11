import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase.js";
initializeApp(firebaseConfig);

import { appContainer } from "./vars.js";
import { renderHome } from "./pages/home/homePage.js";
import { renderBasket } from "./pages/basket/basketPage.js";
import { renderProfile } from "./pages/profile/profilePage.js";
import { renderCatalog } from "./pages/catalog/catalogPage.js";
import { renderAuthTest } from "./pages/auth/renderAuthTestPage.js";

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
			break;
		case "/catalog":
			renderCatalog(appContainer);
			break;
		case "/auth":
			renderAuthTest(appContainer);
	}
});
