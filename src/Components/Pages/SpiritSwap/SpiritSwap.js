import React,{useState} from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import { Link } from "react-router-dom";
// import banana from "./Image/img11.svg";
// import Img1 from ".//Image/img1.svg";
// import Img4 from ".//Image/img4.png";
import Footer from "../../Footer";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SpiritSwap = (props) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <>
      <div key={props.Data.id3}>
      <section className="wrap-8">
        <div className="container ">
          <div className="row market-Bg">
            <div className="col-md-3 market-Bg">
              <div className="bag-41 market-Bg">
               {props.Data.spritswap &&  <img
                  src="https://app.ola.finance/assets/images/spirit/spirit_over_dark.png"
                  className="market-Bg"
                  alt=""
                />}
              </div>
            </div>
            <div className="col-md-9 market-bg">
              <div className="bag-42 market-bg navbar">
                <ul>
                  <li>
                    <Link to="" className="cal-sm-12">TUTORIAL</Link>
                  </li>
                  <li>
                    <Link to="" className="bag-43 col-sm-12">
                      0.0000 
                      {/* <img src={banana} alt="" /> */}
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="cal-sm-12">Trade</Link>
                  </li>
                  <li>
                    <Link to="" className="cal-sm-12">Connect</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
        <section className="wrap-9">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Box sx={{ width: "100%" }}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="basic tabs example"
                    >
                      <Tab label="Market" {...a11yProps(0)} />
                      <Tab label="Network" {...a11yProps(1)} />
                      <Tab label="Profile" {...a11yProps(2)} />
                    </Tabs>
                  </Box>
                  <TabPanel value={value} index={0}>
                    <section className="wrap-10">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="bag-13">
                              {props.Data.heading && <h4>Your supply balance</h4>}
                              {/* <h4>{props.Data.heading}</h4> */}
                              {props.Data.para && <p>$44,012,004</p>}
                              {/* <p>$44,012,004</p> */}
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="bag-14">
                              <div className="bag-15">
                                <p>Net APY</p>
                                <h6>0%</h6>
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
                              {props.Data.heading1 && <h4>Protocol Total Borrow</h4>}
                              {/* <h4>Protocol Total Borrow</h4> */}
                              {props.Data.para1 &&  <p>$16,248,247</p>}
                              {/* <p>$16,248,247</p> */}
                            </div>
                          </div>
                          <div className="row bag-44">
                            <div className="col-md-6">
                              <div className="bag-45">
                                {props.Data.para3 && <p>Liquidation Limit (0%)</p>}
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="bag-46">
                                <p>$0</p>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="bag-47"></div>
                              <div className="bag-48"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section className="wrap-11">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="bag-49">
                             {props.Data.heading4 &&  <h6>Supply Markets</h6>}
                             {props.Data.para4 &&  <p>( Click on an asset to Supply/Withdraw )</p>}
                              
                              <div className="bag-50">
                                <div className="table-responsive">
                                  <table class="table">
                                    <thead>
                                      <tr>
                                        <th>Asset</th>
                                        <th></th>
                                        <th>APY</th>
                                        <th>Wallet</th>
                                        <th>Collateral</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          {/* {props.Data.image1  && <img src={Img1} alt="" />} */}
                                          <img
                                            src={
                                              "https://app.ola.finance/tokens/asset_BTCB.svg"
                                            }
                                            alt=""
                                          />
                                        </td>

                                        <td className="bag-51">BTCB</td>

                                        <td className="bag-51">+ 2.4985 %</td>

                                        <td className="bag-51">0 BTCB</td>

                                        <td className="">
                                          <Switch {...label} />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="img-resp">
                                          <img
                                            src={
                                              "https://app.ola.finance/tokens/asset_ETH.svg"
                                            }
                                            alt=""
                                          />
                                        </td>

                                        <td className="bag-52">ETH</td>

                                        <td className="bag-52">+ 2.9989 %</td>

                                        <td className="bag-52">0 ETH</td>

                                        <td className="">
                                          <Switch {...label} />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="img-resp">
                                          <img
                                            src={
                                              "https://app.ola.finance/tokens/asset_BANANA.svg"
                                            }
                                            alt=""
                                          />
                                        </td>

                                        <td className="bag-52">BANANA</td>

                                        <td className="bag-52">+ 39.1011 %</td>

                                        <td className="bag-52">0 BANANA</td>

                                        <td className="">
                                          <Switch {...label} />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="img-resp">
                                          <img
                                            src={
                                              "https://app.ola.finance/tokens/asset_BUSD.svg"
                                            }
                                            alt=""
                                          />
                                        </td>
                                        <td className="bag-52">BUSD</td>
                                        <td className="bag-52">+ 2.9092 %</td>
                                        <td className="bag-52">0 BUSD</td>
                                        <td className="">
                                          <Switch {...label} />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="img-resp">
                                          <img
                                            src={
                                              "https://app.ola.finance/tokens/asset_USDT.svg"
                                            }
                                            alt=""
                                          />
                                        </td>
                                        <td className="bag-52">USDT</td>
                                        <td className="bag-52">+ 3.0421 %</td>
                                        <td className="bag-52">0 USDT</td>
                                        <td className="">
                                          <Switch {...label} />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="img-resp">
                                          <img
                                            src={
                                              "https://app.ola.finance/tokens/asset_USDC.svg"
                                            }
                                            alt=""
                                          />
                                        </td>
                                        <td className="bag-52">USDC</td>
                                        <td className="bag-52">+ 3.2504 %</td>
                                        <td className="bag-52">0 USDC</td>
                                        <td className="">
                                          <Switch {...label} />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="img-resp">
                                          <img
                                            src={
                                              "https://app.ola.finance/tokens/asset_CAKE.svg"
                                            }
                                            alt=""
                                          />
                                        </td>
                                        <td className="bag-52">CAKE</td>
                                        <td className="bag-52">+ 17.2246 %</td>
                                        <td className="bag-52">0 CAKE</td>
                                        <td className="">
                                          <Switch {...label} />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="img-resp">
                                          <img
                                            src={
                                              "	https://app.ola.finance/tokens/asset_DOT.svg"
                                            }
                                            alt=""
                                          />
                                        </td>
                                        <td className="bag-52">DOT</td>
                                        <td className="bag-52">+ 11.1923 %</td>
                                        <td className="bag-52">0 DOT</td>
                                        <td className="">
                                          <Switch {...label} />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="img-resp">
                                          <img
                                            src={
                                              "	https://app.ola.finance/tokens/asset_BNB.svg"
                                            }
                                            alt=""
                                          />
                                        </td>
                                        <td className="bag-52">BNB</td>
                                        <td className="bag-52">+ 4.4309 %</td>
                                        <td className="bag-52">0 BNB</td>
                                        <td className="">
                                          <Switch {...label} />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="bag-49">
                              <h6>Borrow Markets</h6>
                              <p>( Click on an asset to Borrow/Repay )</p>
                              <div className="bag-50">
                                <div className="table-responsive">
                                  <table class="table">
                                    <thead>
                                      <tr>
                                        <th>Asset</th>
                                        <th></th>
                                        <th>APY</th>
                                        <th>Wallet</th>
                                        <th>Collateral</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          {/* {props.Data.image1  && <img src={Img1} alt="" />} */}
                                          <img
                                            src={
                                              "https://app.ola.finance/tokens/asset_BTCB.svg"
                                            }
                                            alt=""
                                          />
                                        </td>

                                        <td className="bag-51">BTCB</td>

                                        <td className="bag-51">+ 2.4985 %</td>

                                        <td className="bag-51">0 BTCB</td>

                                        <td className="">
                                          <Switch {...label} />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="img-resp">
                                          <img
                                            src={
                                              "https://app.ola.finance/tokens/asset_ETH.svg"
                                            }
                                            alt=""
                                          />
                                        </td>

                                        <td className="bag-52">ETH</td>

                                        <td className="bag-52">+ 2.9989 %</td>

                                        <td className="bag-52">0 ETH</td>

                                        <td className="">
                                          <Switch {...label} />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="img-resp">
                                          <img
                                            src={
                                              "https://app.ola.finance/tokens/asset_BANANA.svg"
                                            }
                                            alt=""
                                          />
                                        </td>

                                        <td className="bag-52">BANANA</td>

                                        <td className="bag-52">+ 39.1011 %</td>

                                        <td className="bag-52">0 BANANA</td>

                                        <td className="">
                                          <Switch {...label} />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="img-resp">
                                          <img
                                            src={
                                              "https://app.ola.finance/tokens/asset_BUSD.svg"
                                            }
                                            alt=""
                                          />
                                        </td>
                                        <td className="bag-52">BUSD</td>
                                        <td className="bag-52">+ 2.9092 %</td>
                                        <td className="bag-52">0 BUSD</td>
                                        <td className="">
                                          <Switch {...label} />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="img-resp">
                                          <img
                                            src={
                                              "https://app.ola.finance/tokens/asset_USDT.svg"
                                            }
                                            alt=""
                                          />
                                        </td>
                                        <td className="bag-52">USDT</td>
                                        <td className="bag-52">+ 3.0421 %</td>
                                        <td className="bag-52">0 USDT</td>
                                        <td className="">
                                          <Switch {...label} />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="img-resp">
                                          <img
                                            src={
                                              "https://app.ola.finance/tokens/asset_USDC.svg"
                                            }
                                            alt=""
                                          />
                                        </td>
                                        <td className="bag-52">USDC</td>
                                        <td className="bag-52">+ 3.2504 %</td>
                                        <td className="bag-52">0 USDC</td>
                                        <td className="">
                                          <Switch {...label} />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="img-resp">
                                          <img
                                            src={
                                              "https://app.ola.finance/tokens/asset_CAKE.svg"
                                            }
                                            alt=""
                                          />
                                        </td>
                                        <td className="bag-52">CAKE</td>
                                        <td className="bag-52">+ 17.2246 %</td>
                                        <td className="bag-52">0 CAKE</td>
                                        <td className="">
                                          <Switch {...label} />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="img-resp">
                                          <img
                                            src={
                                              "	https://app.ola.finance/tokens/asset_DOT.svg"
                                            }
                                            alt=""
                                          />
                                        </td>
                                        <td className="bag-52">DOT</td>
                                        <td className="bag-52">+ 11.1923 %</td>
                                        <td className="bag-52">0 DOT</td>
                                        <td className="">
                                          <Switch {...label} />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="img-resp">
                                          <img
                                            src={
                                              "	https://app.ola.finance/tokens/asset_BNB.svg"
                                            }
                                            alt=""
                                          />
                                        </td>
                                        <td className="bag-52">BNB</td>
                                        <td className="bag-52">+ 4.4309 %</td>
                                        <td className="bag-52">0 BNB</td>
                                        <td className="">
                                          <Switch {...label} />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <section className="wrap-10">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="bag-13">
                              {/* {props.Data.heading && <h4>Your supply balance</h4>} */}
                              <h4>Network supply balance</h4>
                              {/* {props.Data.para && <p>$44,012,004</p>} */}
                              <p>$32,381,902.22</p>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="bag-14">
                              <div className="bag-15">
                                <p>Assets Utilization</p>
                                <h6>42.4389%</h6>
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
                              {/* {props.Data.heading1 && <h4>Protocol Total Borrow</h4>} */}
                              <h4>Network borrow balance</h4>
                              {/* {props.Data.para1 &&  <p>$16,248,247</p>} */}
                              <p>$13,736,448.96</p>
                            </div>
                          </div>
                          <div className="row bag-44">
                            <div className="col-md-6">
                              <div className="bag-45">
                                <p>Supplied Assets</p>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="bag-46">
                                <p>$32.38M</p>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="bag-47"></div>
                              <div className="bag-48"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section className="wrap-13">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-6 main">
                            <div className="row ">
                              <div className="col-md-6">
                                <div className="bag-51">
                                  <img
                                    src="https://app.ola.finance/tokens/asset_BTCB.svg"
                                    alt=""
                                  />
                                  <h5>BTCB</h5>
                                  <h6>$23,148</h6>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="bag-14">
                                  <div className="bag-15">
                                    <p>Assets Utilization</p>
                                    <h6>42.4389%</h6>
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
                              <div className="col-md-6">
                                <div className="bag-52">
                                  <h5>Supplied BTBC</h5>
                                  <h6>320.824</h6>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="bag-52">
                                  <h5>Borrowed BTBC</h5>
                                  <h6>320.824</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 main">
                            <div className="row ">
                              <div className="col-md-6">
                                <div className="bag-51">
                                  <img
                                    src="https://app.ola.finance/tokens/asset_ETH.svg"
                                    alt=""
                                    style={{ width: "15%" }}
                                  />
                                  <h5>Ether</h5>
                                  <h6 className="top">$23,148</h6>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="bag-14">
                                  <div className="bag-15">
                                    <p>ETH Borrowed</p>
                                    <h6>42.4389%</h6>
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
                              <div className="col-md-6">
                                <div className="bag-52">
                                  <h5>Supplied ETH</h5>
                                  <h6>320.824</h6>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="bag-52">
                                  <h5>Borrowed ETH</h5>
                                  <h6>320.824</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 main">
                            <div className="row ">
                              <div className="col-md-6">
                                <div className="bag-51">
                                  <img
                                    src="https://app.ola.finance/tokens/asset_BANANA.svg"
                                    alt=""
                                    // style={{width:"15%"}}
                                  />
                                  <h5>BANANA</h5>
                                  <h6 className="top">$23,148</h6>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="bag-14">
                                  <div className="bag-15">
                                    <p>BANANA Borrowed</p>
                                    <h6>42.4389%</h6>
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
                              <div className="col-md-6">
                                <div className="bag-52">
                                  <h5>Supplied BANANA</h5>
                                  <h6>320.824</h6>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="bag-52">
                                  <h5>Borrowed BANANA</h5>
                                  <h6>320.824</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 main">
                            <div className="row ">
                              <div className="col-md-6">
                                <div className="bag-51">
                                  <img
                                    src="https://app.ola.finance/tokens/asset_BUSD.svg"
                                    alt=""
                                    // style={{width:"15%"}}
                                  />
                                  <h5>BUSD</h5>
                                  <h6 className="top">$1</h6>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="bag-14">
                                  <div className="bag-15">
                                    <p>BUSD Borrowed</p>
                                    <h6>42.4389%</h6>
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
                              <div className="col-md-6">
                                <div className="bag-52">
                                  <h5>Supplied BUSD</h5>
                                  <h6>320.824</h6>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="bag-52">
                                  <h5>Borrowed BUSD</h5>
                                  <h6>320.824</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 main">
                            <div className="row ">
                              <div className="col-md-6">
                                <div className="bag-51">
                                  <img
                                    src="https://app.ola.finance/tokens/asset_USDT.svg"
                                    alt=""
                                    // style={{width:"15%"}}
                                  />
                                  <h5>USDT</h5>
                                  <h6 className="top">$1</h6>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="bag-14">
                                  <div className="bag-15">
                                    <p>USDT Borrowed</p>
                                    <h6>42.4389%</h6>
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
                              <div className="col-md-6">
                                <div className="bag-52">
                                  <h5>Supplied USDT</h5>
                                  <h6>320.824</h6>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="bag-52">
                                  <h5>Borrowed USDT</h5>
                                  <h6>320.824</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 main">
                            <div className="row ">
                              <div className="col-md-6">
                                <div className="bag-51">
                                  <img
                                    src="https://app.ola.finance/tokens/asset_USDC.svg"
                                    alt=""
                                    // style={{width:"15%"}}
                                  />
                                  <h5>USDC</h5>
                                  <h6 className="top">$1</h6>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="bag-14">
                                  <div className="bag-15">
                                    <p>USDC Borrowed</p>
                                    <h6>42.4389%</h6>
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
                              <div className="col-md-6">
                                <div className="bag-52">
                                  <h5>Supplied USDC</h5>
                                  <h6>320.824</h6>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="bag-52">
                                  <h5>Borrowed USDC</h5>
                                  <h6>320.824</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 main">
                            <div className="row ">
                              <div className="col-md-6">
                                <div className="bag-51">
                                  <img
                                    src="https://app.ola.finance/tokens/asset_CAKE.svg"
                                    alt=""
                                    // style={{width:"15%"}}
                                  />
                                  <h5>CAKE</h5>
                                  <h6 className="top">$1</h6>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="bag-14">
                                  <div className="bag-15">
                                    <p>CAKE Borrowed</p>
                                    <h6>42.4389%</h6>
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
                              <div className="col-md-6">
                                <div className="bag-52">
                                  <h5>Supplied CAKE</h5>
                                  <h6>320.824</h6>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="bag-52">
                                  <h5>Borrowed CAKE</h5>
                                  <h6>320.824</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 main">
                            <div className="row ">
                              <div className="col-md-6">
                                <div className="bag-51">
                                  <img
                                    src="	https://app.ola.finance/tokens/asset_DOT.svg"
                                    alt=""
                                    // style={{width:"15%"}}
                                  />
                                  <h5>DOT</h5>
                                  <h6 className="top">$1</h6>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="bag-14">
                                  <div className="bag-15">
                                    <p>DOT Borrowed</p>
                                    <h6>42.4389%</h6>
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
                              <div className="col-md-6">
                                <div className="bag-52">
                                  <h5>Supplied DOT</h5>
                                  <h6>320.824</h6>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="bag-52">
                                  <h5>Borrowed DOT</h5>
                                  <h6>320.824</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 main">
                            <div className="row ">
                              <div className="col-md-6">
                                <div className="bag-51">
                                  <img
                                    src="	https://app.ola.finance/tokens/asset_BNB.svg"
                                    alt=""
                                    // style={{width:"15%"}}
                                  />
                                  <h5>BNB</h5>
                                  <h6 className="top">$1</h6>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="bag-14">
                                  <div className="bag-15">
                                    <p>BNB Borrowed</p>
                                    <h6>42.4389%</h6>
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
                              <div className="col-md-6">
                                <div className="bag-52">
                                  <h5>Supplied BNB</h5>
                                  <h6>320.824</h6>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="bag-52">
                                  <h5>Borrowed BNB</h5>
                                  <h6>320.824</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    <section className="wrap-14">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="bag-13">
                              {/* {props.Data.heading && <h4>Your supply balance</h4>} */}
                              <h4>supply balance</h4>
                              {/* {props.Data.para && <p>$44,012,004</p>} */}
                              <p>$0</p>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="bag-14">
                              <div className="bag-15">
                                <p>Net APY</p>
                                <h6>0%</h6>
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
                              {/* <svg height="200" width="200" class="jss99">
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
                              </svg> */}
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="bag-13">
                              {/* {props.Data.heading && <h4>Your supply balance</h4>} */}
                              <h4>Borrow balance</h4>
                              {/* {props.Data.para && <p>$44,012,004</p>} */}
                              <p>$0</p>
                            </div>
                          </div>
                          <div className="row bag-44">
                            <div className="col-md-6">
                              <div className="bag-45">
                                <p>Liquidation Limit (0%)</p>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="bag-46">
                                <p>$0</p>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="bag-47"></div>
                              <div className="bag-48"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section className="wrap-15">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="bag-55">
                              <h5>Profile data for :</h5>
                            </div>
                          </div>
                          <div className="col-md-7">
                            <input
                              type="text"
                              name=""
                              id=""
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-5">
                            <button className="btn btn-primary">QUERY</button>
                            <button className="btn btn-primary">SELF</button>
                          </div>

                          <div className="col-md-6 bag-56">
                            <div className="row">
                              <div className="col-md-6"><h1>Supplied</h1></div>
                              <div className="col-md-6"><h2>Borrowed</h2></div>
                              <div className="col-md-6 bag-57"><span>No Supply</span></div>
                              <div className="col-md-6 bag-57"><span>No borrows</span></div>
                            </div>
                          </div>
                          <div className="col-md-6 bag-56">
                            <div className="row">
                              <div className="col-md-12">
                                <p>Rain Forecast - No Rain</p>
                              </div>
                              <div className="col-md-6">
                               <div className="bag-58">
                               <h6>Estimated Yearly Rain</h6>
                                <p>0 BANANA</p>
                               </div>
                              </div>
                              <div className="col-md-6">
                               <div className="bag-58">
                               <h6>Estimated Daily Rain</h6>
                                <p>0 BANANA</p>
                               </div>
                              </div>
                              <div className="col-md-6">
                               <div className="bag-58">
                               <h6>Estimated Hourly Rain</h6>
                                <p>0 BANANA</p>
                               </div>
                              </div>
                              <div className="col-md-6">
                               <div className="bag-58">
                               <h6>Unclaimed Rain</h6>
                                <p>0 BANANA</p>
                               </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </TabPanel>
                </Box>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
};

export default SpiritSwap;
