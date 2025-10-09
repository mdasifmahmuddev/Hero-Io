const  getStoredProduct =() =>{ 

    const storedProductSTR =localStorage.getItem("productList");
   
    if(storedProductSTR){ 
        const storeProductData = JSON.parse(storedProductSTR);
        return storeProductData ; 

    }else { 
        return [];
    }
  

}

const addToStoreDb =(id) => { 
    const storeProductData =getStoredProduct();

    if(storeProductData.includes(id)){
        alert ("this id already exist");

    } else { 
        storeProductData.push(id);
         const data =JSON.stringify(storeProductData);
        localStorage.setItem("productList",data);
   
        }

}

export {addToStoreDb,getStoredProduct};