import { useState } from 'react';
// import yelp from '../api/yelp';
import axios from 'axios';
import { yelpFusionApiKey } from '../api/yelpFusionApiKey';

const useResults = () => {
	
	const [data, setData] = useState([]);
	const [mealName, setMealName] = useState('');
	const [cityName, setCityName] = useState('');
	
  	const url = `https://corsproxy.io/?https://api.yelp.com/v3/businesses/search?location=${cityName}`;
  
    const getResponse = async () => {
      if (cityName && mealName) {
        try {
          const response = await axios.get(url, {
            headers: {
              // baseURL: url,
              Authorization: `Bearer ${yelpFusionApiKey}`
            },
            params: {
              // location: cityName,
              term: mealName,
              limit: 50,
              locale: "fr_FR",
              categories: "food,restaurants,bakeries,coffee,coffeeshops,tea"
            } 
          });
          setData(response.data.businesses);
          // console.log('response.data.businesses', response.data.businesses);
        } catch (err) {
          console.log('ERROR:', err);
        }
      }
  };

    /* useEffect(() => {
        
		if (mealName && cityName) getResponse();
  
    }, [mealName, url, cityName, getResponse]); */
	
	return [mealName, setMealName, cityName, setCityName, data, getResponse];
}

export default useResults;