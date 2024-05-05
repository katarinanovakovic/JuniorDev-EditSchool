import React, { useState } from 'react';
import axios from 'axios';
import '../styles/prijava.css'

function Prijava({ radionicaId, trenutniBrojPrijava }) {
  const [ime, setIme] = useState('');
  const [email, setEmail] = useState('');
  const [telefon, setTelefon] = useState('');
  const [prikaziHvala, setPrikaziHvala] = useState(false);
  const [prikazUnosa, postaviPrikazUnosa] = useState(false);

  const handleJoinClick = () => {
      postaviPrikazUnosa(true);
  };

  const onClose = () =>{
    postaviPrikazUnosa(false);
  }

  const handlePrijaviSeClick = () => {
    setPrikaziHvala(true);
    axios.patch(`http://localhost:3001/radionice/${radionicaId}`, {
      broj_prijava: trenutniBrojPrijava + 1
    })
    .then(response => {
      console.log('Broj prijava uspješno ažuriran:', response.data);
    })
    .catch(error => {
      console.error('Došlo je do greške prilikom ažuriranja broja prijava:', error);
    });
  };

  return (
    <div>
      <div className='button-div'>
      <button onClick={handleJoinClick} className='join-button'>Join</button>
      </div>
      {prikazUnosa && (
        <div>
      {!prikaziHvala ? (
        <div className="prijava-forma">
          <input type="text" placeholder="Ime" value={ime} onChange={e => setIme(e.target.value)} className='input-el' />
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className='input-el'/>
          <input type="tel" placeholder="Broj telefona" value={telefon} onChange={e => setTelefon(e.target.value)} className='input-el' />
          <div className='button-div'>
          <button onClick={handlePrijaviSeClick} className='join-button'>Prijavi se</button>
          </div>
        </div>
      ) : (
        <div className="hvala-poruka">
          <p>Hvala na prijavi!</p>
          <button onClick={onClose} className='join-button'>Zatvori</button>
        </div>
      )}
      </div>
      )}
    </div>
  );
}

export default Prijava;
