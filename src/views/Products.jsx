import React, { useState, useEffect } from 'react';
import './Products.css';
import Nav from '../components/Nav';
import { useParams } from 'react-router-dom';
import data from '../data.json';

function Products() {
  const { id } = useParams();
  const [dd, setDd] = useState(null);
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    const index = parseInt(id);
    const item = data[index];
    setDd(item);
    setMainImage(item?.src || '/images/default.jpg');
  }, [id]);

  const handleThumbnailClick = (img) => {
    setMainImage(img);
  };

  return (
    <>
      <Nav />
      {dd && (
        <div className='product-page'>
          <div className="product-images">
            <img className="main-image" src={mainImage} alt={dd.heading} />
            <div className="thumbnail-images">
              {(dd.images || []).map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  onClick={() => handleThumbnailClick(img)}
                  className="thumbnail"
                />
              ))}
            </div>
          </div>

          <section className="product-details">
            <br />
            <h1>{dd.heading}</h1>
            <p className="price">{dd.price ? `$${dd.price}` : 'Price not available'}</p>
            <p className="description">{dd.desc}</p>

            <div className="options">
              <label htmlFor="color">Color:</label>
              <select id="color" name="color">
                {(dd.colors || ['White', 'Black', 'Gray']).map((color, idx) => (
                  <option key={idx} value={color.toLowerCase()}>{color}</option>
                ))}
              </select>

              <label htmlFor="size">Size:</label>
              <select id="size" name="size">
                {(dd.sizes || ['S', 'M', 'L']).map((size, idx) => (
                  <option key={idx} value={size.toLowerCase()}>{size}</option>
                ))}
              </select>

              <button className="add-to-cart">Add to Cart</button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default Products;
