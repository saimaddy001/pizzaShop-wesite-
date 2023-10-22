import React,{useState} from "react";
import logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import "../Style/Navbar.css"
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {

    const [openLinks, setopenLinks] = useState(false)

    const toggleNavbar = ( ) =>{
        setopenLinks(!openLinks)
    }

    return (
        <div className="Navbar">
            <div className="leftSide" id={openLinks ? "open" : "closed"}>
                <img src={logo} alt="Logo" />
                <div className="hiddenLinks">

                </div>
            </div>
            <div className="rightSide">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About us</Link>
                <Link to="/contact">Contact</Link>
                <button onClick={toggleNavbar}> <ReorderIcon /> </button> 
            </div>
        </div>
    );
}

export default Navbar;
