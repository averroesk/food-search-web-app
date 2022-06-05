// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchInput from './components/SearchInput/SearchInput.js';
import ShowRestaurants from './components/ShowRestaurants/ShowRestaurants.js';
import useResults from "./hooks/useResults";

function App() {

  const [mealName, setMealName, cityName, setCityName, data, getResponse] = useResults();

  const filterRestaurantsByPrice = (p) => {
		return data.filter(restaurant => restaurant.price === p);
	}

  console.log('data:', data);

  return (

    <div>
        <h1 className='app-title'>Food Search Web App</h1>
        <SearchInput
          mealName={mealName}
          setMealName={setMealName}
          cityName={cityName}
          setCityName={setCityName}
          handleOnClick={getResponse}
        />

        <ShowRestaurants restaurants={filterRestaurantsByPrice('€')} textPrice='Pas cher' />
        <ShowRestaurants restaurants={filterRestaurantsByPrice('€€')} textPrice='Moyennement cher' />
        <ShowRestaurants restaurants={filterRestaurantsByPrice('€€€')} textPrice='Plutôt cher' />
                      
      </div>
      
  );
}

export default App;
