import './Teaam.css';
import Group2pic from '../assets/Group2pic.svg';

const team = () => {
    return ( 
        <div className="teamparentDiv">
            <div className="teampicture">
                <img src={Group2pic} className="grouptwopic" alt="Group 2 pic" />

            </div>
            <div className="picandbutton">
                <h4 className="teamhfour"><bold>Lorem ipsum dolor sit amet <br /> consectetur </bold></h4>
                <p className="teampara">
                 Lorem ipsum, dolor sit amet consectetur
                 adipisicing elit. Suscipit nemo hic quos, ab,
                  dolor aperiam nobis cum est eos error
                 ipsum, voluptate culpa nesciunt delectus iste?
                </p>
                <button className="teambutton">Learn More</button>
            </div>
        </div>
     );
}
 
export default team;