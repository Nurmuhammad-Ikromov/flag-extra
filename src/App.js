import React, { useEffect, useState } from 'react';
import Loading from './animate.svg';
import './App.css';
import './components/CardItem/Card';
import Card from './components/CardItem/Card';
import List from './components/CardList/List';
import Select from './components/Select/Select';
import Header from './components/Header/Header';

function App() {
	const [countries, setCountries] = useState([]);
	const [value, setValue] = useState([]);
	const [select, setSelect] = useState([]);

	useEffect(() => {
		if (value.length) {
			fetch(`https://restcountries.com/v3.1/name/${value}`)
				.then((res) => res.json())
				.then((data) => setCountries(data))
				.catch((er) => console.log(er));
		} else {
			fetch(`https://restcountries.com/v3.1/all`)
				.then((res) => res.json())
				.then((data) => setCountries(data))
				.catch((er) => console.log(er));
		}
	}, [value]);

	useEffect(() => {
		if (select !== 'Filter by region') {
			fetch(`https://restcountries.com/v3.1/region/${select}`)
				.then((res) => res.json())
				.then((data) => setCountries(data))
				.catch((er) => console.log(er));
		}
	}, [select]);

	const SearchCountries = (evt) => {
		if (evt.code === 'Enter') {
			setValue(evt.target.value);
		}
	};

	const ChangeSelect = (evt) => {
		setSelect(evt.target.value);
	};

	return (
		<div className='App'>
			<Header />
			<Select
				SearchCountries={SearchCountries}
				ChangeSelect={ChangeSelect}
			/>

			<div className='container'>
				
				<List>
					{countries.length
						? countries.map((e) => (
								<Card
									key={+e.ccn3}
									img={e.flags.png}
									name={e.name.common}
									pop={e.population}
									reg={e.region}
									cap={e.capital}
								/>
						  ))
						: <img className='loading-io' src={Loading} width="203" height="203" alt="loading icon"  /> }
				</List>
			</div>
		</div>
	);
}

export default App;
