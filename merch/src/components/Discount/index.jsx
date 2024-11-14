import './style.css';

function Discount() {
  return (
    <div className='discountWrapper'>
      <div className='discountBlock'>

        <div className='discountHeader'>
          <h2>Розпродаж 11.12</h2>
        </div>

        <div className='discountText'>
          <p>Знижка <span>20%</span> на все. Залишилося часу:</p>
        </div>

        <div className='discountTime'></div>
        
        <div className='discountButton'>
          <button type="button">Придбати</button>
        </div>

      </div>
    </div>
  )
}

export default Discount