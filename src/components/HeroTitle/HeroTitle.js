import React from 'react'
import { useState } from 'react'
import { Link } from 'gatsby'

import * as styles from './HeroTitle.module.scss'
import { COLOR_PALETTES}  from '../../values/color'
import { useEffect, useRef } from 'react'


const pages= [{pageText: 'Home', pagePath: '/'}, {pageText: 'Projects', pagePath: '/projects'}, {pageText: 'Contact', pagePath:'/contact'}, {pageText: 'Resume', pagePath: '/resume'}, {pageText: 'Hobbies', projectPath:'/hobbies'}]



const HeroTitle = ({titleText}) => {

    return(
        <div>
            <div>
                <h1 style={{marginBottom: '0px', textAlign: 'center'}}>{titleText}</h1>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', maxWidth: '100%', fontSize: '1.0rem'}}>
                {/* <div>
                    <button onClick={togglePalette}>Toggle Palette</button>
                    <div className={styles.colorSwapper}>Element 1</div>
                </div> */}
                {pages.map((item, idx) => {                
                    return(
                        <Link key={idx} to={item.pagePath}                                 
                                className={styles.NavLinks}>
                            <div className={styles.NavigationItems}>
                                <li>{item.pageText}</li>
                            </div>
                            
                        </Link>
                    )
                })}     
            </div>
        </div>
    )

}

export default HeroTitle