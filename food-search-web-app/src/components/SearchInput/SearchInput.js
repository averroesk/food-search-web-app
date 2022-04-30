import './SearchInput.css';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
// import Form from 'react-bootstrap/Form';

const SearchInput = ({ mealName, setMealName, cityName, setCityName, handleOnClick }) => {
	
	const enterPressed = (event) => {
		var code = event.keyCode || event.which;
		if	(code === 13) { // 13 is the enter keycode
			// Do stuff in here
			handleOnClick();
		} 
	}
	
	return (
		<>
			<div className='SearchInput'>
					{/* <label htmlFor="meal"></label> */}
					<InputGroup>
					<FormControl
						autoFocus
						placeholder="Que souhaitez-vous manger? (ex: Tarte aux pommes)" 
						value={mealName}
						onChange={(event) => setMealName(event.target.value)}
						onKeyPress={enterPressed}
					/>
					<br/><br/>
					
					{/* <label htmlFor="city"></label> */}
					<FormControl
						placeholder="A proximité de ... (ex: Paris)" 
						value={cityName}
						onChange={(event) => setCityName(event.target.value)}
						onKeyPress={handleOnClick}
					/>
					
					<Button
						className='Submit'
						variant="outline-primary"
						onClick={handleOnClick}
					>
						Rechercher
					</Button> 
					</InputGroup>
					<br/><br/>
					
					
			</div>
		</>
	);
}

export default SearchInput;