import React from 'react';
import './ShowRestaurants.css';
import Rating from '../Rating/Rating.js';
import { LeftArrow, RightArrow } from "./Arrows";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { CashStack } from 'react-bootstrap-icons';

const ShowRestaurants = ({ textPrice, restaurants }) => {
	console.log('restaurants:', restaurants);
	
	let cashStack  = null;
	
	if (textPrice === "Pas cher") {
		cashStack = <CashStack size={40} style={{ marginRight: '1%' }} />;
	} else if (textPrice === "Moyennement cher") {
		cashStack = (
			<>
				<CashStack size={40} style={{ marginRight: '1%' }} />
				<CashStack size={40} style={{ marginRight: '1%' }} />
			</>
		);
	} else  {
		cashStack = (
			<>
				<CashStack size={40} style={{ marginRight: '1%' }} />
				<CashStack size={40} style={{ marginRight: '1%' }} />
				<CashStack size={40} style={{ marginRight: '1%' }} />
			</>
		);
	}

	return (
		
			<>
				{ 
					restaurants.length ?
					<>
						<p style={{ 
									display: 'flex',
									marginLeft: '6%', 
									/* fontSize: '25px', */
									fontSize: '28px',
									fontWeight: 'bold',
									/* color: 'white', */
									/* color: '#cffcfb', */
									color: '#9ff9f7',
									/* color: '#087876', */
									fontFamily: 'Dancing Script',
									marginBottom: '3%',
									justifyContent: 'center',
									alignItems: 'center',
								}}
						>
							{ cashStack }
							{`${textPrice} - ${restaurants.length} résultats:`} 
						</p> 
						{/* <p style={{ marginLeft: '2%', fontSize: '20px', color: 'white', fontFamily: 'Dancing Script' }}>
                			{restaurants.length} résulats
            			</p> */}
						<div className='card-list'>
							<ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}> 
										{ 	
											restaurants.map((restaurant) => (
												<div className="card-container" key={restaurant.id} style={{ marginRight: '2%' }} itemId={restaurant.id} tabIndex={0}>
													<img src={restaurant.image_url} alt={restaurant.name} width='350' height='250' /> 
													<p className='restaurant-name'>{ restaurant.name }</p>
													<Rating rating={restaurant.rating} reviewCount={restaurant.review_count} />
												</div>
											))
										}
							</ScrollMenu> 
						</div>
					</>
					
					:
					
					null
				}
					
			</>
	);

}


export default ShowRestaurants;