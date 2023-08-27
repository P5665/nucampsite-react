import { useSelector } from 'react-redux';
import CampsiteCard from './CampsiteCard';
import { Col, Row } from 'reactstrap';
import { selectAllCampsites } from './campsitesSlice';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const CampsitesList = () => {
	const campsites = useSelector(selectAllCampsites);

	const isLoading = useSelector((state) => state.campsites.isLoading);
	const errMsg = useSelector((state) => state.campsites.errMsg);

	if (isLoading) {
		return (
			<Row>
				<Loading />
			</Row>
		);
	}
	if (errMsg) {
		return (
			<Row>
				<Error errMsg={errMsg} />
			</Row>
		);
	}
	// Adjusted classes to make it align properly and look better on desktop and mobile .evenly and only my-4 not m-4
	return (
		<Row className='justify-content-evenly'>
			{campsites.map((campsite) => (
				<Col
					md='6'
					className='my-4'
					role='button'
					key={campsite.id}
				>
					<CampsiteCard campsite={campsite} />
				</Col>
			))}
		</Row>
	);
};

export default CampsitesList;
