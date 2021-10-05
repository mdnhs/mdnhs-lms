import React from "react";
import "./Contact.css";

const Contactus = () => {
  return (
    <div class="container contact-form">
      <div class="contact-image">
        <img
          src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png"
          alt="msg"
        />
      </div>
      <form method="post">
        <h3>Drop Us a Message</h3>
        {/* input form and submit button */}
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <input
                type="text"
                name="txtName"
                class="form-control"
                placeholder="Your Name *"
                value=""
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                name="txtEmail"
                class="form-control"
                placeholder="Your Email *"
                value=""
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                name="txtPhone"
                class="form-control"
                placeholder="Your Phone Number *"
                value=""
              />
            </div>
            <div class="form-group">
              <input
                type="submit"
                name="btnSubmit"
                class="btnContact"
                value="Send Message"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <textarea
                name="txtMsg"
                class="form-control"
                placeholder="Your Message *"
                style={{ width: "100%", height: "150px" }}
              ></textarea>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contactus;
