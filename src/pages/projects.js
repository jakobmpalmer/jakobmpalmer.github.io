import React from 'react';
// import Grid from 
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
// import Img from 'gatsby-image'
// import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import HeroTitle from '../components/HeroTitle/HeroTitle';
import missingImage from './projects/missing_image.jpg'
import * as styles from '../components/styles/projects.module.scss'


const pages= [{pageText: 'Home', pagePath: '/'},{pageText: 'Contact', pagePath:'/contact'}, {pageText: 'Hobbies', projectPath:'/hobbies'}]


const ProjectsPage = () => {

    let tags= []


    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                nodes {
                    frontmatter {
                        path
                        title  
                        logo  {
                            childImageSharp {
                                gatsbyImageData(
                                    width: 250
                                    height: 250
                                    placeholder: BLURRED
                                    formats: [AUTO, WEBP, AVIF]
                                )
                            }
                        }
                        description
                        date
                        tags
                        live
                        gitlink
                    }
                }
            }
        }
    `);
    
    const nodes = data.allMarkdownRemark.nodes;    

    for(let i = 0; i < nodes.length; i++){
        tags.push(nodes[i].frontmatter.tags)
    }
    tags = tags.flat()

    function removeDuplicates(arr) {
        return [...new Set(arr)];
    }
    tags = removeDuplicates(tags)

    tags = tags.sort()

    let projects = nodes.slice(0, 4)
    return(
        // <div className={styles.FullscreenImage}>
        <div className={styles.BackgroundContainer}>
            <div className={styles.ProjectsContainer} >
                <div className={styles.ProjectsTitle}>                                
                    <HeroTitle titleText={'Projects'}/>                
                </div>
                {(data === undefined) ? <div>loading</div> :
                    <>
                        <div className={styles.TagsContainer}>
                            {tags.map((tag, idx) => {
                                return(
                                    <div key={idx}>
                                        <TagTile tagTitle={tag}></TagTile>
                                    </div>)
                             })}
                        </div>
                                  
                        <div className={styles.ProjectsContent}>                            
                            {projects.map((projectData, idx) => {  
                                            
                                return(
                                    <div key={idx}>
                                        <ProjectTile 
                                            projectData={projectData.frontmatter} />
                                    </div>
                                )
                            })}
                        </div>
                    </>
                }                            
            </div>
        </div>
       
        )
}

export default ProjectsPage



const ProjectTile = ({ projectData }) => {

    
    const projectPath = projectData.path
    console.log(projectPath)
    const projectTitle = projectData.title  
    // const projectLogo = projectData.logo           
    const projectLogo = getImage(projectData.logo)
    const projectDescription = projectData.description
    // const projectDate = projectData.date
    // const projectTags = projectData.tags
    // const projectLive = projectData.live
    // const projectGitlink = projectData.gitlink
    console.log('logo:', projectLogo)

    return(
        <Link to={'/projects'+projectPath} style={{textDecoration:'none', color: 'inherit'}}>
        <div className={styles.ProjectsTileContainer}>
            <div style={{
                display: 'flex',
                // minHeight: '20vh',
                height: '20vh',
                overflowX: 'hidden',
                overflowY: 'hidden',
            }}>
                <div style={{flexGrow: 1}}>
                    <div className={styles.ProjectLogoContainer}>    
                        { projectLogo !== undefined ?                    
                        <GatsbyImage 
                            image={projectLogo} 
                            alt="broken img" 
                            layout='fixed'
                        /> :
                        <div styles={{backgroundColor: 'black', width: '100%', height: '100%'}}>
                        <GatsbyImage
                            image={missingImage} 
                            alt="broken img" 
                            layout='fixed'
                        />
                        </div> }
                    </div>
                </div>
                <div style={{flexGrow: 2}}>
                    <h2>{projectTitle}</h2>
                    <h4>{projectDescription}</h4>
                </div>
                <div style={{flexGrow: 1}}>
                    <h4>Icon</h4>
                </div>
            </div>
        </div>
        </Link>
    )
}

export const Head = () => <title>Projects</title>


const TagTile = ({tagTitle}) => {

    return (
        <div style={{backgroundColor: 'rgba(0, 0, 0, 0.35)',
                    paddingLeft: '5px', paddingRight: '5px', 
                    borderRadius: '10px', fontSize: '1.0rem', 
                    margin: '3px 5px'}}>
            <p style={{margin: '0px'}}>{tagTitle}</p>
        </div>
    )
}