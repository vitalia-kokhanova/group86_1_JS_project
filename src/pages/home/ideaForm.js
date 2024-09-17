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
						<form class="common__form idea__form" id="ideaForm">
							<input
								type="text"
								name=""
								id="ideaNameInput"
								class="middle-small_ordinary-text"
								placeholder="Имя"
							/>
							<input
								type="text"
								name=""
								id="ideaTelInput"
								class="middle-small_ordinary-text"
								placeholder="Телефон"
							/>
							<textarea
								name=""
								id="ideaTextarea"
								class="middle-small_ordinary-text"
								placeholder="Ваша идея"
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
				<div class="idea__button-wrapper">
					<button
						type="submit"
						class="pink-button big-pink-button"
					>
						Отправить
					</button>
				</div>
			</div>
		</section>
    `;
	element.insertAdjacentHTML("beforeend", template);
}
