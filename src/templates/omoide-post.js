import React from 'react'
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/Header"
import Sideb from '../components/sideb'

const omoidePost = ({data}) => {
  return (
    <>
        <Seo title={data.microcmsBlog.title + " | 思い出のかべ"} />
        <Header />
        <Layout>
            <div id="mainimage-sub" className='omoide'>
                <div id="mainimage-inner">
                </div>
            </div>
            <div id="breadcrumb">
                <ul class="breadcrumb__list" itemscope itemtype="https://schema.org/BreadcrumbList">
                    <li class="breadcrumb__item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                        <Link to="/" itemprop="item">
                            <span itemprop="name">ホーム</span>
                        </Link>
                        <meta itemprop="position" content="1" />
                    </li>                
                    <li class="breadcrumb__item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                        <Link to={'/' + data.microcmsBlog.category.slug + '/'} itemprop="item">
                            <span itemprop="name">{data.microcmsBlog.category.name}</span>
                        </Link>
                        <meta itemprop="position" content="2" />
                    </li>
                    <li class="breadcrumb__item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                        <Link to={'/' + data.microcmsBlog.category.slug + '/' + data.microcmsBlog.blogId + '/'} itemprop="item">
                            <span itemprop="name">{data.microcmsBlog.title}</span>
                        </Link>
                        <meta itemprop="position" content="3" />
                    </li>
                </ul>
            </div>
            <section id="sub-page">
                <div className='main-content'>
                    <div className="flex-wrap">
                        <div className="main_b">
                            <h2 className="page_title01 mt0">思い出のかべ</h2>

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

export default omoidePost

export const query = graphql`
query ($id: String) {
    microcmsBlog(blogId: {eq: $id}, category: {slug: {eq: "omoide"}}) {
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
