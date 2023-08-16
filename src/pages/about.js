import React from "react";
import HeroTitle from '../components/HeroTitle/HeroTitle';

import * as globalStyles from '../components/styles/global.module.scss'
import * as styles from '../components/styles/about.module.scss'

import profileImage from '../images/me.png'

const AboutPage = () => { 

    return(
        // <div className={styles.FullscreenImage}>
        <div className={globalStyles.BackgroundContainer}>
            <div styles={{width: '80%', }} >
                <div style={{ color: 'white', margin: '0px auto' }}> 
                    <HeroTitle titleText={'About'} />
                </div>

                <div className={styles.aboutContent}>
                    <div style={{ flexGrow: 1, maxWidth: '50%' }}>
                        <p>Hi! My name is Jake</p>
                        <p style={{fontSize: '1.0rem'}}>I am a freelance software developer with a passion for innovation and data. I honed my skills at Willamette University, then spent three dynamic years assisting startups and small businesses, crafting practical software solutions that fueled their growth. Currently, I'm immersed in a Data Science certificate program at the UC Berkeley Extention School, driven by my belief in the transformative power of data-driven insights. 
                        <p style={{fontSize: '1.0rem'}}>My portfolio showcases projects that reflect my dedication and creativity, from streamlining operations with software applications to unveiling hidden patterns through data analysis. With an unwavering commitment to excellence and a thirst for continuous learning, I'm dedicated to pushing boundaries and contributing to the ever-evolving landscape of technology and data. Let's connect and explore how we can collaborate to create innovative solutions.</p></p>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src={profileImage} styles={{borderRadius: '50px'}} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;
