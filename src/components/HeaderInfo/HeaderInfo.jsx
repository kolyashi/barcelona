import './HeaderInfo.css';
import barcImage from '../../img/barc.jpg'



const HeaderInfo = () => {
    return (
        <div class="container_info">
        <div class="column image-column">
        <img src={barcImage} alt="Sample Image"/>
        </div>
        <div class="column text-column">
        <h1 h1 className="header_name">Барселона - обзор города</h1>
        <p className="text_barc">
        Барселона с её золотистыми пляжами, архитектурными шедеврами Гауди, многочисленными фестивалями и гастрономическим разнообразием понравилась мне в первый же день пребывания и стала местом, в котором...
        </p>
        <p className="text_barc_more">Читать далее</p>
        </div>
        </div>
        )
        
}


export default HeaderInfo










