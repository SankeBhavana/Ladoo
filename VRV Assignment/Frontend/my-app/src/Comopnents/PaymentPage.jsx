import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../CSS/PaymentPage.css';

const PaymentPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {};
    const cardNumberRegex = /^\d{16}$/;
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/; // MM/YY format
    const cvvRegex = /^\d{3}$/;

    if (!formData.name.trim()) {
      errors.name = 'Name on card is required.';
    }

    if (!cardNumberRegex.test(formData.cardNumber)) {
      errors.cardNumber = 'Card number must be 16 digits.';
    }

    if (!expiryDateRegex.test(formData.expiryDate)) {
      errors.expiryDate = 'Expiry date must be in MM/YY format.';
    } else {
      const [month, year] = formData.expiryDate.split('/');
      const currentYear = new Date().getFullYear() % 100; // Last two digits of current year
      const currentMonth = new Date().getMonth() + 1;

      if (parseInt(year, 10) < currentYear || (parseInt(year, 10) === currentYear && parseInt(month, 10) < currentMonth)) {
        errors.expiryDate = 'Card has expired.';
      }
    }

    if (!cvvRegex.test(formData.cvv)) {
      errors.cvv = 'CVV must be a 3-digit number.';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const ticketDetails = {
        event_name: 'Concert Night',
        date: '2024-12-01',
        seat: 'A12',
        price: 500,
      };
      // Navigate to SuccessPay page with ticket details as state
      navigate('/successpay', { state: ticketDetails });
    } else {
      alert('Please correct the errors in the form.');
    }
  };

  return (
    <div className="payment-page">
      <h2>Payment Page</h2>
      <div className="payment-container">
        {/* Payment form */}
        <form onSubmit={handleSubmit} className="payment-form">
          <div className="form-group">
            <label>Name on Card:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label>Card Number:</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              required
              placeholder="1111 2222 3333 4444"
            />
            {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}
          </div>
          <div className="form-group">
            <label>Expiry Date:</label>
            <input
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              required
              placeholder="MM/YY"
            />
            {errors.expiryDate && <p className="error">{errors.expiryDate}</p>}
          </div>
          <div className="form-group">
            <label>CVV:</label>
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              required
              placeholder="123"
            />
            {errors.cvv && <p className="error">{errors.cvv}</p>}
          </div>
          <button type="submit" className="submit-btn">
            Submit Payment
          </button>
        </form>

        {/* Animated Card Preview */}
        <div className="card-preview">
          <div className="card">
            <div className="card-header">
              <h3>Payment Details</h3>
            </div>
            <div className="card-body">
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Card Number:</strong> **** **** **** {formData.cardNumber.slice(-4)}</p>
              <p><strong>Expiry Date:</strong> {formData.expiryDate}</p>
              <p><strong>CVV:</strong> ***</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
