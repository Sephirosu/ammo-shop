import { Container, Row, Col } from "react-bootstrap";

function Search({ search, setSearch }) {
  return (
    <Container className="mx-4 py-2" fluid>
      <Row>
        <Col>
          <input
            type="text"
            placeholder="Search ammo by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Search;
