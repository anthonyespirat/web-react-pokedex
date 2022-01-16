import logo from '../assets/logo.png'
import './Header.css'

const Header = () => {
    return (
        <header>
            <img src={logo} alt='LeLogo' />
            <input placeholder='find your pokemon ...'></input>
        </header>
    );
};

export default Header;