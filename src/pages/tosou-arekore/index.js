import React from 'react'
import { graphql,Link } from "gatsby"

import Seo from "../../components/Seo"
import Header from "../../components/Header"
import Layout from "../../components/Layout"
import Sideb from '../../components/sideb'

import { AnchorLink } from "gatsby-plugin-anchor-links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"

const index = ({data}) => {
  return (
    <>
    <Header />
    
    <Layout>
        <Seo />    
        
        <p id="page-top" data-sal="slide-bottom" viewOffset="0.2" data-sal-delay="200" data-sal-easing="ease"><AnchorLink to="/tosou-arekore/#pagetop" title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink></p>

        <ul className="fix_bn" data-sal="slide-right" viewOffset="0.2" data-sal-delay="300" data-sal-easing="ease">
            <li><Link to="/contact_page/" className="mail_bt"><img src="/images/mail_icon.svg" width={45} height={45} className="opa" alt="" />
            <span>お問い合わせ</span></Link></li>
            <li><Link to="https://lin.ee/HR9JB00" className="line_bt" target="_blank"><img src="/images/line_icon.svg" width={45} height={45} className="opa" alt="" />
            <span>ライン見積もり</span></Link></li>
            <li className="pc"><Link to="https://twitter.com/sasakipaint1116" target="_blank" className="tw_bt"><img src="../images/tw_icon.png" width={25} height={25} className="opa" alt="" /></Link></li>
            <li className="pc"><Link to="https://www.facebook.com/profile.php?id=100063604571277" target="_blank" className="fb_bt"><img src="../images/fb_icon.png" width={25} height={25} className="opa" alt="" /></Link></li>
            <li className="pc"><Link to="https://www.instagram.com/sasaki.ryoko/" target="_blank" className="insta_bt"><span className="insta"><img src="/images/insta_icon.svg" width={25} height={25} className="opa" alt="" /></span></Link></li>
        </ul>

        <div id="mainimage-sub" className='gaiheki'>
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
              <Link to="/tosou-arekore/" itemprop="item">
                <span itemprop="name">外壁塗装をする前に知っておきたい塗装アレコレ</span>
              </Link>
              <meta itemprop="position" content="2" />
            </li>
          </ul>
        </div>

        <section id="sub-page">
          <div className='main-content'>

            <div className="flex-wrap">
              <div className="main_b">
                <h2 className="page_title01 mt0">外壁塗装コラム</h2>
                <h3 className="page_title03 center">外壁塗装をする前に知っておきたい塗装アレコレ</h3>
                
                <div className='post_list'>
                  {data.allMicrocmsBlog.edges.map(({ node }) => (
                      <>
                      <div className="post_box">
                          <div className="post_thumb">
                          <a href={'/' + node.category.slug + '/' + node.blogId + '/'}><img src={node.mainimage.url} alt={node.title + 'サムネイル画像'} /></a>
                          </div>
                          <div className="post_txt">
                              <p className="txt12">{node.date}</p>
                              <p><a href={'/' + node.category.slug + '/' + node.blogId + '/'} className="post_title">{node.title}</a></p>	
                              <p><a href={'/' + node.category.slug + '/' + node.blogId + '/'}>{node.excerpt}</a></p>
                          </div>
                      </div>                    
                      </>
                  ))}
                </div>
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

export default index

export const query = graphql`
{
  allMicrocmsBlog(
    filter: {category: {slug: {eq: "tosou-arekore"}}}
    limit: 50
    sort: {date: ASC}
  ) {
    edges {
      node {
        title
        blogId
        date(formatString: "YYYY年MM月DD日")
        category {
          slug
          name
          id
        }
        excerpt
        mainimage {
          url
        }
      }
    }
  }
}
`