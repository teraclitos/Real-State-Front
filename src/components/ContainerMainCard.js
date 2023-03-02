import { React, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import MainCard from "./MainCard";
import PaginationC from "./PaginationC";
import Loader from "./Loader";
import "../styles/all.css";

const ContainerMainCard = ({
  data,
  page,
  setPage,
  totalPages,
  loader,
  setLoader,
}) => {
  return (
    <>
      {!loader ? (
        <Container className="pt-5  ">
          <Row className="g-5 ">
            {data.map((d, i) => (
              <Col className="mb-2 col-12 col-md-6 col-lg-4 d-flex justify-content-center ">
                <MainCard d={d} />
              </Col>
            ))}
          </Row>
        </Container>
      ) : (
        <Loader />
      )}
      <Container className="mt-5 pb-5 d-flex justify-content-center">
        <PaginationC
          totalPages={totalPages}
          page={page}
          setPage={setPage}
          setLoader={setLoader}
        />
      </Container>
    </>
  );
};

export default ContainerMainCard;
