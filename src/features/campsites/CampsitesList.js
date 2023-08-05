import CampsiteCard from "./CampsiteCard";
import { CAMPSITES } from "../../app/shared/CAMPSITES";
import { Col, Row } from "reactstrap";

const CampsitesList = () => {
    // Adjusted classes to make it align properly and look better on desktop and mobile .evenly and only my-4 not m-4
    return (
        <Row className="justify-content-evenly">
            {CAMPSITES.map((campsite) => (
                <Col md="6" className="my-4" key={campsite.id}>
                    <CampsiteCard campsite={campsite} />
                </Col>
            ))}
        </Row>
    );
};

export default CampsitesList;
