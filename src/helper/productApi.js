const baseUrl = "https://fakestoreapi.com";

// GET ALL PRODUCTS
export const getAllProduct = async () => {
  const response = await fetch(`${baseUrl}/products`);
  const products = await response.json();
  return products;
};

// GET PRODUCTS BY ID

export const getProductById = async (id) => {
  const response = await fetch(`${baseUrl}/products/${id}`);
  const product = await response.json();
  return product;
};

// GET PRODUCTS BY CATEGORIE

export const getProductByCategory = async (category) => {
  const response = await fetch(`${baseUrl}/products/category/${category}`);
  const product = await response.json();
  return product;
};
