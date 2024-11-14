import './style.css';

const TShirtCarousel = () => {
    const tshirts = [
        { id: 1, name: 'Футболка 1', price: '550₴' },
        { id: 2, name: 'Футболка 2', price: '550₴' },
        { id: 3, name: 'Футболка 3', price: '550₴' },
    ];

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h2>НАШІ ФУТБОЛКИ</h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <button className="carousel-btn">←</button>
                <div style={{ display: 'flex', gap: '20px' }}>
                </div>
                <button className="carousel-btn">→</button>
            </div>
            <button className="view-all-btn">Дивитись всі</button>
        </div>
    );
};

export default TShirtCarousel;
