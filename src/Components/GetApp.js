import React from "react";
import {Link} from "react-router-dom"
import banana from "../Components/Image/img11.svg";
import Image12 from "../Components/Image/img12.svg";
import Image13 from "../Components/Image/img13.svg";
import Img1 from ".//Image/img1.svg";
import Img2 from "./Image/img2.svg";
import Img3 from "./Image/img3.svg";
import Img4 from "./Image/img4.png";
import Img5 from "./Image/img5.svg";
import Img6 from "./Image/img6.svg";
import Img7 from "./Image/img7.svg";
import Img8 from "./Image/img8.svg";
import Img9 from "./Image/img9.svg";
import Img10 from "./Image/img10.svg";
import Img14 from "./Image/img14.svg";
import Img15 from "./Image/img15.svg";
import Img16 from "./Image/img16.png";
import Img17 from "./Image/img17.svg";
import Img18 from "./Image/img18.svg";
import Img19 from "./Image/img19.svg";
import Img20 from "./Image/img20.svg";
import Img21 from "./Image/img21.svg";
import Img22 from "./Image/img22.png";
import Img23 from "./Image/img23.svg";
import Img24 from "./Image/img24.svg";
import Img25 from "./Image/img25.svg";
import Img26 from "./Image/img26.svg";

function GetApp(props) {
  console.log("props", props);
  return (
    <section className="wrap-5" key={props.Data.id}>
      <div className="bag-17">
        <div className="bag-18">
          <h6>{props.Data.heading}</h6>
        </div>
        <div className="bag-19" >
          {props.Data.image1 && <img src={Img1} alt="" className="bag-29" />}
          {props.Data.image4 && <img src={Img4} alt="" className="bag-22" />}
          {props.Data.banana && <img src={banana} alt="" className="bag-29" />}
          {props.Data.image12 && (
            <img src={Image12} alt="" className="bag-28" />
          )}
          {props.Data.image13 && (
            <img src={Image13} alt="" className="bag-28" />
          )}
          {props.Data.image2 && <img src={Img2} alt="" className="bag-21" style={{ margin: props.Data.padding }}/>}
          {props.Data.image14 && <img src={Img14} alt="" className="bag-25" />}
          {props.Data.image15 && <img src={Img15} alt="" className="bag-25" />}
          {props.Data.image5 && <img src={Img5} alt="" className="bag-25" />}
          {props.Data.image7 && <img src={Img7} alt="" className="bag-25" style={{ margin: props.Data.padding }} />}
          {props.Data.image16 && <img src={Img16} alt="" className="bag-25" />}
          {props.Data.image17 && <img src={Img17} alt="" className="bag-25" />}
          {props.Data.image9 && <img src={Img9} alt="" className="bag-27" />}
          {props.Data.image18 && <img src={Img18} alt="" className="bag-27" />}
          {props.Data.image19 && <img src={Img19} alt="" className="bag-27" />}
          {props.Data.image20 && <img src={Img20} alt="" className="bag-27" />}
          {props.Data.image21 && <img src={Img21} alt="" className="bag-27" />}
          {props.Data.image22 && <img src={Img22} alt="" className="bag-27" style={{ margin: props.Data.padding }}/>}
          {props.Data.image23 && <img src={Img23} alt="" className="bag-27" style={{ margin: props.Data.padding }}/>}
          {props.Data.image24 && <img src={Img24} alt="" className="bag-27" />}
          {props.Data.image25 && <img src={Img25} alt="" className="bag-27" />}
          {props.Data.image26 && <img src={Img26} alt="" className="bag-27" />}

          <img src={props.Data.image3} alt="" className="bag-28" />
          <img src={props.Data.image5} alt="" className="bag-23" />
          <img src={props.Data.image6} alt="" className="bag-24" />
          <img src={props.Data.image7} alt="" className="bag-25" />
          <img src={props.Data.image8} alt="" className="bag-26" />

          <img src={props.Data.image10} alt="" className="bag-28" />
        </div>
        <div className="row bag-31">
          <div className="col-md-6 bag-31">
            <div className="bag-30" style={{ margin: props.Data.margin }}>
              <h6>{props.Data.decs}</h6>
              <p>{props.Data.para}</p>
            </div>
          </div>
          <div className="col-md-6 bag-31">
            <div className="bag-30" style={{ margin: props.Data.margin }}>
              <h6>{props.Data.decs1}</h6>
              <p>{props.Data.para2}</p>
            </div>
          </div>
          <div className="col-md-12 bag-31">
            <div className="bag-32">
              <Link className="btn btn-primary" to="/Market">{props.Data.button} </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetApp;
