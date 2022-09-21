import './Header.css'

const Header = () => {
    return(
        <header>
            <div>
                <ul className='nav'>
                    <li class="nav-li"><a href="http://localhost:3030/about">SOBRE NOSOTROS</a></li>
                    <li class="nav-li"><a href="http://localhost:3030/contact">CONTACTANOS</a></li>
                </ul>
            </div>
            <div>
                <ul>
                <li class="nav-li"><a href="http://localhost:3030/">VOLVER A INICIO</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header