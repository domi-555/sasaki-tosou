import React from 'react'

import { Link, graphql } from "gatsby"
import { GatsbyImage,StaticImage } from "gatsby-plugin-image"

import { AnchorLink } from "gatsby-plugin-anchor-links";

import SEO from '../components/seo'
import Layout from '../components/layout'

import "@fontsource/noto-sans-jp"
import '@fontsource/noto-sans-jp/700.css'
import '@fontsource/noto-sans-jp/900.css'
import "@fortawesome/fontawesome-svg-core/styles.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight,faChevronUp,faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'

import MainImage from '../components/MainImage';

const Home = () => {
  return (
    <>
    <Layout>
    <SEO
    title="外壁塗装・屋根塗装なら広島の佐々木塗装｜安心施工、保証付きのアフターサービス。"
    description="外壁塗装・屋根塗装なら広島の佐々木塗装のページです。"
     />
     <p id="page-top" data-sal="slide-bottom" viewOffset="0.2" data-sal-delay="200" data-sal-easing="ease"><AnchorLink offset="0" to="#pagetop" title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink></p>
        <ul
        className="fix_bn"
        data-sal="slide-right"
        viewOffset="0.2"
        data-sal-delay="300"
        data-sal-easing="ease">
            <li><Link to="/contact_page/" className="mail_bt"><img src="/images/mail_icon.svg" width={45} height={45} className="opa" alt="" />
            <span>お問い合わせ</span></Link></li>
            <li><Link to="https://lin.ee/HR9JB00" className="line_bt" target="_blank"><img src="/images/line_icon.svg" width={45} height={45} className="opa" alt="" />
            <span>ライン見積もり</span></Link></li>
            <li className="pc"><Link to="https://twitter.com/sasakipaint1116" target="_blank" className="tw_bt"><img src="/images/tw_icon.png" width={25} height={25} className="opa" alt="" /></Link></li>
            <li className="pc"><Link to="https://www.facebook.com/profile.php?id=100063604571277" target="_blank" className="fb_bt"><img src="/images/fb_icon.png" width={25} height={25} className="opa" alt="" /></Link></li>
            <li className="pc"><Link to="https://www.instagram.com/sasaki.ryoko/" target="_blank" className="insta_bt"><span className="insta"><img src="/images/insta_icon.svg" width={25} height={25} className="opa" alt="" /></span></Link></li>
        </ul>

        <MainImage />

    
    </Layout>
    </>
  )
}

export const query = graphql`
query {

  twIcon: file(relativePath: {eq: "tw_icon.png"}) {
    childImageSharp {
      gatsbyImageData(width: 25, layout: CONSTRAINED)
    }
  }
  fbIcon: file(relativePath: {eq: "fb_icon.png"}) {
    childImageSharp {
      gatsbyImageData(width: 25, layout: CONSTRAINED)
    }
  }

  arrow01: file(relativePath: {eq: "arrow01.png"}) {
    childImageSharp {
      gatsbyImageData(width: 280, layout: CONSTRAINED)
    }
  }

}
`

export default Home