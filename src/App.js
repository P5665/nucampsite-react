import Header from "./components/Header";
import CampsitesList from "./features/campsites/CampsitesList";
import Footer from "./components/Footer";
import { Container } from "reactstrap";
import "./App.css";

// Im keeping Container -- Container -> Row -> Col
function App() {
    return (
        <div className="App">
            <Header />
            <Container>
                <CampsitesList />
            </Container>
            <Footer />
        </div>
    );
}

export default App;
