import axios from 'axios';

const API_BASE_URL = 'https://api.testbuddy.live/v1';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const verifyOtp = (mobile, otp) => {
    return api.post('/auth/verifyotp', { mobile, otp });
};

export const getRazorpayKey = (token) => {
    return api.post('/payment/key', {}, {
        headers: { Authorization: token },
    });
};

export const createOrder = (token, orderData) => {
    return api.post('/order/create', orderData, {
        headers: { Authorization: token },
    });
};

export const verifyOrder = (token, verificationData) => {
    return api.post('/order/verify', verificationData, {
        headers: { Authorization: token },
    });
};
