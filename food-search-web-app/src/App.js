// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchInput from './components/SearchInput/SearchInput.js';
import ShowRestaurants from './components/ShowRestaurants/ShowRestaurants.js';
import useResults from "./hooks/useResults";

function App() {

  const [mealName, setMealName, cityName, setCityName, data, getResponse] = useResults();

  const filterRestaurantsByPrice = (p) => {
		if (data.length > 0) return data.filter(restaurant => restaurant.price === p);
	}

  console.log('data:', data);

  return (

    <div>
        <SearchInput
          mealName={mealName}
          setMealName={setMealName}
          cityName={cityName}
          setCityName={setCityName}
          handleOnClick={getResponse}
        />

        { data.length > 0 
          ?	(<p style={{ display: 'flex', justifyContent: 'center', marginLeft: '2%', fontSize: '16px' }}>
              {data.length} résulats
            </p>)
          : null
        }

        <ShowRestaurants restaurants={filterRestaurantsByPrice('€')} textPrice='Pas cher' />
        <ShowRestaurants restaurants={filterRestaurantsByPrice('€€')} textPrice='Moyennement cher' />
        <ShowRestaurants restaurants={filterRestaurantsByPrice('€€€')} textPrice='Cher' />
                  
      </div>
      
  );
}

export default App;
