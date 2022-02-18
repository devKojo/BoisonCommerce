function Blog() {
  return (
    <div>
      <div className="section-title">
        <div style={{ display: "inline-block" }}>&nbsp; &nbsp;</div>
        <div style={{ display: "inline-block" }}>
          <h3>Blog & Articles</h3>
        </div>
      </div>

      <div className="blog-card">
        <div>
          <img
            src={require("./assets/images/orangefarm.png")}
            alt="mangofarm"
          />
          <div className="blog-details">
            <h5>3 FEBRUARY 2022</h5>
            <h3>Best Guide for Shopping Organic Ingredients</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>READ MORE &rarr;</button>
          </div>
        </div>
        <div>
          <img src={require("./assets/images/mangofarm.png")} alt="mangofarm" />

          <div className="blog-details">
            <h5>3 FEBRUARY 2022</h5>
            <h3>Zechsal magnesium flakes especially made</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>READ MORE &rarr;</button>
          </div>
        </div>
        <div>
          <img src={require("./assets/images/allfarm.png")} alt="mangofarm" />
          <div className="blog-details">
            <h5>3 FEBRUARY 2022</h5>
            <h3>
              Finding a way to separate 'work' <br /> to do a business.
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>READ MORE &rarr;</button>
          </div>
        </div>
      </div>

      <div>&nbsp;</div>

      <div className="pag-controls">
        <div></div>
        <div className="nav-arr">
          <div style={{ display: "inline-block" }}>&larr;</div>
          <div style={{ display: "inline-block" }}>&rarr;</div>
        </div>
        <div style={{ flexGrow: "1" }}>&nbsp;</div>
        <div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button id="blog-btn">ALL BLOG</button>
        </div>
      </div>

      <div>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

export default Blog;
