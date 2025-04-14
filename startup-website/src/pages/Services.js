import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import tick from "../assets/tick.png";
import "./Services.css";
const services = () => {
    return ( 
    <div className="servicesparentDiv">
            {/* <Navbar /> */}
            <div className="servicestext">
                <h5 className="serviceshfour">P L A N S</h5>
                <h3 className="serviceshthree">Our Services</h3>
                <p className="servicespara">
                Lorem ipsum, dolor sit amet <br />consectetur <br />
                adipisicing elit.
                </p>
            <div className="cards">
                 <div className="servicefirstcard">
                   <h6 className="servicebasic">Basic</h6>
                   <p className="hundreddollar"><bold>$100</bold>/month</p>
                   <p className="hundreddollarpara">
                   Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Suscipit 
                    nemo hic quos, ab, dolor aperiam
                   </p>
                   <br /><br />
                   <p className="hundreddollarlist">
                    <ul>
                   <li><img src={tick} alt="" /> <p className="imgtext">Lorem ipsum, dolor sit</p> </li>
                   <li><img src={tick} alt="" /> <p className="imgtext">Lorem ipsum, dolor sit</p> </li>
                   <li><img src={tick} alt="" /> <p className="imgtext">Lorem ipsum, dolor sit</p></li>
                   <li><img src={tick} alt="" /> <p className="imgtext">Lorem ipsum, dolor sit</p></li>
                   <li><img src={tick} alt="" /> <p className="imgtext">Lorem ipsum, dolor sit</p></li>
                   </ul>
                   </p>
                   <button className="servicefirstcardbutton">Learn More</button>
                </div>
                <div className="servicesecondcard">
                   <h6 className="servicebasic">Plus</h6>
                   <p className="hundreddollar"><bold>$250</bold>/month</p>
                   <p className="hundreddollarpara">
                   Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Suscipit 
                    nemo hic quos, ab, dolor aperiam
                   </p>
                   <br /><br />
                   <p className="hundreddollarlist">
                    <ul>
                   <li><img src={tick} alt="" /> <p className="imgtext">Lorem ipsum, dolor sit</p> </li>
                   <li><img src={tick} alt="" /> <p className="imgtext">Lorem ipsum, dolor sit</p> </li>
                   <li><img src={tick} alt="" /> <p className="imgtext">Lorem ipsum, dolor sit</p></li>
                   <li><img src={tick} alt="" /> <p className="imgtext">Lorem ipsum, dolor sit</p></li>
                   <li><img src={tick} alt="" /> <p className="imgtext">Lorem ipsum, dolor sit</p></li>
                   </ul>
                   </p>
                   <button className="secondservicecardbutton">Learn More</button>
                </div>
                <div className="servicethirdcard">
                   <h6 className="servicebasic">Pro</h6>
                   <p className="hundreddollar"><bold>$400</bold>/month</p>
                   <p className="hundreddollarpara">
                   Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Suscipit 
                    nemo hic quos, ab, dolor aperiam
                   </p>
                   <br /><br />
                   <p className="hundreddollarlist">
                    <ul>
                   <li><img src={tick} alt="" /> <p className="imgtext">Lorem ipsum, dolor sit</p> </li>
                   <li><img src={tick} alt="" /> <p className="imgtext">Lorem ipsum, dolor sit</p> </li>
                   <li><img src={tick} alt="" /> <p className="imgtext">Lorem ipsum, dolor sit</p></li>
                   <li><img src={tick} alt="" /> <p className="imgtext">Lorem ipsum, dolor sit</p></li>
                   <li><img src={tick} alt="" /> <p className="imgtext">Lorem ipsum, dolor sit</p></li>
                   </ul>
                   </p>
                   <button className="servicecardbutton">Learn More</button>
                </div>
            </div>
        </div>
            <Footer />
   </div>
     );
}
 
export default services;