function BlackFridayOffer() {
  return (
    <div>
      <div>
        <p>&nbsp;</p>
      </div>
      <div className="offer-head">OFFER ENDS IN</div>
      <div className="label-section">
        <div className="label-inner">
          <div>
            <h1>284</h1>
            <h3>DAYS</h3>
          </div>
          <div>
            <h1>06</h1>
            <h3>HOURS</h3>
          </div>
          <div>
            <h1>09</h1>
            <h3>MINUTES</h3>
          </div>
          <div>
            <h1>42</h1>
            <h3>SECONDS</h3>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div>
          <div className="tag">-20</div>
          <img src={require("./assets/images/9.JPG")} />

          <h5>VEGETABLE</h5>
          <p>
            Chinsie - Nusen Napa
            <br />
            $9.00/kg
          </p>
          <div className="cart-container-sm">
            <div>
              <button>-</button>
            </div>
            <div>
              <input type="text" />
            </div>
            <div>
              <button>+</button>
            </div>
            <div style={{ flexGrow: "1" }}>&nbsp;</div>
            <div>
              <img src={require("./assets/images/basket.png")} />
            </div>
          </div>
        </div>

        <div>
          <div className="tag">NEW</div>
          <img src={require("./assets/images/10.JPG")} />

          <h5>VEGETABLE</h5>
          <p>
            Indian Green Vegetable
            <br />
            $9.00/kg
          </p>
          <div className="cart-container-sm">
            <div>
              <button>-</button>
            </div>
            <div>
              <input type="text" />
            </div>
            <div>
              <button>+</button>
            </div>
            <div style={{ flexGrow: "1" }}>&nbsp;</div>
            <div>
              <img src={require("./assets/images/basket.png")} />
            </div>
          </div>
        </div>

        <div>
          <div className="tag">-25</div>
          <img src={require("./assets/images/11.JPG")} />

          <h5>VEGETABLE</h5>
          <p>
            Chinsie - Nusen Napa
            <br />
            $9.00/kg
          </p>
          <div className="cart-container-sm">
            <div>
              <button>-</button>
            </div>
            <div>
              <input type="text" />
            </div>
            <div>
              <button>+</button>
            </div>
            <div style={{ flexGrow: "1" }}>&nbsp;</div>
            <div>
              <img src={require("./assets/images/basket.png")} />
            </div>
          </div>
        </div>

        <div>
          <div className="tag">-30</div>
          <img src={require("./assets/images/12.JPG")} />

          <h5>VEGETABLE</h5>
          <p>
            Chinsie - Nusen Napa
            <br />
            $9.00/kg
          </p>
          <div className="cart-container-sm">
            <div>
              <button>-</button>
            </div>
            <div>
              <input type="text" />
            </div>
            <div>
              <button>+</button>
            </div>
            <div style={{ flexGrow: "1" }}>&nbsp;</div>
            <div>
              <img src={require("./assets/images/basket.png")} alt="basket" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>&nbsp;</p>
      </div>
      <div className="pair-section">
        <div>
          <div className="outline-box">
            <div className="outline-box-inner">
              <img
                src={require("./assets/images/clipart799090.png")}
                alt="clip art"
              />
            </div>
            <div className="outline-box-inner">
              <h1>Monthly Offer</h1>
              <p>50% OFFER FOR THIS WEEK</p>
              <button>SHOP NOW</button>
            </div>
          </div>
        </div>
        <div>
          <div className="outline-box">
            <div className="outline-box-inner">
              <h1>High Standards</h1>
              <p>
                BLACK FRIDAY OFFER GET <br />
                YOUR SHOPPING
              </p>
              <button id="btn-blue">SHOP NOW</button>
            </div>
            <div className="outline-box-inner">
              <img
                src={require("./assets/images/Orange-Free-PNG-Image.png")}
                alt="Orange"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlackFridayOffer;
