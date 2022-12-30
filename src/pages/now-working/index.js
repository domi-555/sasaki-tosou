import React from 'react'

import { graphql,Link } from "gatsby"

import Seo from "../../components/Seo"
import Header from "../../components/Header"
import Layout from "../../components/Layout"
import Sideb from "../../components/sideb"

import { AnchorLink } from "gatsby-plugin-anchor-links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"

const index = ({ data }) => {
  return (
    <>
      <Header />
      
      <Layout>
        <Seo />    
        
        <p id="page-top" data-sal="slide-bottom" viewOffset="0.2" data-sal-delay="200" data-sal-easing="ease"><AnchorLink to="/cese/#pagetop" title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink></p>

        <ul className="fix_bn" data-sal="slide-right" viewOffset="0.2" data-sal-delay="300" data-sal-easing="ease">
            <li><Link to="/contact_page/" className="mail_bt"><img src="/images/mail_icon.svg" width={45} height={45} className="opa" alt="" />
            <span>お問い合わせ</span></Link></li>
            <li><Link to="https://lin.ee/HR9JB00" className="line_bt" target="_blank"><img src="/images/line_icon.svg" width={45} height={45} className="opa" alt="" />
            <span>ライン見積もり</span></Link></li>
            <li className="pc"><Link to="https://twitter.com/sasakipaint1116" target="_blank" className="tw_bt"><img src="../images/tw_icon.png" width={25} height={25} className="opa" alt="" /></Link></li>
            <li className="pc"><Link to="https://www.facebook.com/profile.php?id=100063604571277" target="_blank" className="fb_bt"><img src="../images/fb_icon.png" width={25} height={25} className="opa" alt="" /></Link></li>
            <li className="pc"><Link to="https://www.instagram.com/sasaki.ryoko/" target="_blank" className="insta_bt"><span className="insta"><img src="/images/insta_icon.svg" width={25} height={25} className="opa" alt="" /></span></Link></li>
        </ul>

        <div id="mainimage-sub" className='now_working'>
            <div id="mainimage-inner">
            </div>
        </div>

        <section id="sub-page">
        <div className='main-content'>

            

            <div className="flex-wrap">
            <div className="main_b">
                <h2 className="page_title01 mt0">ただいま施工中</h2>                
                
                <div className="kiji_list">
                {data.allMicrocmsBlog.edges.map(({ node }) => (
                  <div className="kiji_box">
                    <div className="kiji_thumb">
                    <a href={'/' + node.category.slug + '/' + node.blogId + '/'}><img src={node.mainimage.url} /></a>
                    </div>
                    <div className="kiji_txt">					
                      <p class="txt12">{node.date}</p>
                      <p><a className="kiji_title" href={'/' + node.category.slug + '/' + node.blogId + '/'}>{node.title}</a></p>
                      <p className="txt12">{node.excerpt}・・・</p>
                      <ul class="cat_list">
                        <li class="blog-sekou-blog"><a href={'/' + node.category.slug + '/'} class="txt12">{node.category.name}</a></li>
                      </ul>
                    </div>
                  </div>
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
    allMicrocmsBlog(filter: {category: {slug: {eq: "now-working"}}}) {
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
          body
          excerpt
          mainimage {
            url
          }
        }
      }
    }
  }
`