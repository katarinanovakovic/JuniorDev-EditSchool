import Navbar from "../components/Navbar";
import "../styles/navbar.css"
import "../styles/home.css"
import Button from "../components/Button";
import SecondHomeSection from "../components/SecondHomeSection";
import { useState } from "react";

function Home({admin, handleToggleAdmin}){

    return (
    <>
        <Navbar admin= {admin} />
        <div className="admin-checkbox">
                <label>
                    <input className="admin-input" type="checkbox" onChange={handleToggleAdmin} />
                    admin
                </label>
        </div>
        <div className="main-container">
            <div className="main-text">
                <div className="main-text-left">
                <h1 className="home-title">Welcome to</h1>
                <h1 className="home-site-name">edit school</h1>
            <h2 className="h2-home"> A place where programming dreams come true!</h2>
                At Edit School, we are especially dedicated to the development of both beginners and experienced programmers. 
                Whether you're just starting out on your coding journey or looking to hone your skills, our wide range of courses are tailored to suit all skill levels. 
                <div className="go-button">
                <Button to="/workshops" text="TRY NOW"/>
                </div>
                </div>
                <div className="main-text-right">
                    <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_23-2149365021.jpg?t=st=1714234183~exp=1714237783~hmac=b173376debe60ae653a40f69662a8c1a02ff1c1c3346c0c890e921ea0b44dae1&w=740"></img>
                </div>
            </div>
        </div>
        <SecondHomeSection />
    </>
)
}
export default Home;