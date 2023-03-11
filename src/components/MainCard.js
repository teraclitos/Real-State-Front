import { React, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "../styles/all.css";
const MainCard = ({ d, i, setLoader }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const imgheigthF = () => {
    let imgHeight = document.getElementById("img-card0").clientWidth;
    return imgHeight;
  };

  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  const [stateHeight, setstateheight] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    setstateheight(imgheigthF);
  }, [width]);
  return (
    <>
      <Card className="card-container border-0 w-100 ">
        <Link
          onClick={() => {
            setLoader(true);
          }}
          to={`/propiedades/${d._id}`}
          className="link container-img   "
        >
          <Card.Img
            style={{ height: `${stateHeight}px` }}
            id={`img-card${i}`}
            className="img-card"
            variant="top"
            src={d.images_URL[0].url}
          />
        </Link>
        <Card.Body className="py-4 ps-2 fs-6 card-body">
          <Card.Title>{d.name}</Card.Title>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between align-items-end p-0  card-footer">
          <div className="ps-2 price-box align-self-center">US$ {d.price}</div>
          <Link
            onClick={() => {
              setLoader(true);
            }}
            to={`/propiedades/${d._id}`}
            className="link btm-card-link  "
          >
            <button className="  btn-g btn-black btn-card  ">
              Ver Propiedad
            </button>
          </Link>
        </Card.Footer>
      </Card>
    </>
  );
};

export default MainCard;
