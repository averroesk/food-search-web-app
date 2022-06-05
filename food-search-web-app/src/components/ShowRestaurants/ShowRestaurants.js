import React from 'react';
import './ShowRestaurants.css';
import Rating from '../Rating/Rating.js';
// import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
// import { LeftArrow, RightArrow } from "./arrows.tsx";

const ShowRestaurants = ({ textPrice, restaurants }) => {
	console.log('restaurants:', restaurants);

	
	return (
		
			<>
				{ 
					restaurants.length ?
					<>
						<p style={{ 
									marginLeft: '2%', 
									fontSize: '25px', 
									/* color: 'white', */
									color: '#cffcfb',
									fontFamily: 'Dancing Script',
									marginBottom: '2%'
								}}
							>
							{`${textPrice} - ${restaurants.length} résultats:`}
						</p> 
						{/* <p style={{ marginLeft: '2%', fontSize: '20px', color: 'white', fontFamily: 'Dancing Script' }}>
                			{restaurants.length} résulats
            			</p> */}
						<div className='card-list'>
						{/* <ScrollMenu
							LeftArrow={LeftArrow}
							RightArrow={RightArrow}
							onWheel={onWheel}
						> */}
									{ 	
										restaurants.map((restaurant) => (
											<div className="card-container" key={restaurant.id} style={{ marginRight: '2%' }} itemId={restaurant.id}>
												<img src={restaurant.image_url} alt={restaurant.name} width='350' height='250' /> 
												<p className='restaurant-name'>{ restaurant.name }</p>
												<Rating rating={restaurant.rating} reviewCount={restaurant.review_count} />
											</div>
										))
									}
									
						{/* </ScrollMenu> */} 
						</div>
					</>
					
					:
					
					null
				}
					
			</>
	);

}

/* function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}
*/

export default ShowRestaurants;