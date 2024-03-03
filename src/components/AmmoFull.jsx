import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

function AmmoFull({
  previewAmmo,
  cart,
  showModal,
  addHandlerPreview,
  addAmmoHandler,
  removeHandler,
  removeAll,
  handleCloseModal,
  filteredAmmoData,
}) {
  return (
    <Container className="p-4 bg-blue " fluid>
      <Row>
        <Col xs={12} lg={7}>
          <Container>
            <Row xs={1} sm={1} md={2} lg={3} xl={3}>
              {filteredAmmoData.map((ammo) => (
                <Col
                  className=""
                  key={ammo.id}
                  onClick={() => addHandlerPreview(ammo)}
                  style={{ cursor: "pointer" }}
                >
                  <Card className="my-2 hover-zoom">
                    <Card.Img
                      className="m-2 "
                      variant="top"
                      src={`${ammo.photo}`}
                      alt={ammo.name}
                      style={{
                        maxHeight: "150px",
                        width: "100%",
                        objectFit: "contain",
                      }}
                    />
                    <Card.Body>
                      <span style={{ color: "gray" }}>{ammo.manufacturer}</span>
                      <br />
                      <Card.Title>{ammo.name}</Card.Title>
                      <Card.Text>
                        <span style={{ color: "green", fontWeight: "500" }}>
                          ${ammo.pricePerBox}
                        </span>
                        <span style={{ color: "gray" }}>/50round</span>
                        <br />
                        <span style={{ color: "green", fontWeight: "500" }}>
                          ${ammo.pricePerRound}/
                        </span>
                        <span style={{ color: "gray" }}>round</span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </Col>

        <Col xs={12} lg={5}>
          <Container fluid className="p-2">
            <Row className="d-flex justify-content-center">
              <Col xs={{ span: 12 }} lg={{ span: 10, offset: 1 }}>
                {previewAmmo && (
                  <Card style={{ maxWidth: "300px" }}>
                    <Card.Text
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "0 1rem",
                      }}
                    >
                      <span style={{ color: "gray" }}>#{previewAmmo.sku}</span>
                      <span style={{ color: "gray" }}>
                        {previewAmmo.purpose}
                      </span>
                    </Card.Text>

                    <Card.Title style={{ padding: "0 1rem" }}>
                      {previewAmmo.name}
                    </Card.Title>
                    <span style={{ color: "gray", padding: "0 1rem" }}>
                      {previewAmmo.manufacturer}
                    </span>
                    <br />

                    <Card.Img
                      variant="top"
                      src={`${previewAmmo.photo}`}
                      alt={previewAmmo.name}
                    />
                    <Card.Body>
                      <Card.Text>
                        <span style={{ color: "gray" }}>
                          {previewAmmo.description}
                        </span>
                      </Card.Text>

                      <Button
                        onClick={addAmmoHandler}
                        type="button"
                        className="btn btn-primary p-2.5 "
                      >
                        <span style={{ fontSize: "90%" }}>Box</span>
                        <span
                          style={{
                            color: "gray",
                            fontSize: "70%",
                            marginLeft: "5px",
                          }}
                        >{`(50rnds)`}</span>
                        <span>{` $${previewAmmo.pricePerBox}`}</span>
                        <span style={{ marginLeft: "5px", fontSize: "80%" }}>
                          <FaShoppingCart />
                        </span>
                        <span style={{ fontSize: "80%", marginLeft: "8px" }}>
                          Add to cart
                        </span>
                      </Button>
                    </Card.Body>
                  </Card>
                )}
                <Container>
                  <Container className="f-flex ">
                    <Row>
                      <Col
                        style={{
                          fontWeight: "bold",
                          fontSize: "30px",
                        }}
                      >
                        Cart
                      </Col>
                      <Col>
                        <Button onClick={removeAll} className="btn-danger m-2">
                          Clear All
                        </Button>
                      </Col>
                    </Row>
                  </Container>
                  {cart.map((item) => (
                    <Container key={item.id}>
                      <Card>
                        <Card.Body className="d-flex justify-content-between align-items-center">
                          <Card.Img
                            variant="left"
                            src={`${item.photo}`}
                            style={{
                              maxHeight: "30px",
                              objectFit: "contain",
                            }}
                          />
                          <span style={{ color: "blue" }}>
                            x {item.quantity}
                          </span>
                          <span
                            style={{
                              fontSize: "15px",
                              fontWeight: "bolder",
                            }}
                          >
                            {item.name}
                          </span>
                          <div
                            style={{
                              fontFamily: "sans-serif",
                              fontSize: "14px",
                            }}
                          ></div>

                          <div className="pl-1">
                            <span style={{ color: "blue", fontSize: "bold" }}>
                              ${item.pricePerBox}
                            </span>

                            <button
                              onClick={() => removeHandler(item.id)}
                              className="primary"
                              style={{
                                border: "none",
                                background: "none",
                                cursor: "pointer",
                              }}
                            >
                              ❌
                            </button>
                          </div>
                        </Card.Body>
                      </Card>
                    </Container>
                  ))}
                  <Modal
                    show={showModal}
                    onHide={handleCloseModal}
                    className="d-lg-none "
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>{previewAmmo?.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Container className="d-flex items-center justify-content-center">
                        <Card style={{ maxWidth: "300px" }}>
                          <Card.Text
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              padding: "0 1rem",
                            }}
                          >
                            <span style={{ color: "gray" }}>
                              #{previewAmmo?.sku}
                            </span>
                            <span style={{ color: "gray" }}>
                              {previewAmmo?.purpose}
                            </span>
                          </Card.Text>

                          <Card.Title style={{ padding: "0 1rem" }}>
                            {previewAmmo?.name}
                          </Card.Title>
                          <span style={{ color: "gray", padding: "0 1rem" }}>
                            {previewAmmo?.manufacturer}
                          </span>
                          <br />

                          <Card.Img
                            variant="top"
                            src={`${previewAmmo?.photo}`}
                            alt={previewAmmo?.name}
                          />
                          <Card.Body>
                            <Card.Text>
                              <span style={{ color: "gray" }}>
                                {previewAmmo?.description}
                              </span>
                            </Card.Text>

                            <Button
                              onClick={() => {
                                handleCloseModal();
                              }}
                              type="button"
                              className="btn btn-primary p-2.5"
                            >
                              <span style={{ fontSize: "90%" }}>Box</span>
                              <span
                                style={{
                                  color: "gray",
                                  fontSize: "70%",
                                  marginLeft: "5px",
                                }}
                              >{`(50rnds)`}</span>
                              <span>{` $${previewAmmo?.pricePerBox}`}</span>
                              <span
                                style={{
                                  marginLeft: "5px",
                                  fontSize: "80%",
                                }}
                              >
                                <FaShoppingCart />
                              </span>
                              <span
                                style={{
                                  fontSize: "80%",
                                  marginLeft: "8px",
                                }}
                              >
                                Add to preview
                              </span>
                            </Button>
                          </Card.Body>
                        </Card>
                      </Container>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>

                  <Container className="mt-2">
                    <Row className="d-flex justify-content-between">
                      <Col>
                        <Button>
                          <FaShoppingCart />
                          Checkout
                        </Button>
                      </Col>
                    </Row>
                  </Container>
                </Container>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default AmmoFull;
