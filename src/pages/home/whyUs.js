import "./_whyUs.scss";

export function renderWhyUs(element) {
	const template = `
        <section class="whyus">
			<div class="whyus__container container">
				<h2 class="whyus__container-title middle-title">
					Почему именно мы?
				</h2>
				<div class="whyus__inner-wrapper">
					<div class="whyus__box whyus__box-first">
						<div class="text-wrapper text-wrapper-first">
							<p class="lato-medium_middle-small-text text-first">Мы используем только самые свежие цветы, поэтому наши букеты сохраняют свою красоту и аромат надолго.<br/><br/>Каждая наша композиция – это результат кропотливой работы флористов, которые вкладывают в нее душу и мастерство.</p>
						</div>
						<div class="image-wrapper image-wrapper-first">
							<img src="./assets/images/home_page_img/aboutus_photo1.png" alt="Фото с зимним декором" class="image image-first"/>
						</div>
					</div>
					<div class="whyus__box whyus__box-second">
						<div class="text-wrapper text-wrapper-second">
							<p class="lato-medium_middle-small-text text-second">Вы можете выбрать любую цветочную композицию из нашего каталога или заказать свой вариант</p>
						</div>
						<div class="image-wrapper image-wrapper-second">
							<img src="./assets/images/home_page_img/aboutus_photo2.png" alt="Фото с пирожными" class="image image-second"/>
						</div>
					</div>
					<div class="whyus__box whyus__box-third">
						<div class="text-wrapper text-wrapper-third">
							<p class="lato-medium_middle-small-text text-third">Наш каталог цветов – это бесконечное поле для вдохновения. Но если вы не нашли то, что искали, мы с радостью создадим композицию по вашим эскизам или описанию.</p>
						</div>
						<div class="image-wrapper image-wrapper-third">
							<img src="./assets/images/home_page_img/aboutus_photo3.png" alt="Фото с пионами" class="image image-third"/>
						</div>
					</div>
				</div>
			</div>
		</section>
    `;
	element.insertAdjacentHTML("beforeend", template);
}
