class Services {
	static async getProducts() {
		try {
			const resp = await fetch("http://localhost:3001/products");
			return resp.json();
		} catch (error) {
			console.log("Возникла ошибка.");
		}
	}

	static async addProductsToBasket(item) {
		try {
			const resp = await fetch("http://localhost:3001/basket_items", {
				method: "POST",
				body: JSON.stringify(item),
				headers: {
					"Content-Type": "application/json",
				},
			});
			return resp.json();
		} catch (error) {
			console.log("Возникла ошибка.");
		}
	}
}
