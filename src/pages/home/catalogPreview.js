import { appContainer } from "../../vars";
import "./catalogPreview.scss";

export function renderCatalogPreview() {
	const template = `
	<section class="catalog-preview">
			<div class="catalog-preview__container container">
				<h2 class="catalog-preview__container-title middle-title">
					Каталог
				</h2>
				<div class="catalog-preview__inner-wrapper">
					<div class="catalog-preview__inner-box catalog-preview__side-box catalog-preview__box-left">
						<div class="catalog-preview__block catalog-preview__block-type-one catalog-preview__block-1">
							<div class="catalog-preview__text-box catalog-preview__text-box-type-one">
								<p class="catalog-preview__small-title text-box__small-title">
									Для кого
								</p>
							</div>
						</div>
						<div class="catalog-preview__block catalog-preview__block-type-one catalog-preview__block-2">
							<div class="catalog-preview__text-box catalog-preview__text-box-type-one">
								<p class="catalog-preview__small-title text-box__small-title">
									Сладости
								</p>
							</div>
						</div>
					</div>
					<div class="catalog-preview__inner-box catalog-preview__box-central">
						<div class="catalog-preview__block catalog-preview__block-type-two catalog-preview__block-3">
							<div class="catalog-preview__text-box catalog-preview__text-box-type-two">
								<p class="catalog-preview__small-title text-box__small-title">
									Подарки
								</p>
							</div>
						</div>
						<div class="catalog-preview__block catalog-preview__block-type-two catalog-preview__block-4">
							<div class="catalog-preview__text-box catalog-preview__text-box-type-three">
								<p class="catalog-preview__small-title text-box__small-title">
									Букеты
								</p>
							</div>
						</div>
						<div class="catalog-preview__block catalog-preview__block-type-two catalog-preview__block-5">
							<div class="catalog-preview__text-box catalog-preview__text-box-type-two">
								<p class="catalog-preview__small-title text-box__small-title">
									Розы
								</p>
							</div>
						</div>
					</div>
					<div class="catalog-preview__inner-box catalog-preview__side-box catalog-preview__box-right">
						<div class="catalog-preview__block catalog-preview__block-type-one catalog-preview__block-6">
							<div class="catalog-preview__text-box catalog-preview__text-box-type-one">
								<p class="catalog-preview__small-title text-box__small-title">
									Праздничная коллекция
								</p>
							</div>
						</div>
						<div class="catalog-preview__block catalog-preview__block-type-one catalog-preview__block-7">
							<div class="catalog-preview__text-box catalog-preview__text-box-type-one">
								<p class="catalog-preview__small-title text-box__small-title">
									Комнатные растения
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="catalog-preview__link-wrapper">
					<a href="/catalog" class="catalog-preview__link small-grey-text">Перейти к каталогу</a>
				</div>
			</div>
		</section>
    `;
	appContainer.insertAdjacentHTML("beforeend", template);
}
