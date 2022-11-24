import React from 'react'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { AnchorLink } from "gatsby-plugin-anchor-links";

import "@fontsource/noto-sans-jp"
import '@fontsource/noto-sans-jp/700.css'
import '@fontsource/noto-sans-jp/900.css'
import "@fortawesome/fontawesome-svg-core/styles.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

import Seo from '../components/Seo'
import Layout from '../components/Layout';

const links = () => {
  return (
    <>
      <Layout>
        <Seo
            title="リンク集"
            description="外壁塗装・屋根塗装なら広島の佐々木塗装のリンク集ページです。"
        />
        <p id="page-top" data-sal="slide-bottom" viewOffset="0.2" data-sal-delay="200" data-sal-easing="ease"><AnchorLink to="/links/#pagetop" title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink></p>

        <ul className="fix_bn" data-sal="slide-right" viewOffset="0.2" data-sal-delay="300" data-sal-easing="ease">
            <li><Link to="/contact_page/" className="mail_bt"><img src="/images/mail_icon.svg" width={45} height={45} className="opa" alt="" />
            <span>お問い合わせ</span></Link></li>
            <li><Link to="https://lin.ee/HR9JB00" className="line_bt" target="_blank" rel="noopener noreferrer"><img src="/images/line_icon.svg" width={45} height={45} className="opa" alt="" />
            <span>ライン見積もり</span></Link></li>
            <li className="pc"><Link to="https://twitter.com/sasakipaint1116" target="_blank" rel="noopener noreferrer" className="tw_bt"><StaticImage src="../images/tw_icon.png" width={25} height={25} className="opa" alt="" /></Link></li>
            <li className="pc"><Link to="https://www.facebook.com/profile.php?id=100063604571277" target="_blank" rel="noopener noreferrer" className="fb_bt"><StaticImage src="../images/fb_icon.png" width={25} height={25} className="opa" alt="" /></Link></li>
            <li className="pc"><Link to="https://www.instagram.com/sasaki.ryoko/" target="_blank" rel="noopener noreferrer" className="insta_bt"><span className="insta"><img src="/images/insta_icon.svg" width={25} height={25} className="opa" alt="" /></span></Link></li>
        </ul>
        <div id="mainimage-sub" className='links'>
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
                    <Link to="/links/" itemprop="item">
                        <span itemprop="name">リンク集</span>
                    </Link>
                    <meta itemprop="position" content="2" />
                </li>
            </ul>
        </div>
        <section id="sub-page">
            <div className="main-content">

            <div className="links_list">
                <div className="links_box">
                    <p><a href="https://www.facebook.com/%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%E4%BD%90%E3%80%85%E6%9C%A8%E5%A1%97%E8%A3%85-%E3%83%97%E3%83%AD%E3%82%BF%E3%82%A4%E3%83%A0%E3%82%BA%E5%BA%83%E5%B3%B6%E5%8C%97%E5%BA%97-1424231957799793/" rel="noopener noreferrer"><img src="/images/facebook.png" alt="facebook" width={300} height={80} /></a></p>
                </div>
                <div className="links_box">
                    <p><a href="http://ameblo.jp/akane--zora/" target="_blank" rel="noopener noreferrer"><img src="/images/anneau_class-320x41.gif" alt="" width={300} height={39} /></a></p>
                </div>
                <div className="links_box">
                    <p><a href="http://www.aeonproduct-finance.jp/index_j.htm" target="_blank" rel="noopener noreferrer"><img src="/images/link_bn_aeon.jpg" alt="" width={320} height={26} /></a></p>
                </div>
                <div className="links_box">
                    <p><a href="https://www.j-anshin.co.jp/" target="_blank" rel="noopener noreferrer"><img src="/images/link_bn_ansin.jpg" alt="" width={320} height={76} /></a></p>
                </div>
                <div className="links_box">
                    <p><a href="http://astec-japan.co.jp/" target="_blank" rel="noopener noreferrer"><img src="/images/astec-320x96.png" alt="" width={320} height={96} /></a></p>
                </div>
                <div className="links_box">
                    <p><a href="http://www.agccoat-tech.co.jp/products/lumistage/explain.html" target="_blank" rel="noopener noreferrer"><img src="/images/lumi-320x96.png" alt="lumi" width={320} height={96} /></a></p>
                </div>
                <div className="links_box">
                    <p><a href="http://nissin-sangyo.jp/" target="_blank" rel="noopener noreferrer"><img className src="/images/gaina.jpg" alt="" width={320} height={80} /></a></p>
                </div>
            </div>

            </div>
        </section>
      </Layout>
    </>
  )
}

export default links
