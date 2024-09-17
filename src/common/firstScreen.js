import "./_firstScreen.scss";

export function renderFirstScreen(element) {
	const template = `
    <section class="first-screen">
			<div class="first-screen__container container">
				<div class="first-screen__inner-wraper">
					<h2 class="first-screen__title">
						Подарите ощущение праздника
					</h2>
					<h1 class="first-screen__main-title">
						Собираем букеты,<br />созданные для Вас
					</h1>
					<button type="submit" id="headerBtn">Выбрать букет</button>
				</div>
			</div>
		</section>
    `;
	element.insertAdjacentHTML("afterbegin", template);
}
