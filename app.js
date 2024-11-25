const products = [
  { id: 1, name: "منتج 1", price: "50$", image: "fareda 1.jpg" },
  { id: 2, name: "منتج 2", price: "75$", image: "fareda 2.jpg" },
  { id: 3, name: "منتج 3", price: "100$", image: "fareda 3.jpg" }
];

window.onload = () => {
  const productGrid = document.getElementById("productGrid");
  products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <a href="product.html?id=${product.id}">عرض التفاصيل</a>
    `;
    productGrid.appendChild(productCard);
  });
};

function searchProduct() {
  const searchQuery = document.getElementById("search").value.toLowerCase();
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery)
  );

  const productGrid = document.getElementById("productGrid");
  productGrid.innerHTML = ""; // مسح المنتجات الحالية
  filteredProducts.forEach(product => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <a href="product.html?id=${product.id}">عرض التفاصيل</a>
    `;
    productGrid.appendChild(productCard);
  });
}
