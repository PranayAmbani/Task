import React, { useState } from 'react';

const TransportersInputForm = () => {
  const [orderId, setOrderId] = useState('');
  const [price, setPrice] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Create a message object to send back to the manufacturer
    const message = {
      orderId,
      price,
    };

    // Send the message back to the manufacturer using an API call or WebSocket
    sendMessageToManufacturer(message);
  };

  const sendMessageToManufacturer = (message) => {
    // Replace with your implementation to send the message to the manufacturer (API call or WebSocket)
    console.log('Sending message to manufacturer:', message);
  };

  return (
    <div>
      <h2>Transporter's Input Form</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="orderId">Order ID:</label>
          <select
            id="orderId"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            required
          >
            <option value="">Select order ID</option>
            <option value="Order ID 1">Order ID 1</option>
            <option value="Order ID 2">Order ID 2</option>
            <option value="Order ID 3">Order ID 3</option>
            {/* Add other order IDs dynamically based on received orders */}
          </select>
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit">Reply</button>
      </form>
    </div>
  );
};

export default TransportersInputForm;
