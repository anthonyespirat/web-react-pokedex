import logo from '../assets/logo.png'
import './Header.css'
import SvgLogo from './SvgLogo'

const Header = () => {
    return (
        <header>
            <SvgLogo />
            {/* <img src={logo} alt='LeLogo' /> */}
            <input placeholder='find your pokemon ...'></input>
        </header>
    );
};

export default Header;