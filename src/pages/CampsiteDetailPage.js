import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CommentsList from '../features/comments/CommentsList';
import SubHeader from '../components/SubHeader';

const CampsiteDetailPage = () => {
	const { campsiteId } = useParams();
	const campsite = selectCampsiteById(campsiteId);
	// Added justify-content-evenly
	return (
		<Container>
			<SubHeader current={campsite.name} detail={true} />
			console.log("🚀 ~ file: CampsiteDetailPage.js:15 ~ CampsiteDetailPage ~ true:", true)
			<Row className='justify-content-evenly'>
				<CampsiteDetail campsite={campsite} />
				<CommentsList campsiteId={campsiteId} />
			</Row>
		</Container>
	);
};

export default CampsiteDetailPage;
