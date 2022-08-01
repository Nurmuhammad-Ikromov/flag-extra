import './Header.css';

function Header() {
	return (
		<header className='site-header'>
			<div className='container'>
				<div className='site-header__inner'>
					<p className='site-header__name'>Where in the world?</p>

					<button className='site-header__mode'>Dark Mode</button>
				</div>
			</div>
		</header>
	);
}

export default Header;
