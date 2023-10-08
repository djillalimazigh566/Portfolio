import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import gdd from'./gdd.png'
import plates from './PLATES.png'
import color from '../../assets/images/couleurs.jpg'
import aeroport from '../../assets/images/tour.jpg'
import black from '../../assets/images/black.jpg'
import cersit from '../../assets/images/cerist1.png'
import polypes from '../../assets/images/polype.png'

const Portfolio = () => {

  const myComponent = {
    width: '100%',
    height: '100%',
    overflow: 'scroll'
};
  return (
    <>

    
<div className='container home-page2' style={myComponent}>
          <div className='text-zone2'>
                      <h1>My portfolio</h1>
                </div>
            <div class="portfolio">
              
              <div className='cont'>
                <div class="portfolio-item  "> 
                  <img id="gfg-img" src={plates}></img>
                  <div className='title'> Reconaissance de matricules</div>
                </div> 
              </div>

              <div className='cont'>
                <div class="portfolio-item  "> 
                  <img id="gfg-img" src={gdd}></img>
                </div> 
                <div className='title'> Jeux unity a l'USTHB</div>
              </div> 

              <div className='cont'>
                <div class="portfolio-item  "> 
                  <img id="gfg-img"src={color}></img>
                </div> 
                <div className='title'> Colorisation de videos en niveau de gris </div>
              </div>

              <div className='cont'>
                <div class="portfolio-item  "> 
                  <img id="gfg-img"src={aeroport}></img>
                </div> 
                <div className='title'> Simulation de tour de contole aerienne </div>
              </div>

              <div className='cont'>
                <div class="portfolio-item  "> 
                  <img id="gfg-img"src={black}></img>
                </div> 
              </div>

              <div className='cont'>
                <div class="portfolio-item  "> 
                  <img id="gfg-img"src={cersit}></img>
                </div> 
                <div className='title'> Depot documentaire pour la division R&D du CERIST</div>
              </div>

              <div className='cont'>
                <div class="portfolio-item  "> 
                  <img id="gfg-img"src={polypes}></img>
                </div> 
                <div className='title'> Detection de polypes</div>
              </div>

              


            </div>
      
      
      
           
    </div>
    <Loader type="line-scale" />
    </>
  )
}

export default Portfolio
