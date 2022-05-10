import React from 'react'
import abtImg from '../assets/imgs/abtFleshimg.jpeg'
const About = () => {
  return (
    <section id='about' className='about_conteiner'>
        <div className='aboutText'>
            <p>
                KYIV, Boryspilska train station, 5 min walk. 
                Spacious studio and welcoming stuff waiting for you
            </p>
        </div>
        <div className='aboutImgCont'>
            <img src={abtImg} alt="aboutImg" />
        </div>
    </section>
  )
}

export default About