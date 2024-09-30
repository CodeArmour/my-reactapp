import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const AddProductModal = ({ isVisible, onClose, onAddProduct, categories }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [photo, setPhoto] = useState(null);

    const handleAddProduct = () => {
        if (name && price && selectedCategories.length > 0) {
            const newProduct = {
                name,
                price: parseFloat(price),
                category: selectedCategories,
                photo: URL.createObjectURL(photo),
            };
            onAddProduct(newProduct);
            setName('');
            setPrice('');
            setSelectedCategories([]);
            setPhoto(null);
            onClose();
        } else {
            alert("Please fill all fields");
        }
    };

    return isVisible ? (
        <div className="add-product">
            <div className="add-box">
                <div className="close-icon" onClick={onClose}>&times;</div>
                <label>Product Name</label>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Enter product name" />
                
                <label>Price</label>
                <input type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="Enter price" />

                <label>Categories</label>
                <select onChange={e => setSelectedCategories([...selectedCategories, e.target.value])}>
                    <option>Select category</option>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>

                <div className="selected-categories">
                    {selectedCategories.map((cat, index) => (
                        <span key={index} className="selected-category">
                            {cat}
                            <span className="delete-category" onClick={() => setSelectedCategories(selectedCategories.filter(c => c !== cat))}>x</span>
                        </span>
                    ))}
                </div>

                <label>Product Image</label>
                <input type="file" onChange={e => setPhoto(e.target.files[0])} />
                <button onClick={handleAddProduct}>Add Product</button>
            </div>
        </div>
    ) : null;
};

export default AddProductModal;
