/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `gatsby-portfolio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: 
    [  "gatsby-plugin-sass", 
      "gatsby-plugin-image", 
      "gatsby-plugin-mdx",
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
      `gatsby-transformer-remark`, 
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          "name": "images",
          "path": "./src/images/"
        },
        __key: "images"
      }, 
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          "name": "pages",
          "path": "./src/pages/"
        },
        __key: "pages"
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `my-projects`,
          path: `${__dirname}/src/pages/projects/`,
        },
      },      
    ]
};