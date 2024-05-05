import "../styles/radionica.css"
import Prijava from "./Prijava";
import { useState } from "react";

export default function PrikazRadionica( {radionice}){
    

    return (
        <div className="workshop-main">
        {radionice.map(r => {
            return (
                <div key={r.id} className="workshop-container">
                    <div className="polygon">
                <div className="workshop-name" >{r.ime} </div>
                <div className="workshop-opis">{r.opis}</div>
                    </div>
                <div className="workshop-body">
                    <div>date: {r.datum}</div>
                    <div>theme: {r.tema}</div>
                    <div>level of difficulty: {r.tezina}</div>
                    <div>instructor: {r.predavac}</div>
                        <div className="prijava">
                                <Prijava radionicaId={r.id} trenutniBrojPrijava={r.broj_prijava}/>
                        </div>
                </div>
                </div>
            );
        })}
        </div>
    )
}