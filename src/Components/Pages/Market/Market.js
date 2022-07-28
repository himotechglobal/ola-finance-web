import React from "react";
import { Link } from "react-router-dom";
import banana from "../../Image/img11.svg";
import Data from "../../MarketData";
import MarketTab from "../../MarketTab";
const Market = () => {
  return (
    <>
       
        {/* <div className="container ">
          <div className="row market-Bg">
          
            <div className="col-md-6 col-lg-9 col-sm-12 market-bg">
              <div className="bag-42 market-bg navbar">
                <ul>
                 
                </ul>
              </div>
            </div>
          </div>
        </div> */}
 
      <section className="wrap-8">
      <nav class="navbar navbar-expand-lg ">
  <div class="container">
    <a class="navbar-brand" href="#">
    <div className="col-md-12 col-lg-3 col-sm-12 market-Bg">
              <div className="bag-41 market-Bg">
             <img
                  src="https://app.ola.finance/assets/images/ape/ape-logo-horizontal-captioned.svg"
                  className="market-Bg"
                  alt=""
                />
              </div>
            </div></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse bag-42" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to="" className="nav-link">TUTORIAL</Link>
        </li>
        <li class="nav-item">
        <Link to="" className="bag-43 nav-link">
                      0.0000 
                      {/* <img src={banana} alt="" /> */}
                    </Link>
        </li>
       
        <li class="nav-item">
        <Link to="" className=" nav-link">Trade</Link>
        </li>
        <li class="nav-item">
        <Link to="" className="nav-link">Connect</Link>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
     </section>

                   
                  


     {
      Data.map((element)=> {
        return (
          <>
          <MarketTab Data={element}/>
          </>
        )
      })
     }

    </>
    
  );
};

export default Market;
