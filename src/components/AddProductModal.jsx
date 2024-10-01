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
        <div className="add-product modal fade show" id="addProductModal" tabIndex="-1" style={{ display: 'block' }}>
            <div className="modal-dialog">
                <div className="modal-content p-4">
                    <div className="d-flex justify-content-between mb-4">
                        <h5 className="modal-title">Add Product</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
                    </div>

                    {/* Product Image Input */}
                    <div className="mb-3">
                        <label className="form-label" htmlFor="productImageInput">Product Image</label>
                        <input type="file" className="form-control" id="productImageInput" onChange={e => setPhoto(e.target.files[0])} />
                    </div>

                    {/* Product Name Input */}
                    <div className="mb-3">
                        <label className="form-label" htmlFor="productNameInput">Product Name</label>
                        <input type="text" className="form-control" id="productNameInput" value={name} onChange={e => setName(e.target.value)} placeholder="Enter product name" />
                    </div>

                    {/* Categories Dropdown */}
                    <div className="mb-3">
                        <label className="form-label" htmlFor="categoryDropdown">Categories</label>
                        <div className="d-flex">
                            <select id="categoryDropdown" className="form-select w-100" onChange={e => setSelectedCategories([...selectedCategories, e.target.value])}>
                                <option value="">Select category</option>
                                {categories.map(category => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Selected Categories Display */}
                    <div className="mb-3">
                        {selectedCategories.length > 0 && (
                            <div className="d-flex flex-wrap gap-2">
                                {selectedCategories.map((cat, index) => (
                                    <span key={index} className="badge bg-primary">
                                        {cat}
                                        <button type="button" className="btn-close btn-close-white ms-2" aria-label="Close" onClick={() => setSelectedCategories(selectedCategories.filter(c => c !== cat))}></button>
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Price Input */}
                    <div className="mb-3">
                        <label className="form-label" htmlFor="productPriceInput">Price</label>
                        <input type="number" className="form-control" id="productPriceInput" value={price} onChange={e => setPrice(e.target.value)} placeholder="Enter price" step="0.1" min="0" />
                    </div>

                    {/* Add Product Button */}
                    <div className="d-grid gap-2">
                        <button type="button" className="btn btn-success" onClick={handleAddProduct}>Add Product</button>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
};

export default AddProductModal;
