import { renderCatalogFilters } from "./renderCatalogFilters";
import { renderCatalogWrapper } from "./renderCatalogWrapper";

export function renderCatalogContainer(element) {
  const catalogContainer = document.createElement("section");
  catalogContainer.className = "catalog-container";
  renderCatalogFilters(catalogContainer);
  renderCatalogWrapper(catalogContainer);
  element.appendChild(catalogContainer);
}
