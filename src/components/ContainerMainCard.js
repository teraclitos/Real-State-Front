import { React, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import MainCard from "./MainCard";
import PaginationC from "./PaginationC";
import Loader from "./Loader";
import Searcher from "./Searcher";
import "../styles/all.css";

const ContainerMainCard = ({
  data,
  changeData,
  setChangeData,
  page,
  setPage,
  totalPages,
  loader,
  setLoader,
  location,
  setLocation,
  type,
  setType,
  inf,
  setInf,
  sup,
  setSup,
}) => {
  return (
    <>
      <Searcher
        location={location}
        setLocation={setLocation}
        type={type}
        setType={setType}
        inf={inf}
        setInf={setInf}
        sup={sup}
        setSup={setSup}
        setLoader={setLoader}
        changeData={changeData}
        setChangeData={setChangeData}
        className="my-4"
        setPage={setPage}
      />
      {!loader ? (
        <Container className="pt-0  ">
          {data.length !== 0 ? (
            <Row className="g-5  m-0 ">
              {data.map((d, i) => (
                <Col
                  key={"property" + i}
                  className="mb-2 col-12 col-md-6 col-lg-4 d-flex justify-content-center "
                >
                  <MainCard i={i} d={d} setLoader={setLoader} />
                </Col>
              ))}
            </Row>
          ) : (
            <div className=" fs-1 d-flex align-items-center justify-content-center no-result">
              No hay resultados
            </div>
          )}
        </Container>
      ) : (
        <Loader />
      )}
      {data.length !== 0 && (
        <Container className="mt-5 pb-5 d-flex justify-content-center">
          <PaginationC
            totalPages={totalPages}
            page={page}
            setPage={setPage}
            setLoader={setLoader}
          />
        </Container>
      )}
    </>
  );
};

export default ContainerMainCard;
