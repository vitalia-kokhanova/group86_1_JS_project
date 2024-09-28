import "./_catalog.scss";

import { renderHeader } from "../../common/header";
import { renderMainContainer } from "../../common/common";
import { renderFirstScreen } from "../../common/firstScreen";
import { renderFooter } from "../../common/footer";
import { renderCatalogContainer } from "./renderCatalogContainer";
import { renderCatalogWrapper } from "./catalogWrapper";

export function renderCatalog(element) {
  element.innerHTML = "";
  renderHeader();
  renderMainContainer();
  const mainContainer = document.querySelector(".main");
  renderFirstScreen(mainContainer);
  const innerWrapper = document.querySelector(".first-screen__inner-wraper");
  innerWrapper.innerHTML = `<h2 class="secondary-main-title">Каталог</h2>`;
  renderCatalogContainer(mainContainer);
  renderCatalogWrapper(mainContainer);
  renderFooter();
}
