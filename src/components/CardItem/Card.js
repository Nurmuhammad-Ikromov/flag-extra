import './Card.css';

function Card({ img, name, pop, reg, cap }) {
	return (
		<li className='card'>
			<img width={264} height={160} src={img} />
			<div className='card-body'>
				<h3 className='card-name'> {name} </h3>
				<p className='card-population'>
					Population: <span>{pop}</span>
				</p>

				<p className='card-region'> Region: {reg}</p>

				<p className='card-capital'> Capital: {cap}</p>
			</div>
		</li>
	);
}

export default Card;
