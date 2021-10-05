import { Button } from "react-bootstrap";
import bgs from "../../images/bgs.jpg";
import Fakedata from "../FakeData/FakeDataRcv";
import sideimg from "../../images/sideimg.jpg";
import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <section className="container">
      <div className="mt-3">
        <img id="img-header" className="header" src={bgs} alt=""></img>
      </div>

      {/* Explore Featured Cources */}
      <div className="m-5">
        <h3>A broad selection of courses</h3>
        <p>
          Choose from 155,000 online video courses with new additions published
          every month!!
        </p>
      </div>

      {/* Display 4 course  */}
      <Fakedata></Fakedata>
      {/* More Course Button  */}
      <NavLink to="/courses">
        <Button
          className="mt-5 px-5 py-3"
          style={{
            background: "#2196F3",
            border: "none",
          }}
        >
          Explore More Course
        </Button>
      </NavLink>

      {/* Best Instructors section  */}
      <section className="mt-5 d-md-flex w-100">
        <div className="w-100">
          <h1>
            Transform your life <br /> through education
          </h1>
          <p>
            Learners around the world are <br /> launching new careers,
            advancing in <br />
            their fields, and enriching their lives.
          </p>
        </div>
        <img className="ms-5 w-50 img-fluid rounded-3" src={sideimg} alt="" />
      </section>
    </section>
  );
};

export default Home;
