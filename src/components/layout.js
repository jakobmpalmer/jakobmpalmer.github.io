/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.module.scss"
// import { red } from "@mui/material/colors"

const Layout = ({ children }) => {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//            menuLinks {
//               name
//               link
//             }
//         }
//       }
//     }
//   `)

    const menuLinks = [    
            {
               name:'Home',
               link:'/'
            },
            {
               name:'Projects',
               link:'/projects'
            },
            {
              name:'Contact',
              link:'/contact/'
            },
            {
              name:'Resume',
              link:'/resume'
            }
          ]

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <Header menuLinks={menuLinks} />
      <div
        style={{
        //   margin: `0 auto`,
        //   maxWidth: 960,
        //   padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer className="mainFooter">
        {/* <footer> */}
          © {new Date().getFullYear()}, Built with 
          {` `}
          <a href="https://www.gatsbyjs.org"> Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
