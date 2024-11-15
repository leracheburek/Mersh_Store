import './style.css';

function MainBlock() {
    return (
        <div id='mainblock'>
            <img className='img-main-block' src="./src/assets/img/pic-main-block.jpg" alt="pic-main-block" />
            <div className="content-main">
                <h1 className='header-main-block'>Твій кастомний дизайн</h1>
                <h3 className='text-main-block'>створи свою оригінальну футболку за допомогою нашого <span>ОНЛАЙН-КОНСТРУКТОРА</span></h3>
                <button className='btn-main-block'>СТВОРИТИ</button>
            </div>
        </div> 
    );
}  

export default MainBlock;