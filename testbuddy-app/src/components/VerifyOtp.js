import React, { useState } from 'react';
import { verifyOtp } from '../apiService';

const VerifyOtp = ({ onSuccess }) => {
    const [mobile, setMobile] = useState('');
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await verifyOtp(mobile, otp);
            onSuccess(response.data.token);
        } catch (err) {
            setError('OTP verification failed.');
        }
    };

    return (
        <div>
            <h2>Verify OTP</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                <input type="text" placeholder="OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
                <button type="submit">Verify</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default VerifyOtp;
