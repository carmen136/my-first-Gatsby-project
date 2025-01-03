import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="night shot of Berlin"
        src="https://wallup.net/wp-content/uploads/2017/03/15/64315-cityscape-lights-tower-Berlin-clouds-night-Germany.jpg"
      />
    </Layout>
  )
}


export const Head = () => <title>Home Page</title>

export default IndexPage
