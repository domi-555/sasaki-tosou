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
const faq = () => {
  return (
    <>
      <Layout>
      <Seo
        title="お客様Q&A"
        description="外壁塗装・屋根塗装なら広島の佐々木塗装のお客様Q&Aページです。"
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
                    <Link to="/faq/" itemprop="item">
                        <span itemprop="name">お客様Q&A</span>
                    </Link>
                    <meta itemprop="position" content="2" />
                </li>
            </ul>
        </div>
        <p id="page-top" data-sal="slide-bottom" viewOffset="0.2" data-sal-delay="200" data-sal-easing="ease"><AnchorLink to="/faq/#pagetop" title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink></p>

        <ul className="fix_bn" data-sal="slide-right" viewOffset="0.2" data-sal-delay="300" data-sal-easing="ease">
            <li><Link to="/contact_page/" className="mail_bt"><img src="/images/mail_icon.svg" width={45} height={45} className="opa" alt="" />
            <span>お問い合わせ</span></Link></li>
            <li><Link to="https://lin.ee/HR9JB00" className="line_bt" target="_blank"><img src="/images/line_icon.svg" width={45} height={45} className="opa" alt="" />
            <span>ライン見積もり</span></Link></li>
            <li className="pc"><Link to="https://twitter.com/sasakipaint1116" target="_blank" className="tw_bt"><img src="../images/tw_icon.png" width={25} height={25} className="opa" alt="" /></Link></li>
            <li className="pc"><Link to="https://www.facebook.com/profile.php?id=100063604571277" target="_blank" className="fb_bt"><img src="../images/fb_icon.png" width={25} height={25} className="opa" alt="" /></Link></li>
            <li className="pc"><Link to="https://www.instagram.com/sasaki.ryoko/" target="_blank" className="insta_bt"><span className="insta"><img src="/images/insta_icon.svg" width={25} height={25} className="opa" alt="" /></span></Link></li>
        </ul>
        <section id="sub-page">
            <div className="main-content">

            <h2 className="page_title01 mt0">お客様Q&A</h2>

            <p className="center"><img src="/images/faq_title.png" alt="ちょっと待った！その塗り替えだいじょうぶ？塗り替えアドバイザー佐々木良子の塗装Q＆A" /></p>
        <p className="center">塗り替えアドバイザー佐々木良子がみなさまからのご質問にお答えします。</p>
        <h3 className="page_title02">塗装について</h3>
        <h4 className="faq-q">塗装ってしないといけないの？</h4>
        <div className="faq-a">
          <p>みなさんがお住まいの住宅は新築時に何らかの塗装が施され薄い塗膜で守られています。ただし外壁や屋根は常に紫外線、風雨、排気ガスにさらされているので年数の経過とともに色褪せ、汚れ、ヒビ割れ等の劣化を起こします。
            見た目をきれいにするのはもちろんですが、建物の『保護』をするにはやはり塗装が必要です。</p>
        </div>
        <h4 className="faq-q">何年位で塗装すればいいの？</h4>
        <div className="faq-a">
          <p>一般的には塗り替えは10年に一回と言われていますが最近は１５年から２０年等と耐久性に優れた塗料もございます。ただし初めての塗り替えはできるだけ早いほうが良いと思います。劣化が少ない分仕上がりが違います。
            特に最近に主流である高意匠サイディングの場合は7年位までに（透明の塗料を用いた）クリアー塗装するのがベストです。特に直接雨や紫外線が当たり傷みやすい屋根は年数が経ちすぎると塗装によるメンテナンスができない場合もありますので要注意です。</p>
        </div>
        <h4 className="faq-q">塗り替えに適した季節っていつなの？</h4>
        <div className="faq-a">
          <p>基本的には年間通して塗装をする事は可能です。
            ただし季節によって塗り重ね乾燥時間が変わりますので冬場は多少工期が長くなる場合もあります。</p>
        </div>
        <h4 className="faq-q">どんな塗料を塗ればいいの？</h4>
        <div className="faq-a">
          <p>ここ10年で塗料も格段に進化しております。ただ色を付けるだけではなく塗料そのものが機能を持った物も多く開発されております。
            大切なのはみなさんのお宅の素材に合う物を選んでもらう事です。</p>
        </div>
        <h4 className="faq-q">色は自分たちで決める事ができるの？</h4>
        <div className="faq-a">
          <p>建物の形や素材によって合う色、合わない色もあります。
            おうちの雰囲気と好みの色合いを考慮して専門スタッフと一緒に打ち合わせをしながらお色を決めていきましょう。
            色見本帳でイメージが湧かない場合は実際に塗装工事を済ませたお客様のお宅にご案</p>
          内致します。
        </div>
        <h3 className="page_title02">工事について</h3>
        <h4 className="faq-q">工事する前に自分たちでご近所に挨拶しないといけないの？</h4>
        <div className="faq-a">
          <p>着工前の近隣ご挨拶周りは当社でやらせていただきます。
            工事の挨拶状と粗品をお渡しして心を込めてご挨拶致します。</p>
        </div>
        <h4 className="faq-q">工事の時間帯はどれくらい？</h4>
        <div className="faq-a">
          <p>季節にもよりますが準備も含めると8時から17時位までです。</p>
        </div>
        <h4 className="faq-q">工事中は駐車場に車を停めれなくなりますか？</h4>
        <div className="faq-a">
          <p>敷地が狭い場合、足場を立てるとお車を停めれなくなる事もあります。</p>
        </div>
        <h4 className="faq-q">塗装工事してる時って洗濯物が外に干せないんですよね？</h4>
        <div className="faq-a">
          <p>申し訳ありません。その通りです。
            弊社ではご希望されるお客様に部屋干し用の物干し台をお貸ししています。
            大変喜ばれています。</p>
        </div>
        <h4 className="faq-q">工事中、家にいなくても大丈夫？</h4>
        <div className="faq-a">
          <p>大丈夫です。
            塗装工事は主に外の仕事ですので気を遣われる事なく外出してください。</p>
        </div>
        <h4 className="faq-q">職人さんにお茶菓子を出さなくて大丈夫？</h4>
        <div className="faq-a">
          <p>お気持ちだけで充分です。</p>
        </div>
        <h4 className="faq-q">工事中におうちの物を壊されたらどうなるの？</h4>
        <div className="faq-a">
          <p>請負業者賠償責任保険に加入しています。
            万一の事故やおうち周りの家財の破損にもしっかりと対応致します。
            安心してください。</p>
        </div>
        <h4 className="faq-q">工事の報告は毎日してくれるの？</h4>
        <div className="faq-a">
          <p>共働きが多く、日中ご不在の家庭も多い今日です。
            当社では『塗り替え交換日記』を使って毎日の施工内容の報告や連絡事項を記入してお客様とのやり取りを行っています。</p>
        </div>
        <h4 className="faq-q">工事の保証はしてくれるの？</h4>
        <div className="faq-a">
          <p>すべての塗装工事に工事保証をお付け致します。
            ただし保証年数は仕様によって変わります。
            また塗料によってはメーカー保証が付いている物もございます。</p>
        </div>
        <h4 className="faq-q">塗装工事ってどのくらいの期間でできるの？</h4>
        <div className="faq-a">
          <p>工事の時期や建物の状況にもよりますが外壁塗装だと約2週間、外壁・屋根塗装だと約3週間、屋根の葺き替え等加わると約1ヶ月はかかります。</p>
        </div>
        <h3 className="page_title02">弊社について</h3>
        <h4 className="faq-q">小さい工事でも大丈夫？</h4>
        <div className="faq-a">
          <p>もちろんです。
            門扉や外塀等どんな小さな工事でも喜んでやらせていただきます。</p>
        </div>
        <h4 className="faq-q">契約書って交わさないといけないの？</h4>
        <div className="faq-a">
          <p>もちろんです。口約束はトラブルのもと！
            契約は私たちとお客様との大切な約束事ですからきちんと書面で行います。契約を取り交わす際には工事請負契約約款、クーリングオフについての説明書、個人情報に関する同意事項等必要な書類は全て添付します。</p>
        </div>
        <h4 className="faq-q">アフターフォローはしてくれるの？</h4>
        <div className="faq-a">
          <p>当社では施工後も長くお付き合いができるよう無料の定期点検を行っています。
            定期的な点検をする事で不具合等も早めに発見でき適切な補修をする事ができます。</p>
        </div>
        <h3 className="page_title02">料金お支払について</h3>
        <h4 className="faq-q">見積りや点検は費用がかかるの？</h4>
        <div className="faq-a">
          <p>一般的な戸建て住宅の場合は無料です。 ただし調査時に高所作業車等を使用しないといけないような大型物件は費用がかかる場合もあります。</p>
        </div>
        <h4 className="faq-q">すぐに見積書は出してもらえるの？</h4>
        <div className="faq-a">
          <p>見積書を出させていただく前に先ずは建物の現在の状態をしっかりと調査します。次に正確な塗り面積や積算数量を出すためにお客様のお宅の建築図面をお借りしてＣＡＤを起こします。調査報告書、御見積書をご提出できるのは約1週間後になります。</p>
        </div>
        <h4 className="faq-q">見積りを頼んだらなんだか断りづらい気がするのですが。</h4>
        <div className="faq-a">
          <p>そんな事はありません。それぞれにご予算があったり、見積りを依頼した業者さんと合う合わないといった事もあるでしょう。最終的な決定権はみなさんが持っているのです。みなさんの大切なおうちに手をかけるわけですから心から信頼できる業者さんを選んでください。</p>
        </div>
        <h4 className="faq-q">ローンでの支払いできますか？</h4>
        <div className="faq-a">
          <p>できます。 銀行のリフォームローン他各種クレジットでお支払いができます。 カード決済もできます。</p>
          <p className="right">
            <a href="/aeon_credit/">
              <StaticImage src="../images/pay-e1525397319415.jpg" alt="" />
            </a>
          </p>
        </div>
        <p>塗り替えで失敗したり、おうちの塗り替えを初めてされる方は多少なりとも悩みを抱えてらっしゃると思います。</p>
        <p>これまで『塗り替えセミナー』や『塗り替え相談会』をさせていただいたり、ホームページやブログをご覧いただいた方から塗装に関する質問を多くいただくようになりました。</p>
        <p>多くの方はご存じないとは思いますが実は塗装工事は各種リフォーム工事の中でも毎年一番クレームの多い工事です。</p>
        <p>みなさまが満足できる工事ができるよう、また大切なお住まいを守る為の塗装工事の情報を提供しています。</p>
        <p>どんな小さな事でも結構です</p>
        <p>お気軽にご相談ください。</p>

            </div>
        </section>
      </Layout>
    </>
  )
}

