// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <StaticImage 
      alt="A beautiful froggo" 
      src="../images/froggo.webp" />
      <p>I'm making this following the Gatsby Tutorial</p>
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage