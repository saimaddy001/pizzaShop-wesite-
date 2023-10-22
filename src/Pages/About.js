import React from "react";
import Footer from "../Compo/Footer";
import Navbar from "../Compo/Navbar";
import image from "../assets/multiplePizzas.jpeg"
import '../Style/About.css'

function About(){
    return(
        <>
        <Navbar />
        <div className="About">
            <div className="AboutTop"  style={{ backgroundImage: `url(${image})` }}></div>
            <div className="AboutBottom">
                <h1>About us</h1>
                <p>Welcome to Pizza Shop, your neighborhood's favorite destination for delicious pizza! We take pride in serving the finest, mouthwatering pizzas crafted with the freshest ingredients, a touch of culinary expertise, and a whole lot of love.

                Our journey started with a simple idea: to create the perfect pizza that would leave a lasting memory on your taste buds. What began as a small, family-owned pizzeria has now grown into a beloved establishment, cherished by the community for its exceptional food and friendly service.
                </p>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default About;