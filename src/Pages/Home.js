import React from "react";
import { Link } from "react-router-dom";
import backgroundimage from '../assets/pizza.jpeg';
import '../Style/Home.css'
import Navbar from "../Compo/Navbar";
import Footer from "../Compo/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <div className="Home" style={{ backgroundImage: `url(${backgroundimage})` }}>

                <div className="header" >
                    <h1>Tasty pizza</h1>
                    <p>Order The Tastiest Pizza</p>
                    <Link to='/menu'><button>Order now</button></Link>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Home;
