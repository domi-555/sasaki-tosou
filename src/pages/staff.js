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

const staff = () => {
  return (
    <>
      <Layout>
      <Seo
        title="スタッフ紹介"
        description="外壁塗装・屋根塗装なら広島の佐々木塗装のスタッフ紹介ページです。"
         />
         <p id="page-top" data-sal="slide-bottom" viewOffset="0.2" data-sal-delay="200" data-sal-easing="ease"><AnchorLink to="/staff/#pagetop" title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink></p>

<ul className="fix_bn" data-sal="slide-right" viewOffset="0.2" data-sal-delay="300" data-sal-easing="ease">
    <li><Link to="/contact_page/" className="mail_bt"><img src="/images/mail_icon.svg" width={45} height={45} className="opa" alt="" />
    <span>お問い合わせ</span></Link></li>
    <li><Link to="https://lin.ee/HR9JB00" className="line_bt" target="_blank"><img src="/images/line_icon.svg" width={45} height={45} className="opa" alt="" />
    <span>ライン見積もり</span></Link></li>
    <li className="pc"><Link to="https://twitter.com/sasakipaint1116" target="_blank" className="tw_bt"><StaticImage src="../images/tw_icon.png" width={25} height={25} className="opa" alt="" /></Link></li>
    <li className="pc"><Link to="https://www.facebook.com/profile.php?id=100063604571277" target="_blank" className="fb_bt"><StaticImage src="../images/fb_icon.png" width={25} height={25} className="opa" alt="" /></Link></li>
    <li className="pc"><Link to="https://www.instagram.com/sasaki.ryoko/" target="_blank" className="insta_bt"><span className="insta"><img src="/images/insta_icon.svg" width={25} height={25} className="opa" alt="" /></span></Link></li>
</ul>
      <div id="mainimage-sub" className='staff'>        
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
                    <Link to="/staff/" itemprop="item">
                        <span itemprop="name">スタッフ紹介</span>
                    </Link>
                    <meta itemprop="position" content="2" />
                </li>
            </ul>
        </div>
        <section id="sub-page">
            <div className="main-content">
            <h2 className="page_title01 mt0">スタッフ紹介</h2>
            <h3 className="page_title02">代表取締役　佐々木　堅</h3>
        <div className="staff_box">
          <div className="staff_l"><img src="/images/boss_photo.png" alt="" /></div>
          <div className="staff_r">
            広島県出身　A型
            趣味：温泉、サウナ
            10代の頃から厳しい親方に師事し塗装職人として技術を磨いてきました。
            平成5年に佐々木塗装として独立、平成17年に法人成りし代表取締役として現在に至ります。
            話べタではありますが塗装の事に関しては妥協を許しません。
          </div>
        </div>
        <h3 className="page_title02">塗装職人・現場管理　岡村 誠悦</h3>
        <div className="staff_box">
          <div className="staff_l"><img src="/images/okamura.jpg" alt="" /></div>
          <div className="staff_r">
            広島県出身　AB型 
            趣味:ドライブ 
            塗装職人歴30年、経験豊富なベテラン職人です。 
            穏やかな性格で聞き上手。
            誰からも好かれる人柄で社員はもとよりお客様からも信頼 をいただいています。 
          </div>
        </div>
        <h3 className="page_title02">塗装職人・現場管理　梶谷　凌平</h3>
        <div className="staff_box">
          <div className="staff_l"><img src="/images/kaji.jpg" alt="" /></div>
          <div className="staff_r">
            島根県出身　A型 
            趣味：古着屋巡り 
            資格：建築積算士櫛 
            工業高校→工業大学→建設会社と長く建築との関わりを持ってきました。
            現在塗装職人として技術を身につける為、現場での修行に励んでいます。 
          </div>
        </div>
        <h3 className="page_title02">お客様サポート 大石　真弓</h3>
        <div className="staff_box">
          <div className="staff_l"><img src="/images/ohishi.jpg" alt="" /></div>
          <div className="staff_r">
            島根県出身　A型 
            趣味:雑貨屋巡り、映画鑑賞(ラブコメ) 
            資格:二級建築士 
            3児のママでもあります。 
            建築士の資格を活かしお客様に最良のご提案ができるよう女性目線でのアドバイス をさせていただきます。
          </div>
        </div>
        <h3 className="page_title02">塗り替えアドバイザー 佐々木　良子</h3>
        <div className="staff_box">
          <div className="staff_l"><img src="/images/ryoko.jpg" alt="" /></div>
          <div className="staff_r">
            広島県出身　A型 
            趣味:旅行 
            資格：外装劣化診断士、窯業サイディング塗替診断士、整理収納アドバイザー準一級
            人生のテーマは「衆生所遊楽」今日この日をめいっぱい楽しみたいと思います。
          </div>
        </div>

            </div>
        </section>
      </Layout>
    </>
  )
}

export default staff
