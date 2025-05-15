import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [shipping, setShipping] = useState(5);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedItems = items.map(item => ({
      ...item,
      quantity: item.quantity || 1,
      desc: isNaN(parseFloat(item.desc)) ? 0 : parseFloat(item.desc)
    }));
    setCartItems(updatedItems);
  }, []);

  useEffect(() => {
    const sum = cartItems.reduce((acc, item) => {
      const price = parseFloat(item.desc);
      return acc + (isNaN(price) ? 0 : price * item.quantity);
    }, 0);
    setTotal(sum);
  }, [cartItems]);

  const updateQuantity = (index, delta) => {
    setCartItems(prevItems => {
      const updated = [...prevItems];
      const newQty = updated[index].quantity + delta;
      updated[index].quantity = newQty < 1 ? 1 : newQty;
      localStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    });
  };

  const removeItem = (index) => {
    const updated = cartItems.filter((_, i) => i !== index);
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const handleShippingChange = (e) => {
    const selected = e.target.value;
    const charge = selected.includes('Standard') ? 5 : selected.includes('Express') ? 10 : 0;
    setShipping(charge);
  };

  return (
    <>
      <Nav />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-8">
            <h4 className="mb-4"><b>Shopping Cart</b></h4>
            <div className="mb-3 text-right text-muted">{cartItems.length} items</div>

            {cartItems.map((item, index) => (
              <div className="row border-top py-3 align-items-center" key={index}>
                <div className="col-2">
                  <img className="img-fluid" src={item.src} alt={`Product ${index + 1}`} />
                </div>
                <div className="col">
                  <div className="text-muted small">{item.heading}</div>
                  <div className="text-dark">Item #{index + 1}</div>
                </div>
                <div className="col d-flex align-items-center">
                  <button onClick={() => updateQuantity(index, -1)} className="btn btn-outline-secondary btn-sm">-</button>
                  <span className="border px-3 py-1 mx-2">{item.quantity}</span>
                  <button onClick={() => updateQuantity(index, 1)} className="btn btn-outline-secondary btn-sm">+</button>
                </div>
                <div className="col text-right">
                  $ {(item.desc * item.quantity).toFixed(2)}
                  <span
                    className="text-danger ml-3"
                    style={{ cursor: 'pointer' }}
                    onClick={() => removeItem(index)}
                  >
                    &#10005;
                  </span>
                </div>
              </div>
            ))}

            <div className="mt-4">
              <a href="#" className="text-muted">← Back to shop</a>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-3 bg-light rounded shadow-sm">
              <h5><b>Summary</b></h5>
              <hr />
              <div className="d-flex justify-content-between mb-2">
                <span>Total Items</span>
                <span>$ {total.toFixed(2)}</span>
              </div>
              <form>
                <div className="mb-3">
                  <label htmlFor="shipping" className="form-label">SHIPPING</label>
                  <select id="shipping" className="form-select" onChange={handleShippingChange}>
                    <option>Standard Delivery - $5.00</option>
                    <option>Express Delivery - $10.00</option>
                    <option>Pickup - $0.00</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="code" className="form-label">GIVE CODE</label>
                  <input type="text" id="code" className="form-control" placeholder="Enter your code" />
                </div>
              </form>
              <hr />
              <div className="d-flex justify-content-between mb-3">
                <strong>TOTAL PRICE</strong>
                <strong>$ {(total + shipping).toFixed(2)}</strong>
              </div>
              <button className="btn btn-primary w-100">CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
