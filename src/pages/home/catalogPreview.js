import "./_catalogPreview.scss";

export function renderCatalogPreview(element) {
	const template = `
		<section class="catalog-preview">
			<div class="catalog-preview__container container">
				<h2 class="catalog-preview__container-title middle-title">
					Каталог
				</h2>
				<div class="catalog-preview__inner-wrapper">
					<div class="inner-box side-box box-left">
						<div class="block block-type-one block-1 cp-for-whom-block">
							<div class="image-box image-box__type-one">
								<img
									src="./assets/images/home_page_img/catalog_preview_1.png"
									alt="Фото букета"
									class="image"
								/>
							</div>
							<div class="text-box text-box__type-one">
								<div class="text-box__inner-wrapper">
									<img
										src="./assets/images/home_page_img/text-box-frame-1.png"
										alt="Рамка для блока"
										class="text-frame"
									/>
									<div class="text-wrapper">
										<a
											href="/catalog"
											class="small-title_semibold text-box__link"
										>
											Для кого
										</a>
									</div>
								</div>
							</div>
						</div>
						<div class="block block-type-one block-2">
							<div class="image-box image-box__type-one">
								<img
									src="./assets/images/home_page_img/catalog_preview_2.png"
									alt="Фото сладостей"
									class="image"
								/>
							</div>
							<div class="text-box text-box__type-one">
								<div class="text-box__inner-wrapper">
									<img
										src="./assets/images/home_page_img/text-box-frame-1.png"
										alt="Рамка для блока"
										class="text-frame"
									/>
									<div class="text-wrapper">
										<a
											href="/catalog"
											class="small-title_semibold text-box__link"
										>
											Сладости
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="inner-box central-box">
						<div class="block block-type-two block-3">
							<div class="image-box image-box__type-two">
								<img
									src="./assets/images/home_page_img/catalog_preview_3.png"
									alt="Фото клубники в цветах"
									class="image"
								/>
							</div>
							<div class="text-box text-box__type-two">
								<div class="text-box__inner-wrapper">
									<img
										src="./assets/images/home_page_img/text-box-frame-2.png"
										alt="Рамка для блока"
										class="text-frame"
									/>
									<div class="text-wrapper">
										<a
											href="/catalog"
											class="small-title_semibold text-box__link"
										>
											Подарки
										</a>
									</div>
								</div>
							</div>
						</div>
						<div class="block block-type-three block-4">
							<div class="image-box image-box__type-two">
								<img
									src="./assets/images/home_page_img/catalog_preview_4.png"
									alt="Фото фиолетовых цветов"
									class="image"
								/>
							</div>
							<div class="text-box text-box__type-three">
								<div class="text-box__inner-wrapper">
									<img
										src="./assets/images/home_page_img/text-box-frame-3.png"
										alt="Рамка для блока"
										class="text-frame"
									/>
									<div class="text-wrapper">
										<a
											href="/catalog"
											class="small-title_semibold text-box__link"
										>
											Букеты
										</a>
									</div>
								</div>
							</div>
						</div>
						<div class="block block-type-two block-5">
							<div class="image-box image-box__type-two">
								<img
									src="./assets/images/home_page_img/catalog_preview_5.png"
									alt="Фото красных роз"
									class="image"
								/>
							</div>
							<div class="text-box text-box__type-two">
								<div class="text-box__inner-wrapper">
									<img
										src="./assets/images/home_page_img/text-box-frame-2.png"
										alt="Рамка для блока"
										class="text-frame"
									/>
									<div class="text-wrapper">
										<a
											href="/catalog"
											class="small-title_semibold text-box__link"
										>
											Розы
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="inner-box side-box box-right">
						<div class="block block-type-one block-6">
							<div class="image-box image-box__type-one">
								<img
									src="./assets/images/home_page_img/catalog_preview_6.png"
									alt="Фото тюльпанов"
									class="image"
								/>
							</div>
							<div class="text-box text-box__type-one">
								<div class="text-box__inner-wrapper">
									<img
										src="./assets/images/home_page_img/text-box-frame-1.png"
										alt="Рамка для блока"
										class="text-frame"
									/>
									<div class="text-wrapper">
										<a
											href="/catalog"
											class="small-title_semibold text-box__link"
										>
											Праздничная коллекция
										</a>
									</div>
								</div>
							</div>
						</div>
						<div class="block block-type-one block-7">
							<div class="image-box image-box__type-one">
								<img
									src="./assets/images/home_page_img/catalog_preview_7.png"
									alt="Фото комнатного растения"
									class="image"
								/>
							</div>
							<div class="text-box text-box__type-one">
								<div class="text-box__inner-wrapper">
									<img
										src="./assets/images/home_page_img/text-box-frame-1.png"
										alt="Рамка для блока"
										class="text-frame"
									/>
									<div class="text-wrapper">
										<a
											href="/catalog"
											class="small-title_semibold text-box__link"
										>
											Комнатные растения
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="catalog-preview__link-wrapper">
					<a href="/catalog" class="link small-text_grey"
						>Перейти к каталогу</a
					>
				</div>
			</div>
		</section>
	`;
	element.insertAdjacentHTML("beforeend", template);

	/*
	const forWhomBlock = document.querySelector(".cp-for-whom-block");
	forWhomBlock.addEventListener("click", function () {
		window.location.pathname = "/catalog";
	});
	*/

	const blocks = document.querySelectorAll(".block");
	blocks.forEach(function (block) {
		block.addEventListener("click", function () {
			window.location.pathname = "/catalog";
		});
	});
}
