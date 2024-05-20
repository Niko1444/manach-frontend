import React from 'react';
import { useNavigate } from 'react-router-dom';
import TopFruit from './TopFruit';

const CusStore = () => {
    const navigate = useNavigate();

    const handleTopFruitClick = () => {
        navigate('/banana-store');
    };

    return (
        <div>
            <div>
                <TopFruit onClick={handleTopFruitClick} />
            </div>
        </div>
    );
};

export default CusStore;
