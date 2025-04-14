import CEOpic from '../assets/CEOpic.png';
import CTOpic from '../assets/CTOpic.png';
import designerpic from '../assets/designerpic.png';
import developerpic from '../assets/developerpic.png';
import './Teamthree.css';



const teamthree = () => {
    return ( 
        <div className="teamthreeparentDiv">
            <div className="text">
                <h4 className="teamthreehfour">T E A M</h4>
                <h3 className="teamthreehthree">Our Talents</h3>
                <p className="teamthreepara">
                Lorem ipsum, dolor sit amet 
                consectetur <br /> <br />
                adipisicing elit.
                </p>
            </div>
            <div className="teammembers">
                <img src={CEOpic} className="ceopic" alt="CEO pic" />
                <img src={CTOpic} className="ctopic" alt="CTO pic" />
                <img src={designerpic} className="designerpic" alt="designer pic" />
                <img src={developerpic} className="developerpic" alt="developer pic" />
            </div>
            <button className="teamthreebutton">View Team</button>
        </div>
     );
}
 
export default teamthree;