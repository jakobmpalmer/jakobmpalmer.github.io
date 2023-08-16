import * as React from "react"
import Layout from '../components/layout'
import * as styles from './contact.module.scss'

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#00cc36",
  
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}


const IndexPage = () => {
  return (
    <main style={pageStyles}>
    <Layout>
      <h1 style={headingStyles}>
        Contact
        <br />
        <span style={headingAccentStyles}>— you just made a Gatsby site! 🎉🎉🎉</span>
      </h1>
      <p style={paragraphStyles}>
        Edit <code style={codeStyles}>src/pages/index.js</code> to see this page
        update in real-time. 😎
      </p>  

      <div>
      {/* https://www.youtube.com/watch?v=UD-F3sWMk78&t=454s */}
        <a href="#" className={styles.button}>Animating Gradient</a>
      </div>

      </Layout>    
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Contact</title>
