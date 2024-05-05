import axios from "axios";
import { useState, useEffect } from "react";
import '../styles/administration.css'

export default function AddInstructor(){
    const [instructorAdded, setInstructorAdded] = useState(false);
    const [noviPredavac, postaviNoviPredavac] = useState(false)
    const [podatciPredavac, postaviPodatkePredavac] = useState({
        id: "",
        ime: "",
        zanimanje: "",
        radionica: "",
        organizacija: "",
        email: "",
        fotografija: ""
    })


function obradiPodatke(objekt){
    return {
            "id": objekt.ime,
            "ime": objekt.ime,
            "zanimanje": objekt.zanimanje,
            "radionica": objekt.radionica,
            "organizacija": objekt.organizacija,
            "email": objekt.email,
            "fotografija": objekt.fotografija

    }
}

const saljiPredavace = event => {
    event.preventDefault();
    console.log (podatciPredavac);

    const zaSlanje = obradiPodatke(podatciPredavac);

axios.post("http://localhost:3001/predavaci", zaSlanje)
.then(rez => {
    postaviPodatkePredavac({
        ime: "",
        zanimanje: "",
        radionica: "",
        organizacija: "",
        email: "",
        fotografija: "" 
    });
    setInstructorAdded(true);
    setTimeout(() => {
        setInstructorAdded(false);
    }, 3000);
})
}
const prikaziUnos = () => {
    postaviNoviPredavac(true);
};

const sakrijUnos = () => {
    postaviNoviPredavac(false);
};

function promjenaUlaza(event) {
    const { name, value } = event.target;
    postaviPodatkePredavac({ ...podatciPredavac, [name]: value });
  }

  return (
    <>
    <div className="add-workshop">
    <h1>NEW INSTRUCTOR</h1>
    <form onSubmit={saljiPredavace}>
        <input className="adm-input" type="text" placeholder="Name" name="ime" value={podatciPredavac.ime} onChange={promjenaUlaza} />
        <input className="adm-input"  type="text" placeholder="Profession" name="zanimanje" value={podatciPredavac.zanimanje} onChange={promjenaUlaza} />
        <input className="adm-input"  type="text" placeholder="Workshop" name="radionica" value={podatciPredavac.radionica} onChange={promjenaUlaza} />
        <input className="adm-input"  type="text" placeholder="Organization" name="organizacija" value={podatciPredavac.organizacija} onChange={promjenaUlaza}/>
        <input className="adm-input"  type="text" placeholder="Email" name="email" value={podatciPredavac.email} onChange={promjenaUlaza}/>
        <input className="adm-input"  type="text" placeholder="Photo link " name="fotografija" value={podatciPredavac.fotografija} onChange={promjenaUlaza}/>
        <button  className="adm-button" type='submit'>ADD INSTRUCTOR</button>
    </form>
    {instructorAdded && <p>INSTRUCTOR ADDED</p>}
</div>

    </>
)
}