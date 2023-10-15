import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import gdd from './gdd.png';
import plates from './PLATES.png';
import color from '../../assets/images/couleurs.jpg';
import aeroport from '../../assets/images/tour.jpg';
import black from '../../assets/images/black.jpg';
import cersit from '../../assets/images/cerist1.png';
import polypes from '../../assets/images/polype.png';
import maquette from '../../assets/images/maquette.png'
import { Link } from 'react-router-dom';
import optivisio from '../../assets/images/Screenshot 2023-07-11 150935.png'
const Portfolio = () => {
  const myComponent = {
    width: '100%',
    height: '100%',
    overflow: 'scroll',
  };

 
  return (
    <>
      <div className="container home-page2" style={myComponent}>
        <div className="text-zone2">
          <h1>My portfolio</h1>
        </div>
        <div class="portfolio">
          <div className="cont">
            <div class="portfolio-item ">
              <img id="gfg-img" src={plates} alt="Reconaissance de matricules" />
              <div className="title">Reconaissance de matricules</div>
              
              <div className="links">
              <Link to="https://github.com/djillalimazigh566/Carplates-verification"  target="_blank" className="button2">
                  Github Project
                </Link>
                </div>
            </div>
          </div>

          <div className="cont">
            <div class="portfolio-item ">
              <img id="gfg-img" src={gdd} alt="Jeux unity a l'USTHB" />
              <div className="title">Jeux unity a l'USTHB</div>
              <div className="links">
             
                <Link to="https://github.com/djillalimazigh566/GAME-GDD/blob/main/GET_OUT.pdf" className="button1" target='_blank'>
                  Game Design Document 
                </Link>
              </div>
              <div className="links">
                </div>
            </div>
          </div>

          <div className="cont">
            <div class="portfolio-item ">
              <img id="gfg-img" src={color} alt="Colorisation de videos en niveau de gris" />
              <div className="title">Colorisation de videos en niveau de gris</div>
              <div className="links">
                <Link to="https://colab.research.google.com/drive/1GF39-A4vcT5Rkhs9XLOBq0dhZWA5aFFI?authuser=2&hl=fr#scrollTo=WcSYZika8JCA" target="_blank" className="button1">
                  Demo
                </Link>
              </div>
              <div className="links">
              <Link to="https://github.com/djillalimazigh566/video-colorization" target="_blank" className="button2">
                  Github Project
                </Link>
                </div>
            </div>
          </div>

          <div className="cont">
            <div class="portfolio-item ">
              <img id="gfg-img" src={aeroport} alt="Simulation de tour de contole aerienne" />
              <div className="title">Simulation de tour de contole aerienne</div>
              
              <div className="links">

              <Link to="https://github.com/djillalimazigh566/RMI-AIRPLANE-CONTROLLER" target="_blank"className="button2">
                  Github Project
                </Link>
                </div>
            </div>
          </div>

          <div className="cont">
            <div class="portfolio-item ">
              <img id="gfg-img" src={cersit} alt="Depot documentaire pour la division R&D du CERIST" />
              <div className="title">Depot documentaire pour la division R&D du CERIST</div>
              <div className="links">
                <Link to="https://github.com/djillalimazigh566/VUE-SCREENS/blob/main/Screenshot%202023-09-30%20181940.png" target="_blank" className="button1">
                  Screenshots
                </Link>
              </div>
              <div className="links">

              <Link to="https://github.com/djillalimazigh566/VUE" target="_blank"className="button2">
                  Github Project
                </Link>
                </div> 
            </div>
          </div>

          <div className="cont">
            <div class="portfolio-item ">
              <img id="gfg-img" src={polypes} />
              <div className="title"> Detection de polypes</div>
              <div className="links">
                <Link to="https://github.com/djillalimazigh566/POLYPES2/blob/main/Rapport_tp_tai.pdf"  target='_blank' className="button1">
                  Rapport
                </Link>
              </div>
              <div className="links">

              <Link to="https://github.com/djillalimazigh566/POLYPES2/blob/main/Projet_TAI.ipynb"  target='_blank'  className="button2">
                  Github Project
                </Link>
                </div>
            </div>
          </div>

          <div className="cont">
            <div class="portfolio-item ">
              <img id="gfg-img" src={maquette} alt="Detection de polypes" />
              <div className="title">Realisation de maquettes n1</div>
              <div className="links">
              
              </div>
              <div className="links">

              <Link to="https://github.com/djillalimazigh566/Maquette/blob/main/Screenshot%202023-10-13%20123124.png" target="_blank"className="button2">
Screenshot                </Link>
                </div>

            </div>
          </div>

          <div className="cont">
            <div class="portfolio-item ">
              <img id="gfg-img" src={optivisio} alt="Detection de polypes" />
              <div className="title">Develooppement d'une interface web pour un projet de recherche operationnel </div>
              <div className="links">
              
              </div>
              <div className="links">

              <Link to="https://github.com/djillalimazigh566/Optivisio" target="_blank"className="button2">
                Screenshots                </Link>
                </div>

            </div>
          </div>
        </div>
      </div>
      <Loader type="line-scale" />
    </>
  );
};

export default Portfolio;
