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


const Company = () => {
  return (
    <>
      <Layout>
        <Seo
        title="会社案内"
        description="外壁塗装・屋根塗装なら広島の佐々木塗装の会社案内ページです。"
         />
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
                    <Link to="/company/" itemprop="item">
                        <span itemprop="name">会社案内</span>
                    </Link>
                    <meta itemprop="position" content="2" />
                </li>
            </ul>
        </div>
        <p id="page-top" data-sal="slide-bottom" viewOffset="0.2" data-sal-delay="200" data-sal-easing="ease"><AnchorLink to="/company/#pagetop" title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink></p>

        <ul className="fix_bn" data-sal="slide-right" viewOffset="0.2" data-sal-delay="300" data-sal-easing="ease">
            <li><Link to="/contact_page/" className="mail_bt"><img src="/images/mail_icon.svg" width={45} height={45} className="opa" alt="" />
            <span>お問い合わせ</span></Link></li>
            <li><Link to="https://lin.ee/HR9JB00" className="line_bt" target="_blank"><img src="/images/line_icon.svg" width={45} height={45} className="opa" alt="" />
            <span>ライン見積もり</span></Link></li>
            <li className="pc"><Link to="https://twitter.com/sasakipaint1116" target="_blank" className="tw_bt"><StaticImage src="../images/tw_icon.png" width={25} height={25} className="opa" alt="" /></Link></li>
            <li className="pc"><Link to="https://www.facebook.com/profile.php?id=100063604571277" target="_blank" className="fb_bt"><StaticImage src="../images/fb_icon.png" width={25} height={25} className="opa" alt="" /></Link></li>
            <li className="pc"><Link to="https://www.instagram.com/sasaki.ryoko/" target="_blank" className="insta_bt"><span className="insta"><img src="/images/insta_icon.svg" width={25} height={25} className="opa" alt="" /></span></Link></li>
        </ul>
        <section id="sub-page">
            <div className="main-content">
                <h2 className="page_title01 mt0">会社案内</h2>
                <h3 className="page_title02">もっとお客様にできること</h3>
                <div className="flex-wrap">
                    <div className="w25p plr15p_smp"><img src="/images/boss_photo.png" width="100%" alt="" /></div>
                    <div className="w75p pl3p">

                        <p>はじめまして。株式会社佐々木塗装　代表の佐々木堅と申します。<br />
                        私たちは創業1993年以降、地元 広島県内一円で住まいの塗装・リフォーム業務をさせていただいている塗装専門会社です。<br />
                        塗装職人として、厳しい親方のもと修行をした後に「佐々木塗装」を起業し、2006年に「株式会社 佐々木塗装」を設立しました。多くの経験をさせていただき「安心の塗装・リフォーム工事」を地元のみなさまへご提供させていただいています。<br />
                        これもすべて私たちを信頼して、大切なお住まいの塗装・リフォーム工事をお任せくださる地元 広島のみなさんのおかげだと感謝しております。ありがとうございます！<br />
                        ここ10数年で、住まいの塗装工事に使用する塗料や工法などは、各段に進化を遂げています。ただ、どんなに塗料が発達しようが、どんなに時代が変わろうが、安心の塗装工事に大切なのは、作業をする人の手、職人の質が大切だと私は考えます。<br />
                        施工品質には特にこだわり、施主様に喜んでいただけるように一軒一軒、丁寧に工事をさせていただいています。<br />
                        塗装は家をきれいにするだけでなく、その家に暮らす人を笑顔にする仕事、また、地元 広島のみなさまとつながりを持てる仕事であり、私はこの仕事に誇りを持っております。<br />
                        まだまだ未熟な部分もありますが、初心を忘れることなく私たちは成長し続け、地元 広島に貢献していきたいと思います。</p>
                        <p className="right"><img src="/images/boss_sign.png" alt="" /></p>
                    </div>
                </div>
                <h3 className="page_title02">塗装を通じてもっとお客様に愛され続けたい。</h3>
                <div className="flex-wrap">
                    <div className="w70p pr3p">
                        <p>家は外から見る人に、その家に住んでいる人を想像させます。<br />
                        きれいな家は素敵な家族を思い浮かばせるように、<br />
                        住んでいる人の心を豊かにし、<br />
                        通る人の心まで豊かにしてくれます。<br />
                        一軒一軒の家がきれいであれば、その町はとても素敵な風景を作ります。<br />
                        また、それぞれの家に個性があるように、<br />
                        私たちは塗装業という事業を通じてお客様の家を美しく蘇らせ<br />
                        お客様の心を豊かにできるお手伝いが出来ればと考えています。<br />
                        一人でも多くの皆さまの心を豊かにしたい・・・。<br />
                        それが、私たちの願いです。</p>
                    </div>
                    <div className="w30p"><img src="/images/company_pic01.png" alt="" /></div>
                </div>
                <h3 className="page_title01">会社概要</h3>
                <table className="legal_notice">
                    <tbody>
                        <tr>
                            <th>会社名</th>
                            <td>株式会社佐々木塗装</td>
                        </tr>
                        <tr>
                            <th>設立年</th>
                            <td>平成5年</td>
                        </tr>
                        <tr>
                            <th>代表者</th>
                            <td>佐々木　堅</td>
                        </tr>
                        <tr>
                            <th>住所</th>
                            <td>〒731-0212<br /> 広島市安佐北区三入東2丁目69-3</td>
                        </tr>
                        <tr>
                            <th>TEL／FAX</th>
                            <td>082-810-5310／082-810-5311</td>
                        </tr>
                        <tr>
                            <th>E-mail</th>
                            <td>sasaki-tosou@poppy.ocn.ne.jp</td>
                        </tr>
                        <tr>
                            <th>社員</th>
                            <td>7名</td>
                        </tr>
                        <tr>
                            <th>免許</th>
                            <td>広島県知事許可（般-18）第33641号</td>
                        </tr>
                    </tbody>
                </table>
                <h3 className="page_title01">ショールームのご案内</h3>
                <div className="gmap">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6573.453602929429!2d132.53886!3d34.535149!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355a8290e1818b95%3A0x2b07a03ef471f60b!2z44CSNzMxLTAyMTIg5bqD5bO255yM5bqD5bO25biC5a6J5L2Q5YyX5Yy65LiJ5YWl5p2x77yR5LiB55uu77yR77yQ4oiS77yV!5e0!3m2!1sja!2sjp!4v1657832670073!5m2!1sja!2sjp" width="100%" height={300} title="ショールームのご案内" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
                <table className="legal_notice">
                    <tbody>
                        <tr>
                            <th>所在地</th>
                            <td>〒731-0212
                                広島市安佐北区三入東1丁目31-22岡田ビル1F</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </section>
      </Layout>
    </>
  )
}

export default Company
