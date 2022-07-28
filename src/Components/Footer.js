import React from 'react'
import Logo from "./Image/Logo.png"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="bag-60">
                            <img src={Logo} alt="" />
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
  )
}

export default Footer