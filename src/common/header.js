import { appContainer } from "../vars";

export function renderHeader() {
	const template = `
    <header>
			<div></div>
			<div></div>
			<div>
				<nav>
					<ul>
						<li><a href="/" id="home-link">Home</a></li>
						<li><a href="/catalog" id="catalog-link">Catalog</a></li>
						<li><a href="/basket" id="basket-link">Basket</a></li>
						<li><a href="/profile" id="profile-link">Profile</a></li>
					</ul>
				</nav>
			</div>
		</header>
    `;
	appContainer.insertAdjacentHTML("afterbegin", template);
}
