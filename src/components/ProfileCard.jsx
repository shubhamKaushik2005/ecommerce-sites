import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProfileCard(props) {
    const { data, index } = props;
    const { src, heading, desc } = data;

    const [showAlert, setShowAlert] = useState(false);

    const img = {
        height: "500px",
        width: "100%",
        objectFit: "cover"
    };

    const handleAddToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        const newItem = { src, heading, desc };
        cartItems.push(newItem);
        localStorage.setItem("cart", JSON.stringify(cartItems));

        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 2000); // auto close after 2 seconds
    };

    return (
        <div className="col-3" style={{ position: 'relative' }}>
            {showAlert && (
                <div style={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    backgroundColor: '#4caf50',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                    zIndex: 999
                }}>
                    ✅ Item added to cart!
                </div>
            )}
            <div className="product" style={{ width: "18rem" }}>
                <Link to={`/products/${index}`}>
                    <img src={src} style={img} className="product-img" alt="..." />
                </Link>
                <div className="card-body">
                    <h5 className="product-title">{heading.substr(0, 20)}...</h5>
                    <p className="product-description">
                        {desc ? <i>{desc.substr(0, 50)}...</i> : <b>Desc not found</b>}
                    </p>
                    <button className="btn btn-primary" onClick={handleAddToCart}>Add To Cart</button>
                </div>
            </div>
            <br />
        </div>
    );
}

export default ProfileCard;
