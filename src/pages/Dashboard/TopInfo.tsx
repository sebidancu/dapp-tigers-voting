/* eslint-disable prettier/prettier */
import * as React from 'react';



const TopInfo = () => {
  return (

    <div className='row justify-content-center'>
        <div className='bs col-md-3 m-5'>
          <img src='https://i.imgur.com/JwIGHa2.png' style={{width:'100%'}}></img>
          <div className="container">
              <h3 style={{color: 'white', fontFamily: 'Cinzel'}}>Voturi: 26</h3>
          </div>
        </div>

        <div className='bs col-md-3 m-5'>
          <img src='https://i.imgur.com/rHoxytF.png' style={{width:'100%'}} />
          <div className="container">
              <h3 style={{color: 'white', fontFamily: 'Cinzel'}}>Voturi: 26</h3>
          </div>
        </div>

        <div className='bs col-md-3 m-5'>
        <img src='https://i.imgur.com/C1OlVZV.png' style={{width:'100%'}}/>
        <div className="container">
              <h3 style={{color: 'white', fontFamily: 'Cinzel'}}>Voturi: 26</h3>
          </div>
        </div> 
        
    </div>
  );

};

export default TopInfo;
