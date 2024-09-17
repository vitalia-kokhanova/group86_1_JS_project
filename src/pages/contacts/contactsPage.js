import "./_contactsPage.scss";

import { renderHeader } from "../../common/header";
import { renderMainContainer } from "../../common/common";
import { renderFirstScreen } from "../../common/firstScreen";

export function renderContacts(element) {
	element.innerHTML = "";
	renderHeader();
	renderMainContainer();

	const mainContainer = document.querySelector(".main");

	renderFirstScreen(mainContainer);
	element.insertAdjacentHTML("beforeend", "Контакты");
}
