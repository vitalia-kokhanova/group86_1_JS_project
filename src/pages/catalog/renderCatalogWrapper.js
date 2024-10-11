import { renderCatalogCards } from "./renderCatalogCards";

export function renderCatalogWrapper(element) {
  const catalogWrapper = document.createElement("div");
  catalogWrapper.className = "catalog-wrapper";
  catalogWrapper.innerHTML = `<div class="catalog-sort-column">
    <h4>Показывать в ряду по:</h4>
    <input type="radio" name="card" id="four-card" value="4" />
    <label for="four-card" class="four-card">4</label>
    <input type="radio" name="card" id="three-card" value="3" checked />
    <label for="three-card" class="three-card">3</label>
    <input type="radio" name="card" id="two-card" value="2" />
    <label for="two-card">2</label>
    <input type="radio" name="card" id="one-card" value="1" />
    <label for="one-card">1</label>
  </div>
  <div class="catalog-sort-price">
    <h4>Сортировать по цене:</h4>
    <select id="price-sort">
      <option value=""></option>
      <option value="asc">По возрастанию</option>
      <option value="desc">По убыванию</option>
    </select>
  </div>
  <div class = "catalog-cards"></div>`;
  renderCatalogCards(document.querySelector(".catalog-cards"));
  element.appendChild(catalogWrapper);
}
