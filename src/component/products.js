function Products() {
  return (
    <div>
      <div>
        <p>&nbsp;</p>
      </div>
      <div className="section-title">
        <div style={{ display: "inline-block" }}>&nbsp; &nbsp;</div>
        <div style={{ display: "inline-block" }}>
          <h3>Popular Products</h3>
        </div>
      </div>

      <div className="card-container">
        <div>
          <div className="tag">-20</div>
          <img src={require("./assets/images/redmeat.png")} />

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
          <img src={require("./assets/images/freshfish.png")} />

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
          <img src={require("./assets/images/freshchicken.png")} />

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

        <div>
          <div className="tag">-30</div>
          <img src={require("./assets/images/freshonion.png")} />

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
      </div>
    </div>
  );
}
export default Products;
