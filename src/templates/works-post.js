import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/Header"
import Sideb from "../components/sideb"

const WorksPost = ({ data }) => {
  return (
    <>
      <Seo title={data.microcmsBlog.title + " | ただいま施工中"} />
      <Header />
      <Layout>
      <div id="mainimage-sub" className='now_working'>
        <div id="mainimage-inner">
        </div>
      </div>
      <section id="sub-page">
        <div className='main-content'>
          <div className="flex-wrap">
            <div className="main_b">

              <h2 className="page_title01 mt0">ただいま施工中</h2>
              <h3 className="page_title03 center">{data.microcmsBlog.title}</h3>
              <p><span className="date">{data.microcmsBlog.date}</span></p>
              <ul class="cat_list">
                <li class="blog-sekou-blog"><a href={'/' + data.microcmsBlog.category.slug + '/'} class="txt12">{data.microcmsBlog.category.name}</a></li>
              </ul>
              <div className="post_img"><img src={data.microcmsBlog.mainimage.url} /></div>
              <div
              dangerouslySetInnerHTML={{
                  __html: `${data.microcmsBlog.body}`,
              }}
              />
                      
              <p className="center"><Link to={'/' + data.microcmsBlog.category.slug + '/'} className="bt01">一覧へ戻る</Link></p>
            </div>
            <div className="side_b">
              <Sideb />
            </div>
          </div>

         
        
        </div>
      </section>
      </Layout>
    </>
  )
}

export default WorksPost

export const query = graphql`
query ($id: String) {
  microcmsBlog(blogId: {eq: $id}, category: {slug: {eq: "now-working"}}) {
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