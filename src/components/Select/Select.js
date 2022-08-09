import './Select.css';
import { ThemeContext } from '../../context/ThemeContext/ThemeContext';
import { useContext } from 'react';
function Select({ SearchCountries, ChangeSelect }) {
	const {theme} = useContext(ThemeContext)
	return (
		<div className={`search`}>
			<input
				onKeyUp={SearchCountries}
				className={`search-input ${theme}`}
				placeholder='Search for a country…'
			/>

			<select
				className={`search-select ${theme}`}
				onChange={ChangeSelect}
				defaultValue={'Filter by region'}>
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
	);
}

export default Select;
