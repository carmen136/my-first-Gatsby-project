import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => {
  return (
    <Layout pageTitle="About me">
      <p>This is the about page of my Gatsby site.</p>
    </Layout>
  )
}

export const Head = () => (
    <>
        <Seo title="About me" />
        <meta name="description" content="description" />
    </>
)
    

export default AboutPage;


// Warum nicht diese Schreibweise?

// export function AboutPage1() {
//     return (
//         <div>
//             <h1>About Us</h1>
//             <p>This is the about page of my Gatsby site.</p>
//         </div>
//     )
// };
    
