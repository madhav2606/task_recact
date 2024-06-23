import React, { useState } from 'react';
import { getRazorpayKey } from '../apiService';

const GetRazorpayKey = ({ token, onKeyReceived }) => {
    const [key, setKey] = useState('');
    const [error, setError] = useState('');

    const handleGetKey = async () => {
        try {
            const response = await getRazorpayKey(token);
            setKey(response.data.key);
            onKeyReceived(response.data.key);
        } catch (err) {
            setError('Failed to get Razorpay key.');
        }
    };

    return (
        <div>
            <h2>Get Razorpay Key</h2>
            <button onClick={handleGetKey}>Get Key</button>
            {key && <p>Key: {key}</p>}
            {error && <p>{error}</p>}
        </div>
    );
};

export default GetRazorpayKey;
