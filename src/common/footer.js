import "./footer.scss";
import { appContainer } from "../vars";

export function renderFooter() {
	const template = `
        <footer>
			<div>
				<a href="/contacts">Контакты</a>
			</div>
		</footer>
    `;
	appContainer.insertAdjacentHTML("beforeend", template);
}
