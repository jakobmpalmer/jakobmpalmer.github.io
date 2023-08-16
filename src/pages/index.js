import * as React from "react"
import { useState, useEffect } from 'react'
import Layout from "../components/layout"

import imageOne from '../images/dan-meyers-FtXCKGIWiqM-unsplash.jpg'
import imageTwo from '../images/tim-mossholder-KW8yCmtQPvs-unsplash.jpg'
import imageThree from '../images/venti-views-KNV9W0_kRVo-unsplash.jpg'
import { Link } from 'gatsby';
import { COLOR_PALETTES}  from '../values/color'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette } from '@fortawesome/free-solid-svg-icons';

import GlobalStyles from '../components/GlobalStyles'


// import './index.module.scss'
import * as styles from './index.module.scss';

import { styled } from '@mui/system';

const Grid = styled('div')({
  display: 'grid',
  width: '100%',
  gridTemplateColumns: 'repeat(4, 1fr)',
  // justifyContent: "space-evenly",
  gap: '1vw',
});

const GridItem =styled('div')({
  flex: 1,
  maxHeight: '20vh',
  // border: '1px solid #ccc',
  // padding: '10px',  
});

const IndexPage = () => {

  const [currentPalette, setCurrentPalette] = useState('colorSetTwo');
  const colorList = Object.keys(COLOR_PALETTES)
  
  function togglePalette() {

    let randomIndex = Math.floor(Math.random() * colorList.length)
    let randomColor = colorList[randomIndex]

    setCurrentPalette(randomColor)
    
    // if (currentPalette === 'pastelColors') {
    //     setCurrentPalette('colorSetTwo');
    // } else {
    //     setCurrentPalette('pastelColors');
    // }
    document.documentElement.style.setProperty('--color-background', COLOR_PALETTES[currentPalette].color_background);
    document.documentElement.style.setProperty('--color-two', COLOR_PALETTES[currentPalette].color_two);
    document.documentElement.style.setProperty('--color-text-main', COLOR_PALETTES[currentPalette].color_text_main);
  }
  useEffect(()=>{togglePalette()},[])

  return (
    // <div className={styles.FullscreenImage}>
    <div className={styles.BackgroundContainer}>
      <div className={styles.PageContainer}>      
        <div className={styles.TitleContainer}>
          <h1 style={{textAlign: 'start', fontSize: '2.4rem', maxWidth:'50%'}}>
            Hi, Thanks for coming!          
          </h1>   
          <div style={{flexDirection: 'column'}}>
            <h3 style={{textAlign: 'end',}}>Jakob Palmer</h3>
          
            Fullstack Developer | Data Science
          </div> 
        </div>

        <div style={{position:'absolute', top: 50, right: 50}}>
          <FontAwesomeIcon onClick={togglePalette} icon={faPalette} style={{color: COLOR_PALETTES[currentPalette].color_two, width: '50px', height: '50px'}} />
        </div>
                            
        <div className={styles.PageContent}>
          <Grid>            
            <GridItem>
              <ProjectTile tileTitle={'Projects'} pageLink={'/projects'} />
            </GridItem>
            <GridItem>
              <ProjectTile tileTitle={'About'} pageLink={'/about'} />
            </GridItem>
            <GridItem>
              <ProjectTile tileTitle={'Contact'} pageLink={'/contact'} />
            </GridItem>
            <GridItem>
              <ProjectTile tileTitle={'Resume'} pageLink={'/resume'} />
            </GridItem>
          </Grid>
        </div>
        
        {/* <div styles={{border:'1px solid black', color: 'white'}}>
        <div className={styles["highlightDiv"]} style={{minHeight:'50vh'}}>
          Hover over me
          <div className={styles["highlightEffect"]}></div>
        </div>
  </div>*/}        

      </div>       
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home</title>


// const ProjectTileTwo = ({tileTitle, pageLink}) => {

  
//   return(
//     <Link to={pageLink}
//           style={{ textDecoration: 'none', color: 'inherit' }}>  
//       <div className={styles.ProjectTileContainer}>  
//         <div style={{display:'flex', flexDirection:'column', flexGrow: 1, margin: '0px auto'}}>        

//               <h4 style={{ color: 'blue' }}>{tileTitle}!</h4>
//             </div>        
//          </div>    
//       </div>
//     </Link>
//   )
// }

const ProjectTile = ({tileTitle, pageLink}) => {

  return(
    <Link to={pageLink} style={{textDecoration: 'none'}}>
      <div className={styles.SlidingTile} >  
          <p>{tileTitle}</p>            
      </div>
    </Link>
  )
}