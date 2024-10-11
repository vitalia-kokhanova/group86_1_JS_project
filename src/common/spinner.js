import "./_spinner.scss";
import { appContainer } from "../vars";
import { renderHeader } from "./header";
import { renderMainContainer } from "./common";

export function spinner() {
	appContainer.innerHTML = "";

	renderHeader();
	renderMainContainer();

	const mainContainer = document.querySelector(".main");

	const template = `
		<section class="spinner">
			<div class="first-screen__bg-wrapper spinner__bg-wrapper">
				<img
					src="./assets/images/flowers_background.png"
					alt="Фон с розовыми цветами"
					class="first-screen__bg-image"
				/>
			</div>
			<div class="spinner__bg-toning"></div>
			<div class="container spinner__wrapper">
				<span>З</span>
				<span>А</span>
				<span>Г</span>
				<span>Р</span>
				<span>У</span>
				<span>З</span>
				<span>К</span>
				<span>А</span>
                <span>...</span>
			</div>
		</section>
    `;
	mainContainer.insertAdjacentHTML("afterbegin", template);
}
