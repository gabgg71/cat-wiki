import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from 'react-router-dom';
import { Breed } from '../components/Breed';
import { Footer } from '../components/Footer';
import { Main } from '../components/Main';
import { Nav } from '../components/Nav';
import { fetchSinToken } from '../helpers/fetch';
import { useState } from 'react';
import { userContext } from '../hooks/userContext';
import { Top } from '../components/Top';

  export const AppRouter=()=>{
    const [breed, setBreed] = useState([]);
    window.addEventListener('load', async()=>{
      const resp = await fetchSinToken( 'https://api.thecatapi.com/v1/breeds', {});
      const body = await resp.json();
      setBreed(body);
  });

  window.onclick = e => {
    if(e.target.innerText.length >0){
      const selected = breed.filter((b) =>{
        if(b.name.toLowerCase() === e.target.innerText.toLowerCase()){
          return b.id
        }
      }
      );
      if(selected.length ===1){
        window.location.replace(`/breed/${selected[0].id}`);
      }
    }
} 
      return (
        <userContext.Provider value={{ breed, setBreed}}>
          <Router>
                  <Nav/>
                <Routes>
                      <Route exact 
                        path="/"
                        element={<Main/>}/>
                       <Route exact path='/breed/:breedId'
                       element={<Breed/>}/>
                       <Route exact path='/searched'
                       element={<Top/>}/>
                       <Route path='*'
                       element={<Main/>}/>
                </Routes>
                  <Footer/>
  
          </Router>
          </userContext.Provider>
      )
  }