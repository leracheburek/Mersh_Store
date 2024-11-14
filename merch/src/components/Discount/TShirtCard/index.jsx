import './style.css';

const TShirtCard = ({ name, price }) => (
    <div style={{ textAlign: 'center', width: 150 }}>
      <img src="https://via.placeholder.com/150" alt={name} style={{ width: '100%' }} />
      <p>{name}</p>
      <p style={{ fontWeight: 'bold' }}>{price}</p>
    </div>
  );
  
  export default TShirtCard;