import CampsiteCard from "./CampsiteCard";
import { Col, Row } from "reactstrap";
import { selectAllCampsites } from "./campsitesSlice";

const CampsitesList = ({ setCampsiteId }) => {
    const campsites = selectAllCampsites();

    // Adjusted classes to make it align properly and look better on desktop and mobile .evenly and only my-4 not m-4
    return (
        <Row className="justify-content-evenly">
            {campsites.map((campsite) => (
                <Col md="6" className="my-4" role="button" key={campsite.id} onClick={() => setCampsiteId(campsite.id)}>
                    <CampsiteCard campsite={campsite} />
                </Col>
            ))}
        </Row>
    );
};

export default CampsitesList;
