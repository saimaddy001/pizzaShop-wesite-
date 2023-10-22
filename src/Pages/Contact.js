import React from "react";
import image from "../assets/pizzaLeft.jpg"
import Footer from "../Compo/Footer";
import Navbar from "../Compo/Navbar";
import "../Style/Contact.css"

function Contact(){
    return(
        <>
        <Navbar/>
        <div className="contact">
            <div className="leftSide"  style={{ backgroundImage: `url(${image})` }} ></div>
            <div className="rightSide">
                <h1>Contact us</h1>
                <form id="contact-form" method="POST">
                 <label htmlFor="name">Full Name</label>
                <input name="name" placeholder="Enter full name..." type="text" />
                <label htmlFor="email">Email</label>
                     <input name="email" placeholder="Enter email..." type="email" />
                <label htmlFor="message">Message</label>
                <textarea
             rows="6"
             placeholder="Enter message..."
             name="message"
             required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
            </div>
        </div>
        <Footer />
        </>

    )
}

export default Contact;