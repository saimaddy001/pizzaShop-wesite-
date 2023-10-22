import React from "react";
import '../Style/Footer.css'
import Instagram from '@mui/icons-material/Instagram';
import Facebook from '@mui/icons-material/Facebook';
import Twitter from '@mui/icons-material/Twitter';



function Footer(){
    return(
        <div className="footer">
            <div className="socialmedia">
                <Instagram /> 
                <Facebook />
                <Twitter />
            </div>
            <p> &copy; 2023 www.pizza.com</p>
        </div>
        

    )
}

export default Footer;