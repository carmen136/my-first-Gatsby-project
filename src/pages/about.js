import * as React from "react"
import { Link } from "gatsby"

const AboutPage = () => (
    <main>
        <h1>About</h1>
        <Link to="/">Back to Home</Link>
        <p>This is the about page of my Gatsby site.</p>
    </main>
        
)

export const Head = () => (
    <>
        <title>About me</title>
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
    
