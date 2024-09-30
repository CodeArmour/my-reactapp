import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Products from './components/Products';
import AddProductModal from './components/AddProductModal';
import AddCategoryModal from './components/AddCategoryModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const App = () => {
    const initialProducts = [
        { name: 'Hoodie', category: ['Men', 'Kids'], price: 15.00, photo: "src/assets/images/shirt1.png" },
        { name: 'Jacket', category: ['Women'], price: 25.00, photo: "src/assets/images/shirt2.png" },
    ];

    const [products, setProducts] = useState(initialProducts);
    const [filteredProducts, setFilteredProducts] = useState(initialProducts);
    const [categories, setCategories] = useState(['Men', 'Women', 'Kids']);
    const [isAddProductModalVisible, setAddProductModalVisible] = useState(false);
    const [isAddCategoryModalVisible, setAddCategoryModalVisible] = useState(false);

    const handleFilterChange = (event) => {
        const category = event.target.value;
        if (category === 'All') {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(product => product.category.includes(category));
            setFilteredProducts(filtered);
        }
    };

    const handleAddProduct = (newProduct) => {
        setProducts([...products, newProduct]);
        setFilteredProducts([...products, newProduct]);
    };

    const handleAddCategory = (newCategory) => {
        setCategories([...categories, newCategory]);
    };

    return (
        <div>
            <Navbar />
            <Filter onFilterChange={handleFilterChange} categories={categories} />
            <Products products={filteredProducts} />

            <div className="text-center my-5">
                <button className="btn btn-primary me-3" onClick={() => setAddProductModalVisible(true)}>Add Product</button>
                <button className="btn btn-secondary" onClick={() => setAddCategoryModalVisible(true)}>Add Category</button>
            </div>

            <AddProductModal 
                isVisible={isAddProductModalVisible} 
                onClose={() => setAddProductModalVisible(false)} 
                onAddProduct={handleAddProduct}
                categories={categories}
            />

            <AddCategoryModal 
                isVisible={isAddCategoryModalVisible} 
                onClose={() => setAddCategoryModalVisible(false)} 
                onAddCategory={handleAddCategory}
            />
        </div>
    );
};

export default App;
