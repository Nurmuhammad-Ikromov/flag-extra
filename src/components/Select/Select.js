import './Select.css';

function Select({ SearchCountries, ChangeSelect }) {
	return (
		<div className='search'>
			<div className='container'>
				<div className='search__inner'>
					<input
						onKeyUp={SearchCountries}
						className='search-input'
						placeholder='Search for a country…'
					/>

					<select className='search-select' onChange={ChangeSelect} defaultValue = {"Filter by region"} >
						<option defaultValue={'Filter by region'} disabled>
							Filter by region
						</option>
						<option defaultValue={'Africa'}>Africa </option>
						<option defaultValue={'America'}>America </option>
						<option defaultValue={'Asia'}>Asia </option>
						<option defaultValue={'Europe'}>Europe </option>
						<option defaultValue={'Oceania'}>Oceania </option>
					</select>
				</div>
			</div>
		</div>
	);
}

export default Select;
