import './Card.css';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext/ThemeContext';
import { useContext } from 'react';
function Card({ img, name, pop, reg, cap }) {
	const {theme} = useContext(ThemeContext)
	return (
		<li className='card-item'>
			<Link
				to={`/${name}`}
				className={`card ${theme}`}
				style={{ textDecoration: 'none', display: 'inline-block' }}>
				<img width={264} height={160} src={img} alt='flags' />
				<div className='card-body'>
					<h3 className='card-name'> {name} </h3>
					<p className='card-population'>
						Population: <span>{pop}</span>
					</p>

					<p className='card-region'> Region: {reg}</p>

					<p className='card-capital'> Capital: {cap}</p>
				</div>
			</Link>
		</li>
	);
}

export default Card;
