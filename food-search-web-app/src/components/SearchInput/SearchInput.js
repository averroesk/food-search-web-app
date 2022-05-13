import './SearchInput.css';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
// import Form from 'react-bootstrap/Form';

const SearchInput = ({ mealName, setMealName, cityName, setCityName, handleOnClick }) => {
	
	const enterPressed = (event) => {
		var code = event.keyCode || event.which;
		if	(code === 13) { // 13 is the enter keycode
			// Do stuff in here
			handleOnClick();
		} 
	}

	function ToggleButtonGroupControlled() {
		const [value, setValue] = useState([]);
		const [category, setCategory] = useState('food,restaurants,bakeries,coffee,coffeeshops,tea')
	  
		/*
		 * The second argument that will be passed to
		 * `handleChange` from `ToggleButtonGroup`
		 * is the SyntheticEvent object, but we are
		 * not using it in this example so we will omit it.
		 */
		const handleChange = (val) => {
		  setValue(val);
		  if (value[0] === 1) setCategory('restaurants');
		  else if (value[0] === 2) setCategory('coffee,coffeeshops');
		  else if (value[0] === 3) setCategory('tea');
		  else if (value[0] === 4) setCategory('bakeries');
		  else if (value[0] === 1 && value[1] === 2) setCategory('restaurants,coffee,coffeeshops');
		  // En cours d'implémentation....
		}
	  
		return (
		  <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
			<ToggleButton variant="outline-light" id="tbg-btn-1" value={1}>
				Restaurants
			</ToggleButton>
			<ToggleButton variant="outline-light" id="tbg-btn-2" value={2}>
				Cafés
			</ToggleButton>
			<ToggleButton variant="outline-light" id="tbg-btn-3" value={3}>
				Salons de thé
			</ToggleButton>
			<ToggleButton variant="outline-light" id="tbg-btn-4" value={4}>
			Boulangeries
			</ToggleButton>
		  </ToggleButtonGroup>
		);
	  }
	  
	
	return (
		<>
			<div className='SearchInput'>
					{/* <label htmlFor="meal"></label> */}
					<ToggleButtonGroupControlled />
					<InputGroup style={{ marginTop: '2%' }}>
						<FormControl
							autoFocus
							placeholder="Que souhaitez-vous manger? (ex: Tarte aux fraises)" 
							value={mealName}
							onChange={(event) => setMealName(event.target.value)}
							onKeyPress={enterPressed}
							type="search"
						/>
						
						{/* <label htmlFor="city"></label> */}
						<FormControl
							placeholder="A proximité de ... (ex: Paris)" 
							value={cityName}
							onChange={(event) => setCityName(event.target.value)}
							onKeyPress={handleOnClick}
							type="search"
						/>
						
						<Button
							className='Submit'
							variant="outline-light"
							onClick={handleOnClick}
						>
							GO
						</Button> 
					</InputGroup>
					<br/><br/>
					
			</div>
		</>
	);
}

export default SearchInput;