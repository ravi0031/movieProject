import { Link } from "react-router";
import './Navbar.css';
   


const Navbar = () => (
   <div className="nav-items">
    <ul>
        <li>
            <Link to="/home">Popular</Link>
        </li>
        <li>
            <Link to="/toprated">Top Rated</Link>
        </li>
        <li>
            <Link to="/upcoming">Upcoming</Link>
        </li>
    </ul>
   </div>
);

export default Navbar;