import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import "@fontsource/noto-sans-jp"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'


const about = () => {
  return (
    <>
        <section id="about">
            <div className="main-content">
                <div className="about_box">
                    <div className="about_l">
                        <h3>佐々木塗装について</h3>
                        <p className="title01">私達は塗装を通じてみなさまの大切なお住まいを<br className="pc" />
                        美しく蘇らせ、より一層心豊かになっていただける<br className="pc" />
                        お手伝いができればと考えております。</p>
                        
                        <p>はじめまして。株式会社佐々木塗装　代表の佐々木堅と申します。<br />
                        私たちは創業1993年以降、地元 広島県内一円で住まいの塗装・リフォーム業務をさせていただいている塗装専門会社です。</p>
                        <p><Link to="/company/" className="bt01"><FontAwesomeIcon icon={faAngleRight} /> 会社概要はこちら</Link></p>
                    </div>
                    <div className="about_r">
                    <StaticImage src="../images/about_pic01.jpg" width={761} height={508} alt="" />
                    </div>
                </div>
            </div>
        </section>

        <section id="point">
            <div className="main-content">
                <div className="point_box">
                    <div className="point_l">
                        <h3>選ばれる3つの理由</h3>
                        <p className="title02">事前の診断</p>
                        <p className="mb0">私達は住宅のお医者さん。御見積りを提出する前に先ずはお住まい全体の現在の状態を知る為に診断からさせていただきます。しっかりと調査・診断する事でご提案する内容も変わってきます。</p>
                        <p className="title02">ご予算に合わせたご提案</p>
                        <p>メーカーさんの活発な研究開発により、塗料は日々進化を続けており今や高機能塗料が主流になりつつあります。劣化の状態や素材によって使用する塗料も変わります。できる限りお客様のご要望に沿える内容のご提案をさせていただいております。</p>
                        <p className="title02">お客様との交流</p>
                        <p>私達佐々木塗装はお客様とのコミュニケーションを大切にします。<br />
                        なぜなら、塗装工事のトラブルの多くは、施主様と営業担当者や職人のコミュニケーション不足からと言ってもおかしくないからです。毎日のご訪問の中でできる限りお客様の不安や悩みをご相談いただけるように心がけております。</p>
                    </div>
                    
                    <div className="point_r">
                    <StaticImage src="../images/point_pic01.jpg" width={761} height={508} alt="" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default about
