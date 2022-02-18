function Testimonial() {
  return (
    <div>
      <div className="testimonial-section">
        <div className="round-profile-img">
          <img
            src={require("./assets/images/profile.png")}
            alt="profile image"
          />
        </div>
        <div>
          <p>&nbsp;</p>
          <p style={{ fontSize: "22px" }}>
            I appreciate your profesional staff for all your hard work and{" "}
            <br />
            creative thinking! It was fun and I hope to work with you again,
            soon!
          </p>
          <div className="testimonial-details">
            <img
              width="54px"
              height="54px"
              src={require("./assets/images/stars.png")}
            />
          </div>
          <strong>Rascalina Williams</strong>
        </div>

        <div className="l-arr">
          <span className="arr">&larr;</span>
        </div>
        <div className="r-arr">
          <span>&rarr;</span>
        </div>
      </div>

      <div>
        <p>&nbsp;</p>
      </div>

      <div className="panel-sm">
        <div className="card-sm">
          <img src={require("./assets/images/9.JPG")} alt="" />
          <p>
            <span>
              <strong>ORGANIC FOOD</strong>
            </span>
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="card-sm">
          <img src={require("./assets/images/9.JPG")} alt="" />
          <p>
            <span>
              <strong>FASTEST DELIVERY</strong>
            </span>
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="card-sm">
          <img src={require("./assets/images/9.JPG")} alt="" />
          <p>
            <span>
              <strong>FAST & EASY PAYMENT</strong>
            </span>
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
