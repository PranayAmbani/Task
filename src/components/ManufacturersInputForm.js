import React, { useState, useEffect } from 'react';

const ManufacturersInputForm = () => {
  const [orderId, setOrderId] = useState('');
  const [to, setTo] = useState('');
  const [from, setFrom] = useState('');
  const [quantity, setQuantity] = useState('');
  const [address, setAddress] = useState('');
  const [transporter, setTransporter] = useState('');
  
  useEffect(() => {
    // Simulate auto-populating address from registered address
    const registeredAddress = getAddressFromRegistration(); // Replace with your implementation to get the registered address
    setAddress(registeredAddress);
  }, []);

  const getAddressFromRegistration = () => {
    // Replace with your implementation to fetch the registered address from backend or local storage
    const address=localStorage.getItem('address')
    return address;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Create a message object to send to the transporter
    const message = {
      orderId,
      to,
      from,
      quantity,
      address,
      transporter,
    };

    // Send the message to the transporter using an API call or WebSocket
    sendMessageToTransporter(message);
  };

  const sendMessageToTransporter = (message) => {
    // Replace with your implementation to send the message to the transporter (API call or WebSocket)
    console.log('Sending message to transporter:', message);
  };

  return (
    <div>
      <h2>Manufacturer's Input Form</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="orderId">Order ID:</label>
          <input
            type="text"
            id="orderId"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            readOnly // Auto-generate value, so the field is read-only
          />
        </div>
        <div>
          <label htmlFor="to">To:</label>
          <input
            type="text"
            id="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="from">From:</label>
          <input
            type="text"
            id="from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <select
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          >
            <option value="">Select quantity</option>
            <option value="1">1 ton</option>
            <option value="2">2 tons</option>
            <option value="3">3 tons</option>
          </select>
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            readOnly // Auto-populated value, so the field is read-only
          />
        </div>
        <div>
          <label htmlFor="transporter">Transporter:</label>
          <select
            id="transporter"
            value={transporter}
            onChange={(e) => setTransporter(e.target.value)}
            required
          >
            <option value="">Select transporter</option>
            <option value="Transporter A">Transporter A</option>
            <option value="Transporter B">Transporter B</option>
            <option value="Transporter C">Transporter C</option>
          </select>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ManufacturersInputForm;
