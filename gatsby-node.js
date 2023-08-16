// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// // You can delete this file if you're not using it

// const path = require('path');

// exports.createPages = ({actions, graphql}) => {
//     const {createPage} = actions;

//      const postTemplate = path.resolve('src/templates/post.js');
//      const tagTemplate = path.resolve("src/templates/tags.js")
//     // const projectTemplate = path.resolve('src/pages/ProjectsMD/{Project.name}.js')

//     //const postTemplate = require.resolve('src/templates/post.js');
//     //const tagTemplate = require.resolve("src/templates/tags.js")

//     // return graphql(`{
//     //     allMarkdownRemark{
//     //         edges{
//     //             node {
//     //                 html
//     //                 id
//     //                 frontmatter{
//     //                     path
//     //                     title
//     //                 }
//     //             }
//     //         }
//     //     }

        
//     //     tagsGroup: allMarkdownRemark(limit: 2000) {
//     //         group(field: frontmatter___tags) {
//     //           fieldValue
//     //         }
//     //       }

//     // }`)
//     return graphql(`{
//         allMarkdownRemark {
//           edges {
//             node {
//               html
//               id
//               frontmatter {
//                 path
//                 title
//               }
//             }
//           }
//         }
//         tagsGroup: allMarkdownRemark(limit: 2000) {
//           group(field: {frontmatter: {tags: SELECT}}) {
//             fieldValue
//           }
//         }
//       }`)
//     .then(res => {
//         if(res.errors){
//             return Promise.reject(res.errors);
//         }


        


//         res.data.allMarkdownRemark.edges.forEach( ({node}) => {
//             //path = node.frontmatter.slug
//             //const slug = node.frontmatter.path  
//             createPage({
//                 path: node.frontmatter.path,
//                 component: postTemplate,
//                 context: {
//                     path: node.frontmatter.path
//                 },
//             })
//         })

//           // Extract tag data from query
//         const tags = res.data.tagsGroup.group

//         // Make tag pages
//         tags.forEach(tag => {
//             createPage({
//                 // path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
//                 path: `/tags/${(tag.fieldValue)}/`,
//                 component: tagTemplate,
//                 context: {
//                     slug: tag.fieldValue,
//                 },
//             })
//         })



//     }) // Then

  
// }