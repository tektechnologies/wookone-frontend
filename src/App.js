import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./footer/footerCSS/footer.css";
import Footer from "./footer/Footer";
import Main from "./main/Main.js";
import Header from "./header/Header.js";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          <Main />
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
