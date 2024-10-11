import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase.js";

initializeApp(firebaseConfig);

import { appContainer } from "./vars.js";
import { renderHome } from "./pages/home/homePage.js";
import { renderBasket } from "./pages/basket/basketPage.js";
import { renderProfile } from "./pages/profile/profilePage.js";
import { renderCatalog } from "./pages/catalog/catalogPage.js";
import { renderAuthTest } from "./pages/auth/renderAuthTestPage.js";
import { registrPage } from "./pages/auth/registerPage.js";
import { renderContacts } from "./pages/contacts/contactsPage.js";
import { renderCard } from "./pages/card/card.js";

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
      break;
    case "/registration":
      registrPage(appContainer);
      break;
    case "/auth/registration":
      registrPage(appContainer);
      break;
    case "/contacts":
      renderContacts(appContainer);
      break;
    case "/card":
      renderCard(appContainer);
      break;
    case "/specificCard":
      renderSpecificCard(appContainer, data);
      break;
  }
});
