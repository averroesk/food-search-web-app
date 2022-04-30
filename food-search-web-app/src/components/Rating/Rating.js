import './Rating.css';
import yelpLogo from './logo/yelp_logo.png';

import fiveStars from './images_stars/regular_5@2x.png';
import fourAndHalfStars from './images_stars/regular_4_half@2x.png';
import fourStars from './images_stars/regular_4@2x.png';
import threeAndHalfStars from './images_stars/regular_3_half@2x.png';
import threeStars from './images_stars/regular_3@2x.png'; 
import twoAndHalfStars from './images_stars/regular_2_half@2x.png';
import twoStars from './images_stars/regular_2@2x.png';
import oneAndHalfStars from './images_stars/regular_1_half@2x.png';
import oneStar from './images_stars/regular_1@2x.png';
import zeroStar from './images_stars/regular_0@2x.png';

const Rating = ({ rating, reviewCount }) => {
	
	var Stars = null;
	const height = 22;
	
	if (rating === 5) Stars = <img src={fiveStars} alt='fiveStars' height={height} />;
	else if (rating === 4.5) Stars = <img src={fourAndHalfStars} alt='fourAndHalfStars' height={height} />;
	else if (rating === 4) Stars = <img src={fourStars} alt='fourStars' height={height} />;
	else if (rating === 3.5) Stars = <img src={threeAndHalfStars} alt='threeAndHalfStars'  height={height} />;
	else if (rating === 3) Stars = <img src={threeStars} alt='threeStars' height={height} />;
	else if (rating === 2.5) Stars = <img src={twoAndHalfStars} alt='twoAndHalfStars' height={height} />;
	else if (rating === 2) Stars = <img src={twoStars} alt='twoStars' height={height} />; 
	else if (rating === 1.5) Stars = <img src={oneAndHalfStars} alt='oneAndHalfStars' height={height} />;
	else if (rating === 1) Stars = <img src={oneStar} alt='oneStar' height={height} />;
	else if (rating === 0) Stars = <img src={zeroStar} alt='zeroStar' height={height} />;
	
	return (
		<div className="Stars">
			<div style={{ marginLeft: '2%' }}>
				{Stars}
			</div>
			<span className='Count'>{reviewCount}</span>
			<a 
				style={{ marginLeft: '38%' }}
				href="https://www.yelp.fr"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={yelpLogo} height={20} alt="yelp_logo" />
			</a>
		</div>
	);
}

export default Rating;