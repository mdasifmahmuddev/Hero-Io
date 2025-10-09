const getStoredProduct = () => {
  const storedProductSTR = localStorage.getItem("productList");
  if (storedProductSTR) {
    return JSON.parse(storedProductSTR);
  }
  return [];
};

const addToStoreDb = (id) => {
  const storeProductData = getStoredProduct();
  if (storeProductData.includes(id)) {
    alert("This product is already added");
  } else {
    storeProductData.push(id);
    localStorage.setItem("productList", JSON.stringify(storeProductData));
  }
};

export { addToStoreDb, getStoredProduct };
