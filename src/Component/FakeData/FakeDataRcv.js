import React, { useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import FourCourse from "../FourCourse/FourCourse";

const FakeDataRcv = () => {
  const [persons, setPersons] = useState([]);
  // Four courses data load using fetch
  useEffect(() => {
    fetch("https://mdnhs.github.io/jsonapi/edu.json")
      .then((res) => res.json())
      .then((data) => setPersons(data));
  }, []);

  return (
    <div className=" container mx-auto">
      <Row xs={1} md={4} className="g-4">
        {persons.slice(0, 4).map((course) => (
          <FourCourse corse={course} key={course.key}></FourCourse>
        ))}
      </Row>
    </div>
  );
};

export default FakeDataRcv;
