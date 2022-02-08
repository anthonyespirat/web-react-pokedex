import './Header.css'
import SvgLogo from './SvgLogo'
import { useState } from 'react'

const Header = (props) => {

	const [searchValue, setSearchValue] = useState("");
	const handleChange = event => {
		setSearchValue(event.target.value);
		props.onchange(event.target.value);
	};

	return (

		<header>
			<SvgLogo />
			<input placeholder='find your pokemon ...' value={searchValue} onChange={handleChange}></input>
		</header>
		
	);
};

export default Header;