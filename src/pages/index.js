import React from 'react'

import { Link, graphql } from "gatsby"
import { GatsbyImage,StaticImage } from "gatsby-plugin-image"
import { AnchorLink } from "gatsby-plugin-anchor-links";

import "@fontsource/noto-sans-jp"
import '@fontsource/noto-sans-jp/700.css'
import '@fontsource/noto-sans-jp/900.css'
import "@fortawesome/fontawesome-svg-core/styles.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight,faChevronUp,faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'

import Seo from '../components/Seo'
import Header from '../components/Header';

import Kuchikomi from '../components/Kuchikomi';
import EmbedYoutube from "../components/EmbedYoutube"
import About from '../components/About';
import Footer from '../components/Footer';

const Home = ({ data }) => {  

  return (
    <>

    <Seo
    title="外壁塗装・屋根塗装なら広島の佐々木塗装｜安心施工、保証付きのアフターサービス。"
    description="外壁塗装・屋根塗装なら広島の佐々木塗装のページです。"
     />

    <Header />

    <div id="mainimage">

      <div className="catch_title">
        <h2>
          <GatsbyImage image={data.catchtxt.childImageSharp.gatsbyImageData} className="pc" alt="ご近所だからできるスピーディーな対応。地元安佐北区での施工実績豊富な佐々木塗装に相談して見ませんか？" />
          <GatsbyImage image={data.catchtxttub.childImageSharp.gatsbyImageData} className="tub" alt="ご近所だからできるスピーディーな対応。地元安佐北区での施工実績豊富な佐々木塗装に相談して見ませんか？" />
          <GatsbyImage image={data.catchtxtsmp.childImageSharp.gatsbyImageData} className="smp" alt="ご近所だからできるスピーディーな対応。地元安佐北区での施工実績豊富な佐々木塗装に相談して見ませんか？" />
        </h2>
      </div>

      <div className="main_slide">
        <div className="image"><GatsbyImage image={data.main08.childImageSharp.gatsbyImageData} className="pc" alt="" /><GatsbyImage image={data.main08smp.childImageSharp.gatsbyImageData} className="smp" alt="" /></div>
        <div className="image"><GatsbyImage image={data.main01.childImageSharp.gatsbyImageData} className="pc" alt="" /><GatsbyImage image={data.main01smp.childImageSharp.gatsbyImageData} className="smp" alt="" /></div>
        <div className="image"><GatsbyImage image={data.main02.childImageSharp.gatsbyImageData} className="pc" alt="" /><GatsbyImage image={data.main02smp.childImageSharp.gatsbyImageData} className="smp" alt="" /></div>
        <div className="image"><GatsbyImage image={data.main03.childImageSharp.gatsbyImageData} className="pc" alt="" /><GatsbyImage image={data.main03smp.childImageSharp.gatsbyImageData} className="smp" alt="" /></div>
        <div className="image"><GatsbyImage image={data.main04.childImageSharp.gatsbyImageData} className="pc" alt="" /><GatsbyImage image={data.main04smp.childImageSharp.gatsbyImageData} className="smp" alt="" /></div>
        <div className="image"><GatsbyImage image={data.main05.childImageSharp.gatsbyImageData} className="pc" alt="" /><GatsbyImage image={data.main05smp.childImageSharp.gatsbyImageData} className="smp" alt="" /></div>
        <div className="image"><GatsbyImage image={data.main06.childImageSharp.gatsbyImageData} className="pc" alt="" /><GatsbyImage image={data.main06smp.childImageSharp.gatsbyImageData} className="smp" alt="" /></div>
        <div className="image"><GatsbyImage image={data.main07.childImageSharp.gatsbyImageData} className="pc" alt="" /><GatsbyImage image={data.main07smp.childImageSharp.gatsbyImageData} className="smp" alt="" /></div>
      </div>

    </div>
    
    <p id="page-top" data-sal="slide-bottom" viewOffset="0.2" data-sal-delay="200" data-sal-easing="ease"><AnchorLink offset="0" to="#pagetop" title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink></p>
    <ul
    className="fix_bn"
    data-sal="slide-right"
    viewOffset="0.2"
    data-sal-delay="300"
    data-sal-easing="ease"
    >
              <li><Link to="/contact_page/" className="mail_bt"><img src="/images/mail_icon.svg" width={45} height={45} className="opa" alt="" />
              <span>お問い合わせ</span></Link></li>
              <li><Link to="https://lin.ee/HR9JB00" className="line_bt" target="_blank"><img src="/images/line_icon.svg" width={45} height={45} className="opa" alt="" />
              <span>ライン見積もり</span></Link></li>
              <li className="pc"><Link to="https://twitter.com/sasakipaint1116" target="_blank" className="tw_bt"><img src="/images/tw_icon.png" width={25} height={25} className="opa" alt="" /></Link></li>
              <li className="pc"><Link to="https://www.facebook.com/profile.php?id=100063604571277" target="_blank" className="fb_bt"><img src="/images/fb_icon.png" width={25} height={25} className="opa" alt="" /></Link></li>
              <li className="pc"><Link to="https://www.instagram.com/sasaki.ryoko/" target="_blank" className="insta_bt"><span className="insta"><img src="/images/insta_icon.svg" width={25} height={25} className="opa" alt="" /></span></Link></li>
        </ul>

    <div id="content">
      <div className="maincontent">
    
      

        
      
        <section id="news">
          <div className="main-content">

            <div className="news_box">
              <div className="news_l">
                <div className="flex-wrap">
                  <div className="w50p_smp">
                    <h3>NEWS</h3>
                    <h4>お知らせ</h4>
                  </div>
                  <div className="w50p_smp smp">
                    <GatsbyImage image={data.newsthumb.childImageSharp.gatsbyImageData} alt="オンリーワンの塗り替えで、もっとおうちがすきになる。" />
                  </div>
                </div>
              </div>
              <div class="news_r">
                <iframe width="100%" height={350} src="https://sasaki-tosou.co.jp/news.php" title="お知らせ一覧" target="_parent" />
              </div>
            </div>

          </div>
        </section>

        <section id="works">
          <div className="main-content">

            <h3 className="title04">安佐北区で安心して任せられる地元の塗装屋さんをお探しの方へ</h3>

            <div className="pc">
              <GatsbyImage image={data.worksbg02.childImageSharp.gatsbyImageData} alt="施工事例イメージ" />
            </div>

            <div className="smp">
              <h4><GatsbyImage image={data.worksbg02smp.childImageSharp.gatsbyImageData} alt="広島市安佐北区で施工事例913件以上!" /></h4>
            </div>

            <div className="works_inner">

              <h4 className="center mtb3p pc">
                <GatsbyImage image={data.workstxt01.childImageSharp.gatsbyImageData} alt="広島市安佐北区で施工事例913件以上!" />
              </h4>

              <div>

                <p className="center"><Link to="/case/" className="bt02"><FontAwesomeIcon icon={faAngleRight} /> 施工事例はこちらから</Link></p>
                
                <ul className="jirei_pic">
                  <li><GatsbyImage image={data.kansya01.childImageSharp.gatsbyImageData} width={200} height={267} alt="感謝状イメージ1" /></li>
                  <li><GatsbyImage image={data.kansya02.childImageSharp.gatsbyImageData} width={200} height={267} alt="感謝状イメージ2" /></li>
                </ul>

              </div>
            </div>

          </div>
        </section>

        <div className="center mtb3p">
          <StaticImage src="../images/catch_pic01.png" alt="「私たちが佐々木さんをお薦めします！！」" />
        </div>

        <Kuchikomi />

        

        <section id="works_list">
          <div className="main-content">
            <h3>ただいま施工中！</h3>
            <div className="works_cont">
              <iframe width="100%" height={900} scrolling="no" src="https://sasaki-tosou.co.jp/works.php" title="ただいま施工中一覧" target="_parent" />
            </div>
          </div>
        </section>

        <section id="movie">
          <div className="main-content">

            <h3>佐々木塗装紹介動画</h3>

            <EmbedYoutube />

            <ul className="img_list3">
              <li><Link to="/gaiheki/"><GatsbyImage image={data.bn01.childImageSharp.gatsbyImageData} className="opa" alt="外壁塗装" /></Link></li>
              <li><Link to="/yane/"><GatsbyImage image={data.bn02.childImageSharp.gatsbyImageData} className="opa" alt="屋根塗装" /></Link></li>
              <li><Link to="/yanefuki/"><GatsbyImage image={data.bn03.childImageSharp.gatsbyImageData} className="opa" alt="屋根葺替" /></Link></li>
              <li><Link to="/yanecover/"><GatsbyImage image={data.bn04.childImageSharp.gatsbyImageData} className="opa" alt="屋根カバー工法" /></Link></li>
              <li><Link to="/drainspout/"><GatsbyImage image={data.bn05.childImageSharp.gatsbyImageData} className="opa" alt="雨樋の交換" /></Link></li>
              <li><Link to="/exterior/"><GatsbyImage image={data.bn06.childImageSharp.gatsbyImageData} className="opa" alt="エクステリア" /></Link></li>
            </ul>

          </div>
        </section>

        <About />

        <section id="study">
          <div className="main-content">

            <div className="flex-wrap">

              <div className="study_r">

                <p className="title05">住宅塗装について不安や<br className="smp" />疑問ありませんか？</p>
                
                <div>
                  <GatsbyImage image={data.study01.childImageSharp.gatsbyImageData} alt="悪い業者と良い業者の見分け方は？塗料によって何がどう変わるの？見積書の見方がわからない・・・工事後の保証ってどうなるの？" />
                </div>
                
                <p className="title06">その疑問、塗り替え勉強会で<br className="smp" />お答えします！</p>
                
                <div className="center">
                  <GatsbyImage image={data.arrow01.childImageSharp.gatsbyImageData} alt="塗り替え勉強会開催日はこちら" />
                </div>
                
                <div className="study_box">
                  <dl class="study_list">
                    <dt><FontAwesomeIcon icon={faCircleChevronRight} />2022/11/6（日）</dt>
                    <dd>塗り替え勉強会を開催します　開催場所：高陽町商工会<span className="stydy_bt_box"><span className="pika_study_bt_off">勉強会は終了しました</span></span></dd>
                    <dt><FontAwesomeIcon icon={faCircleChevronRight} />2022/10/29（土）</dt>
                    <dd>塗り替え勉強会を開催します　開催場所：安佐北区民文化センター<span className="stydy_bt_box"><span className="pika_study_bt_off">勉強会は終了しました</span></span></dd>
                    <dt><FontAwesomeIcon icon={faCircleChevronRight} />2022/05/05（木）</dt>
                    <dd>コロナウイルス感染症対策で調整中。</dd>
                    <dt><FontAwesomeIcon icon={faCircleChevronRight} />2022/04/17（日）</dt>
                    <dd>市民講座「塗り替えセミナー」を行いました。<span className="stydy_bt_box"><span className="pika_study_bt_off">勉強会は終了しました</span></span></dd>
                    <dt><FontAwesomeIcon icon={faCircleChevronRight} />2022/04/09（土）</dt>
                    <dd>市民講座「塗り替えセミナー」を行いました。</dd>
                  </dl>
                </div>
                
                <div className="arekore_bn">
                  <img src="../images/column_bn01.jpg" width={900} height={300} alt="外壁塗装コラム 外壁塗装をする前に知っておきたい塗装アレコレ" />
                  <div className="arekore_bt">
                    <Link to="/tosou-arekore/"><img src="../images/column_bt01.gif" alt="" /></Link>
                  </div>
                </div>

                <p className="title05 mt3p">施工事例</p>
                
                <div className="case_cont">
                  <iframe width="100%" height={700} src="https://sasaki-tosou.co.jp/cace.php" title="施工事例一覧" target="_parent" />
                </div>
                
                <div className="p3p">
                  <p className="center"><Link to="/case/" className="bt01"><FontAwesomeIcon icon={faAngleRight} /> 施工事例はこちらから</Link></p>
                </div>
              </div>

              <div className="study_l">
                <ul className="center">
                  <li><Link to="/leak/"><GatsbyImage image={data.side01.childImageSharp.gatsbyImageData} alt="雨漏り診断" /></Link></li>
                  <li><Link to="/drone/"><GatsbyImage image={data.side02.childImageSharp.gatsbyImageData} alt="ドローンによる調査・診断を始めました" /></Link></li>
                  <li><Link to="/omoide/"><GatsbyImage image={data.side03.childImageSharp.gatsbyImageData} alt="思い出のかべ" /></Link></li>
                  <li><Link to="https://lin.ee/HR9JB00"><GatsbyImage image={data.side04.childImageSharp.gatsbyImageData} alt="お気軽にLINEで簡単お問い合わせ" /></Link></li>
                  <li><Link to="/karucera_works/"><GatsbyImage image={data.karucerabn.childImageSharp.gatsbyImageData} alt="カルセラ"/></Link></li>
                  <li><Link to="https://www.chord.or.jp/"><GatsbyImage image={data.side08.childImageSharp.gatsbyImageData} alt="住まいるダイヤル" /></Link></li>
                  <li><Link to="https://www.j-anshin.co.jp/"><img src="/images/side_ansin.svg" alt="株式会社住宅あんしん保証" /></Link></li>
                  <li><GatsbyImage image={data.side06.childImageSharp.gatsbyImageData}  alt="外装リフォームの教科書" /></li>
                  <li><Link to="https://www.mokutokyo.jp/"><GatsbyImage image={data.side07.childImageSharp.gatsbyImageData}  alt="（一社）木造住宅塗装リフォーム協会" /></Link></li>
                  <li><Link to="/aeon_credit/"><GatsbyImage image={data.side05.childImageSharp.gatsbyImageData} alt="便利な分割ローン" /></Link></li>
                  <li><GatsbyImage image={data.side09.childImageSharp.gatsbyImageData} alt="選べる支払方法" /></li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        <section id="paint">
          <div className="main-content">

          <h3>取扱い塗料</h3>

          <p className="mt3p"><GatsbyImage image={data.print01.childImageSharp.gatsbyImageData} alt="取扱い塗料-イメージ" /></p>

          <ul>
            <li><GatsbyImage image={data.paint01.childImageSharp.gatsbyImageData} alt="GAINA" /></li>
            <li><GatsbyImage image={data.paint02.childImageSharp.gatsbyImageData} alt="AGC" /></li>
            <li><GatsbyImage image={data.paint03.childImageSharp.gatsbyImageData} alt="Adgreencoat" /></li>
            <li><GatsbyImage image={data.paint04.childImageSharp.gatsbyImageData} alt="日本ペイント" /></li>
            <li><GatsbyImage image={data.paint05.childImageSharp.gatsbyImageData} alt="エスケー化研" /></li>
            <li><GatsbyImage image={data.paint06.childImageSharp.gatsbyImageData} alt="水谷ペイント株式会社" /></li>
            <li><GatsbyImage image={data.paint07.childImageSharp.gatsbyImageData} alt="菊水化学工場株式会社" /></li>
            <li><GatsbyImage image={data.paint08.childImageSharp.gatsbyImageData} alt="AUTO" /></li>
            <li><GatsbyImage image={data.paint09.childImageSharp.gatsbyImageData} alt="ASTEC" /></li>
            <li><GatsbyImage image={data.paint10.childImageSharp.gatsbyImageData} alt="スズカファイン株式会社" /></li>
            <li><GatsbyImage image={data.paint11.childImageSharp.gatsbyImageData} alt="WB多彩仕上工法" /></li>
            <li><GatsbyImage image={data.paint12.childImageSharp.gatsbyImageData} alt="株式会社鶴弥" /></li>
            <li><GatsbyImage image={data.paint13.childImageSharp.gatsbyImageData} alt="IG KOGYO" /></li>
            <li><GatsbyImage image={data.paint14.childImageSharp.gatsbyImageData} alt="Dee Trading CO.,LTD." /></li>
            <li><GatsbyImage image={data.paint15.childImageSharp.gatsbyImageData} alt="LIXIL" /></li>
            <li><GatsbyImage image={data.paint16.childImageSharp.gatsbyImageData} alt="カルセラ" /></li>
          </ul>

          </div>
        </section>

        <section id="sdgs">
          <div className="main-content">
            <h3>持続可能な開発目標（SDGs）達成への取組み</h3>
            <p className="center">
              <GatsbyImage image={data.sdgs01.childImageSharp.gatsbyImageData} alt="SUSTAINABLE DEVELOPMENT GOALS" />
            </p>
            <p className="center"><Link to="/sdgs/" className="bt01"><FontAwesomeIcon icon={faAngleRight} /> SDGSの取り組みはこちら</Link></p>
          </div>
        </section>

        <section id="soudan">
          <div className="main-content">

            <h3 className="p1p"><GatsbyImage image={data.corona01.childImageSharp.gatsbyImageData} alt="屋根・外装塗装専門店 屋根・壁の痛みが気になるが新型コロナウィルスで後回しになっている方へ" /></h3>

          </div>
        </section>
    
        </div>
      </div>
      
      <div id="souba_check" className="souba_h">
        <iframe id="souba" width="100%" height={1000} scrolling="no" src="https://sasaki-tosou.co.jp/souba.html" title="相場チェック" target="_top" />
      </div>

      <section id="access">
        <div className="main-content">
          <div className="gmap">
            <iframe title="GoogleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6573.319908924152!2d132.54162462602378!3d34.536842271907204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355a8281c2fd5363%3A0x2984c2ecc13d2926!2z5L2Q44CF5pyo5aGX6KOF!5e0!3m2!1sja!2sjp!4v1654040493911!5m2!1sja!2sjp" width="100%" height={400} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>


      <Footer />

    </>
  )
}

