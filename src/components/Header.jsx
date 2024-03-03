import { Container, Image, Row, Col } from "react-bootstrap";
import coverPhoto from "../assets/images/cover.jpg";

function Header() {
  return (
    <Container fluid className="p-0 position-relative">
      <Image
        src={coverPhoto}
        alt="cover"
        style={{ height: "120px", width: "100%", objectFit: "cover" }}
      />
      <Row className="position-absolute top-50 translate-middle-y w-100">
        <Col lg={{ span: 6, offset: 0 }} className="text-lg-left text-center">
          <h1 className="text-white display-4 font-weight-bold">
            Handgun Ammo
          </h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
