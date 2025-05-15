import React from 'react'
import Nav from '../components/Nav';

function Wishlist() {
    return (
        <>
            <Nav />
            <div class="product-row">
                <div class="product">
                    <img src="/images/product-02.jpg" alt="Product Image" class="product-img" />
                    <h2 class="product-title">Herschel supply</h2>
                    <p class="product-description">This is an awesome product that you should definitely consider adding to your wishlist!</p>
                    <button class="wishlist-btn" onclick="addToWishlist()">Add to card</button>
                </div>
                <div class="product">
                    <img src="/images/product-07.jpg" alt="Product Image" class="product-img" />
                    <h2 class="product-title">Shirt in Stretch Cotton</h2>
                    <p class="product-description">This is an awesome product that you should definitely consider adding to your wishlist!</p>
                    <button class="wishlist-btn" onclick="addToWishlist()">Add to card</button>
                </div>
                <div class="product">
                    <img src="/images/product-06.jpg" alt="Product Image" class="product-img" />
                    <h2 class="product-title">Vintage Inspired Classic</h2>
                    <p class="product-description">This is an awesome product that you should definitely consider adding to your wishlist!</p>
                    <button class="wishlist-btn">Add to card</button>
                </div>
                <div class="product">
                    <img src="/images/product-09.jpg" alt="Product Image" class="product-img" />
                    <h2 class="product-title">Converse All Star Hi Plimsolls</h2>
                    <p class="product-description">This is an awesome product that you should definitely consider adding to your wishlist!</p>
                    <button class="wishlist-btn">Add to card</button>
                </div>
            </div>

        </>
    )
}

export default Wishlist
