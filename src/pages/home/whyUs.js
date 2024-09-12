import { appContainer } from "../../vars";
import "./whyUs.scss";

export function renderWhyUs(element) {
	const template = `
        <section class="whyus">
			<div class="whyus__container container">
				<h2 class="whyus__container-title middle-title">
					Почему именно мы?
				</h2>
				<div class="whyus__inner-wrapper">
					<div class="whyus__inner-box whyus__box-first">
						<div class="whyus-box__text-wrapper whyus-first-box__text-wrapper">
							<p class="whyus-box__text whyus-first-box__text middle-text">Вы можете выбрать любую цветочную композицию из нашего каталога или заказать свой вариант. Вы можете выбрать любую цветочную композицию из нашего каталога или заказать свой вариант</p>
						</div>
						<div class="whyus-box__image-wrapper whyus-first-box__image-wrapper">
							<img src="./assets/images/home_page_img/aboutus_photo1.png" alt="Фото с зимним декором" class="whyus-box__image whyus-first-box__image"/>
						</div>
					</div>
					<div class="whyus__inner-box whyus__box-second">
						<div class="whyus-box__text-wrapper whyus-second-box__text-wrapper">
							<p class="whyus-box__text whyus-second-box__text middle-text">Вы можете выбрать любую цветочную композицию из нашего каталога или заказать свой вариант</p>
						</div>
						<div class="whyus-box__image-wrapper whyus-second-box__image-wrapper">
							<img src="./assets/images/home_page_img/aboutus_photo2.png" alt="Фото с пирожными" class="whyus-box__image whyus-second-box__image"/>
						</div>
					</div>
					<div class="whyus__inner-box whyus__box-third">
						<div class="whyus-box__text-wrapper whyus-third-box__text-wrapper">
							<p class="whyus-box__text whyus-third-box__text middle-text">Вы можете выбрать любую цветочную композицию из нашего каталога или заказать свой вариант</p>
						</div>
						<div class="whyus-box__image-wrapper whyus-third-box__image-wrapper">
							<img src="./assets/images/home_page_img/aboutus_photo3.png" alt="Фото с пионами" class="whyus-box__image whyus-third-box__image"/>
						</div>
					</div>
				</div>
			</div>
		</section>
    `;
	element.insertAdjacentHTML("beforeend", template);
}