const jsonLd = {    
  "@context": "http://schema.org",
  "@type": "HowTo",
  "name": "最短10秒無料相場チェックの流れ",
  "description": "広島外壁塗装｜広島市安佐北区で施工実績No.1。広島発のドローンを使用した外装劣化診断士による診断。安心施工、保証付きのアフターサービス。大切な住まいの塗り替えは一級塗装技能士在籍、塗装のプロフェッショナル集団。屋根・外壁塗装の専門店の佐々木塗装にお任せください。 ［無料診断・無料見積を実施中］",
  "image": {
    "@type": "ImageObject",
    "url": "https://sasaki-tosou.co.jp/images/souba_oneesan_smp.jpg"
  },
  "supply": [
    {
      "@type": "HowToSupply",
      "name": "none"
    }, {
      "@type": "HowToSupply",
      "name": "none"
    }, {
      "@type": "HowToSupply",
      "name": "none"
    }
  ],
  "tool": [
    {
      "@type": "HowToTool",
      "name": "PC SmartPhone"
    }, {
      "@type": "HowToTool",
      "name": "PC SmartPhone"
    },{
      "@type": "HowToTool",
      "name": "PC SmartPhone"
    }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "ステップ1",
      "text": "相場チェックフォームにご入力。お住まいの情報をフォームにご入力下さい。",
      "image": "https://sasaki-tosou.co.jp/images/souba_txt01.png",
      "url": "https://sasaki-tosou.co.jp/#souba_check"
    },
    {
      "@type": "HowToStep",
      "name": "ステップ2",
      "text": "資格所有の塗装専門担当者が外壁塗装の相場についてお答え。ご不明点も解消いただけます。",
      "image": "https://sasaki-tosou.co.jp/images/souba_txt02.png",
      "url": "https://sasaki-tosou.co.jp/#souba_check"
    }
    ,
    {
      "@type": "HowToStep",
      "name": "ステップ3",
      "text": "資格所有の塗装専門担当者が外壁塗装の相場についてお答え。ご不明点も解消いただけます。",
      "image": "https://sasaki-tosou.co.jp/images/souba_txt03.png",
      "url": "https://sasaki-tosou.co.jp/#souba_check"
    }
  ],
  "totalTime": "PT10S"
}

