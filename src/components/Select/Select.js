import './Select.css'

function Select() {
	return (
		<div className='search'>
			<div className='container'>
				<div className='search__inner'>
					<input
						className='search-input'
						placeholder='Search for a country…'></input>

					<select className='search-select'>
						<option defaultValue={'Filter by region'}>
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