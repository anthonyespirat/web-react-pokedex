import './Header.css'
import SvgLogo from './SvgLogo'

const Header = () => {
    return (
        <header>
            <SvgLogo />
            <input placeholder='find your pokemon ...'></input>
        </header>
    );
};

export default Header;