import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo--m.jpg'
import Logo from './Logo'
import Loader from 'react-loaders'

import './index.scss'
import {
  faPython,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faGit,
  faOpenid,
  faUbuntu,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['M', 'a', 'z', 'i', 'g', 'h']
  const jobArray = [
    'c',
    'o',
    'm',
    'p',
    'u',
    't',
    'e',
    'r',
    ' ',
    'v',
    'i',
    's',
    'i',
    'o',
    'n',
    ' ',
    'e',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r'
  ]

  useEffect(() => {
    const timerId = setTimeout(() => {
        setLetterClass('text-animate-hover');
    }, 4000);

    return () => {
        clearTimeout(timerId); // Clear the timeout when the component unmounts
    };
}, []);


  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <span> </span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          <Link to="/portfolio" className="flat-button">
            MY WORKS
          </Link>
        </div>
       

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faHtml5} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGit} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faUbuntu} color="#EC4D28" />
            </div>
        </div>
        </div>
        
      </div>
      <Loader type="line-scale" />
      
    </>
  )
}

export default Home
