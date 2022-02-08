import Header from './Header';
import './Layout.css'
import { useState } from 'react'
import InputContext from '../context/Input';

const Layout = ({ children }) => {

	const [value, setValue] = useState('');

	const onchange = (data) => {
		setValue(data)
	}

	return (

		<>
			<Header data={value} onchange={(e) => { onchange(e) }} />
			<main>
				<InputContext.Provider value={value}>
					{children}
				</InputContext.Provider>
			</main>
		</>

	);
};

export default Layout;