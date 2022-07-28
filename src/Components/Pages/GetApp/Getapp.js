import React from "react";
import Logo from "../../Image/Logo.png";
import { Link } from "react-router-dom";
import Data from "../../GetAppData.js";
import GetApp from "../../GetApp";
// import Img4 from "../../Image/img4.svg"
const Getapp = () => {
  return (
    <>
      <div className="wrap-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10">
              <div className="bag-12">
                <img src={Logo} alt="" />
              </div>
            </div>
            <div className="col-md-2">
              <div className="bag-1">
                <Link to="/">Connect</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="wrap-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="bag-13">
                <h4>Protocol Total Supply</h4>
                <p>$44,012,004</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bag-14">
                <div className="bag-15">
                  <p>Yearly Earned Interest</p>
                  <h6>$ 1,618,922.35</h6>
                </div>
                <svg height="200" width="200">
                  <circle
                    class="jss107 jss100"
                    stroke-width="6"
                    fill="transparent"
                    r="88"
                    cx="100"
                    cy="100"
                    style={{
                      strokeDashoffset: "0",
                      strokeDasharray: "552.92, 552.92;",
                      stroke: "rgb(49, 229, 166)",
                    }}
                  ></circle>
                </svg>
                <svg height="200" width="200" class="jss99">
                  <circle
                    class="jss107 jss100"
                    stroke-width="6"
                    fill="transparent"
                    r="88"
                    cx="100"
                    cy="100"
                    style={{
                      strokeDashoffset: "349.305",
                      strokeDasharray: "552.92, 552.92",
                      stroke: "rgb(229, 49, 112)",
                    }}
                  ></circle>
                </svg>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bag-16">
                <h4>Protocol Total Borrow</h4>
                <p>$16,248,247</p>
              </div>
            </div>
          </div>
        </div>
      </section>

     <div className="bad">
     <div className="container ">
        <div className="row">
          {Data.map((element, i) => {
            return (
              <>
                <div className="col-md-4">
                  <GetApp Data={element}  />
                </div>
              </>
            );
          })}
        </div>
      </div>
     </div>

      <div className="wrap-6">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="bag-35">
                <h1>Ola Community</h1>
              </div>
              <div className="bag-36">
              <i class="bi bi-twitter"></i>
              <i class="bi bi-house-door-fill"></i>
              <i class="bi bi-telegram"></i>
              <i class="bi bi-discord"></i>
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
        </div>
      </div>
    </>
  );
};

export default Getapp;
