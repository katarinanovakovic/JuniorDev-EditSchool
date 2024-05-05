import React, { useState, useEffect, useContext } from 'react';
import Navbar from "../components/Navbar";
import axios from 'axios';
import PrikazRadionica from "../components/PrikazRadionica";
import "../styles/workshop.css"
import SecondHomeSection from '../components/SecondHomeSection';

function Workshop() {
    const [radionice, postaviRadionice] = useState([]);
    const [filtriraneRadionice, postaviFiltriraneRadionice] = useState([]);
    const [aktivanBtn, postaviAktivanBtn] = useState("all")
    
    useEffect(() => {
        axios.get("http://localhost:3001/radionice/")
            .then(res => {
                postaviRadionice(res.data);
                postaviFiltriraneRadionice(res.data); 
            })
            .catch(err => console.error(err));
    }, []);

    const handleBtns = (tema) => {
         
        if(tema === "all"){
          postaviFiltriraneRadionice(radionice)
        }
        else if(tema === "react") {
          const filtered = radionice.filter(item=>item.tema === "react");
          postaviFiltriraneRadionice(filtered)
        }
        else if(tema === "express") {
          const filtered = radionice.filter(item=>item.tema === "express");
          postaviFiltriraneRadionice(filtered)
        }
        else if(tema === "node.js") {
            const filtered = radionice.filter(item=>item.tema === "node.js");
            postaviFiltriraneRadionice(filtered)
        }
        else if(tema === "python") {
            const filtered = radionice.filter(item=>item.tema === "python");
            postaviFiltriraneRadionice(filtered)
        }
          else if(tema === "php") {
            const filtered = radionice.filter(item=>item.tema === "php");
            postaviFiltriraneRadionice(filtered)
        }
        
postaviAktivanBtn(tema)      
}

const prikaziUnos = () => {
    setUnos(true);
};

const sakrijUnos = () => {
    setUnos(false);
};

    return (
        <>
            <Navbar />
                <div className="workshop-filter">
                <button className={aktivanBtn === "all" ? "aktivan" : "filter-button"} onClick={() => handleBtns("all")}>All</button>
                <button className={aktivanBtn === "react" ? "aktivan" : "filter-button"} onClick={() => handleBtns("react")}>React</button>
                <button className={aktivanBtn === "express" ? "aktivan" : "filter-button"} onClick={() => handleBtns("express")}>Express</button>
                <button className={aktivanBtn === "node.js" ? "aktivan" : "filter-button"} onClick={() => handleBtns("node.js")}>Node.js</button>
                <button className={aktivanBtn === "python" ? "aktivan" : "filter-button"} onClick={() => handleBtns("python")}>Python</button>
                <button className={aktivanBtn === "php" ? "aktivan" : "filter-button"} onClick={() => handleBtns("php")}>PHP</button>
                </div>
                <div className="radionice">
                    <PrikazRadionica radionice={filtriraneRadionice} />
                </div>
            <SecondHomeSection />
        </>
    );
}

export default Workshop;
