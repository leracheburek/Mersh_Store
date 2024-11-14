import React from 'react';

const TShirtCard = ({ name, price }) => {
    return (
        <div style={{ textAlign: 'center', width: '150px' }}>
            <img
                src="https://via.placeholder.com/150" // замініть на URL зображення
                alt={name}
                style={{ width: '100%', marginBottom: '10px' }}
            />
            <p>{name}</p>
            <p style={{ fontWeight: 'bold' }}>{price}</p>
        </div>
    );
};

export default TShirtCard;