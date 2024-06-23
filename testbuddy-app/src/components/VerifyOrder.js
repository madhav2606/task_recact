import React, { useState } from 'react';
import { verifyOrder } from '../apiService';

const VerifyOrder = ({ token }) => {
    const [verificationData, setVerificationData] = useState({
        transactionId: '',
        razorpayPaymentId: '',
        razorpaySignature: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVerificationData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await verifyOrder(token, verificationData);
            console.log('Order verified', response.data);
        } catch (err) {
            setError('Order verification failed.');
        }
    };

    return (
        <div>
            <h2>Verify Order</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="transactionId" placeholder="Transaction ID" onChange={handleChange} />
                <input type="text" name="razorpayPaymentId" placeholder="Razorpay Payment ID" onChange={handleChange} />
                <input type="text" name="razorpaySignature" placeholder="Razorpay Signature" onChange={handleChange} />
                <button type="submit">Verify Order</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default VerifyOrder;
