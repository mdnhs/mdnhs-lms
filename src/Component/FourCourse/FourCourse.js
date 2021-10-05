import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import "./FourCourse.css";
import {
  faStopwatch,
  faDollarSign,
  faChalkboardTeacher,
  faLayerGroup,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FourCourse = (props) => {
  // destructuring
  const { title, img, course, duration, lectures, Instructor, cost } =
    props.corse;
  // fontawesome

  const category = <FontAwesomeIcon icon={faLayerGroup} />;
  const watch = <FontAwesomeIcon icon={faStopwatch} />;
  const teacher = <FontAwesomeIcon icon={faChalkboardTeacher} />;
  const money = <FontAwesomeIcon icon={faDollarSign} />;
  const book = <FontAwesomeIcon icon={faBook} />;
  return (
    <section>
      <Col className="d-flex justify-content-center">
        <Card
          id="card"
          className="border-0"
          style={{ width: "16rem", height: "fit-content" }}
        >
          <Card.Img
            id="card-img"
            className="w-100% img-fluid"
            variant="top"
            style={{ height: "8rem" }}
            src={img}
          />
          <Card.Body>
            <h6
              className="text-danger"
              style={{
                background: "#FFEBEE",
                borderRadius: "90px",
                marginRight: "0",
                marginLeft: "40%",
                padding: "5px",
              }}
            >
              {watch} {duration}
            </h6>
            <h5>{title}</h5>

            <div className="d-flex justify-content-between">
              <h6>
                <span
                  style={{
                    color: "#2196F3",
                  }}
                >
                  {category}{" "}
                </span>{" "}
                {course}
              </h6>
              <h6>
                <span
                  style={{
                    color: "#2196F3",
                  }}
                >
                  {teacher}{" "}
                </span>{" "}
                {Instructor}
              </h6>
            </div>

            <div className="d-flex justify-content-between">
              <h6>
                <span
                  style={{
                    color: "#2196F3",
                  }}
                >
                  {book}{" "}
                </span>
                {lectures}
              </h6>
              <h6>
                <span
                  style={{
                    color: "#2196F3",
                  }}
                >
                  {money}{" "}
                </span>{" "}
                {cost}
              </h6>
            </div>
            <Button
              className="w-100 mt-3"
              id="btn"
              style={{
                background: "#2196F3",
                border: "none",
              }}
            >
              Enrole Now
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </section>
  );
};

export default FourCourse;