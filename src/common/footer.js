import "./_footer.scss";
import { appContainer } from "../vars";

export function renderFooter() {
	const template = `
			<footer class="footer">
			<div class="footer__container container">
				<div class="footer__logo-wrapper">
					<div class="logo-container footer__logo-container">
						<div class="logo-box footer__logo-box">
							<img
								src="./assets/icons/header_icons/logo_image.png"
								alt="Логотип"
								class="logo-img footer__logo-img"
							/>
						</div>
						<div class="logo-titles-box">
							<div class="logo-title footer__logo-title">
								FLORISTMAN
							</div>
							<div class="logo-subtitle footer__logo-subtitle">
								Широкий выбор на любой вкус
							</div>
						</div>
					</div>
				</div>
				<div class="footer__catalog-wrapper">
					<div class="catalog-box box-one">
						<div class="catalog-block block-type-one block-1">
							<a href="/catalog" class="block-link">
								<div class="image-box image-box__type-one">
									<img
										src="./assets/images/home_page_img/footer_catalog_1.png"
										alt="Фото букета роз"
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
												Цветы
											</a>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="catalog-block block-type-one block-2">
							<a href="/catalog" class="block-link">
								<div class="image-box image-box__type-one">
									<img
										src="./assets/images/home_page_img/footer_catalog_2.png"
										alt="Фото воздушных шариков"
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
												Воздушные шары
											</a>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="catalog-block block-type-one block-3">
							<a href="/catalog" class="block-link">
								<div class="image-box image-box__type-one">
									<img
										src="./assets/images/home_page_img/footer_catalog_3.png"
										alt="Фото аксессуаров"
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
												Аксессуары
											</a>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="catalog-block block-type-one block-4">
							<a href="/catalog" class="block-link">
								<div class="image-box image-box__type-one">
									<img
										src="./assets/images/home_page_img/footer_catalog_4.png"
										alt="Фото фруктовых сладостей"
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
												Фруктовые сладости
											</a>
										</div>
									</div>
								</div>
							</a>
						</div>
					</div>
					<div class="catalog-box box-two">
						<div class="catalog-block block-type-one block-5">
							<a href="/catalog" class="block-link">
								<div class="image-box image-box__type-one">
									<img
										src="./assets/images/home_page_img/footer_catalog_5.png"
										alt="Фото пирожных"
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
							</a>
						</div>
						<div class="catalog-block block-type-one block-6">
							<a href="/catalog" class="block-link">
								<div class="image-box image-box__type-one">
									<img
										src="./assets/images/home_page_img/footer_catalog_6.png"
										alt="Фото букета из конфет"
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
												Подарки
											</a>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="catalog-block block-type-one block-7">
							<a href="/catalog" class="block-link">
								<div class="image-box image-box__type-one">
									<img
										src="./assets/images/home_page_img/footer_catalog_7.png"
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
												Услуги
											</a>
										</div>
									</div>
								</div>
							</a>
						</div>
						<div class="catalog-block block-type-one block-8">
							<a href="/catalog" class="block-link">
								<div class="image-box image-box__type-one">
									<img
										src="./assets/images/home_page_img/footer_catalog_8.png"
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
							</a>
						</div>
					</div>
				</div>
				<div class="footer__contacts-wrapper">
					<div class="footer__contacts-container">
						<h3 class="middle-small-title_semibold footer__contacts-title">
							<a href="/contacts" class="contacts-page-link">Контакты:</a>
						</h3>
						<div class="tel-box footer__tel-box">
							<span class="tel-icon-wrapper"
								><img
									src="./assets/icons/footer_icons/tel_icon.svg"
									alt="Номер телефона"
									class="tel-icon footer__tel-icon"
							/></span>
							<a href="" class="m-semibold_middle-small-text footer__tel" target="_blank">
								+749500000000
							</a>
						</div>
						<div class="email-box footer__email-box">
							<span class="email-icon-wrapper"
								><img
									src="./assets/icons/footer_icons/email_icon.svg"
									alt="Электронная почта"
									class="email-icon footer__email-icon"
							/></span>
							<a href="" class="m-semibold_middle-small-text footer__email" target="_blank">
								floristman_flowers@gmail.com
							</a>
						</div>
						<nav class="socials-nav footer__socials-nav">
							<ul class="socials-list footer__socials-list">
								<li class="socials-item footer__socials-item">
									<a
										href=""
										class="socials-link footer__socials-link"
										target="_blank"
										><svg
											width="50"
											height="50"
											viewBox="0 0 50 50"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												id="viber"
												d="M24.4263 3.00004C23.063 3.00785 21.6958 3.08988 20.3169 3.25785C17.6802 3.58207 15.0669 4.12113 12.5591 5.27348C8.5708 7.10551 5.74268 10.2149 4.92237 14.7344C4.57471 16.6407 4.29346 18.5743 4.1333 20.5196C3.82471 24.2969 4.01611 28.086 5.08643 31.8086C5.93018 34.7422 7.48487 37.3789 10.2075 39.0899C11.3599 39.8125 12.8794 40.1641 13.6724 40.5313C13.895 40.6368 13.9497 40.6993 13.9614 40.7149C13.9731 40.7266 14.0044 40.7539 14.0005 40.9883C13.9731 43.3789 14.0005 48.0039 14.0005 48.0039L14.0044 49H15.7896L16.0786 48.7188C16.0786 48.7188 20.6138 44.3555 22.2544 42.5586C22.5513 42.2383 22.7036 42.0586 22.7349 42.0391C22.7622 42.0196 22.7153 42.0079 23.02 42C25.1724 41.9571 27.3208 41.875 29.4692 41.7579C32.3013 41.6016 35.188 41.3321 37.9653 40.1719C40.3833 39.1602 42.4028 37.5079 43.6255 35.0313C44.8755 32.4922 45.5435 29.8008 45.7935 27.0157C46.2075 22.3789 46.063 17.7344 44.7818 13.1563C44.0278 10.4727 42.5122 8.20316 40.188 6.6016C37.4067 4.68754 34.27 3.96879 31.1997 3.51176C29.4067 3.24613 27.6021 3.07035 25.7896 3.01566C25.3364 3.00395 24.8833 2.99613 24.4263 3.00004ZM25.7349 5.01566C27.4575 5.06254 29.1802 5.23051 30.9067 5.48832C33.8677 5.92973 36.6607 6.6016 39.0552 8.25004C40.9966 9.58598 42.2075 11.3907 42.856 13.6914C44.0513 17.9727 44.2036 22.3594 43.8013 26.8399C43.5708 29.4219 42.9575 31.8555 41.8286 34.1485C40.8325 36.1719 39.2778 37.4571 37.1919 38.3282C34.77 39.3399 32.1372 39.6094 29.3638 39.7618C27.2388 39.8789 25.1099 39.9571 22.981 40C22.4458 40.0118 21.9224 40.1524 21.5513 40.4258C21.1802 40.6993 21.0122 40.9532 20.7817 41.2032C19.6099 42.4844 17.2739 44.7383 16.0005 45.9727C15.9927 44.4805 15.981 42.6758 16.0005 41.0118C16.0083 40.5 15.8911 39.9766 15.5981 39.5625C15.3052 39.1485 14.9028 38.8985 14.5161 38.7188C13.3872 38.1954 11.9106 37.7969 11.27 37.3946C9.03174 35.9883 7.76221 33.8789 7.0083 31.2539C6.02002 27.8204 5.83252 24.2852 6.12549 20.6875C6.28174 18.8204 6.55127 16.9493 6.89112 15.0938C7.60205 11.1836 9.83643 8.7227 13.3911 7.08988C15.6372 6.05863 18.0357 5.55082 20.563 5.24223C22.2857 5.03129 24.0083 4.96488 25.7349 5.01566ZM26.1567 10C25.3325 10 24.5317 10.0938 23.7544 10.2657C23.2192 10.3907 22.8794 10.9258 23.0005 11.4649C23.1216 12.0039 23.6607 12.3399 24.1997 12.2188C24.8286 12.0743 25.4849 12 26.1567 12C31.0396 12 34.9771 15.9375 34.9771 20.8164C34.9771 21.4922 34.9028 22.1485 34.7583 22.7813C34.6372 23.3164 34.9732 23.8555 35.5122 23.9766C36.0513 24.0977 36.5864 23.7579 36.7075 23.2188C36.8833 22.4454 36.9771 21.6446 36.9771 20.8164C36.9771 14.8555 32.1216 10 26.1567 10ZM16.1802 12.0039C16.0161 11.9961 15.8481 12.0079 15.6724 12.0469C13.856 12.4493 12.0513 13.7657 12.0005 16.1172C12.0513 16.4454 12.0474 16.7969 12.1685 17.0938C12.7622 18.5469 13.2778 20.0469 14.02 21.4219C17.6333 28.1016 23.0982 32.7461 30.063 35.6954C30.895 36.0469 31.7544 36.1211 32.5942 35.7696C33.7505 35.2891 34.731 34.5469 35.3833 33.4805C36.2778 32.0157 36.2896 31 34.8169 29.918C33.8521 29.2071 32.9028 28.4766 31.9263 27.7813C30.438 26.7266 28.8286 26.543 27.7192 28.3946C27.6607 28.4883 27.5747 28.5664 27.5005 28.6446C26.9302 29.25 26.231 29.3985 25.4888 29.0938C22.6724 27.9336 20.4966 26.0625 19.1841 23.2774C18.4107 21.6407 18.6216 20.8204 20.0669 19.7305C20.2114 19.625 20.3482 19.5118 20.481 19.3907C21.1138 18.8125 21.2817 18.125 20.9067 17.3477C20.0591 15.5743 18.9302 13.9922 17.5005 12.6289C17.1138 12.2618 16.6724 12.0313 16.1802 12.0039ZM26.1411 13C25.6997 13 25.2622 13.0352 24.8325 13.1094C24.4692 13.1563 24.1607 13.3985 24.0278 13.7383C23.895 14.0821 23.9614 14.4688 24.1958 14.75C24.4341 15.0274 24.8091 15.1563 25.1685 15.0782C25.481 15.0274 25.8091 15 26.1411 15C29.3911 15 32.0005 17.6094 32.0005 20.8594C32.0005 21.1914 31.9732 21.5196 31.9224 21.8321C31.8442 22.1914 31.9732 22.5664 32.2505 22.8047C32.5317 23.0391 32.9185 23.1055 33.2622 22.9727C33.6021 22.8399 33.8442 22.5313 33.8911 22.168C33.9653 21.7383 34.0005 21.3008 34.0005 20.8594C34.0005 16.5313 30.4692 13 26.1411 13ZM26.0005 16C25.6411 15.9961 25.3052 16.1836 25.1216 16.4961C24.9419 16.8086 24.9419 17.1914 25.1216 17.5039C25.3052 17.8164 25.6411 18.0039 26.0005 18C27.6685 18 29.0005 19.3321 29.0005 21C28.9966 21.3594 29.1841 21.6954 29.4966 21.8789C29.8091 22.0586 30.1919 22.0586 30.5044 21.8789C30.8169 21.6954 31.0044 21.3594 31.0005 21C31.0005 18.25 28.7505 16 26.0005 16Z"
												fill="#EB8671"
											/>
										</svg>
									</a>
								</li>
								<li class="socials-item footer__socials-item">
									<a
										href=""
										class="socials-link footer__socials-link"
										target="_blank"
									>
										<svg
											width="50"
											height="50"
											viewBox="0 0 50 50"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												id="facebook"
												d="M9 4C6.25 4 4 6.25 4 9V41C4 43.75 6.25 46 9 46H25.832C25.9394 46.0176 26.0508 46.0176 26.1582 46H31.832C31.9394 46.0176 32.0508 46.0176 32.1582 46H41C43.75 46 46 43.75 46 41V9C46 6.25 43.75 4 41 4H9ZM9 6H41C42.668 6 44 7.33203 44 9V41C44 42.668 42.668 44 41 44H33V30H36.8203L38.2207 23H33V21C33 20.4434 33.0527 20.3984 33.2402 20.2773C33.4277 20.1562 34.0058 20 35 20H38V14.3691L37.4297 14.0977C37.4297 14.0977 35.1328 13 32 13C29.75 13 27.9023 13.8965 26.7187 15.375C25.5351 16.8535 25 18.834 25 21V23H22V30H25V44H9C7.33203 44 6 42.668 6 41V9C6 7.33203 7.33203 6 9 6ZM32 15C34.0781 15 35.3867 15.459 36 15.7012V18H35C33.8496 18 32.9277 18.0957 32.1504 18.5996C31.373 19.1035 31 20.0605 31 21V25H35.7793L35.1797 28H31V44H27V28H24V25H27V21C27 19.166 27.4648 17.6465 28.2812 16.625C29.0976 15.6035 30.25 15 32 15Z"
												fill="#EB8671"
											/>
										</svg>
									</a>
								</li>
								<li class="socials-item footer__socials-item">
									<a
										href=""
										class="socials-link footer__socials-link"
										target="_blank"
										><svg
											width="50"
											height="50"
											viewBox="0 0 50 50"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												id="whatsapp"
												d="M25 1.99951C12.3099 1.99951 2 12.3094 2 24.9995C2 29.0789 3.11849 32.8849 4.98437 36.2078L2.03776 46.73C1.94141 47.0724 2.03516 47.4409 2.28255 47.6961C2.52995 47.9513 2.89453 48.0555 3.24089 47.9696L14.2109 45.2508C17.4349 46.9722 21.0924 47.9995 25 47.9995C37.6901 47.9995 48 37.6896 48 24.9995C48 12.3094 37.6901 1.99951 25 1.99951ZM25 3.99951C36.6094 3.99951 46 13.3901 46 24.9995C46 36.6089 36.6094 45.9995 25 45.9995C21.2786 45.9995 17.7917 45.0295 14.7617 43.3329C14.5404 43.2092 14.2799 43.1753 14.0325 43.2352L4.42578 45.6167L7.0013 36.4253C7.07682 36.1623 7.04036 35.881 6.90234 35.6453C5.0612 32.523 4 28.8901 4 24.9995C4 13.3901 13.3906 3.99951 25 3.99951ZM16.6432 12.9995C16.0013 12.9995 15.0859 13.2378 14.3346 14.049C13.8828 14.5347 12 16.3693 12 19.5933C12 22.9552 14.332 25.855 14.6133 26.2287H14.6159V26.23C14.5885 26.1948 14.9727 26.7521 15.487 27.4201C16 28.0868 16.7174 28.9644 17.6198 29.9136C19.4232 31.812 21.9583 34.0073 25.1055 35.3498C26.5547 35.9657 27.6979 36.3394 28.5651 36.6115C30.1693 37.1154 31.6315 37.0386 32.7305 36.8771C33.5521 36.756 34.457 36.3602 35.3516 35.7938C36.2461 35.2287 37.1237 34.5243 37.5104 33.4552C37.7865 32.6883 37.9271 31.9787 37.9792 31.3967C38.0039 31.105 38.0078 30.8472 37.9883 30.6089C37.9687 30.3706 37.9896 30.1883 37.7682 29.8237C37.3021 29.0594 36.7747 29.0399 36.2253 28.7677C35.9193 28.6154 35.0482 28.1909 34.1758 27.7756C33.3034 27.3589 32.5495 26.9917 32.0846 26.8263C31.7904 26.7196 31.431 26.5672 30.9141 26.6271C30.3971 26.6857 29.8854 27.0581 29.5885 27.4995C29.306 27.9175 28.1706 29.2573 27.8242 29.6519C27.819 29.6493 27.8503 29.6623 27.7135 29.5959C27.2852 29.3836 26.7617 29.2026 25.987 28.7938C25.2109 28.3862 24.2422 27.7821 23.1823 26.8472V26.8446C21.6029 25.4552 20.4974 23.7105 20.1484 23.1245C20.1719 23.0972 20.1458 23.131 20.1953 23.0815L20.1979 23.0789C20.5534 22.7287 20.8698 22.3094 21.1367 22.0008C21.5156 21.5659 21.6823 21.1805 21.8633 20.8211C22.224 20.1063 22.0234 19.3185 21.8151 18.9032V18.9019C21.8294 18.9305 21.7018 18.6493 21.5651 18.325C21.4271 18.0008 21.2513 17.5789 21.0651 17.1297C20.6901 16.2326 20.2721 15.2248 20.0234 14.6336V14.6323C19.7305 13.937 19.3346 13.437 18.8164 13.1948C18.2982 12.9526 17.8411 13.0216 17.8229 13.0203H17.8203C17.4505 13.0034 17.0456 12.9995 16.6432 12.9995ZM16.6432 14.9995C17.0286 14.9995 17.4089 15.0047 17.7266 15.019C18.0547 15.036 18.0339 15.0373 17.9714 15.0073C17.9062 14.9774 17.9935 14.9683 18.1797 15.4097C18.4232 15.9878 18.8437 16.9982 19.2187 17.9006C19.4062 18.3511 19.582 18.773 19.7227 19.105C19.8633 19.437 19.9388 19.6219 20.0273 19.799V19.8003L20.0299 19.8029C20.1159 19.9735 20.1081 19.8641 20.0781 19.924C19.8672 20.342 19.8385 20.4448 19.625 20.6909C19.2995 21.0659 18.9687 21.4826 18.793 21.6558C18.6393 21.8068 18.362 22.0412 18.1901 22.5021C18.0156 22.9618 18.0977 23.5946 18.375 24.0659C18.7448 24.6935 19.9648 26.6792 21.8594 28.3472C23.0534 29.3993 24.1641 30.0959 25.0521 30.5646C25.9414 31.0321 26.6641 31.3055 26.8255 31.3862C27.2109 31.5763 27.6302 31.7248 28.1185 31.6662C28.6081 31.6063 29.0286 31.3107 29.2969 31.0073L29.2982 31.006C29.6562 30.6011 30.7161 29.3901 31.224 28.644C31.2461 28.6519 31.2396 28.6453 31.4075 28.7065V28.7092H31.4102C31.487 28.7365 32.4544 29.1688 33.3164 29.5802C34.1784 29.9904 35.0534 30.4175 35.3372 30.5581C35.7487 30.7612 35.9427 30.894 35.9922 30.894C35.9961 30.9826 35.9987 31.0776 35.9857 31.2222C35.9518 31.6232 35.8437 32.1792 35.6289 32.7756C35.5234 33.0659 34.9753 33.6675 34.2825 34.105C33.5911 34.5425 32.7487 34.8524 32.4375 34.898C31.5 35.036 30.3867 35.0868 29.1641 34.7026C28.3164 34.437 27.2591 34.092 25.8906 33.5099C23.1146 32.325 20.7552 30.3107 19.0703 28.5373C18.2279 27.6493 17.5521 26.8237 17.0716 26.1987C16.5924 25.575 16.3841 25.2508 16.2083 25.0217L16.207 25.019C15.8971 24.6089 14 21.9709 14 19.5933C14 17.0776 15.168 16.0907 15.8008 15.4097C16.1328 15.0516 16.4961 14.9995 16.6419 14.9995H16.6432Z"
												fill="#EB8671"/>
											</svg>
										</a>
								</li>
								<li class="socials-item footer__socials-item">
									<a
										href=""
										class="socials-link footer__socials-link"
										target="_blank"
										><svg
											width="50"
											height="50"
											viewBox="0 0 50 50"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												id="instagram"
												d="M16 3C8.83203 3 3 8.83203 3 16V34C3 41.168 8.83203 47 16 47H34C41.168 47 47 41.168 47 34V16C47 8.83203 41.168 3 34 3H16ZM16 5H34C40.0859 5 45 9.91406 45 16V34C45 40.0859 40.0859 45 34 45H16C9.91406 45 5 40.0859 5 34V16C5 9.91406 9.91406 5 16 5ZM37 11C35.8945 11 35 11.8945 35 13C35 14.1055 35.8945 15 37 15C38.1055 15 39 14.1055 39 13C39 11.8945 38.1055 11 37 11ZM25 14C18.9375 14 14 18.9375 14 25C14 31.0625 18.9375 36 25 36C31.0625 36 36 31.0625 36 25C36 18.9375 31.0625 14 25 14ZM25 16C29.9824 16 34 20.0176 34 25C34 29.9824 29.9824 34 25 34C20.0176 34 16 29.9824 16 25C16 20.0176 20.0176 16 25 16Z"
												fill="#EB8671"/>
											</svg></a>
								</li>
							</ul>
						</nav>
						<p class="footer__copyright-text">
							©2024. Все права защищены
						</p>
					</div>
				</div>
			</div>
		</footer>
    `;
	appContainer.insertAdjacentHTML("beforeend", template);
}
