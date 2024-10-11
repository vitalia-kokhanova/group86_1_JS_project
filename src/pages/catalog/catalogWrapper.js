export function renderCatalogWrapper() {
  fetch("../../../db.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ошибка: " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      const catalogWrapper = document.querySelector(".catalog-wrapper");
      data.products.forEach((item) => {
        const catalogCard = createCatalogCard(item);
        catalogWrapper.appendChild(catalogCard);
      });
    })
    .catch((error) => console.error("Ошибкa: ", error));
}

function createCatalogCard(item) {
  const catalogCard = document.createElement("div");
  catalogCard.className = "catalog-card";
  catalogCard.innerHTML = `
    <div class="catalog-image-and-name"><img class="catalog-image" src="${item.image1}" alt="${item.name}">
    <p class="catalog-name">${item.name}</p></div>
    <div class="catalog-price-and-backet"><p class="catalog-price">${item.price} руб</p><button class="add-backet">Заказать</button></div>
    `;
  return catalogCard;
}

document.addEventListener("DOMContentLoaded", () => {
  const radios = document.querySelectorAll('input[name="card"]');
  const targetCatalogColumns = document.querySelector(".catalog-wrapper");

  radios.forEach((radio) => {
    radio.addEventListener("change", () => {
      switch (radio.value) {
        case "4":
          targetCatalogColumns.style.gridЕemplateСolumns = "repeat(4, 1fr)";
          break;
        case "3":
          targetCatalogColumns.style.gridTemplateColumns = "repeat(3, 1fr)";
          break;
        case "2":
          targetCatalogColumns.style.gridTemplateColumns = "repeat(2, 1fr)";
          break;
        case "1":
          targetCatalogColumns.style.gridTemplateColumns = "1fr";
          break;
      }
    });
  });
});
