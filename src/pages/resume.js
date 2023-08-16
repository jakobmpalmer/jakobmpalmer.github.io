import React from "react";
import HeroTitle from '../components/HeroTitle/HeroTitle';

import * as styles from '../components/styles/global.module.scss'

import Resume from '../images/JakobMPalmer_Resume.pdf'

const ResumePage = () => { 

    return(
        // <div className={styles.FullscreenImage}>
        <div className={styles.BackgroundContainer}>
            <div style={{ color: 'white', margin: '0px auto' }}> 
                <HeroTitle titleText={'Resume'} />
            </div>

            <div style={{ margin: '0px auto' }}>
                <iframe
                    src={`${Resume}#toolbar=0`}
                    title="Resume"
                    width="100%"
                    height="600px"
                    style={{
                        border: 'none',  // Optional: Remove iframe border
                        maxWidth: '85%', // Ensure the iframe doesn't exceed screen width
                        minHeight: '80vh',
                        margin: '0px auto',
                        paddingTop: '25px'
                    }}
                />
            </div>
        </div>
    )
}

export default ResumePage;
