const products = [
  { id: 1, name: "كولاجين", price: "10$", image: "IMG-20241125-WA0002.jpg" },
  { id: 2, name: "NATURAL", price: "6.99$", image: "IMG-20241125-WA0001.jpg" },
  { id: 3, name: "كريم شعر", price: "35.56$", image: "IMG-20241125-WA0000.jpg" }
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
