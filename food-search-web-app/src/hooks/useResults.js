import { useEffect, useCallback, useState } from 'react';
import yelp from '../api/yelp';
import axios from 'axios';

const useResults = () => {
	
	const [data, setData] = useState([]);
	const [mealName, setMealName] = useState('');
	const [cityName, setCityName] = useState('');
	
	const key = "ieQ3B855aZvfl5RpniO7OI9HBc0Ae_5IK0hf3-hUoRutKWwFIcdQt2GTjNWGn13aIoZXt3ErU2x7kLaqTWg2QfH8XzwcX0mTLm7BTaSau6GIUi38Wg9flzed8CBpYnYx"
	
	const options = {
  		method: 'GET',
  		url: 'https://http-cors-proxy.p.rapidapi.com/https://api.yelp.com/v3/businesses/search?location=sanjose',
  		headers: {
    			origin: 'example.com',
    				'x-requested-with': 'example.com',
    				'X-RapidAPI-Host': 'http-cors-proxy.p.rapidapi.com',
    				'X-RapidAPI-Key': '791e99bf57mshde28bcb21a065cap184665jsn4e50026bbb5b'	
  		}
	};
	
	/* const getResponse = useCallback( 
		async () => {
			try {
				const response = await yelp.get('/', {  
					 params: {
						term: mealName, 
						location: cityName
					} 
				});
				// setData(response.data.businesses);
				setData(response.data);
			} catch (error) {
				console.log('The server does not respond');
			}
		}, [mealName, cityName]
	); */
 
	useEffect(() => {
		// if (data) getResponse();
		// getResponse();
		axios.create({
			headers: {
				Authorization: `Bearer ${key}`
			}
		})
		.request(options).then(function (response) {
			console.log(response.data);
		}).catch(function (error) {
			console.error(error);
		});
	}, [data, getResponse]);
	
	const filterRestaurantsByPrice = (p) => {
		if (data.length > 0) return data.filter(restaurant => restaurant.price === p);
	}
	
	return [mealName, setMealName, cityName, setCityName, data, getResponse, filterRestaurantsByPrice];
}

export default useResults;