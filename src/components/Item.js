import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card p-3 text-center">
                <h5>{item.name}</h5>
                <Link to={`/item/${item.id}`} className="btn btn-primary mt-2">
                    Ver Detalle
                </Link>
            </div>
        </div>
    );
};

export default Item;
