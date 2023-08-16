import React from 'react';
//import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from "../../components/layout" 

// import GitLogo from "../../src/images/logos/GitHub-Mark-32px.png"
// import GitLogo64x from "../../src/images/logos/GitHub-Mark-64px.png"
// import GitLogo120x from "../../src/images/logos/GitHub-Mark-120px-plus.png"

// import LiveButton from "../../src/images/res/live-demo.png"

export default function Template({data}) {
    console.log('ddata', data)
    const {markdownRemark: project} = data;

    const { markdownRemark } = data
    // const { frontmatter, html } = markdownRemark
    // var project = nodes;
    // console.log('pproject', project.nodes[0].frontmatter)
    // console.log('pproject', project)
    // project = project.nodes[0]

    return(
        <Layout>
        <div>
            <h1 className="postTitle">{project.frontmatter.title}</h1>
            <div className="projectLinks">
                {/* {(post.frontmatter.gitlink === "/placeholder")? null : <a href={post.frontmatter.gitlink}><img src={GitLogo} alt="broken git logo"/></a>} */} 
                {/* {(post.frontmatter.live === "/placeholder")? null : <a href={post.frontmatter.live}> <button className="liveDemoButton">Live!</button></a>} */}
    {/* {(post.frontmatter.live === "/placeholder")? null : <a href={post.frontmatter.live}> <img className="button-image" src={LiveButton} alt="Live Project Demo"/></a>} */}
            </div>
            <div className="tagGroup">
                {project.frontmatter.tags.map((tag, index) => (
                    <div key={index}>
                        <h2 className = "tagStyle">{tag}</h2>
                    </div>
                ))}
            </div>
            {/* <p>{post.frontmatter.description}</p> */}
            <p>Desc: {project.frontmatter.description}</p>
            <p>Date: {project.frontmatter.date}</p>
            {/* <p>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p> */}
            {/* <a href={post.frontmatter.live}>Live Version: <button>click me!</button></a>    */}
            {/* { (post.frontmatter.live === "/placeholder")? null : <a href={post.frontmatter.live}>Live Version: <button>click me!</button></a>} */}
            <br /><br />
            {/* <h2 className="tagStyle">{post.frontmatter.tags + " "}</h2> */}
            <div dangerouslySetInnerHTML={{__html: project.html}} />
        </div>
        </Layout>
    )
}

// export const query = graphql`
//   query {
//     allMarkdownRemark {
//       nodes {
//         frontmatter {
//           path
//           title
//           logo {
//           childImageSharp {
//             gatsbyImageData
//           }
//           }
//             description
//             date
//             tags
//             live
//             gitlink      
//         }
//       }
//     }
//   }`

// export const query = graphql`
//     #query BlogPostByPath($path: String!) {
//     query($path: String!) {
//         markdownRemark(frontmatter: { path: {eq: $path} }) {
//             html
//             frontmatter {
//                 path
//                 title
//                 description
//                 date
//                 tags
//                 live
//                 gitlink
//             }
//         }
//     }
// `


export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        # description
        # date
        # tags
        # live
        # gitlink
      }
    }
  }
`  