import './style.css';

const TShirtCarousel = () => {
    const tshirts = [
        { id: 1, name: 'Футболка 1', price: '550₴' },
        { id: 2, name: 'Футболка 2', price: '550₴' },
        { id: 3, name: 'Футболка 3', price: '550₴' },
    ];

    return (
        <div style={{ textAlign: 'center', padding: 20 }}>
            <h2>НАШІ ФУТБОЛКИ</h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <button className="carousel-btn">←</button>
                <div style={{ display: 'flex', gap: 20 }}>
                    {tshirts.map(tshirt => (
                        <div key={tshirt.id} style={{ textAlign: 'center' }}>
                            <img src="https://via.placeholder.com/150" alt={tshirt.name} style={{ width: 150 }} />
                            <p>{tshirt.name}</p>
                            <p style={{ fontWeight: 'bold' }}>{tshirt.price}</p>
                        </div>
                    ))}
                </div>
                <button className="carousel-btn">→</button>
            </div>
            <button className="view-all-btn">Дивитись всі</button>
        </div>
    );
};

export default TShirtCarousel;

