import "./_errorPage.scss";
import { appContainer } from "../../vars";
import { renderHeader } from "../../common/header";
import { renderMainContainer } from "../../common/common";

export function renderErrorPage() {
	appContainer.innerHTML = "";
	renderHeader();
	renderMainContainer();
	const mainContainer = document.querySelector(".main");

	const template = `
        <section class="error-page">
			<div class="first-screen__bg-wrapper error-page__bg-wrapper">
				<img
					src="./assets/images/flowers_background.png"
					alt="Фон с розовыми цветами"
					class="first-screen__bg-image"
				/>
			</div>
			<div class="error-page__bg-toning"></div>
			<div class="container error-page__container">
				<p class="error-page__text1">Упс... Такой страницы у нас нет :(</p>
                <p class="error-page__text2">404 Error page</p>
                <a href="/">
					<button
						type="button"
						id="errorPageBtn"
						class="pink-button big-pink-button error-page__button"
					>
						Перейти на Главную страницу
					</button>
				</a>
			</div>
		</section>
    `;
	mainContainer.insertAdjacentHTML("afterbegin", template);
}
