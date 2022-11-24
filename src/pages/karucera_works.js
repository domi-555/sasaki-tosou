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

const karucera_works = () => {
  return (
    <>
      <Layout>
        <Seo
            title="カルセラリフォーム施工例"
            description="外壁塗装・屋根塗装なら広島の佐々木塗装のカルセラリフォーム施工例ページです。"
        />
        <p id="page-top" data-sal="slide-bottom" viewOffset="0.2" data-sal-delay="200" data-sal-easing="ease"><AnchorLink to="/karucera_works/#pagetop" title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink></p>

        <ul className="fix_bn" data-sal="slide-right" viewOffset="0.2" data-sal-delay="300" data-sal-easing="ease">
            <li><Link to="/contact_page/" className="mail_bt"><img src="/images/mail_icon.svg" width={45} height={45} className="opa" alt="" />
            <span>お問い合わせ</span></Link></li>
            <li><Link to="https://lin.ee/HR9JB00" className="line_bt" target="_blank"><img src="/images/line_icon.svg" width={45} height={45} className="opa" alt="" />
            <span>ライン見積もり</span></Link></li>
            <li className="pc"><Link to="https://twitter.com/sasakipaint1116" target="_blank" className="tw_bt"><StaticImage src="../images/tw_icon.png" width={25} height={25} className="opa" alt="" /></Link></li>
            <li className="pc"><Link to="https://www.facebook.com/profile.php?id=100063604571277" target="_blank" className="fb_bt"><StaticImage src="../images/fb_icon.png" width={25} height={25} className="opa" alt="" /></Link></li>
            <li className="pc"><Link to="https://www.instagram.com/sasaki.ryoko/" target="_blank" className="insta_bt"><span className="insta"><img src="/images/insta_icon.svg" width={25} height={25} className="opa" alt="" /></span></Link></li>
        </ul>
        <div id="mainimage-sub" className='karucera-works'>
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
                    <Link to="/karucera_works/" itemprop="item">
                        <span itemprop="name">カルセラリフォーム施工例</span>
                    </Link>
                    <meta itemprop="position" content="2" />
                </li>
            </ul>
        </div>
        <section id="sub-page">
            <div className="main-content">

            <h2 className="page_title01 mt0">カルセラリフォーム施工例</h2>

            <div className="case_box">
          <div className="case_box_l">
            <p className="case_title2">before</p>
            <img src="/images/karucera_pic01.jpg" alt="" />
          </div>
          <div className="case_box_r">
            <p className="case_title2">after</p>
            <img src="/images/karucera_pic02.jpg" alt="" />
          </div>
        </div>
        <div className="case_box">
          <div className="case_box_l">
            <p className="case_title2">before</p>
            <img src="/images/karucera_pic03.jpg" alt="" />
          </div>
          <div className="case_box_r">
            <p className="case_title2">after</p>
            <img src="/images/karucera_pic04.jpg" alt="" />
          </div>
        </div>
        <div className="case_box">
          <div className="case_box_l">
            <p className="case_title2">before</p>
            <img src="/images/karucera_pic05.jpg" alt="" />
          </div>
          <div className="case_box_r">
            <p className="case_title2">after</p>
            <img src="/images/karucera_pic06.jpg" alt="" />
          </div>
        </div>
        <div className="case_box">
          <div className="case_box_l">
            <p className="case_title2">before</p>
            <img src="/images/karucera_pic07.jpg" alt="" />
          </div>
          <div className="case_box_r">
            <p className="case_title2">after</p>
            <img src="/images/karucera_pic08.jpg" alt="" />
          </div>
        </div>
        <div className="case_box">
          <div className="case_box_l">
            <p className="case_title2">before</p>
            <img src="/images/karucera_pic09.jpg" alt="" />
          </div>
          <div className="case_box_r">
            <p className="case_title2">after</p>
            <img src="/images/karucera_pic10.jpg" alt="" />
          </div>
        </div>
        <div className="case_box">
          <div className="case_box_l">
            <p className="case_title2">before</p>
            <img src="/images/karucera_pic11.jpg" alt="" />
          </div>
          <div className="case_box_r">
            <p className="case_title2">after</p>
            <img src="/images/karucera_pic12.jpg" alt="" />
          </div>
        </div>
        <div className="case_box">
          <div className="case_box_l">
            <p className="case_title2">before</p>
            <img src="/images/karucera_pic13.jpg" alt="" />
          </div>
          <div className="case_box_r">
            <p className="case_title2">after</p>
            <img src="/images/karucera_pic14.jpg" alt="" />
          </div>
        </div>
        <div className="case_box">
          <div className="case_box_l">
            <p className="case_title2">before</p>
            <img src="/images/karucera_pic15.jpg" alt="" />
          </div>
          <div className="case_box_r">
            <p className="case_title2">after</p>
            <img src="/images/karucera_pic16.jpg" alt="" />
          </div>
        </div>

            </div>
        </section>
      </Layout>
    </>
  )
}

export default karucera_works
