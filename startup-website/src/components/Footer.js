import './Footer.css';
import facebookicon from '../assets/facebookicon.png';
import instagramnew from '../assets/instagramnew.svg';
import pinteresticon from '../assets/pinteresticon.png';
import tiktokicon from '../assets/tiktokicon.png';
import twittericon from '../assets/twittericon.png';
import youtubeicon from '../assets/youtubeicon.png';
import whatsappicon from '../assets/whatsappicon.svg';
import footerlogo from '../assets/footerlogo.png';

const footer = () => {
    return ( 
        <div className="footerparentDiv">
            <div className="socialicons">
                <img src={facebookicon} className="facebookicon" alt="facebook icon" />
                <img src={instagramnew} className="instagramicon" alt="instagram icon" />
                <img src={pinteresticon} className="pinteresticon" alt="pinterest icon" />
                <img src={tiktokicon} className="tiktokicon" alt="tiktok icon" />
                <img src={twittericon} className="twittericon" alt="twitter icon" />
                <img src={youtubeicon} className="youtubeicon" alt="youtube icon" />
                <img src={whatsappicon} className="whatsappicon" alt="whatsapp icon" />
            </div>
            <img src={footerlogo} className="footerlogo" alt="footer logo" />
        </div>
     );
}
 
export default footer;