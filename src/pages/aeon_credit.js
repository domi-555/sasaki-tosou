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

const aeon_credit = () => {
  return (
    <>
      <Layout>
        <Seo
            title="低金利なイオンクレジット – 広島の外壁塗装なら佐々木塗装"
            description="外壁塗装・屋根塗装なら広島の佐々木塗装の低金利なイオンクレジットの説明ページです。"
        />
        <p id="page-top" data-sal="slide-bottom" viewOffset="0.2" data-sal-delay="200" data-sal-easing="ease"><AnchorLink to="/aeon_credit/#pagetop" title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink></p>

        <ul className="fix_bn" data-sal="slide-right" viewOffset="0.2" data-sal-delay="300" data-sal-easing="ease">
            <li><Link to="/contact_page/" className="mail_bt"><img src="/images/mail_icon.svg" width={45} height={45} className="opa" alt="" />
            <span>お問い合わせ</span></Link></li>
            <li><Link to="https://lin.ee/HR9JB00" className="line_bt" target="_blank"><img src="/images/line_icon.svg" width={45} height={45} className="opa" alt="" />
            <span>ライン見積もり</span></Link></li>
            <li className="pc"><Link to="https://twitter.com/sasakipaint1116" target="_blank" className="tw_bt"><StaticImage src="../images/tw_icon.png" width={25} height={25} className="opa" alt="" /></Link></li>
            <li className="pc"><Link to="https://www.facebook.com/profile.php?id=100063604571277" target="_blank" className="fb_bt"><StaticImage src="../images/fb_icon.png" width={25} height={25} className="opa" alt="" /></Link></li>
            <li className="pc"><Link to="https://www.instagram.com/sasaki.ryoko/" target="_blank" className="insta_bt"><span className="insta"><img src="/images/insta_icon.svg" width={25} height={25} className="opa" alt="" /></span></Link></li>
        </ul>
        <div id="mainimage-sub" className='aeon-credit'>
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
                    <Link to="/aeon_credit/" itemprop="item">
                        <span itemprop="name">低金利なイオンクレジット – 広島の外壁塗装なら佐々木塗装</span>
                    </Link>
                    <meta itemprop="position" content="2" />
                </li>
            </ul>
        </div>
        <section id="sub-page">
            <div className="main-content">

            <p className="center aeon_title01">月5,200円からの外壁塗装</p>
            <p className="center">「塗り替えたいのはやまやまだけど、まとまったお金が・・・」
            「一度に工事代を支払うのは大変。」という方へ</p>
            <h3 className="sub_title02 txt250p">金利手数料</h3>
            <p className="aeon_title02">実質年率：2.50%<br />
            お取扱い金額：20万円～2,000万円まで</p>
            <p>※手数料は長期プライムレートと連動しており、変動時期は3ヶ月毎といたします。 ※ただし、契約成立後は支払い途中での金利変更はありません。</p>
            <h3 className="sub_title02 txt250p">分割払い回数</h3>
            <p className="aeon_title02">6回～180回（最長 15年）</p>
            <p>※月々の元本支払い額5,000円以上での設定となります。</p>
            <h3 className="sub_title02 txt250p">その他</h3>
            <p className="aeon_title02">一部繰り上げ返済、 全額繰り上げ返済が可能です。<br />
            団体信用保険付保0円</p>
            <p>支払い期間中に加入者様が高度障害状態になられた場合、<br />
            死亡された場合に残債務を保険金で充当する制度です。<br />
            ※手続きは保険会社所定書類へのご記入のみです。<br />
            ※保険会社の審査が必要となります。</p>
            <p className="aeon_title02">ボーナス1回払い（スキップ払い）がご利用いただけます。</p>
            <p>約6か月後までのスキップ払いが可能です。</p>
            <h3 className="sub_title02 txt250p">分割払いシミュレーション</h3>
            <p>実質年率2.50％のシミュレーション</p>
            <div className="slide_contaier">
                <div className="slide_table">
                <table className="credit_table">
                    <thead>
                    <tr>
                        <th>期間<br />
                        差引残額</th>
                        <th>1年<br />
                        (12回)</th>
                        <th>3年<br />
                        (36回)</th>
                        <th>5年<br />
                        (60回)</th>
                        <th>7年<br />
                        (84回)</th>
                        <th>8年<br />
                        (96回)</th>
                        <th>10年<br />
                        (120回)</th>
                        <th>12年<br />
                        (144回)</th>
                        <th>14年<br />
                        (168回)</th>
                        <th>15年<br />
                        (180回)</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>80万円<br />
                        (お支払総顕)</th>
                        <td>67,500円<br />
                        (810,874円)</td>
                        <td>23,000円<br />
                        (831,207円)</td>
                        <td>14,100円<br />
                        (851,873円)</td>
                        <td>10,300円<br />
                        (872,871円)</td>
                        <td>9,200円<br />
                        (883,495円)</td>
                        <td>7,500円<br />
                        (904,991円)</td>
                        <td>6,400円<br />
                        (926,817円)</td>
                        <td>5,600円<br />
                        (948,974円)</td>
                        <td>5,300円<br />
                        (960,176円)</td>
                    </tr>
                    <tr>
                        <th>100万円<br />
                        (お支払総顕)</th>
                        <td>84,400円<br />
                        (1,013,593円)</td>
                        <td>28,800円<br />
                        (1,039,009円)</td>
                        <td>17,700円<br />
                        (1,064,841円)</td>
                        <td>12,900円<br />
                        (1,091,089円)</td>
                        <td>11,500円<br />
                        (1,104,368円)</td>
                        <td>9,400円<br />
                        (1,131,238円)</td>
                        <td>8,000円<br />
                        (1,158,522円)</td>
                        <td>7,000円<br />
                        (1,186,218円)</td>
                        <td>6,600円<br />
                        (1,200,220円)</td>
                    </tr>
                    <tr>
                        <th>120万円<br />
                        (お支払総顕)</th>
                        <td>101,300円<br />
                        (1,216,312円)</td>
                        <td>34,600円<br />
                        (1,246,811円)</td>
                        <td>21,200円<br />
                        (1,277,810円)</td>
                        <td>15,500円<br />
                        (1,309,307円)</td>
                        <td>13,800円<br />
                        (1,325,242円)</td>
                        <td>11,300円<br />
                        (1,357,486円)</td>
                        <td>9,600円<br />
                        (1,390,226円)</td>
                        <td>8,400円<br />
                        (1,423,461円)</td>
                        <td>8,000円<br />
                        (1,440,264円)</td>
                    </tr>
                    <tr>
                        <th>150万円<br />
                        (お支払総顕)</th>
                        <td>126,600円<br />
                        (1,520,390円)</td>
                        <td>43,200円<br />
                        (1,558,514円)</td>
                        <td>26,600円<br />
                        (1,597,262円)</td>
                        <td>19,400円<br />
                        (1,636,634円)</td>
                        <td>17,200円<br />
                        (1,656,553円)</td>
                        <td>14,100円<br />
                        (1,696,858円)</td>
                        <td>12,000円<br />
                        (1,737,783円)</td>
                        <td>10,500円<br />
                        (1,779,327円)</td>
                        <td>10,000円<br />
                        (1,800,330円)</td>
                    </tr>
                    <tr>
                        <th>180万円<br />
                        (お支払総顕)</th>
                        <td>152,000円<br />
                        (1,824,468円)</td>
                        <td>51,900円<br />
                        (1,870,217円)</td>
                        <td>31,900円<br />
                        (1,916,715円)</td>
                        <td>23,300円<br />
                        (1,963,960円)</td>
                        <td>20,700円<br />
                        (1,987,864円)</td>
                        <td>16,900円<br />
                        (2,036,229円)</td>
                        <td>14,400円<br />
                        (2,085,340円)</td>
                        <td>12,700円<br />
                        (2,135,192円)</td>
                        <td>12,000円<br />
                        (2,160,397円)</td>
                    </tr>
                    <tr>
                        <th>200万円<br />
                        (お支払総顕)</th>
                        <td>168,900円<br />
                        (2,027,186円)</td>
                        <td>57,700円<br />
                        (2,078,019円)</td>
                        <td>35,400円<br />
                        (2,129,683円)</td>
                        <td>25,900円<br />
                        (2,182,178円)</td>
                        <td>23,000円<br />
                        (2,208,737円)</td>
                        <td>18,800円<br />
                        (2,262,477円)</td>
                        <td>16,000円<br />
                        (2,317,044円)</td>
                        <td>14,100円<br />
                        (2,372,436円)</td>
                        <td>13,300円<br />
                        (2,400,441円)</td>
                    </tr>
                    <tr>
                        <th>300万円<br />
                        (お支払総顕)</th>
                        <td>253,300円<br />
                        (3,040,780円)</td>
                        <td>86,500円<br />
                        (3,117,028円)</td>
                        <td>53,200円<br />
                        (3,194,525円)</td>
                        <td>38,900円<br />
                        (3,273,268円)</td>
                        <td>34,500円<br />
                        (3,313,106円)</td>
                        <td>28,200円<br />
                        (3,393,716円)</td>
                        <td>24,100円<br />
                        (3,475,566円)</td>
                        <td>21,100円<br />
                        (3,558,654円)</td>
                        <td>20,000円<br />
                        (3,600,661円)</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            <p className="smp txt14 center bold orange">※横スクロールできます</p>
            <p>上記金額はあくまでも目安となります。その他のお借入金額についてはお気軽にお問い合わせください。</p>

            </div>
        </section>
      </Layout>
    </>
  )
}

export default aeon_credit
