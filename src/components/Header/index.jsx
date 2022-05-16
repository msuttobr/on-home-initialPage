import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import MenuHamburguer from '../MenuHamburguer';

import './style.css'

const Header = () => {
    return (
        <header className="rl-header">
            <MenuHamburguer />
            <nav className="rl-navigation rl-transparent">
                <div className="rl-navigation-container">
                    <LinkScroll to='solutions--container' smooth={true} duration={1000}>Serviços</LinkScroll>
                    <LinkScroll to='products' smooth={true} duration={1000}>Produtos</LinkScroll>
                    <p>Sobre nós</p>
                    <p>Suporte</p>
                    <LinkScroll to='contact--container' smooth={true} duration={1000}>Contato</LinkScroll>
                    <div className="rl-navigation-login">
                        <Link to={"/login"}><button className='rl-btn-login'>Login</button></Link>
                        <LinkScroll to='contact--container' smooth={true} duration={1000}>Registrar-se</LinkScroll>
                    </div>
                </div>
                <span className="rl-navigation-menu-close" />
            </nav>
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
                <div className="rl-login">
                    <Link to={"/login"}><button className='rl-btn-login'>Login</button></Link>
                    <button className='rl-btn-registrar'><LinkScroll to='contact--container' smooth={true} duration={1000}>Registrar-se</LinkScroll></button>
                </div>
            </div>
        </header>
    )
}

export default Header