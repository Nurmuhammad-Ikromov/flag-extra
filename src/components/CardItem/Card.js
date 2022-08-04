import './Card.css';
import { Link } from 'react-router-dom';

function Card({ img, name, pop, reg, cap }) {
	return (
		<Link to={`/${name}`}  className='card' style={{textDecoration: "none", display:"inline-block"}}>
			<img width={264} height={160} src={img} alt="flags" />
			<div className='card-body'>
				<h3 className='card-name'> {name} </h3>
				<p className='card-population'>
					Population: <span>{pop}</span>
				</p>

				<p className='card-region'> Region: {reg}</p>

				<p className='card-capital'> Capital: {cap}</p>
			</div>
		</Link>
	);
}

export default Card;
