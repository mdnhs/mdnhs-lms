import React from "react";
import FakeCourses from "../FakeData/FakeCourses";

const Courses = () => {
  return (
    <div>
      <h1 className="my-4">Choose courses taught by real-world experts!!</h1>
      <FakeCourses></FakeCourses>
    </div>
  );
};

export default Courses;
