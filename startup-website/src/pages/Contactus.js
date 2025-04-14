import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contactus from "./Contactus.css";
import Map from "../components/Map";
import { useState } from "react";
const Contact = () => {
    const  [formData, setFormData] = useState ({
        name: "",
        email: "",
        message: ""
    });

    const [showPopup, setShowPopup] = useState(false);


    const handleInputChange =(event) => {
        const {id, value} = event.target;
        setFormData ({
            ...formData,
            [id]:value
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted ", formData);

        
        setShowPopup(true);



        setFormData ({
            name: "",
            email: "",
            message: ""
        });

        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
    };

    return ( 
        <div className="contactparentDiv">
            {/* <Navbar /> */}
            <div className="contact">
                <h4 className="contactushfour">Contact Us</h4>
                <p className="contactuspara">
                    Lorem ipsum, dolor sit amet <br />consectetur <br />
                    adipisicing elit.
                </p>
            </div>
            <div className="both">
                <div className="geolocation">
                    <Map />
                </div>
                <div className="contactinfo">
                    <form onSubmit={handleSubmit}>
                        <label for="name">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            value={formData.name}
                            onChange={handleInputChange}
                            requried
                        />
                        <label for="email">Email</label>
                        <input 
                            type="email" 
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                        <label for="message">Message</label>
                        <input 
                            type=" text" 
                            className="messageinput" 
                            id="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                        />
                        <button type="submit" className="contactusbutton"> Submit </button>
                    </form>

                    {showPopup && (
                        <div className="popup-message">
                            Form Submitted Successfully! ✅
                        </div>
                    )}
                    
                </div>
            </div>
            
            <Footer />
        </div>
     );
}
 
export default Contact;

