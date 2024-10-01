import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export const AddCategoryModal = ({ isVisible, onClose, onAddCategory }) => {
    const [newCategory, setNewCategory] = useState('');

    const handleAddCategory = () => {
        if (newCategory) {
            onAddCategory(newCategory);
            setNewCategory('');
            onClose();
        } else {
            alert("Please enter category name");
        }
    };

    return isVisible ? (
        <div className="add-category">
            <div className="add-box">
                <div className="close-icon" onClick={onClose}>&times;</div>
                <label className='form-label'>Category</label>
                <input className="form-control w-100 mb-3" value={newCategory} onChange={e => setNewCategory(e.target.value)} placeholder="Enter category name" />
                <button className='btn btn-success' onClick={handleAddCategory}>Add Category</button>
            </div>
        </div>
    ) : null;
};

export default AddCategoryModal;
