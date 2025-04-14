import { useState } from 'react';
import './Partnners.css';
import googlepic from '../assets/googlepic.svg';
import microsoftpic from '../assets/microsoftpic.svg';
import airbnbpic from '../assets/airbnbpic.png';
import facebookpic from '../assets/facebookpic.svg';
import spotifypic from '../assets/spotifypic.svg';
const Partners = () => {
    const [hoverColor, setHoverColor] = useState(false);

    const handleClick = () => {
        setHoverColor(!hoverColor);
    };
    return (
     <div className="partnersparentDiv">
        <h5>P A R T N E R S</h5>
        <h3><bold>Lorem Ipsum Dolor </bold></h3>
        <p className='partnerspara'>
            Lorem ipsum, dolor sit amet <br /> consectetur <br />
            adipisicing elit.
        </p>
        <div className="partners">
            <img src={googlepic} className='goolepic' alt="googlepic" />
            <img src={microsoftpic} className='microsoftpic' alt="microsoftpic" />
            <img src={airbnbpic} className='airbnbpic' alt="airbnbpic" />
            <img src={facebookpic} className='facebookpic' alt="facebookpic" />
            <img src={spotifypic} className='spotifypic' alt="spotifypic" />
        </div>
        <button className="partnersbutton" onClick={handleClick}
                style={{
                    backgroundColor: "black",
                    color: "white",
                    transition: "background-color 0.3s, color 0.3s",
                }}
                onMouseEnter={(e) => {
                    if (hoverColor) {
                        e.target.style.backgroundColor = "white";
                        e.target.style.color = "black";
                    }
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "black";
                    e.target.style.color = "white";
                }}>
                    Learn More</button>
    </div>
    );
}
 
export default Partners;