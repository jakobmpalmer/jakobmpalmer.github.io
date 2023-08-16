import { useState, useEffect } from 'react'
import { COLOR_PALETTES}  from '../values/color'

const GlobalStyles = () => {
    const [currentPalette, setCurrentPalette] = useState('colorSetTwo');
    function togglePalette() {       
      if (currentPalette === 'pastelColors') {
          setCurrentPalette('colorSetTwo');
      //     document.documentElement.style.setProperty('--color-background', COLOR_PALETTES.pastelColors.color_background);
      //     document.documentElement.style.setProperty('--color-two', COLOR_PALETTES.pastelColors.color_two);
      //     console.log('click: Two')
      } else {
          setCurrentPalette('pastelColors');
      //     document.documentElement.style.setProperty('--color-background', COLOR_PALETTES.colorSetTwo.color_background);
      //     document.documentElement.style.setProperty('--color-two', COLOR_PALETTES.colorSetTwo.color_two);
      //     console.log('click: pastel')
      }
      document.documentElement.style.setProperty('--color-background', COLOR_PALETTES[currentPalette].color_background);
      document.documentElement.style.setProperty('--color-two', COLOR_PALETTES[currentPalette].color_two);
      document.documentElement.style.setProperty('--color-text-main', COLOR_PALETTES[currentPalette].color_text_main);
    }
    useEffect(()=>{togglePalette()},[])
}

export default GlobalStyles