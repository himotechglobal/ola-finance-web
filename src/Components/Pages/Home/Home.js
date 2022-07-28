import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <section className="wrap-1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="bag-1">
                <Link to="/Getapp">Go to app</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="bag-2"></div>
              <div className="bag-3">
                <h3>A decentralized protocol for</h3>
                <h3>programmable lending</h3>
              </div>

              <div className="bag-4">
                <div className="bag-5">
                  <h4>Learn</h4>
                  <p>About Ola finance</p>
                  <div className="bag-6">
                    <Link to="">Gitbook</Link>
                  </div>
                </div>
                <div className="bag-7">
                  <h4>Earn</h4>
                  <p>APY% for your crypto</p>
                  <div className="bag-6">
                    <Link to="">Go to app</Link>
                  </div>
                </div>
                <div className="bag-8">
                  <h4>Join</h4>
                  <p>Our community</p>

                  <div className="bag-9">
                    <Link to="">
                      <i class="bi bi-telegram"></i>
                      <i class="bi bi-twitter"></i>
                      <i class="bi bi-discord"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="bag-11">
                <p>
                  {" "}
                  <Link to="">Terms of Services</Link>
                </p>
                <p>
                  <Link to="">Privacy Policy</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
