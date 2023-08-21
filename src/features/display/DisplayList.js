import { Col, Row } from 'reactstrap';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import { selectFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';
import { selectFeaturedPartner } from '../partners/partnersSlice';

const DisplayList = () => {
	const items = [selectFeaturedCampsite(), selectFeaturedPromotion(), selectFeaturedPartner()];

	return (
		<Row>
			{items.map(
				(item, index) =>
					item && (
						<Col className='m-1 d-flex align-items-stretch' key={index} md>
							<AnimatedDisplayCard item={item} className />
						</Col>
					)
			)}
		</Row>
	);
};

export default DisplayList;
