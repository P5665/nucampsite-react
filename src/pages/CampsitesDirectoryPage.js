import { Container, Col, Row, Button } from "reactstrap";
import CampsiteDetail from "../features/campsites/CampsiteDetail";
import CampsitesList from "../features/campsites/CampsitesList";
import { selectRandomCampsite } from "../features/campsites/campsitesSlice";
import { useState } from "react";

const CampsitesDirectoryPage = () => {
    const [selectedCampsite, setSelectedCampsite] = useState(selectRandomCampsite());

    return (
        <Container>
            <Button onClick={() => setSelectedCampsite(selectRandomCampsite())}>Select Random Campsite</Button>
            <Row>
                <Col sm="5" md="7">
                    <CampsitesList />
                </Col>
                <Col sm="7" md="5">
                    <CampsiteDetail campsite={selectedCampsite} />
                </Col>
            </Row>
        </Container>
    );
};

export default CampsitesDirectoryPage;
