import axios from "axios";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import '../styles/administration.css'
import AddInstructor from "../components/AddInstructor";
import SecondHomeSection from "../components/SecondHomeSection";


function Administration(){
    const [unos, setUnos] = useState(true)
    const [tezine, postaviTezine] = useState([])
    const [radionice, postaviRadionice] = useState([])
    const [formaPodaci, postaviPodatke] = useState({
        id: "",
        ime: "",
        datum : "",
        predavac: "",
        tema: "",
        tezina: "",
        opis: "",
        broj_prijava: 0
    })
    
    useEffect(() => {
        axios.get("http://localhost:3001/tezine")
            .then(rez => postaviTezine(rez.data))
            .catch(err => console.log(err.message));
    }, []);

    function obradiPodatke(objekt){
        return {
                "id": objekt.ime,
                "ime": objekt.ime,
                "datum": objekt.datum,
                "predavac": objekt.predavac,
                "tema": objekt.tema,
                "tezina": objekt.tezina,
                "opis": objekt.opis,
                "broj_prijava": objekt.broj_prijava
            
        }
    }
    const saljiPodatke = event => {
        event.preventDefault();
        console.log (formaPodaci);

        const zaSlanje = obradiPodatke(formaPodaci);

    axios.post("http://localhost:3001/radionice", zaSlanje)
    .then(rez => console.log(rez))
    }



    function promjenaUlaza(event) {
        const { name, value } = event.target;
        postaviPodatke({ ...formaPodaci, [name]: value });
      }

      useEffect(() => {
        axios.get("http://localhost:3001/radionice/")
            .then(res => {
                postaviRadionice(res.data);
                
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <>
        <Navbar />
        <div className="administration-layout">
            <div className="prikaz-br-prijava">
                <h2 className="admin-title">NUMBER OF REGISTRATIONS</h2>
            {radionice.map(r => {
                return (
                    <div className="ime-broj">{r.ime}: {r.broj_prijava} </div>

                )
            })}
            </div>
        <div className="add-workshop">
        <h1>NEW WORKSHOP</h1>
        
        <form onSubmit={saljiPodatke}>
            <input className="adm-input" type="text" placeholder="Name" name="ime" value={formaPodaci.ime} onChange={promjenaUlaza} />
            <input className="adm-input"  type="text" placeholder="Date" name="datum" value={formaPodaci.datum} onChange={promjenaUlaza} />
            <input className="adm-input"  type="text" placeholder="Instructor" name="predavac" value={formaPodaci.predavac} onChange={promjenaUlaza} />
            <input className="adm-input"  type="text" placeholder="Thema" name="tema" value={formaPodaci.tema} onChange={promjenaUlaza}/>
            <input className="adm-input"  type="text" placeholder="Description" name="opis" value={formaPodaci.opis} onChange={promjenaUlaza}/>
            <select className="adm-select" name="tezina" value={formaPodaci.tezina} onChange={promjenaUlaza}>
                <option className="izbornik" value=''>--difficulty level--</option>
                {tezine.map(t => (
                    <option key={t.id} value={t.ime}>
                        {t.ime}
                    </option>
                ))}
        </select>
            <button  className="adm-button" type='submit'>ADD WORKSHOP</button>
        </form>
    </div>
    <AddInstructor />
    </div>
    <SecondHomeSection />
    </>
   )
}
export default Administration;