import './Herosection.css'
import Group from '../assets/Group.png';
import { useState } from "react";
import { motion } from "framer-motion";

const Herosection = () => {
    const [buttonColor, setButtonColor] = useState("white");
    const handleClick = () => {
        setButtonColor(buttonColor === "blue" ? "white" : "blue");
    };
    return ( 
        <section>
            <div className="herosec">
                <div className="groupdiv">
                    <motion.img 
                        src={Group} 
                        className='group' 
                        alt="Group pic"
                        initial={{ opacity: 0, y: -50 }} // Starts faded & moves down
                        animate={{ opacity: 1, y: 0 }}  // Fades in & moves into position
                        transition={{ duration: 1, ease: "easeOut" }} // Smooth animation
                        whileHover={{ scale: 1.1 }} // Slight zoom on hover
                    />
                </div>
                <div className="groupseconddiv">
                    <h5 className="welcome">W E L C O M E</h5>
                    <h3 className="herosechthree">Lorem ipsum dolor sit amet consectetur</h3>
                    <p className="herosecpara">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                </div>
                
            </div>
            <button className="herosecbutton"  style={{ backgroundColor: buttonColor, color: "black" }} onClick={handleClick}>Explore</button>
        </section>
     );
}
 
export default Herosection;