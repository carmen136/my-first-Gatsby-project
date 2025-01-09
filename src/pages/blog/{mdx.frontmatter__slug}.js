import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"


const BlogPostPage = ({ data, children }) => {
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.data}</p>
            {children}
        </Layout>
    )
}

export const BlogPageQuery = graphql`
    query ($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
            }
        }
    }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPostPage