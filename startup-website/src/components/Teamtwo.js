import './Teamtwo.css';
import manoncouch from '../assets/manoncouch.png';

const teamtwo = () => {
    return ( 
        <div className="teamtwoparentDiv">
            <div className="mancouch">
                <img src={manoncouch} className="manoncouch" alt="man on couch pic" />
            </div>
            <div className="teamtwoparagraph">
                <h4 className="teamtwohfour"><bold>Lorem ipsum dolor sit amet consectetur </bold></h4>
                <p className="teamtwopara">
                Lorem ipsum, dolor sit amet consectetur <br />
                 adipisicing elit. Suscipit nemo hic quos, ab,
                  dolor aperiam nobis cum est eos error 
                  ipsum, voluptate culpa nesciunt delectus
                  iste?
                </p>
                <button className="teamtwobutton">Learn More</button>
            </div>

        </div>
     );
}
 
export default teamtwo;