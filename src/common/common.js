import { appContainer } from "../vars";
import "./common.scss";

export function renderMainContainer() {
	const template = `
    <main class="main"></main>
    `;
	appContainer.insertAdjacentHTML("beforeend", template);
}