export default faq

/*Google構造化データよくある質問*/
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "塗装ってしないといけないの？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "みなさんがお住まいの住宅は新築時に何らかの塗装が施され薄い塗膜で守られています。ただし外壁や屋根は常に紫外線、風雨、排気ガスにさらされているので年数の経過とともに色褪せ、汚れ、ヒビ割れ等の劣化を起こします。 見た目をきれいにするのはもちろんですが、建物の『保護』をするにはやはり塗装が必要です。"
      }
    },
    {
      "@type": "Question",
      "name": "何年位で塗装すればいいの？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "一般的には塗り替えは10年に一回と言われていますが最近は１５年から２０年等と耐久性に優れた塗料もございます。ただし初めての塗り替えはできるだけ早いほうが良いと思います。劣化が少ない分仕上がりが違います。 特に最近に主流である高意匠サイディングの場合は7年位までに（透明の塗料を用いた）クリアー塗装するのがベストです。特に直接雨や紫外線が当たり傷みやすい屋根は年数が経ちすぎると塗装によるメンテナンスができない場合もありますので要注意です。"
      }
    },
    {
      "@type": "Question",
      "name": "塗り替えに適した季節っていつなの？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "基本的には年間通して塗装をする事は可能です。 ただし季節によって塗り重ね乾燥時間が変わりますので冬場は多少工期が長くなる場合もあります。"
      }
    },
    {
      "@type": "Question",
      "name": "どんな塗料を塗ればいいの？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ここ10年で塗料も格段に進化しております。ただ色を付けるだけではなく塗料そのものが機能を持った物も多く開発されております。 大切なのはみなさんのお宅の素材に合う物を選んでもらう事です。"
      }
    },
    { 
      "@type": "Question",
      "name": "色は自分たちで決める事ができるの？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "建物の形や素材によって合う色、合わない色もあります。 おうちの雰囲気と好みの色合いを考慮して専門スタッフと一緒に打ち合わせをしながらお色を決めていきましょう。 色見本帳でイメージが湧かない場合は実際に塗装工事を済ませたお客様のお宅にご案 内致します。"
      }
    },
    {
      "@type": "Question",
      "name": "工事する前に自分たちでご近所に挨拶しないといけないの？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "着工前の近隣ご挨拶周りは当社でやらせていただきます。 工事の挨拶状と粗品をお渡しして心を込めてご挨拶致します。"
      }
    },
    {
      "@type": "Question",
      "name": "工事の時間帯はどれくらい？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "季節にもよりますが準備も含めると8時から17時位までです。"
      }
    },
    {
      "@type": "Question",
      "name": "工事中は駐車場に車を停めれなくなりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "敷地が狭い場合、足場を立てるとお車を停めれなくなる事もあります。"
      }
    },
    {
      "@type": "Question",
      "name": "塗装工事してる時って洗濯物が外に干せないんですよね？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "申し訳ありません。その通りです。 弊社ではご希望されるお客様に部屋干し用の物干し台をお貸ししています。 大変喜ばれています。"
      }
    },
    {
      "@type": "Question",
      "name": "工事中、家にいなくても大丈夫？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "大丈夫です。 塗装工事は主に外の仕事ですので気を遣われる事なく外出してください。"
      }
    },
    {
      "@type": "Question",
      "name": "職人さんにお茶菓子を出さなくて大丈夫？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "お気持ちだけで充分です。"
      }
    },
    {
      "@type": "Question",
      "name": "工事中におうちの物を壊されたらどうなるの？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "請負業者賠償責任保険に加入しています。 万一の事故やおうち周りの家財の破損にもしっかりと対応致します。 安心してください。"
      }
    },
    {
      "@type": "Question",
      "name": "工事の報告は毎日してくれるの？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "共働きが多く、日中ご不在の家庭も多い今日です。 当社では『塗り替え交換日記』を使って毎日の施工内容の報告や連絡事項を記入してお客様とのやり取りを行っています。"
      }
    },
    {
      "@type": "Question",
      "name": "工事の保証はしてくれるの？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "すべての塗装工事に工事保証をお付け致します。 ただし保証年数は仕様によって変わります。 また塗料によってはメーカー保証が付いている物もございます。"
      }
    },
    {
      "@type": "Question",
      "name": "塗装工事ってどのくらいの期間でできるの？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "工事の時期や建物の状況にもよりますが外壁塗装だと約2週間、外壁・屋根塗装だと約3週間、屋根の葺き替え等加わると約1ヶ月はかかります。"
      }
    },
    {
      "@type": "Question",
      "name": "小さい工事でも大丈夫？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "もちろんです。 門扉や外塀等どんな小さな工事でも喜んでやらせていただきます。"
      }
    },
    {
      "@type": "Question",
      "name": "契約書って交わさないといけないの？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "もちろんです。口約束はトラブルのもと！ 契約は私たちとお客様との大切な約束事ですからきちんと書面で行います。契約を取り交わす際には工事請負契約約款、クーリングオフについての説明書、個人情報に関する同意事項等必要な書類は全て添付します。"
      }
    },
    {
      "@type": "Question",
      "name": "アフターフォローはしてくれるの？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "当社では施工後も長くお付き合いができるよう無料の定期点検を行っています。 定期的な点検をする事で不具合等も早めに発見でき適切な補修をする事ができます。"
      }
    },
    {
      "@type": "Question",
      "name": "見積りや点検は費用がかかるの？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "一般的な戸建て住宅の場合は無料です。 ただし調査時に高所作業車等を使用しないといけないような大型物件は費用がかかる場合もあります。"
      }
    },
    {
      "@type": "Question",
      "name": "すぐに見積書は出してもらえるの？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "見積書を出させていただく前に先ずは建物の現在の状態をしっかりと調査します。次に正確な塗り面積や積算数量を出すためにお客様のお宅の建築図面をお借りしてＣＡＤを起こします。調査報告書、御見積書をご提出できるのは約1週間後になります。"
      }
    },
    {
      "@type": "Question",
      "name": "見積りを頼んだらなんだか断りづらい気がするのですが。",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "そんな事はありません。それぞれにご予算があったり、見積りを依頼した業者さんと合う合わないといった事もあるでしょう。最終的な決定権はみなさんが持っているのです。みなさんの大切なおうちに手をかけるわけですから心から信頼できる業者さんを選んでください。"
      }
    },
    {
      "@type": "Question",
      "name": "ローンでの支払いできますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "できます。 銀行のリフォームローン他各種クレジットでお支払いができます。 カード決済もできます。"
    }
    }  
  ]
}

export const Head = () => (
  <>
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
  </>
)
