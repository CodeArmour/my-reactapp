import React from 'react';

const Products = ({ products }) => {
    return (
        <section className="view py-5" id="products">
            <div className="container text-center">
                <h2>Our Products</h2>
                <div className="row">
                    {products.map((product, index) => (
                        <div key={index} className="col-lg-4 col-md-6 mb-4">
                            <div className="product">
                                <div className="image">
                                    <img src={product.photo} alt={product.name} />
                                </div>
                                <div className="details">
                                    <h3 className="name">{product.name}</h3>
                                    <div className="category-container">
                                        {product.category.map(cat => (
                                            <span key={cat} className={`category-box category-${cat.toLowerCase()}`}>{cat}</span>
                                        ))}
                                    </div>
                                    <h3 className="price">${product.price.toFixed(2)}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
