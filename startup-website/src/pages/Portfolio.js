import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import landingpage from "../assets/landingpage.png";
import webdesign from "../assets/webdesign.png";
import rocketbusiness from "../assets/rocketbusiness.svg";
import shopping from "../assets/shopping.svg";
import geometricshapes from "../assets/geometricshapes.svg";
import trickortreat from "../assets/trickortreat.svg"
import halloween from "../assets/halloween.svg";
import virtualreality from "../assets/virtualreality.png";
import "./Portfolio.css";
const portfolio = () => {
    return ( 
        <section className="portfoliosec">
              {/* <Navbar /> */}
        <div className="portfolioparentDiv">
            <div className="portfoliotext">
               <h4 className="portfoliohfour">W O R K S</h4>
               <h3 className="portfoliohthree"><bold>Portfolio</bold></h3>
               <p className="portfoliopara">
                Lorem ipsum, dolor sit amet consectetur
                adipisicing elit.
                </p> 
            </div>
            <div className="portfoliopics">
                <img src={landingpage} className="landpage" alt="Landing page" />
                <img src={webdesign} className="webdesign" alt="Web design" />
                <img src={rocketbusiness} className="rocketbis" alt="Rocket business" />
                <img src={shopping} className="shopping" alt="Shopping" />
                <img src={geometricshapes} className="geometric" alt="Geometric shapes" />
                <img src={trickortreat} className="tricktreat" alt="Trick or Treat" /> 
                <img src={halloween} className="halloween" alt="Hallowen" />
                <img src={virtualreality} className="virtualreality" alt="Virtual Reality" />              
            </div>
            <button className="portfoliobutton">Learn More</button>
        </div>
        <Footer />
        </section>
    );
    

}
 
export default portfolio;