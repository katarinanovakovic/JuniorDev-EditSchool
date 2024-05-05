import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import "../styles/instructors.css"
import OpisPredavaca from '../components/OpisPredavaca';
import { Link } from 'react-router-dom';
import SecondHomeSection from '../components/SecondHomeSection';

function Instructors() {
  const [predavaci, postaviPredavace] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/predavaci')
      .then((res) => {
        postaviPredavace(res.data);
      })
      .catch((error) => {
        console.error('Error: ', error);
      });
  }, []);

  return (
    <>
    <Navbar />
    <div className='instructor-main'>
      {predavaci ? (
        predavaci.map((r) => (
            <div key={r.id} className='instructor-container'>
              <div className='first-half'>
                <img src={r.fotografija} alt='Slika-profila' className='instructor-photo'></img>
              </div>
              <div className='instructor-details'>
                <div className='instructor-name'>{r.ime}</div>
                <div className='icon-organization'>
                  <i className='material-icons'>business_center</i>
                  <p className='organization'> {r.organizacija}</p>
                </div>
                <div className='icon-mail'>
                  <i className='material-icons'>email</i>
                  <p className='email'> {r.email}</p>
                </div>
                <div className='icon-workshop'>
                  <i className='material-icons'>event</i>
                  <p className='instructor-workshop'> {r.radionica}</p>
                </div>
                <Link to={`/instructors/${r.id}`} state={r} className='see-more'>See more</Link>
              </div>
            </div>
          
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
    <SecondHomeSection />
    </>
  );
}

export default Instructors;