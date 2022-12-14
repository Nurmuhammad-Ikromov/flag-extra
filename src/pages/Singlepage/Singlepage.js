import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext/ThemeContext';
import './Singlepage.css';
function Singlepage() {
	const params = useParams();
	const [country, setCountry] = useState([]);
	const { theme } = useContext(ThemeContext);

	useEffect(() => {
		fetch(`https://restcountries.com/v3.1/name/${params.name}`)
			.then((res) => res.json())
			.then((data) => setCountry(data))
			.catch((err) => err);
	}, [params.name]);

	const array = [];
	let currency = '';
	country.forEach((e) => {
		for (let item in e.currencies) {
			currency = e.currencies[item].name;
		}

		for (let item in e.languages) {
			array.push(e.languages[item]);
		}
	});

	function Languages({ lang }) {
		return (
			<>
				<span>{lang} </span>
			</>
		);
	}
	function Borders({ borderName }) {
		return (
			<>
				<button id="border-btn"
					className={theme}
					style={{
						boxShadow: ' 0px 0px 4px 1px rgba(0, 0, 0, 0.104931)',
						borderRadius: '2px',
						border: 'none',
						padding: '5px 27px',
						marginLeft: '10px',
						fontWeight: '300',
						
						cursor: 'pointer',
					}}>
					{' '}
					{borderName}{' '}
				</button>
			</>
		);
	}

	return (
		<div id={theme} className='Single-page'>
			<Link to='/back'>
				<button
					className={theme}
					id='link-btn'
					style={{
						fontWeight: '300',
						boxShadow: ' 0px 0px 7px rgba(0, 0, 0, 0.293139)',
						borderRadius: '6px',

						padding: ' 10px 30px',
						border: 'none',
						cursor: 'pointer',
					}}>
					<svg
						width='19'
						height='12'
						viewBox='0 0 19 12'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M6.46447 0.107445L7.64298 1.28596L3.75389 5.17504L18.6031 5.17504L18.6031 6.82496L3.75389 6.82496L7.64298 10.714L6.46447 11.8926L0.57191 6L6.46447 0.107445Z'
							fill='#111517'
						/>
					</svg>
					<span style={{ marginLeft: '10px' }}>Back</span>
				</button>
			</Link>

			{country.map((e) => (
				<div
					className='single-map'
					style={{ display: 'flex', alignItems: 'center' }}>
					<img
						className='single-img'
						width='560'
						height='400'
						src={e.flags.png}
						alt='country flag'
						style={{
							backgroundColor: '#808080',
							boxShadow:
								' 0px 0px 14px 4px rgba(0, 0, 0, 0.0294384)',
							borderRadius: '10.0057px',
						}}
					/>

					<div className='single-map-inner'>
						<h2
							className='single-title'
							style={{
								fontWeight: '800',
								fontSize: '32px',
								lineHeight: '44px',

								margin: '0',
								marginBottom: '23px',
							}}>
							{e.name.common}
						</h2>

						<div
							className='single-infoBox'
							// style={{ display: 'flex' }}
							>
							<div className='single-info-left'>
								<p
									style={{
										fontWeight: '600',
										fontSize: '16px',
										lineHeight: '32px',

										margin: '0',
									}}>
									Native Name:{' '}
									<span style={{ fontWeight: 'normal' }}>
										{e.name.official}
									</span>
								</p>
								<p
									style={{
										fontWeight: '600',
										fontSize: '16px',
										lineHeight: '32px',
										margin: '0',
									}}>
									Population:{' '}
									<span style={{ fontWeight: 'normal' }}>
										{' '}
										{e.population}
									</span>
								</p>
								<p
									className='single-region'
									style={{
										fontWeight: '600',
										fontSize: '16px',
										lineHeight: '32px',
										margin: '0',
									}}>
									{' '}
									Region:{' '}
									<span style={{ fontWeight: 'normal' }}>
										{e.region}
									</span>
								</p>

								<p
									className='single-subregion'
									style={{
										fontWeight: '600',
										fontSize: '16px',
										lineHeight: '32px',
										margin: '0',
									}}>
									Sub Region:{' '}
									<span style={{ fontWeight: 'normal' }}>
										{e.subregion}
									</span>
								</p>

								<p
									className='single-capital'
									style={{
										fontWeight: '600',
										fontSize: '16px',
										lineHeight: '32px',
										margin: '0',
									}}>
									{' '}
									Capital:{' '}
									<span style={{ fontWeight: 'normal' }}>
										{e.capital}
									</span>
								</p>
							</div>

							<div>
								<p
									style={{
										fontWeight: '600',
										fontSize: '16px',
										lineHeight: '32px',
										margin: '0',
									}}>
									Top Level Domain:{' '}
									<span style={{ fontWeight: 'normal' }}>
										{e.tld}
									</span>
								</p>
								<p
									style={{
										fontWeight: '600',
										fontSize: '16px',
										lineHeight: '32px',
										margin: '0',
									}}>
									Currencies:{' '}
									<span style={{ fontWeight: 'normal' }}>
										{currency}
									</span>{' '}
								</p>
								<p
									style={{
										fontWeight: '600',
										fontSize: '16px',
										lineHeight: '32px',
										margin: '0',
									}}>
									Languages:{' '}
									<span
										style={{
											fontWeight: 'normal',
										}}>
										{array.map((lan) => (
											<Languages lang={lan} />
										))}
									</span>{' '}
								</p>
							</div>
						</div>
						<p
							className='single-border'
							style={{
								fontWeight: '600',
								fontSize: '16px',
								lineHeight: '32px',
							}}>
							Border Countries:
						</p>
						<div className='borders'>
							{e.borders
								? e.borders.map((el) => (
										<Borders borderName={el} />
								  ))
								: ' none'}
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default Singlepage;
