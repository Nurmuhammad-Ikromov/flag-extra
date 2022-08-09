import './Header.css';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext/ThemeContext';

function Header() {
	const { theme, setTheme } = useContext(ThemeContext);
	const [state, setState] = useState(false);
	return (
		<header className={`site-header ${theme}`}>
			<div className='container'>
				<div className='site-header__inner'>
					<p className='site-header__name'>Where in the world?</p>

					<button
						onClick={() => {
							state === false
								? setTheme('dark')
								: setTheme('light');
							state === false ? setState(true) : setState(false);
						}}
						className='site-header__mode'>
						Dark Mode
					</button>
				</div>
			</div>
		</header>
	);
}

export default Header;
