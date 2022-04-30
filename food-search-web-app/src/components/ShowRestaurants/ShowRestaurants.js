import React from 'react';
import './ShowRestaurants.css';
import Rating from '../Rating/Rating.js';

const ShowRestaurants = ({ textPrice, restaurants }) => {
	console.log('restaurants:', restaurants);
	return (
		
			<>
				{ 
					restaurants !== undefined ?
					<>
						<p style={{ marginLeft: '2%', fontSize: 'large' }}>{textPrice}</p> 
						<div className='ResultsContainer'>
							{ 	restaurants.map((restaurant) => (
									<div className="Image" key={restaurant.id} style={{ marginRight: '2%' }}>
										<img src={restaurant.image_url} alt={restaurant.name} width='350' height='250' /> 
										<p style={{ alignSelf: 'center', fontSize: '18px', color: '#4d4d4d' }}>{ restaurant.name }</p>
										<Rating rating={restaurant.rating} reviewCount={restaurant.review_count} />
									</div>
								))
							}
						</div>
					</>
					
					:
					
					null
				}
					
			</>
			
			
	);
}

export default ShowRestaurants;