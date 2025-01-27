import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import sdevImage from '../../assets/images/sdevCropped.jpg';

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 text-container">
              <div className="align-self-center">
              <div className="intro mx-auto">
                {/* Importing the self portrait to the front page */}
                <img width="125px" alt="" src={sdevImage} style={{ borderRadius: '50%'}} />
                <h4 className="mb-1x">{introdata.title}</h4>
                <h5 className="mb-1x">{introdata.title2}</h5>
                <br/>
                <h1 className="fluidz-48 mb-1x">
                  {/* Writing animation on the front page of the website */}
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                        introdata.animated.fourth,
                        introdata.animated.fifth,
                        introdata.animated.sixth,
                        introdata.animated.seventh,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 5,
                    }}
                  />
                </h1>
                <br/>
                <p className="mb-1x">{introdata.description}</p>
                <p className="mb-1x">{introdata.description2}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/about" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      CV
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            

            
            </div>
            {/*  this is for col-6 */}
            <div className="col-lg-6 image-container"></div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
