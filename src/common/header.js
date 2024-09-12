import { appContainer } from "../vars";
import "./header.scss";

export function renderHeader() {
  const template = `
    <header>
			<div class="header__burger-container">
				<img src=""alt=""class="header__burger-image"/>
			</div>
			<div class="header__logo-container">
				<div class="logo__image-box">
					<img src=""alt=""class="logo__image"/>
				</div>
				<div class="logo__titles-box">
					<div class="logo__title-one"></div>
					<div class="logo__title-second"></div>
				</div>
			</div>
			<div class="header__nav-wrapper">
				<nav class="header__nav">
					<ul class="header__nav-list">
						<li class="nav__list-item"><a href="/"id="homeLink"class="nav__listitem-link">Home</a></li>
						<li class="nav__list-item">
							<a href=""id="searchBarIcon"class="nav__listitem-link">Search</a>
						</li>
						<li class="nav__list-item"><a href="/basket"id="basketLink"class="nav__listitem-link">Basket</a></li>
						<li class="nav__list-item">
							<a href="/profile"id="profileLink"class="nav__listitem-link">Profile</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
    `;
  appContainer.insertAdjacentHTML("afterbegin", template);
}
