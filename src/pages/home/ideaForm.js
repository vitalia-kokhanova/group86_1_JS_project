import "./ideaForm.scss";

export function renderIdeaForm(element) {
	const template = `
		<section class="idea">
			<div class="idea__container container">
				<div class="idea__inner-wrapper">
					<h2 class="idea__container-title middle-title">Предложи свой букет</h2>
					<form class="">
						<input
							type="text"
							name=""
							id=""
							class=""
							placeholder="Имя"
						/>
						<input
							type="text"
							name=""
							id=""
							class=""
							placeholder="Телефон"
						/>
						<textarea
							name=""
							id=""
							class=""
							placeholder="Ваша идея"
						></textarea>
					</form>
					<div class="idea__image-box">
						<img
							src="./assets/images/home_page_img/idea_for_bouquet.png"
							alt="Фото идеи для букета"
						/>
					</div>
				</div>
				<div class="idea__button-wrapper">
					<button type="submit" class="big-pink-button idea__button">
						Отправить
					</button>
				</div>
			</div>
		</section>
    `;
	element.insertAdjacentHTML("beforeend", template);
}
