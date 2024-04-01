export const GetProducts = async (getCategory) => {
    try {
        let url = getCategory ==="/" ? `https://dummyjson.com/products` : `https://dummyjson.com/products/category${getCategory}`
        const res = await fetch(url);
        const data = await res.json();
        return data.products;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

export const GetProductId = async (id) => {
    try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching product by ID:', error);
        throw error;
    }
}
