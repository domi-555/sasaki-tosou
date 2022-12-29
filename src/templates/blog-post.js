import * as React from "react"
import { Link,graphql } from "gatsby"

import Seo from "../components/Seo"

import Header from "../components/Header"

import Layout from "../components/Layout"
import Sideb from "../components/sideb"

const BlogPost = ({data}) => {
  return (
    <>
      <Header />
        
      <Layout>
        <Seo />

            <div id="mainimage-sub" className='gaiheki'>
                <div id="mainimage-inner">
                </div>
            </div>

            <section id="sub-page">
              <div className='main-content'>

                <div className="flex-wrap">
                  <div className="main_b">
                    <h2 className="page_title01 mt0">ブログ</h2>

                    <h3 className="case_title">{data.microcmsBlog.title}</h3>
                    <p><span className="date">{data.microcmsBlog.date}</span></p>
                    
                    <p className="center"><Link to={'/' + data.microcmsBlog.category.slug + '/'} className="bt01">一覧へ戻る</Link></p>
                  </div>
                  <Sideb />
                </div>

              </div>
            </section>
        
        </Layout>
    </>
  )
}

export default BlogPost

export const query = graphql`
query ($id: String) {
    microcmsBlog(blogId: {eq: $id}) {
      blogId
      title
      date(formatString: "YYYY年MM月DD日")
      category {
        slug
        id
        name
      }
      body
      mainimage {
        url
      }
    }
  }
`