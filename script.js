const products = [
  { id: 1, name: "Smartphone", category: "electronics", price: 120000, rating: 4.5, img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS-Z7ONdNknP1YDVg3INTTNjGbrCBmySYcKsw24P7cxqCyBc6Q_BnMP18sizu6ZTcSVln83giIQNavLWR9mtvnd7RFsTeiVKrjWNZ2r0mBQ3FGhzmUTooMWgWnEy6rc-p5tYRMqfg&usqp=CAc" },
  { id: 2, name: "T-Shirt", category: "clothing", price: 400, rating: 4.0, img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQk9vIwZGU74vgHnzo7uUChj25KSkC8CX0nNOWYeTpbIP6YNdiobBc5uOaJbq8BAOTkDngth-GrR4SN6PEHCFtVSDwV7D3WwLV-1z3777Jny7NiTVJKl-oh91qGlLozWUvJr9JYces&usqp=CAc" },
  { id: 3, name: "Laptop", category: "electronics", price: 43000, rating: 4.8, img: "https://m.media-amazon.com/images/I/71vFKBpKakL._AC_SL1500_.jpg" },
  { id: 4, name: "Novel Book", category: "books", price: 250, rating: 3.9, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx4ONp_TLFBtxBvGsPl3Ny-r3l-EYkYjB6pQ&s" },
  { id: 5, name: "Headphones", category: "electronics", price: 800, rating: 4.3, img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRoQ7BwHaXpU3Dcs3yD_Yv_DYzp9_I7ODH24RLa-IdOMv6TSg5GXJ7EXjEWa7dXyv1AaXFlhH9JgbOSLtrOupqcElxlMbORALxQU_c6393wvLUx2K9nZJ3jMRW3ocCR2x-XDIGGZw&usqp=CAc" },
  { id: 6, name: "Jeans", category: "clothing", price: 900, rating: 4.1, img: "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/64ae98497cc98b368835b645/1a0833c7-726a-41dc-98fb-bb8af5a239ad-removebg-preview.png" },

  // ✅ Added 6 more products
  { id: 7, name: "Shoes", category: "clothing", price: 1500, rating: 4.6, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtUnGDkONlOd4qjuDSXZHsUc_5NhoDWoj9YQ&s" },
  { id: 8, name: "Wrist Watch", category: "electronics", price: 2200, rating: 4.7, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUgsLf-w4b5l5kABOnlFysPOnvu5giZdNI-g&s" },
  { id: 9, name: "Backpack", category: "clothing", price: 1200, rating: 4.4, img: "https://i.pinimg.com/550x/cf/65/96/cf659648a372253dde61d511d27b8e44.jpg" },
  { id: 10, name: "Sunglasses", category: "clothing", price: 700, rating: 4.2, img: "https://i.pinimg.com/736x/48/ba/ed/48baed4ea0ca0c4f2ae8e7f6486c2bf8.jpg" },
  { id: 11, name: "Jacket", category: "clothing", price: 2000, rating: 4.5, img: "https://www.saintg.in/cdn/shop/files/Untitled-2.5_f3d75746-e6b1-43d7-b5ea-0c2c3ebe7e9e.jpg?v=1745314279" },
  { id: 12, name: "Tablet", category: "electronics", price: 80000, rating: 4.3, img: "https://i.pinimg.com/736x/66/f4/21/66f421d45f6dd59d3a85066a8e48237f.jpg" }
];

const productContainer = document.getElementById("productContainer");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");
const sortOptions = document.getElementById("sortOptions");

function displayProducts(filteredProducts) {
  productContainer.innerHTML = "";
  filteredProducts.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h4>${product.name}</h4>
      <p>₹${product.price}</p>
      <p>⭐ ${product.rating}</p>
    `;
    productContainer.appendChild(div);
  });
}

function filterAndSort() {
  let filtered = [...products];

  // Filter by category
  const categoryValue = categoryFilter.value;
  if (categoryValue !== "all") {
    filtered = filtered.filter(p => p.category === categoryValue);
  }

  // Filter by price
  const priceValue = priceFilter.value;
  if (priceValue === "low") {
    filtered = filtered.filter(p => p.price < 500);
  } else if (priceValue === "mid") {
    filtered = filtered.filter(p => p.price >= 500 && p.price <= 1000);
  } else if (priceValue === "high") {
    filtered = filtered.filter(p => p.price > 1000);
  }

  // Sorting
  const sortValue = sortOptions.value;
  if (sortValue === "priceLowHigh") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortValue === "priceHighLow") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortValue === "ratingHighLow") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(filtered);
}

// Event Listeners
categoryFilter.addEventListener("change", filterAndSort);
priceFilter.addEventListener("change", filterAndSort);
sortOptions.addEventListener("change", filterAndSort);

// Initial Load
displayProducts(products);
