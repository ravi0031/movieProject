import Navbar from "../Navitems/NavBar";
import { APP_LOGO } from "../utils/constant";
import './Header.css';


const  Header = () => (
    <div className="head-div" >
        <div className="logo">
            <img className="log-img" src={APP_LOGO} />
        </div>
        <div className="app-root">
        <Navbar/> 
        </div>
        
    </div>
);

export default  Header;