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

const yanecover = () => {
  return (
    <>
      <Layout>
        <Seo
            title="屋根カバー工法"
            description="外壁塗装・屋根塗装なら広島の佐々木塗装の屋根カバー工法ページです。"
        />
        <p id="page-top" data-sal="slide-bottom" viewOffset="0.2" data-sal-delay="200" data-sal-easing="ease"><AnchorLink to="/yanecover/#pagetop" title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink></p>

        <ul className="fix_bn" data-sal="slide-right" viewOffset="0.2" data-sal-delay="300" data-sal-easing="ease">
            <li><Link to="/contact_page/" className="mail_bt"><img src="/images/mail_icon.svg" width={45} height={45} className="opa" alt="" />
            <span>お問い合わせ</span></Link></li>
            <li><Link to="https://lin.ee/HR9JB00" className="line_bt" target="_blank"><img src="/images/line_icon.svg" width={45} height={45} className="opa" alt="" />
            <span>ライン見積もり</span></Link></li>
            <li className="pc"><Link to="https://twitter.com/sasakipaint1116" target="_blank" className="tw_bt"><StaticImage src="../images/tw_icon.png" width={25} height={25} className="opa" alt="" /></Link></li>
            <li className="pc"><Link to="https://www.facebook.com/profile.php?id=100063604571277" target="_blank" className="fb_bt"><StaticImage src="../images/fb_icon.png" width={25} height={25} className="opa" alt="" /></Link></li>
            <li className="pc"><Link to="https://www.instagram.com/sasaki.ryoko/" target="_blank" className="insta_bt"><span className="insta"><img src="/images/insta_icon.svg" width={25} height={25} className="opa" alt="" /></span></Link></li>
        </ul>
        <div id="mainimage-sub" className='yane-cover'>
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
                    <Link to="/yanecover/" itemprop="item">
                        <span itemprop="name">屋根カバー工法</span>
                    </Link>
                    <meta itemprop="position" content="2" />
                </li>
            </ul>
        </div>
        <section id="sub-page">
                <div className="main-content">

                    <div className="gaiheki_title_box">
                        <h1>
                            <img src="/images/yane-cover_img01.png" alt="屋根の上にルーフィングと新しい屋根材をかぶせる工法 屋根カバー工法" className="pc" />
                            <img src="/images/yane-cover_img01_smp.png" alt="屋根の上にルーフィングと新しい屋根材をかぶせる工法 屋根カバー工法" className="smp" />
                        </h1>
                    </div>

                    <h2 class="page_title01 mt0">作業の流れ</h2>

                    <p className="center red">（スレート屋根に鋼板屋根をかぶせる場合）</p>
                    
                    <div className="flex-wrap">
                    <div className="yane_fuki_box">
                        <p><img src="/images/yane-cover_pic01.jpg" alt="" /></p>
                        <p>1.高圧洗浄</p>
                    </div>
                    <div className="yane_fuki_box">
                        <p><img src="/images/yane-cover_pic02.jpg" alt="" /></p>
                        <p>2.既存板金撤去</p>
                    </div>
                    <div className="yane_fuki_box">
                        <p><img src="/images/yane-cover_pic03.jpg" alt="" /></p>
                        <p>3.既存雪止め撤去</p>
                    </div>
                    <div className="yane_fuki_box">
                        <p><img src="/images/yane-cover_pic04.jpg" alt="" /></p>
                        <p>4.新規防水シート（ルーフィング）敷き</p>
                    </div>
                    <div className="yane_fuki_box">
                        <p><img src="/images/yane-cover_pic05.jpg" alt="" /></p>
                        <p>5.軒先板金取付け</p>
                    </div>
                    <div className="yane_fuki_box">
                        <p><img src="/images/yane-cover_pic06.jpg" alt="" /></p>
                        <p>6.新規屋根材張り</p>
                    </div>
                    <div className="yane_fuki_box">
                        <p><img src="/images/yane-cover_pic07.jpg" alt="" /></p>
                        <p>7.新規雪止め取付け</p>
                    </div>
                    <div className="yane_fuki_box">
                        <p><img src="/images/yane-cover_pic08.jpg" alt="" /></p>
                        <p>8.新規棟下地取付け</p>
                    </div>
                    <div className="yane_fuki_box">
                        <p><img src="/images/yane-cover_pic09.jpg" alt="" /></p>
                        <p>9.新規棟板金取付け</p>
                    </div>
                    <div className="yane_fuki_box">
                        <p><img src="/images/yane-cover_pic10.jpg" alt="" /></p>
                        <p>10.換気棟取付け</p>
                    </div>
                    <div className="yane_fuki_box">
                        <p><img src="/images/yane-cover_pic11.jpg" alt="" /></p>
                        <p>屋根カバー工法完</p>
                    </div>
                    </div>
                    <div className="gaiheki_content">
                    <div className="title">
                        <h3>屋根カバー工法</h3>
                    </div>
                    <div className="gaiheki_inner">
                        <div className="w60p order2 pl2p">
                            <h4 className="noto_san bold orange txt160p mb3p">屋根の上にルーフィングと新しい屋根材をかぶせる工法</h4>
                            <p className="noto_san">既存の屋根材(スレート屋根・鋼板屋根)の上に防水シート（ルーフィング）と新しいガルバリウム製の
                                屋根材をかぶせる改修工法です。</p>
                            <p>葺き替えと違い既存の屋根材を撤去する手間や処分料が不要になり工期を短縮できるというメリットもあります。
                                厚みのある断熱材が付いており断熱効果が得られます。
                                また表面には遮熱塗料が塗布されているので夏場の暑さを軽減する効果があります。</p>
                            <p>スレート屋根に鋼板屋根をかぶせる場合　㎡＝8,000円～</p>
                            <p>※屋根材の傷み具合によってはカバー工法ができない場合もあります
                                ※屋根材の傷み具合によっては下地の追い張りが必要な場合もあります</p>
                            <p>《使用屋根材》<br />
                                アイジー工業（株）　スーパーガルテクト<br />
                                色　Ｓシェイドモスグリーン</p>
                        </div>
                        <div className="w40p order1 penki_cont">
                            <p><img src="/images/yane-cover_pic12.jpg" alt="" /></p>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </section>
      </Layout>
    </>
  )
}

export default yanecover
