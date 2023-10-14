import './index.scss'
import emailjs from '@emailjs/browser';
import photo from '../../assets/images/Screenshot 2023-09-30 182019.png'
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom';
import Loader from 'react-loaders'
import { useRef } from 'react';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault()

    
    emailjs
    
    .sendForm("service_u8zpjjl","template_ajwqvbm",form.current, 'Yhjnj0kWN9zb_vKq_')
    
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      window.location.reload(false)
   }, function(error) {
      console.log('FAILED...', error);
   });
  }

  const myComponent = {
    width: '100%',
    height: '100%',
    overflow: 'scroll'
};
  
  
  return (
    <>
    <div className='container contact-page' style={myComponent}>
     <div class='responsive-map'>
     <div class="circular--landscape"> 
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6388.914119197348!2d3.2265150989383544!3d36.80756607906308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e4f403308444d%3A0x49aeaab6c97cde9c!2sTamentfoust%2C%20El%20Marsa!5e0!3m2!1sfr!2sdz!4v1697282152767!5m2!1sfr!2sdz&zoom=100000000" ></iframe>    </div>
    
      </div>
    
      
    <div className='text-zone3'>
                  <h1>
                      Contact Me
                  </h1>
    
                  <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                <div className='contacts'>
  <span className='icon-spacing'>
    <NavLink to='https://www.facebook.com/mazigh.djillali.5'>
      <FontAwesomeIcon icon={faFacebook} style={{ color: '#1877F2', fontSize: '2rem' }} />
    </NavLink>
  </span>
  <span className='icon-spacing'>
    <NavLink to='https://www.linkedin.com/in/mazigh-djillali-76b4a71a5/'>
      <FontAwesomeIcon icon={faLinkedin} style={{ color: '#0077B5', fontSize: '2rem' }} />
    </NavLink>
  </span>
  <span className='icon-spacing'>
    <NavLink to='https://www.instagram.com/mazigh_djillali.h5/'>
      <FontAwesomeIcon icon={faInstagram} style={{ color: '#E4405F', fontSize: '2rem' }} />
    </NavLink>
  </span>
  <span className='icon-spacing'>
    <NavLink to='https://github.com/djillalimazigh566'>
      <FontAwesomeIcon icon={faGithub} style={{ color: '#333', fontSize: '2rem' }} />
    </NavLink>
  </span>
  <input type="submit" className="flat-button" value="SEND" />

</div>
                </li>
              </ul>
            </form>
          </div>
   


    </div>
   
    </div>
    <Loader type="line-scale" />

    </>
  )
}

export default Contact;
