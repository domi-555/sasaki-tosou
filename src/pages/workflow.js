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
const workflow = () => {
  return (
    <>
      <Layout>
      <Seo
        title="施工の流れ – 広島の外壁塗装なら佐々木塗装"
        description="外壁塗装・屋根塗装なら広島の佐々木塗装の施工の流れページです。"
         />
         <p id="page-top" data-sal="slide-bottom" viewOffset="0.2" data-sal-delay="200" data-sal-easing="ease"><AnchorLink to="/workflow/#pagetop" title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink></p>

<ul className="fix_bn" data-sal="slide-right" viewOffset="0.2" data-sal-delay="300" data-sal-easing="ease">
    <li><Link to="/contact_page/" className="mail_bt"><img src="/images/mail_icon.svg" width={45} height={45} className="opa" alt="" />
    <span>お問い合わせ</span></Link></li>
    <li><Link to="https://lin.ee/HR9JB00" className="line_bt" target="_blank"><img src="/images/line_icon.svg" width={45} height={45} className="opa" alt="" />
    <span>ライン見積もり</span></Link></li>
    <li className="pc"><Link to="https://twitter.com/sasakipaint1116" target="_blank" className="tw_bt"><StaticImage src="../images/tw_icon.png" width={25} height={25} className="opa" alt="" /></Link></li>
    <li className="pc"><Link to="https://www.facebook.com/profile.php?id=100063604571277" target="_blank" className="fb_bt"><StaticImage src="../images/fb_icon.png" width={25} height={25} className="opa" alt="" /></Link></li>
    <li className="pc"><Link to="https://www.instagram.com/sasaki.ryoko/" target="_blank" className="insta_bt"><span className="insta"><img src="/images/insta_icon.svg" width={25} height={25} className="opa" alt="" /></span></Link></li>
</ul>
        <div id="mainimage-sub" className='workflow'>        
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
                    <Link to="/workflow/" itemprop="item">
                        <span itemprop="name">施工の流れ</span>
                    </Link>
                    <meta itemprop="position" content="2" />
                </li>
            </ul>
        </div>
        <section id="sub-page">
            <div className="main-content">

            <h3 className="flow_title01 mt0">お問い合わせからご契約までの流れ</h3>
        <p className="center">当社の施工事例などを元に、工事内容についてお客様の納得のゆくまで説明させていただきます。</p>
        <div className="flow_box">
          <div className="w70p p1p">
            <div><span className="step_title">STEP01</span></div>
            <h4 className="flow_title">お問い合わせ・見積もりの依頼</h4>
            <p>おうちの事が気になる方はお気軽にお問い合わせください。<br />
              無料で調査"お見積りいたします。問い合わせフォームまたはお電話でお問い合わせください。<br />
              ご希望の時期に工事を行いたい方はできるだけ早めにご準備ください。</p>
          </div>
          <div className="w30p p1p"><img src="/images/flow_pic01.jpg" alt="" /></div>
        </div>
        <div className="flow_box">
          <div className="w70p p1p">
            <div><span className="step_title">STEP02</span></div>
            <h4 className="flow_title">現場調査</h4>
            <p>当社の外装劣化診断士が建物全体の調査を行います。ひび割れや膨れ、剥がれ等傷み具合を細かくチェック。<br />
            ドローンを使用して普段見る事のできない屋根や雨樋等の劣化具合を診断します。</p>
          </div>
          <div className="w30p p1p"><img src="/images/flow_pic02.jpg" alt="" /></div>
        </div>
        <div className="flow_box">
          <div className="w70p p1p">
            <div><span className="step_title">STEP03</span></div>
            <h4 className="flow_title">調査報告書・見積書の作成</h4>
            <p>建物の現状がわかりやすく明確にお伝えできるよう写真を多く取り入れた報告書を作成します。<br />
            調査内容を元にご予算に応じたプランを提案し見積書を作成いたします。<br />
            当社では正確な塗り面積を算出する為にCADで図面を起こし、リフォーム図面を作成します。</p>
          </div>
          <div className="w30p p1p"><img src="/images/flow_pic03.jpg" alt="" /></div>
        </div>
        <div className="flow_box_last">
          <div className="w70p p1p">
            <div><span className="step_title">STEP04</span></div>
            <h4 className="flow_title">見積りのご提示・ご契約</h4>
            <p>調査報告を行い見積書のご提示を行います。<br />
            工事内容についてお客様が納得いくまでご説明させていただきます。<br />
            ご納得いただけましたら契約は文書で行います。トラブル防止の為に約款、クーリングオフにっいての説明も記載しております。<br />
            リフォームローンのご利用もいただけます。</p>
          </div>
          <div className="w30p p1p"><img src="/images/flow_pic04.jpg" alt="" /></div>
        </div>
        <h4 className="flow_title01">ご契約から着工前までの流れ</h4>
        <div className="flow_box">
          <div className="w70p p1p">
            <div><span className="step_title">STEP01</span></div>
            <h4 className="flow_title">色打ち合わせ</h4>
            <p>早目に色見本をお渡しします。ご家族で塗り替え後のイメージを膨らませておいてください。<br />
              打ち合わせの際にはパソコンやテレビ画面を使用してカラーシュミレーションを行います。<br />
              塗り替え後のイメージがつかめない方にはこれまで工事をされたOB客様のお宅にご案内します。</p>
          </div>
          <div className="w30p p1p"><img src="/images/flow_pic05.jpg" alt="" /></div>
        </div>
        <div className="flow_box">
          <div className="w70p p1p">
            <div><span className="step_title">STEP02</span></div>
            <h4 className="flow_title">施工前準備</h4>
            <p>工事に入る前に足場の部材が干渉するカーポートやテラスの屋根材を撤去したりおうちの周りにある物を動かしたりします。</p>
          </div>
          <div className="w30p p1p"><img src="/images/flow_pic06.jpg" alt="" /></div>
        </div>
        <div className="flow_box_last">
          <div className="w70p p1p">
            <div><span className="step_title">STEP03</span></div>
            <h4 className="flow_title">近隣へのご挨拶</h4>
            <p>挨拶状、粗品を持ってご近所の挨拶回りをさせていただきます。<br />
              高圧洗浄の前、足場解体の前、完工後にもご近所に案内を配布いたします。</p>
          </div>
          <div className="w30p p1p"><img src="/images/flow_pic07.jpg" alt="" /></div>
        </div>
        <h4 className="flow_title01">着工から完了までの流れ</h4>
        <div className="flow_box">
          <div className="w70p p1p">
            <div><span className="step_title">STEP01</span></div>
            <h4 className="flow_title">足場組立</h4>
            <p>細心の注意をはらい足場を組み立て安全な現場を作ります。塗料が散っても大丈夫なように飛散防止ネットで養生します。<br />
              足場の組み立ては専門業者が行います。<br />
              組み立てが終わりましたら防犯対策の為に防犯センサーライトの取付けを行います。</p>
          </div>
          <div className="w30p p1p"><img src="/images/flow_pic08.jpg" alt="" /></div>
        </div>
        <div className="flow_box">
          <div className="w70p p1p">
            <div><span className="step_title">STEP02</span></div>
            <h4 className="flow_title">高圧洗浄</h4>
            <p>長年の汚れを落とす為に建物の高圧洗浄を行います。<br />
              カビや苔等も除去します。<br />
              ベランダ内部やめったに洗浄できない外構部も洗浄します。<br />
              外壁のクラック(ひび割れ)が多くみられる場合は水の大量侵入を防ぐ為、洗浄の前にクラックの補修を行います。</p>
          </div>
          <div className="w30p p1p"><img src="/images/flow_pic09.jpg" alt="" /></div>
        </div>
        <div className="flow_box">
          <div className="w70p p1p">
            <div><span className="step_title">STEP03</span></div>
            <h4 className="flow_title">外壁塗装</h4>
            <p>下塗り、上塗り(2回)の順で塗装します。 (傷み具合で塗り回数は変わります)<br />
              外壁の素材によって使用するローラーや下塗り材が変わります。<br />
              また季節によって乾燥時問が変わります。</p>
          </div>
          <div className="w30p p1p"><img src="/images/flow_pic10.jpg" alt="" /></div>
        </div>
        <div className="flow_box">
          <div className="w70p p1p">
            <div><span className="step_title">STEP04</span></div>
            <h4 className="flow_title">屋根塗装</h4>
            <p>下塗り、上塗り(2回)の順で塗装します。 (傷み具合で塗り回数は変わります)<br />
              季節によって乾燥時問が変わります。</p>
          </div>
          <div className="w30p p1p"><img src="/images/flow_pic11.jpg" alt="" /></div>
        </div>
        <div className="flow_box">
          <div className="w70p p1p">
            <div><span className="step_title">STEP05</span></div>
            <h4 className="flow_title">付帯塗装(鉄部、木部、ベランダ床面等)</h4>
            <p>下地を整えた後下塗り(または錆止め)をします。その後仕上げ塗装を行います。</p>
          </div>
          <div className="w30p p1p"><img src="/images/flow_pic12.jpg" alt="" /></div>
        </div>
        <div className="flow_box">
          <div className="w70p p1p">
            <div><span className="step_title">STEP06</span></div>
            <h4 className="flow_title">完了確認検査・足場解体</h4>
            <p>最後に現場管理者と社長による完了検査を行います。<br />
              その後お客様にも立ち会いいただき完了確認検査を行います。<br />
              問題がなければ足場の解体を行います。<br />
              解体前には窓ガラスの拭き掃除も行います。</p>
          </div>
          <div className="w30p p1p"><img src="/images/flow_pic13.jpg" alt="" /></div>
        </div>
        <div className="flow_box">
          <div className="w70p p1p">
            <div><span className="step_title">STEP07</span></div>
            <h4 className="flow_title">完成・お引渡し</h4>
            <p>カーポートやテラスの屋根材等の復旧、周囲の清掃を終えてお引渡しになります。<br />
              記念撮影やアンケートのご協力をお願いしています。</p>
          </div>
          <div className="w30p p1p"><img src="/images/flow_pic14.jpg" alt="" /></div>
        </div>
        <div className="flow_box">
          <div className="w70p p1p">
            <div><span className="step_title">STEP08</span></div>
            <h4 className="flow_title">工事報告書の提出</h4>
            <p>工事中の工程写真、完工後のお写真、保証書等をひとまとめにした報告書をお渡しします。</p>
          </div>
          <div className="w30p p1p"><img src="/images/flow_pic15.jpg" alt="" /></div>
        </div>
        <div className="flow_box_last">
          <div className="w70p p1p">
            <div><span className="step_title">STEP09</span></div>
            <h4 className="flow_title">アフターフォロー</h4>
            <p>アフターサービスの一環として定期点検を行いお客様の大切なお住まいをフォローしていきます。<br />
              工事が終わった後も何でもご相談いただける関係を築きたいと思っています。</p>
          </div>
          <div className="w30p p1p"><img src="/images/flow_pic16.jpg" alt="" /></div>
        </div>
        <p className="center mt35"><a href="/contact_page/" className="bt02">お見積もり・お問い合わせはこちらから</a></p>

            </div>
        </section>
      </Layout>
    </>
  )
}

export default workflow
