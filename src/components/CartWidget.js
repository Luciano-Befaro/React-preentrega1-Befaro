import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
    return (
        <div className="d-flex align-items-center text-white">
            <FaShoppingCart size={24} />
            <span className="ms-2 badge bg-danger">3</span>
        </div>
    );
};

export default CartWidget;