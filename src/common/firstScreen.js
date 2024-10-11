import "./_firstScreen.scss";

export function renderFirstScreen(element) {
	const template = `
	<section class="first-screen">
			<div class="first-screen__bg-wrapper">
				<img
					src="./assets/images/flowers_background.png"
					alt="Фон с розовыми цветами"
					class="first-screen__bg-image"
				/>
			</div>
			<div class="container first-screen__container">
				<div class="first-screen__inner-wraper">
					<h3 class="first-screen__subtitle first-screen__subtitle_position">
						Подарите ощущение праздника
					</h3>
					<h1 class="first-screen__main-title first-screen__main-title_position">
						Собираем букеты,<br />созданные для Вас
					</h1>
					<a href="/catalog" class="choose-flowers-btn">
					<button
						type="button"
						id="chooseFlowersBtn"
						class="pink-button big-pink-button"
					>
						Выбрать букет
					</button>
					</a>
				</div>
			</div>
		</section>
    `;
	element.insertAdjacentHTML("afterbegin", template);
}