export const Head = () => (
  <>
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>    
  </>
)

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

  main01: file(relativePath: {eq: "mainimage01.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }

  main01smp: file(relativePath: {eq: "mainimage01_smp.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }

  main02: file(relativePath: {eq: "mainimage02.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  main02smp: file(relativePath: {eq: "mainimage02_smp.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }

  main03: file(relativePath: {eq: "mainimage03.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  main03smp: file(relativePath: {eq: "mainimage03_smp.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }

  main04: file(relativePath: {eq: "mainimage04.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  main04smp: file(relativePath: {eq: "mainimage04_smp.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }

  main05: file(relativePath: {eq: "mainimage05.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  main05smp: file(relativePath: {eq: "mainimage05_smp.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }

  main06: file(relativePath: {eq: "mainimage06.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  main06smp: file(relativePath: {eq: "mainimage06_smp.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }

  main07: file(relativePath: {eq: "mainimage07.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  main07smp: file(relativePath: {eq: "mainimage07_smp.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }

  main08: file(relativePath: {eq: "mainimage08.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  main08smp: file(relativePath: {eq: "mainimage08_smp.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }

  catchtxt: file(relativePath: {eq: "catch_txt.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  catchtxttub: file(relativePath: {eq: "catch_txt.png"}) {
    childImageSharp {
      gatsbyImageData(width: 1280, layout: CONSTRAINED)
    }
  }
  catchtxtsmp: file(relativePath: {eq: "catch_txt_smp.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }

  worksbg02: file(relativePath: {eq: "works_bg02.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  worksbg02smp: file(relativePath: {eq: "works_bg02_smp.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  workstxt01: file(relativePath: {eq: "works_txt01.png"}) {
    childImageSharp {
      gatsbyImageData(width: 680, layout: CONSTRAINED)
    }
  }
  kansya01: file(relativePath: {eq: "kansyajyo_pic01.png"}) {
    childImageSharp {
      gatsbyImageData(width: 200, layout: CONSTRAINED)
    }
  }
  kansya02: file(relativePath: {eq: "kansyajyo_pic02.png"}) {
    childImageSharp {
      gatsbyImageData(width: 200, layout: CONSTRAINED)
    }
  }

  catch01: file(relativePath: {eq: "catch_pic01.png"}) {
    childImageSharp {
      gatsbyImageData(width: 1200, layout: CONSTRAINED)
    }
  }
  
  newsthumb: file(relativePath: {eq: "news_thumb.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 1200, layout: CONSTRAINED)
    }
  }

  bn01: file(relativePath: {eq: "bn01.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  bn02: file(relativePath: {eq: "bn02.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  bn03: file(relativePath: {eq: "bn03.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  bn04: file(relativePath: {eq: "bn04.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  bn05: file(relativePath: {eq: "bn05.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  bn06: file(relativePath: {eq: "bn06.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }

  about01: file(relativePath: {eq: "about_pic01.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }

  point01: file(relativePath: {eq: "point_pic01.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }

  study01: file(relativePath: {eq: "study_pic01.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }

  print01: file(relativePath: {eq: "print_img01.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }

  sdgs01: file(relativePath: {eq: "sdg_poster_ja_2021.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }

  corona01: file(relativePath: {eq: "corona_img.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }

  side01: file(relativePath: {eq: "side01.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 264, layout: CONSTRAINED)
    }
  }
  side02: file(relativePath: {eq: "side02.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 264, layout: CONSTRAINED)
    }
  }
  side03: file(relativePath: {eq: "side03.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 264, layout: CONSTRAINED)
    }
  }
  side04: file(relativePath: {eq: "side04.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 264, layout: CONSTRAINED)
    }
  }
  side05: file(relativePath: {eq: "side05.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 264, layout: CONSTRAINED)
    }
  }
  side06: file(relativePath: {eq: "side06.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 264, layout: CONSTRAINED)
    }
  }
  side07: file(relativePath: {eq: "side07.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 264, layout: CONSTRAINED)
    }
  }
  side08: file(relativePath: {eq: "side08.png"}) {
    childImageSharp {
      gatsbyImageData(width: 264, layout: CONSTRAINED)
    }
  }
  side09: file(relativePath: {eq: "side09.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 264, layout: CONSTRAINED)
    }
  }

  karucerabn: file(relativePath: {eq: "karucera_bn.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 264, layout: CONSTRAINED)
    }
  }
  
  paint01: file(relativePath: {eq: "paint_logo01.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 274, layout: CONSTRAINED)
    }
  }
  paint02: file(relativePath: {eq: "paint_logo02.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 274, layout: CONSTRAINED)
    }
  }
  paint03: file(relativePath: {eq: "paint_logo03.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 274, layout: CONSTRAINED)
    }
  }
  paint04: file(relativePath: {eq: "paint_logo04.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 274, layout: CONSTRAINED)
    }
  }
  paint05: file(relativePath: {eq: "paint_logo05.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 274, layout: CONSTRAINED)
    }
  }
  paint06: file(relativePath: {eq: "paint_logo06.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 274, layout: CONSTRAINED)
    }
  }
  paint07: file(relativePath: {eq: "paint_logo07.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 274, layout: CONSTRAINED)
    }
  }
  paint08: file(relativePath: {eq: "paint_logo08.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 274, layout: CONSTRAINED)
    }
  }
  paint09: file(relativePath: {eq: "paint_logo09.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 274, layout: CONSTRAINED)
    }
  }
  paint10: file(relativePath: {eq: "paint_logo10.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 274, layout: CONSTRAINED)
    }
  }
  paint11: file(relativePath: {eq: "paint_logo11.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 274, layout: CONSTRAINED)
    }
  }
  paint12: file(relativePath: {eq: "paint_logo12.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 274, layout: CONSTRAINED)
    }
  }
  paint13: file(relativePath: {eq: "paint_logo13.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 274, layout: CONSTRAINED)
    }
  }
  paint14: file(relativePath: {eq: "paint_logo14.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 274, layout: CONSTRAINED)
    }
  }
  paint15: file(relativePath: {eq: "paint_logo15.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 274, layout: CONSTRAINED)
    }
  }
  paint16: file(relativePath: {eq: "paint_logo16.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 274, layout: CONSTRAINED)
    }
  }

}
`

export default Home