import './style.css'
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

const Header = () => {
    return (
        <header className="rl-header">
            <div className="rl-logo">
                <LinkScroll to='rl-header' smooth={true} duration={1000}><span>OnHome</span></LinkScroll>
            </div>
            <div className='rl-options'>
                <nav className='rl-navbar'>
                    <ul>
                        <li><LinkScroll to='solutions--container' smooth={true} duration={1000}>Serviços</LinkScroll></li>
                        <li><LinkScroll to='products' smooth={true} duration={1000}>Produtos</LinkScroll></li>
                        <li>Sobre nós</li>
                        <li>Suporte</li>
                        <li><LinkScroll to='contact--container' smooth={true} duration={1000}>Contato</LinkScroll></li>
                    </ul>
                </nav>
            </div>
            <div className="rl-login">
                <Link to={"/login"}><button className='rl-btn-login'>Login</button></Link>
                <button className='rl-btn-registrar'><LinkScroll to='contact--container' smooth={true} duration={1000}>Registrar-se</LinkScroll></button>
            </div>
        </header>
    )
}

export default Header;