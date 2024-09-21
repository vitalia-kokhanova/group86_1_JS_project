import "./_ideaForm.scss";

export function renderIdeaForm(element) {
	const template = `
		<section class="idea">
			<div class="idea__container container">
				<div class="idea__container-wrapper">
					<h2 class="middle-title_semibold idea__title">
						Предложи свой букет
					</h2>
					<div class="idea__inner-wrapper">
						<form class="common__form idea__form" id="ideaForm" name="ideaForm">
							<input
								type="text"
								name="ideaUsername"
								id="ideaNameInput"
								class="middle-small_ordinary-text"
								placeholder="Имя"
								minlength="2"
								maxlength="30"
							/>
							<input
								type="text"
								name="ideaTel"
								id="ideaTelInput"
								class="middle-small_ordinary-text"
								placeholder="Телефон"
								minlength="11"
								maxlength="50"
							/>
							<textarea
								name="ideaText"
								id="ideaTextarea"
								class="middle-small_ordinary-text"
								placeholder="Ваша идея"
								minlength="10"
								maxlength="2000"
							></textarea>
						</form>
						<div class="idea__image-box">
							<img
								src="./assets/images/home_page_img/idea_for_bouquet.png"
								alt="Фото идеи для букета"
								class="idea__image"
							/>
						</div>
					</div>
				</div>
				<div class="idea__errors-block">
					<div class="idea__username-error-block"></div>
					<div class="idea__tel-error-block"></div>
					<div class="idea__textarea-error-block"></div>
				</div>
				<div class="idea__button-wrapper">
					<button 
						form="ideaForm"
						type="submit"
						class="pink-button big-pink-button" disabled
						id="ideaSubmitButton"
					>
						Отправить
					</button>
				</div>
			</div>
		</section>
    `;
	element.insertAdjacentHTML("beforeend", template);

	const ideaForm = document.forms.ideaForm;
	console.log(ideaForm);
	const ideaUsernameInput = ideaForm.elements.ideaUsername;
	const ideaTelInput = ideaForm.elements.ideaTel;
	const ideaTextArea = ideaForm.elements.ideaText;
	const ideaUsernameError = document.querySelector(
		".idea__username-error-block"
	);
	const ideaTelError = document.querySelector(".idea__tel-error-block");
	const ideaTextAreaError = document.querySelector(
		".idea__textarea-error-block"
	);
	const ideaSubmitButton = document.getElementById("ideaSubmitButton");

	ideaForm.addEventListener("submit", function (event) {
		event.preventDefault;
		let hasError = false;

		ideaUsernameError.style.display = "none";
		ideaTelError.style.display = "none";
		ideaTextAreaError.style.display = "none";

		if (
			ideaUsernameInput.value.trim() === "" ||
			ideaUsernameInput.value.trim().length < 2 ||
			ideaUsernameInput.value.trim().length > 30
		) {
			ideaUsernameError.textContent =
				"Введите имя пользователя. Имя должно содержать от 2 до 30 символов.";
			ideaUsernameError.style.display = "block";
			hasError = true;
		}

		if (
			ideaTelInput.value.trim() === "" ||
			validateTel(ideaTelInput.value) === false
		) {
			ideaTelError.textContent =
				"Введите корректный номер телефона в таком формате: +7 ХХХ ХХХ ХХ ХХ";
			ideaTelError.style.display = "block";
			hasError = true;
		}

		if (
			ideaTextArea.value.trim() === "" ||
			ideaTextArea.value.trim().length < 10 ||
			ideaTextArea.value.trim().length > 2000
		) {
			termsError.textContent =
				"Введите текст в поле для своей идеи. Текст должен содержать от 10 до 2000 символов.";
			termsError.style.display = "block";
			hasError = true;
		}

		if (hasError === false) {
			ideaSubmitButton.disbaled = false;
			alert("Форма успешно отправлена!");
		}
	});

	function validateTel(tel) {
		let regex = /^\+7\s*\d{10}$/;
		return regex.test(tel);
	}
}
