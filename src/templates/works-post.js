import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/Header"
import { Pagination } from "../components/pagination"

const WorksPost = ({ data }) => {
  return (
    <>
        <Header />
        <Layout>
        <div id="mainimage-sub" className='gaiheki'>
                <div id="mainimage-inner">
                </div>
            </div>

            <section id="sub-page">
              <div className='main-content'>
        <Seo title="Home" />
        <ul>
            {data.allMicrocmsBlog.edges.map(({ node }) => (
            <li key={node.blogId}>
                <Link to={`/blog/${node.blogId}`}>{node.title}</Link>
            </li>
            ))}
        </ul>

        <p className="center"><Link to={'/case/' + data.microcmsCase.category.slug + "/"} className="bt02">一覧へ戻る</Link></p>
        
        </div>
        </section>
        </Layout>
    </>
  )
}

export default WorksPost

export const query = graphql`
query ($limit: Int, $skip: Int) {
    allMicrocmsBlog(limit: $limit, skip: $skip) {
      edges {
        node {
          id
          blogId
          title
          category {
            name
            slug
          }
        }
      }
      totalCount
    }
  }
`