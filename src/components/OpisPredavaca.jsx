import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import "../styles/opispredavaca.css"

function OpisPredavaca() {
  const [predavac, setPredavac] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {
    axios.get(`http://localhost:3001/predavaci?id=${id}`)
      .then((res) => {
        setPredavac(res.data[0]); 
      })
      .catch((error) => {
        console.error('Error: ', error);
      });
  }, [id]);

  if (!predavac) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <div className='instructor-main-individual'>
        <div className='instructor-container-individual'>
          <div className='first-half'>
            <img src={predavac.fotografija} alt='Slika-profila' className='instructor-photo'></img>
          </div>
          <div className='instructor-details'>
            <div className='instructor-name'>{predavac.ime}</div>
            <div className='icon-organization'>
              <i className='material-icons'>business_center</i>
              <p className='organization'> {predavac.organizacija}</p>
            </div>
            <div className='icon-mail'>
              <i className='material-icons'>email</i>
              <p className='email'> {predavac.email}</p>
            </div>
            <div className='icon-workshop'>
                <i className='material-icons'>event</i>
                <p className='instructor-workshop'> {predavac.radionica}</p>
            </div>
            <p className='biography'> {predavac.biografija}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OpisPredavaca;
