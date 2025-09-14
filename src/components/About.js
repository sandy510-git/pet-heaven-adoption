import React from 'react';
import './bootstrap-theme.css';
import './swiper.min.css';
import './style.css';
import image1 from '../Images/p1.jpg';
import image2 from '../Images/p2.jpg';
import { Link } from 'react-router-dom';

class About extends React.Component {
  render() {
    return (
      <div>
        <section className="case-study" style={{ margin: "50px" }} >
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h3 class="sub-heading">PET HEAVEN</h3>
              <h1 class="heading purple"><span class="purple">Our Mission and Vision</span></h1>
              {/* <!-- Swiper --> */}
              <div class="swiper-container client-swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide client-box">
                  <img src={image1} width="70%" height="60%" alt="tick image"  />
                   
                    <h3 class="text-left title" style={{margin: "50px"}}>Unite to save lives</h3>
                    <p class="text-left tag">Our organization protect animals from other humans. Whether they're a companion who lives in your home, a domestic animal living on a farm, or a wild animal living in their own habitat, all animals deserve the chance to live a life free of human-led suffering.</p>
                    <p class="text-left"></p>
  
                  </div>

                  <div class="swiper-slide client-box">
                    {/* <img src="assets/logo-2.png" class="client-logo"> */}
                    <h3 class="text-left title">User Experience design for the AI</h3>
                    <p class="text-left tag">Branding, UI, Website</p>
                    <p class="text-left"><a href="#">Know More &#8594;</a></p>
                  </div>
                  <div class="swiper-slide client-box">
                    {/* <img src="assets/logo-3.png" class="client-logo"> */}
                    <h3 class="text-left title">Rebranding of the best motion studio</h3>
                    <p class="text-left tag">Branding, UI, Website</p>
                    <p class="text-left"><a href="#">Know More &#8594;</a></p>
                  </div>
                  <div class="swiper-slide client-box">
                    {/* <img src="assets/logo-1.png" class="client-logo"> */}
                    <h3 class="text-left title">Visual identity for upsidedown</h3>
                    <p class="text-left tag">Branding, UI, Website</p>
                    <p class="text-left"><a href="#">Know More &#8594;</a></p>
                  </div>
                  <div class="swiper-slide client-box">
                    {/* <img src="assets/logo-2.png" class="client-logo"> */}
                    <h3 class="text-left title">Visual identity for upsidedown</h3>
                    <p class="text-left tag">Branding, UI, Website</p>
                    <p class="text-left"><a href="#">Know More &#8594;</a></p>
                  </div>
                </div>
                
              </div>
              {/* <!-- Add Arrows --> */}
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>
          </div>
        </div>
        </section>

        <section className="testimonial">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h4 class="sub-heading">Pets Catchers</h4>
              <h1 class="heading pink"><span class="pink">History</span> of Pet Heaven </h1>
              <p style={{margin:"20px"}} class="text-right"> 1999 The Society for the Prevention of Cruelty to Animals (PET-HEAVEN) was founded, supporting new laws for animal welfare. 2004 Bear and bull baiting are abolished. New laws ban cruelty to dogs. Better legal standards are brought in at slaughterhouses.</p>
            </div>
          </div>  
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              {/* <!-- Swiper --> */}
              <div class="swiper-container testimonial-swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide testimonial-box yellow" style={{ margin : "10px",padding:"10px" }} >
                    <h1>Facility Information</h1>
                    <p>Call our 24/7 emergency rescue hotline (6287 5355 ext 9) if you spot a sick or injured animal or an animal in distress.</p>
                    <p> Simply head over to an animal shelter in Singapore and volunteer your services! There are many ways you can help, from more labour-intensive activities like cleaning and grooming to advocacy, public relations and even photography.</p>
                      <div class="text-right">
                        {/* <img src={image2} width="30%" height="20%" alt="tick image" /> */}

                        <img src="https://images.pexels.com/photos/257519/pexels-photo-257519.jpeg?auto=compress&cs=tinysrgb&w=1600" width="30%" height="400px" alt="..." />
                        <img src="https://images.pexels.com/photos/2571190/pexels-photo-2571190.jpeg?auto=compress&cs=tinysrgb&w=1600" width="30%" height="400px" alt="..." />
                        <img src="https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?auto=compress&cs=tinysrgb&w=1600" width="40%" height="400px" alt="..." />
                        {/* <p class="name">- John Doe</p>
                      <p class="designation">Founder, Arrow</p> */}
                      </div>
                  </div>
                  <div class="swiper-slide testimonial-box purple">
                    <h1>Minimal and Clean</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                    <div class="text-right">
                      <p class="name">- Rocky Hych</p>
                      <p class="designation">CTO, Upside Down</p>
                    </div>
                  </div>
                  <div class="swiper-slide testimonial-box blue">
                    <h1>Built with Bootstrap</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                    <div class="text-right">
                      <p class="name">- John Doe</p>
                      <p class="designation">Founder, Arrow</p>
                    </div>
                  </div>
                  <div class="swiper-slide testimonial-box pink">
                    <h1>Responsive template</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                    <div class="text-right">
                      <p class="name">- Rocky Hych</p>
                      <p class="designation">CTO, Upside Down</p>
                    </div>
                  </div>
                  <div class="swiper-slide testimonial-box yellow">
                    <h1>Pixel Perfect</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                    <div class="text-right">
                      <p class="name">- John Doe</p>
                      <p class="designation">Founder, Arrow</p>
                    </div>
                  </div>
                  <div class="swiper-slide testimonial-box purple">
                    <h1>Minimal and Clean</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                    <div class="text-right">
                      <p class="name">- Rocky Hych</p>
                      <p class="designation">CTO, Upside Down</p>
                    </div>
                  </div>
                  <div class="swiper-slide testimonial-box blue">
                    <h1>Pixel Perfect</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                    <div class="text-right">
                      <p class="name">- John Doe</p>
                      <p class="designation">Founder, Arrow</p>
                    </div>
                  </div>
                  <div class="swiper-slide testimonial-box pink">
                    <h1>Minimal and Clean</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                    <div class="text-right">
                      <p class="name">- Rocky Hych</p>
                      <p class="designation">CTO, Upside Down</p>
                    </div>
                  </div>
                </div>
                {/* <!-- Add Pagination --> */}
                <div class="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
        </section>

        <section className="stats">
        <div class="container">
          <div class="row">
            <div class="col-md-4 text-center stat-box">
              <h1 class="purple"><span class="counter">3.2</span>k</h1>
              <h3>Pets</h3>
            </div>
            <div class="col-md-4 text-center stat-box">
              <h1 class="blue counter">517</h1>
              <h3>Rescues</h3>
            </div>
            <div class="col-md-4 text-center stat-box">
              <h1 class="pink"><span class="counter">1</span>k</h1>
              <h3>Adopted</h3>
            </div>
          </div>
        </div>
        </section>

        <section className="contact-banner">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <h1>Let’s see about our pets</h1>
              <Link to ="/get">
              <button class="btn btn-lg btn-primary"> Get in touch with our Pets </button>
              {/* <a href="#" class="btn btn-lg btn-primary">Get in touch now</a> */}
              </Link>
            </div>
          </div>
        </div>
        </section>

        <footer>
        <div class="container-fluid">
          <div class="row footer">
            <div class="col-md-12 text-center">
              <h1>Contact Us <span></span></h1>
              <ul class="social-links">
              <img src="https://media.istockphoto.com/id/1153702910/photo/social-media-icon.jpg?s=612x612&w=0&k=20&c=sKNm7XpfjtzJLV2OjlRzo4pY4mz1wueuq2yBJRx1qpw=" width="10%" height="5%" alt="..." />
                {/* <li><a href="#"><img src="assets/behance.png"></a></li>
                <li><a href="#"><img src="assets/dribbble.png"></a></li>
                <li><a href="#"><img src="assets/twitter.png"></a></li>
                <li><a href="#"><img src="assets/github.png"></a></li> */}
              </ul>
            </div>
          </div>
          <div class="row sub-footer">
            <div class="col-md-12 text-center">
              <p>petheaven.sg@gmail.com | phone: <a href="http://designerdada.com/free-bootstrap-one-page-portfolio-template/">930-424-2453</a></p>
            </div>
          </div>
        </div>
        </footer>
      </div>
    );
  }
}

export default About;
