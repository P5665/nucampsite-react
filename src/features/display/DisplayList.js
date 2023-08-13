import { Col, Row } from 'reactstrap';
import DisplayCard from './DisplayCard';
import { selectFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';
import { selectFeaturedPartner } from '../partners/partnersSlice';

const DisplayList = () => {
	const items = [selectFeaturedCampsite(), selectFeaturedPromotion(), selectFeaturedPartner()];

	return (
		<Row>
			{items.map((item, index) => (
				<Col className='m-1 d-flex align-items-stretch' key={index} md>
					<DisplayCard item={item} />
				</Col>
			))}
		</Row>
	);
};

export default DisplayList;
