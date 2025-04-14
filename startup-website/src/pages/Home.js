import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import Partnners from "../components/Partnners";
import Teaam from "../components/Teaam";
import Teamtwo from "../components/Teamtwo";
import Teamthree from "../components/Teamthree";
import Footer from "../components/Footer";
const homepage = () => {
    return ( 
        <div>
            {/* <Navbar /> */}
            <Herosection />
            <Partnners />
            <Teaam />
            <Teamtwo />
            <Teamthree />
            <Footer />
        </div>
     );
}
 
export default homepage;