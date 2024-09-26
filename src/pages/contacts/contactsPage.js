import "./_contactsPage.scss";

import { renderHeader } from "../../common/header";
import { renderMainContainer } from "../../common/common";
import { renderFirstScreen } from "../../common/firstScreen";
import { renderFooter } from "../../common/footer";

export function renderContacts(element) {
	element.innerHTML = "";
	renderHeader();
	renderMainContainer();
	const mainContainer = document.querySelector(".main");
	renderFirstScreen(mainContainer);

	const innerWrapper = document.querySelector(".first-screen__inner-wraper");
	innerWrapper.innerHTML = `
    <h2 class="secondary-main-title contacts-page__main-title">Контакты</h2>
		<p class="small-grey-title pagename-path-text contacts-page__pagename-path-text">
			<span class="pagename-path-span"
				><a href="/" class="pagename-path-link">Главная</a></span
			>
			/
			<span class="pagename-path-span">Контакты</span>
		</p>
    `;
	innerWrapper.classList.add("contacts-page__inner-wrapper_position");

	renderMapBlock(mainContainer);
	renderQuestionsForm(mainContainer);
	renderFooter();
}

function renderMapBlock(element) {
	const template = `
	<section class="map-block">
			<div class="container map-block__container">
				<div class="map-block__map-wrapper">
					<img
						src=""
						alt="Карта с расположением магазина"
						class="map-block__image"
					/>
				</div>
				<div class="map-block__contacts-wrapper"></div>
			</div>
		</section>
	`;
	element.insertAdjacentHTML("beforeend", template);
}

function renderQuestionsForm(element) {
	const template = `
	<section class="questions">
			<div class="questions__container container">
				<div class="questions__inner-wrapper">
					<h2 class="middle-title_semibold questions__title">
						Появились вопросы?
					</h2>

					<form
						class="common__form questions__form"
						id="questionsForm"
						name="questionsForm"
					>
						<input
							type="text"
							name="questionsUsername"
							id="questionsNameInput"
							class="middle-small_ordinary-text"
							placeholder="Имя"
							minlength="2"
							maxlength="30"
						/>
						<input
							type="text"
							name="questionsTel"
							id="questionsTelInput"
							class="middle-small_ordinary-text"
							placeholder="Телефон"
							minlength="11"
							maxlength="50"
						/>
						<textarea
							name="questionsText"
							id="questionsTextarea"
							class="middle-small_ordinary-text"
							placeholder="Ваша идея"
							minlength="10"
							maxlength="2000"
						></textarea>
					</form>

					<div class="questions__errors-block">
						<div
							class="questions__error-text questions__all-error-block"
						>
							Заполните все поля
						</div>
						<div
							class="questions__error-text questions__username-error-block"
						>
							Введите имя: оно должно содержать от 2 до 30
							символов
						</div>
						<div
							class="questions__error-text idea__tel-error-block"
						>
							Введите корректный номер телефона в таком формате
							(должно быть 10 цифр после +7, без пробелов):
							+7ХХХХХХХХХХ
						</div>
						<div
							class="questions__error-text idea__textarea-error-block"
						>
							Введите текст вашей идеи: он может содержать от 10
							до 2000 символов
						</div>
					</div>

					<div class="questions__button-wrapper">
						<button
							form="questionsForm"
							type="submit"
							class="pink-button big-pink-button"
							id="questionsSubmitButton"
						>
							Отправить
						</button>
					</div>
				</div>
			</div>
		</section>
	`;
	element.insertAdjacentHTML("beforeend", template);
}
