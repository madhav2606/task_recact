import React, { useState } from 'react';
import VerifyOtp from './components/VerifyOtp';
import GetRazorpayKey from './components/GetRazorpayKey';
import CreateOrder from './components/CreateOrder';
import VerifyOrder from './components/VerifyOrder';

const App = () => {
    const [token, setToken] = useState('');
    const [razorpayKey, setRazorpayKey] = useState('');

    const handleOtpSuccess = (token) => {
        setToken(token);
    };

    const handleKeyReceived = (key) => {
        setRazorpayKey(key);
    };

    const handleOrderCreated = (order) => {
        console.log('Order created', order);
    };

    return (
        <div>
            <h1>TestBuddy API Integration</h1>
            <VerifyOtp onSuccess={handleOtpSuccess} />
            {token && <GetRazorpayKey token={token} onKeyReceived={handleKeyReceived} />}
            {token && <CreateOrder token={token} onOrderCreated={handleOrderCreated} />}
            {token && <VerifyOrder token={token} />}
        </div>
    );
};

export default App;
