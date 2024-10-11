import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase.js";

initializeApp(firebaseConfig);

import { appContainer } from "./vars.js";
import { loadHomePage } from "./pages/home/homePage.js";
import { loadBasketPage } from "./pages/basket/basketPage.js";
import { renderProfile } from "./pages/profile/profilePage.js";
import { renderCatalog } from "./pages/catalog/catalogPage.js";
import { renderAuthTest } from "./pages/auth/renderAuthTestPage.js";
import { registrPage } from "./pages/auth/registerPage.js";
import { renderContacts } from "./pages/contacts/contactsPage.js";
import { renderCard } from "./pages/card/card.js";
import { renderErrorPage } from "./pages/error/errorPage.js";
import { loadSpecificCardPage } from "./pages/card/specificCard.js";
import { Services } from "./services/services.js";

async function handleProduct(productId) {
	try {
		const collection = await Services.getProducts();
		const specificProduct = collection.find(
			(product) => product.id === productId
		);
		if (specificProduct) {
			loadSpecificCardPage(specificProduct);
		}
	} catch (error) {
		renderErrorPage();
		console.error("Error fetching products:");
	}
}

document.addEventListener("DOMContentLoaded", async () => {
	const path = window.location.pathname;
	console.log(path);
	const productIdRegex = /\d/;

	if (productIdRegex.test(path.substring(1))) {
		const productId = path.substring(1);
		console.log(productId);
		await handleProduct(productId);
	} else {
		switch (path) {
			case "/":
				loadHomePage();
				break;
			case "/basket":
				loadBasketPage();
				break;
			case "/profile":
				renderProfile(appContainer);
				break;
			case "/catalog":
				renderCatalog(appContainer);
				break;
			case "/auth":
				renderAuthTest(appContainer);
				break;
			case "/registration":
			case "/auth/registration":
				registrPage(appContainer);
				break;
			case "/contacts":
				renderContacts(appContainer);
				break;
			case "/card":
				renderCard(appContainer);
				break;
			default:
				renderErrorPage();
		}
	}
});
