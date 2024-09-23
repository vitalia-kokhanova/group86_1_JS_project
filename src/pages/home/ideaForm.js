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
					<div class="idea__error-text idea__all-error-block">Заполните все поля</div>
					<div class="idea__error-text idea__username-error-block">Введите имя: оно должно содержать от 2 до 30 символов</div>
					<div class="idea__error-text idea__tel-error-block">Введите корректный номер телефона в таком формате (должно быть 10 цифр после +7, без пробелов): +7ХХХХХХХХХХ</div>
					<div class="idea__error-text idea__textarea-error-block">Введите текст вашей идеи: он может содержать от 10 до 2000 символов</div>
				</div>
				<div class="idea__button-wrapper">
					<button 
						form="ideaForm"
						type="submit"
						class="pink-button big-pink-button"
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
	const ideaAllError = document.querySelector(".idea__all-error-block");
	const ideaErrorsBlock = document.querySelector(".idea__errors-block");

	const ideaSubmitButton = document.getElementById("ideaSubmitButton");

	let isUsernameTouched = false;
	let isTelTouched = false;
	let isTextAreaTouched = false;

	function validateTel(tel) {
		let regex = /^\+7\d{10}$/;
		return regex.test(tel);
	}

	function validateForm() {
		const isUsernameValid =
			ideaUsernameInput.value.trim().length >= 2 &&
			ideaUsernameInput.value.trim().length <= 30;
		const isTelValid = validateTel(ideaTelInput.value);

		const isTextAreaValid =
			ideaTextArea.value.trim().length >= 10 &&
			ideaTextArea.value.trim().length <= 2000;

		ideaErrorsBlock.style.display =
			isUsernameTouched ||
			isTelTouched ||
			isTextAreaTouched ||
			isUsernameValid ||
			isTelValid ||
			isTextAreaValid
				? "block"
				: "none";

		if (
			(isUsernameTouched || isTelTouched || isTextAreaTouched) &&
			(!isUsernameValid || !isTelValid || !isTextAreaValid)
		) {
			ideaErrorsBlock.style.display = "block";
		} else if (
			(isUsernameTouched || isTelTouched || isTextAreaTouched) &&
			isUsernameValid &&
			isTelValid &&
			isTextAreaValid
		) {
			ideaErrorsBlock.style.display = "none";
		}

		ideaUsernameError.style.display =
			!isUsernameValid && isUsernameTouched ? "block" : "none";
		ideaTelError.style.display =
			!isTelValid && isTelTouched ? "block" : "none";
		ideaTextAreaError.style.display =
			!isTextAreaValid && isTextAreaTouched ? "block" : "none";

		ideaAllError.style.display = ideaSubmitButton.disabled
			? "block"
			: "none";

		ideaUsernameInput.classList.toggle(
			"form-error-border",
			!isUsernameValid && isUsernameTouched
		);
		ideaTelInput.classList.toggle(
			"form-error-border",
			!isTelValid && isTelTouched
		);
		ideaTextArea.classList.toggle(
			"form-error-border",
			!isTextAreaValid && isTextAreaTouched
		);

		ideaSubmitButton.disabled = !(
			isUsernameValid &&
			isUsernameTouched &&
			isTelValid &&
			isTelTouched &&
			isTextAreaValid &&
			isTextAreaTouched
		);
	}

	validateForm();

	ideaUsernameInput.addEventListener("input", () => {
		isUsernameTouched = true;
		validateForm();
	});

	ideaUsernameInput.addEventListener("change", () => {
		isUsernameTouched = true;
		validateForm();
	});

	ideaTelInput.addEventListener("input", () => {
		isTelTouched = true;
		validateForm();
	});

	ideaTelInput.addEventListener("change", () => {
		isUsernameTouched = true;
		validateForm();
	});

	ideaTextArea.addEventListener("input", () => {
		isTextAreaTouched = true;
		validateForm();
	});

	ideaForm.addEventListener("submit", (event) => {
		event.preventDefault();
		validateForm();

		if (!ideaSubmitButton.disabled) {
			// Собираем данные из формы
			const name = ideaUsernameInput.value;
			const phone = ideaTelInput.value;
			const text = ideaTextArea.value;

			const newIdea = {
				name: name,
				phone: phone,
				idea_text: text,
			};

			fetch("http://localhost:3001/bouquet_ideas_data", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newIdea),
			})
				.then((res) => {
					if (!res.ok) {
						throw new Error(
							"Произошла ошибка при отправке данных на сервер. Код ответа: " +
								response.status
						);
					}
					return res.json();
				})
				.then((data) => {
					console.log("Успешно: ", data);
					alert("Ваша форма успешно отправлена!");
					ideaForm.reset();
				})
				.catch((err) => {
					console.error("Ошибка: ", err);
					alert(
						"Произошла ошибка при отправке данных. Пожалуйста, попробуйте позже."
					);
				});
		} else {
			alert("Заполните все поля формы");
		}
	});
}
