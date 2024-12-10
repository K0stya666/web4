import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthChecker = () => {
    const navigate = useNavigate();
    const API_URL = 'http://localhost:9696/lab4/api/auth';

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            navigate('/');
            return;
        }

        axios.get(`${API_URL}/validate`, {
            headers: { 'Authorization': `Bearer ${token}` }
        }).catch(() => {
            localStorage.removeItem('token');
            delete axios.defaults.headers.common['Authorization'];
            navigate('/');
        });
    }, [navigate]);

    return null;
};

export default AuthChecker;