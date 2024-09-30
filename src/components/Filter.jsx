import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Filter = ({ onFilterChange, categories }) => {
    return (
        <section className="filter py-5" id="filter">
            <div className="container text-center">
                <h2>Filter Your Products</h2>
                <p>Make your search easy by filtering products by categories</p>

                <div className="d-flex w-100 mb-3">
                    <select className="form-select w-100" onChange={onFilterChange}>
                        <option value="All">All</option>
                        {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>

                <div className="container-img">
                    <img src="src\assets\images\filter.jpg" alt="filter" />
                </div>
            </div>
        </section>
    );
};

export default Filter;
