import React, { useState } from 'react';
import './PaymentForm.css';

function PaymentForm() {
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    cvv: '',
    expiry: '',
  });
  const [paymentResult, setPaymentResult] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your payment processing logic here
    setPaymentResult('Payment processed successfully!');
  };

  return (
    <div className="container90">
      <h1>Payment Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="John Doe"
          required
        />

        <label htmlFor="cardNumber">Card Number:</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleInputChange}
          placeholder="1234 5678 9012 3456"
          required
        />

        <div className="card-details">
          <div>
            <label htmlFor="expiry">Expiry (MM/YYYY):</label>
            <input
              type="text"
              id="expiry"
              name="expiry"
              value={formData.expiry}
              onChange={handleInputChange}
              placeholder="MM/YYYY"
              required
            />
          </div>
          <div>
            <label htmlFor="cvv">CVV:</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              placeholder="123"
              required
            />
          </div>
        </div>

        <button type="submit">Pay Now</button>
      </form>
      <div id="payment-result">{paymentResult}</div>
    </div>
  );
}

export default PaymentForm;
