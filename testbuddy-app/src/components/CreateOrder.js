import './CreateOrder.css'
import React, { useState } from 'react';
import { createOrder } from '../apiService';

const CreateOrder = ({ token, onOrderCreated }) => {
    const [orderData, setOrderData] = useState({
        packageId: '',
        pricingId: '',
        finalAmount: '',
        couponCode: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrderData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await createOrder(token, orderData);
            onOrderCreated(response.data);
        } catch (err) {
            setError('Order creation failed.');
        }
    };

    return (
        <div>
            <h2>Create Order</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="packageId" placeholder="Package ID" onChange={handleChange} />
                <input type="text" name="pricingId" placeholder="Pricing ID" onChange={handleChange} />
                <input type="text" name="finalAmount" placeholder="Final Amount" onChange={handleChange} />
                <input type="text" name="couponCode" placeholder="Coupon Code" onChange={handleChange} />
                <button type="submit">Create Order</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default CreateOrder;
