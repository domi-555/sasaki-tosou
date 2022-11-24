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

import Seo from '../components/seo'
import Layout from '../components/Layout';

const privacy = () => {
  return (
    <>
      <Layout>
        <Seo
            title="プライバシーポリシー"
            description="外壁塗装・屋根塗装なら広島の佐々木塗装のプライバシーポリシーページです。"
        />
        <p id="page-top" data-sal="slide-bottom" viewOffset="0.2" data-sal-delay="200" data-sal-easing="ease"><AnchorLink to="/privacy/#pagetop" title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink></p>

        <ul className="fix_bn" data-sal="slide-right" viewOffset="0.2" data-sal-delay="300" data-sal-easing="ease">
            <li><Link to="/contact_page/" className="mail_bt"><img src="/images/mail_icon.svg" width={45} height={45} className="opa" alt="" />
            <span>お問い合わせ</span></Link></li>
            <li><Link to="https://lin.ee/HR9JB00" className="line_bt" target="_blank"><img src="/images/line_icon.svg" width={45} height={45} className="opa" alt="" />
            <span>ライン見積もり</span></Link></li>
            <li className="pc"><Link to="https://twitter.com/sasakipaint1116" target="_blank" className="tw_bt"><StaticImage src="../images/tw_icon.png" width={25} height={25} className="opa" alt="" /></Link></li>
            <li className="pc"><Link to="https://www.facebook.com/profile.php?id=100063604571277" target="_blank" className="fb_bt"><StaticImage src="../images/fb_icon.png" width={25} height={25} className="opa" alt="" /></Link></li>
            <li className="pc"><Link to="https://www.instagram.com/sasaki.ryoko/" target="_blank" className="insta_bt"><span className="insta"><img src="/images/insta_icon.svg" width={25} height={25} className="opa" alt="" /></span></Link></li>
        </ul>
        <div id="mainimage-sub" className='company'>
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
                    <Link to="/privacy/" itemprop="item">
                        <span itemprop="name">プライバシーポリシー</span>
                    </Link>
                    <meta itemprop="position" content="2" />
                </li>
            </ul>
        </div>
        <section id="sub-page">
            <div className="main-content">

            <h2 className="page_title01 mt0">プライバシーポリシー</h2>

            <p>株式会社佐々木塗装は、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推進致します。</p>

<h3 className="page_title02">個人情報の管理</h3>

<p>株式会社佐々木塗装は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。</p>

<h3 className="page_title02">個人情報利用目的</h3>

<p>お客さまからお預かりした個人情報は、株式会社佐々木塗装からのご連絡や業務のご案内やご質問に対する回答として、電子メールや資料のご送付に利用いたします。</p>

<h3 className="page_title02">個人情報の第三者への開示・提供の禁止</h3>

<p>株式会社佐々木塗装は、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。</p>

<ul className="disc_list">
<li>お客さまの同意がある場合</li>
<li>お客さまが希望されるサービスを行なうために株式会社佐々木塗装が業務を委託する業者に対して開示する場合</li>
<li>法令に基づき開示することが必要である場合</li>
</ul>

<h3 className="page_title02">個人情報の安全対策</h3>

<p>株式会社佐々木塗装は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。</p>

<h3 className="page_title02">ご本人の照会</h3>

<p>お客さまがご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。</p>

<h3 className="page_title02">法令、規範の遵守と見直し</h3>

<p>株式会社佐々木塗装は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。</p>

<h3 className="page_title02">お問い合わせ</h3>

<p>株式会社佐々木塗装の個人情報の取扱に関するお問い合せは下記までご連絡ください。</p>

<p>お問合せ先<br />
株式会社佐々木塗装<br />
〒731-0212<br />
広島市安佐北区三入東２丁目69-3<br />
TEL：082-810-5310　FAX：082-810-5311</p>

            </div>
        </section>
      </Layout>
    </>
  )
}

export default privacy
