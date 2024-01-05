import React from "react";

const cont = () => {
  return (
    <div>
      <div className="contenerss">
        <section className="home">
          <div className="text">
            <h1> FULL WEBSITE </h1>
            <h3>THE BEST</h3>
            <h3>SHOTTER GAME</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
              velit, iure quaerat mollitia alias placeat unde corrupti
              repudiandae hic cupiditate quidem quo ut? Voluptatum sapiente
              quasi in similique saepe labore!
            </p>
            <a href="">DOWNlOAD</a>
          </div>
          <div className="images">
            <img src="../hero.png" width="300px" />
          </div>
        </section>

        <section className="proflir">
          <div className="p_img">
            <img src="hero2.png" />
          </div>
          <div className="texts">
            <p style={{ color: "red", fontSize: "20px" }}> about</p>
            <h1> VALORANT IS SHOTTER GAME 5 VS 5 </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
              velit, iure quaerat mollitia alias placeat unde corrupti
              repudiandae hic cupiditate quidem quo ut? Voluptatum sapiente
              quasi in similique saepe labore!
            </p>
            <a href="">PLAY NOW</a>
          </div>
        </section>

        <h1 className="h11"> AGENTS </h1>
        <p className="P1">MOST PLAYAPLE AGENTS </p>
        <section className="AGENTS">
          <div className="CARD">
            <img src="hero2.png" />
            <h4> CYPER</h4>
          </div>

          <div className="CARD">
            <img src="Bumblebee-PNG-HD.png" />
            <h4> JETT</h4>
          </div>

          <div className="CARD">
          <img src="hero.png" />
            <h4> RAZE</h4>
          </div>
        </section>
      </div>

      <div className="dddd">
        <section className="Playandengoy">
          <h1> PLAYANDENGOY</h1>
          <p className="P1S">EVERY DAY </p>
          <a href="">DOWNlOAD</a>
        </section>
      </div>

      {/* Site footer */}
      <div className="footerr">
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-xs-6 col-md-3">
                <h6>Categories</h6>
                <ul className="footer-links">
                  <li>
                    <a href="http://scanfcode.com/category/c-language/">C</a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/category/front-end-development/">
                      UI Design
                    </a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/category/back-end-development/">
                      PHP
                    </a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/category/java-programming-language/">
                      Java
                    </a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/category/android/">Android</a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/category/templates/">
                      Templates
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-xs-6 col-md-3">
                <h6>Categories</h6>
                <ul className="footer-links">
                  <li>
                    <a href="http://scanfcode.com/category/c-language/">C</a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/category/front-end-development/">
                      UI Design
                    </a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/category/back-end-development/">
                      PHP
                    </a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/category/java-programming-language/">
                      Java
                    </a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/category/android/">Android</a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/category/templates/">
                      Templates
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-xs-6 col-md-3">
                <h6>Quick Links</h6>
                <ul className="footer-links">
                  <li>
                    <a href="http://scanfcode.com/about/">About Us</a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/contact/">Contact Us</a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/contribute-at-scanfcode/">
                      Contribute
                    </a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/privacy-policy/">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/sitemap/">Sitemap</a>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
          </div>
          {/* <div className="container">
    <div className="row">
      <div className="col-md-8 col-sm-6 col-xs-12">
        <p className="copyright-text">Copyright © 2017 All Rights Reserved by 
          <a href="#">Scanfcode</a>.
        </p>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <ul className="social-icons">
          <li><a className="facebook" href="#"><i className="fa fa-facebook" /></a></li>
          <li><a className="twitter" href="#"><i className="fa fa-twitter" /></a></li>
          <li><a className="dribbble" href="#"><i className="fa fa-dribbble" /></a></li>
          <li><a className="linkedin" href="#"><i className="fa fa-linkedin" /></a></li>   
        </ul>
      </div>
    </div>
  </div> */}
        </footer>
      </div>
    </div>
  );
};

export default cont;
