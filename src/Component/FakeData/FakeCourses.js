// import useeffect and usestate
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ShowCourses from "../Courses.js/ShowCourses";

const FakeCourses = () => {
  const [courses, setCourses] = useState([]);
  // Courses all Data load using fetch
  useEffect(() => {
    fetch("https://mdnhs.github.io/jsonapi/edu.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className=" container mx-auto">
      <Row xs={1} md={4} className="g-4">
        {courses.map((course) => (
          <ShowCourses course={course} key={course.key}></ShowCourses>
        ))}
      </Row>
    </div>
  );
};

export default FakeCourses;
