import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import { selectFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';
import { selectFeaturedPartner } from '../partners/partnersSlice';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const DisplayList = () => {
	const items = useSelector((state) => [selectFeaturedCampsite(state), selectFeaturedPromotion(state), selectFeaturedPartner(state)]);

	return (
		<Row>
			{items.map((item, index) => {
				const { featuredItem, isLoading, errMsg } = item;
				if (isLoading) {
					return <Loading key={index} />;
				}
				if (errMsg) {
					return (
						<Error
							errMsg={errMsg}
							key={index}
						/>
					);
				}
				return (
					featuredItem && (
						<Col
							className='m-1 d-flex align-items-stretch'
							key={index}
							md
						>
							<AnimatedDisplayCard
								item={featuredItem}
								className
							/>
						</Col>
					)
				);
			})}
		</Row>
	);
};

export default DisplayList;
