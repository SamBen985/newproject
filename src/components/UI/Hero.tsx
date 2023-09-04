import "../../styles/hero.css";

import  heroDarkImg from '../../images/heroImage.png'



function Hero() {
  return (
    <section className="hero_section">
      <div className="container">
        <div className="hero_wrapper">
          <div className="hero_content">
            <div>
            <h2>We're Creating Perfect</h2>
            <h2>Digital Products To</h2>
            <h2 className="highlight">Promote Your Brand</h2>
            </div>
         
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rem
            quidem blanditiis alias culpa deserunt?
          </p>

          <div className="hero_btns">
            <button className="primary_btn">Get Started Now</button>
            <button className="secondary_btn">Discover More</button>
          </div>
        </div>

        <div className="hero_img">
          <img src={heroDarkImg} alt="" />
        </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
