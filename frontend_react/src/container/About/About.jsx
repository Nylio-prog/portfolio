import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';

import './About.scss';

const abouts = [
  { title: 'Web development', description: 'I am a good web developer.', imgUrl: images.about01},
  { title: 'Front end', description: 'I am a good web developer.', imgUrl: images.about02},
  { title: 'Back End', description: 'I am a good web developer.', imgUrl: images.about03},
  { title: 'AI', description: 'I am a good web developer.', imgUrl: images.about04},
]

const About = () => {
  return (
    <>
    <h2 className='head-text'>I Know That <span> Good development</span><br /> means<span> Good business</span>
    </h2>

    <div className='app__profiles'>
      {abouts.map((about, index) => (
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className='app__profile-item'
          key={about.title + index}
        >
          <img src={about.imgUrl} alt={about.title}/>
          <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
          <h2 className='bold-text' style={{marginTop: 10}}>{about.description}</h2>
        </motion.div>
      ))}
    </div>
    </>
  )
}

export default About