import { React, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import MainCard from "./MainCard";
import PaginationC from "./PaginationC";
import Loader from "./Loader";

const ContainerMainCard = ({ data, page, setPage, totalPages, loader }) => {
  return (
    <>
      {!loader ? (
        <Row className="mb-4 g-5">
          {data.map((d, i) => (
            <Col className="mb-2 " lg={4}>
              <MainCard d={d} />
            </Col>
          ))}
        </Row>
      ) : (
        <Loader />
      )}
      <PaginationC totalPages={totalPages} page={page} setPage={setPage} />
    </>
  );
};

export default ContainerMainCard;
