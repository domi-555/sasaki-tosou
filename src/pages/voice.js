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

import Seo from '../components/Seo';
import Layout from '../components/Layout';
const voice = () => {
  return (
    <>
      <Layout>
      <Seo
        title="お客様の声"
        description="外壁塗装・屋根塗装なら広島の佐々木塗装のお客様の声ページです。"
         />
        <p id="page-top" data-sal="slide-bottom" viewOffset="0.2" data-sal-delay="200" data-sal-easing="ease"><AnchorLink to="/voice/#pagetop" title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink></p>

        <ul className="fix_bn" data-sal="slide-right" viewOffset="0.2" data-sal-delay="300" data-sal-easing="ease">
            <li><Link to="/contact_page/" className="mail_bt"><img src="/images/mail_icon.svg" width={45} height={45} className="opa" alt="" />
            <span>お問い合わせ</span></Link></li>
            <li><Link to="https://lin.ee/HR9JB00" className="line_bt" target="_blank"><img src="/images/line_icon.svg" width={45} height={45} className="opa" alt="" />
            <span>ライン見積もり</span></Link></li>
            <li className="pc"><Link to="https://twitter.com/sasakipaint1116" target="_blank" className="tw_bt"><StaticImage src="../images/tw_icon.png" width={25} height={25} className="opa" alt="" /></Link></li>
            <li className="pc"><Link to="https://www.facebook.com/profile.php?id=100063604571277" target="_blank" className="fb_bt"><StaticImage src="../images/fb_icon.png" width={25} height={25} className="opa" alt="" /></Link></li>
            <li className="pc"><Link to="https://www.instagram.com/sasaki.ryoko/" target="_blank" className="insta_bt"><span className="insta"><img src="/images/insta_icon.svg" width={25} height={25} className="opa" alt="" /></span></Link></li>
        </ul>
        <div id="mainimage-sub" className='voice'>        
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
                    <Link to="/voice/" itemprop="item">
                        <span itemprop="name">お客様の声</span>
                    </Link>
                    <meta itemprop="position" content="2" />
                </li>
            </ul>
        </div>
        <section id="sub-page">
            <div className="main-content">

            <h2 className="page_title01 mt0">お客様の声</h2>

            <div className="user_voice_box">
          <h3 className="voice_title">広島市安佐北区・K様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice13_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice13_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            家が新品のようになり感動しています。<br />
            予定通りに済んだので良かったです。（雨も降らなかったので）</div>
          <h4 className="voice_subtitle">オススメポイント</h4>
          <div className="voice_txt_box">
            ■見積りの方法<br />
            ■職人さんの朝夕の挨拶<br />
            ■仕事の丁寧さ</div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">広島市安佐北区・T様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice14_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice14_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            テラス波板の撤去と取付け、雨樋の撤去及び設置、鉄柱足場作り、並びに撤去、木部、鉄部、外壁の塗装等それぞれの持ち場でそれぞれのプロばかりで施工してもらい大変きれいに仕上げていただきました。<br />
            家が見違えるほどきれいになったと思います。<br />
            特に塗装では、外壁はもちろんのこと、木部テラス、車庫内細部にわたって、また玄関前階段タイル、コンクリートのひび割れ修理等色々やっていただきありがとうございました。</div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">広島市安佐北区・Ｍ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice15_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice15_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            最後まできれいに仕上げて頂き、工事の度に説明と予定表を頂きわかりやすく、仕上がりまでの予想がつくようにしてくださり安心してお任せできました。<br />
            留守(がち)だったので色々とご迷惑をおかけする事も多かったと思われますが天候にも気をつけて丁寧に指示もして頂きありがとうございました。<br />
            本当にお疲れ様でした。<br />
            満足しております。<br />
            親切、丁寧に計画を一緒に考えて下さる所とお伝えできる会社と紹介させて頂くつもりです。</div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">広島市安佐北区・Ｍ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice16_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice16_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            日常の生活に関係する箇所は早く手をつけるが、どうしても生活に支障とならない壁等は後回しになります。<br />
            機会がありリフォームを依頼しましたが終わって一安心です。<br />
            丁寧な工事をして頂き感謝しております。</div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">広島市安佐北区・Ｋ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice17_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice17_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            我が家にとっては２回目の塗装となります。<br />
            前回の塗装は知人からの依頼で、私が単身赴任中という事もあり、ほとんど話し合う事もなく現状の色でお願いしますと伝えて工事を行いました。<br />
            それから１０数年、経年劣化を他業者から指摘を受け２回目の塗装を考えました。<br />
            当初は複数の業者から相見積もりを取り工事業者を決めるつもりでしたが佐々木塗装さんのわかりやすい説明と対応に工事をお願いする事に決めました。<br />
            ただ私には塗装より気になる事があり相談すると「なんとかなります。」との返事。<br />
            それは２階窓枠周辺のヒビ割れです。<br />
            私自身ボードを１～２枚交換しないといけないのかなと思っていたので塗装後の仕上がりを見て安心しました。<br />
            又、前回の塗装ミスで発生した玄関ドアのペンキのネチネチ感、妻が気にしていた事を担当の新田さんに話したところ、快く対処してくださり本当にありがとうございました。</div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">広島市安佐北区・Ａ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice18_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice18_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            きれいになり良かったです。<br />
            毎日声をかけてもらえ、わからない事や気になる事もすぐに聞けて安心しました。</div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">広島市安佐北区・Ｕ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice19_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice19_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            丁寧な仕事をしていただいてありがとうございます。<br />
            すっかりきれいになり満足しています。<br />
            丁寧な仕事をしてくれる会社です。</div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">広島市安佐北区・Ｋ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice20_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice20_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
          家の外観がきれいになりました。<br />
          雨漏り箇所も直りました。<br />
          細かい所まできれいに塗っていただきました。</div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">広島市安佐北区・Ｍ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice21_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice21_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            この度は古家を修理塗装していただきましてありがとうございました。<br />
            色々ハンディがありながら完了できました。<br />
            皆様のご苦労を手に取るように接して、病み加減の私方は思うような愛想もできず心残りです。<br />
            古家が新調され次の世代に渡せる家になりました。<br />
            想像していた年数よりもだいぶん長く持てそうでありがたいです。<br />
            企画の中身がガラス張りで安心感があるのは大きな売りだと思います。<br />
            塗装について特別の人以外は知らない事ばかりです。<br />
            ガラス張りの中身は書面にて表現されていて、角から角の工程が信頼おける事が誰でも実感できるのではと考えます。</div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">広島市安佐北区・Ｋ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice22_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice22_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            塗装の仕上がりを拝見して細部まで丁寧に作業して頂いているのがうかがえ満足しています。<br />
            また、作業工程の説明、進捗、工事内容の対応が良かったと思います。<br />
            金額は少々高かったですが安心、丁寧、アフター全てＯＫです。<br />
            ２０年後も利用したいです。</div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">広島市安佐北区・Ｆ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice23_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice23_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            作業はとても丁寧にされていたと思います。<br />
            他の業者の方も見られて褒めておられました。<br />
            台風が来たりしましたがその都度対応をしてくださったので良かったと思います。<br />
            作業工程等もきちんと説明し工程表等も渡してくださったので作業の進み具合もよくわかりました。<br />
            写真等も撮ってくださっていたので家の状況もよくわかりました。<br />
            工事日数は長かったように思いますが終わってみると慌ただしくされるより良かったように思います。<br />
            きれいにしてくださりありがとうございました。<br />
            見積りから作業の説明まできちんとしてくださるし仕事もとても丁寧なので他の業者さんに頼むより良いのではないかと思います。</div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">広島市安佐北区・Ｗ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice24_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice24_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            連絡ノート(交換日記)が役に立ちました。<br />
            工事の進捗状況がわかりやすく工程表の内容も理解できました。<br />
            屋根と壁の配色が良かったです。<br />
            思い切って工事に踏み切り満足しています。<br />
            ありがとうございました。</div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">広島市安佐北区・Ｙ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice25_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice25_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            今回は大変お世話になりました。<br />
            塗装はまだまだかな。どうしようかな。と迷っていたのですがやはり綺麗になるとやって良かったなと思いました。<br />
            色選びから色々な相談にのって頂き自分の理想に近い色になったと思います。<br />
            作業して頂く方にもすごく感謝しています。<br />
            とりあえず満足できる仕上がりになっています。<br />
            とても話しやすく色々な些細な事も聞けるので安心してお願いできる会社ですと紹介したいと思います。</div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">広島市安佐南区・Ｓ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice26_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice26_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            好天に恵まれ塗装は順調でしたが仕上げのシーリングは雨、もしくは曇りで施工条件が悪く付着が充分か心配である。<br />
            見積書の《その他サービス工事》でガス管塗装(給湯器下)、排水パイプ塗装(金具交換)がなかったのでひと言説明して欲しかった。<br />
            樋に高圧洗浄で流れた砂、汚泥が一部残り周囲が塗装で綺麗になったのにまことに残念だった。<br />
            塗装の施工状況はとてもよく管理されていた。<br />
            強風の日が多かったが養生も強固で、又夜間照明を設置して頂きとても安心でした。<br />
            外観は素晴らしいですが塗布量の確認はできるでしょうか。<br />
            工事の事前挨拶、事後の御礼を近隣住民に周知徹底されスムーズに作業ができとても感謝しています。</div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">広島市西区・Ｎ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice27_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice27_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            今般の外装リフォームについては非常に満足しています。<br />
            理由としては佐々木社長のお人柄と長年の経験があるためだと思います。<br />
            契約交渉時に工事の希望と補修の現状を見ての話し合いを充分詰め、金額的にも納得した契約でした。<br />
            尚、各工事担当部署の方も良い人ばかりで良い会社(佐々木塗装)には良い関係の会社が集まると思いました。<br />
            佐々木社長の方針だと思いますがお客様の身になって最後まで工事をされたので安心してお任せできたと思います。<br />
            良心的な佐々木塗装(株)で、契約して工事が終わるまで安心のできる会社です。<br />
            補修金額も正常で責任を持って工事をされるので安心して任せられます。</div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">広島市安佐北区・Y様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice28_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice28_1.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            この度の家の塗装、すべての作業がとても丁寧で感心しました。<br />
            ありがとうございました。<br />
            今後ともよろしくお願い致します。<br />
            信用できる会社だと思います。</div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">広島市東区・Ｓ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice29_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice29_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            初めの下塗りの段階で充分きれいになってまして、このまま中止にしてもらっても良いと思う位でした。<br />
            一日の仕事内容の説明もありましたので、どのように仕上がっているのか仕事から帰って見るのが楽しみでした。<br />
            仕事も早くて丁寧で、見えない所まで塗っていただいてました。<br />
            感謝です。<br />
            足場が外れた時も感動でした。<br />
            ２年位前に知り合いの方から「家の塗装をする時には良いところがあるよ。」って言われてその時には「なぜ、今？」って感じでした。<br />
            多分その方は今の私と同じ気持ちだったのでしょうね。<br />
            おそらく１ヶ月は宣伝しまくると思います。</div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">広島市安佐北区・Ｆ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice30_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice30_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            家全体をすごく良くして頂いたので少し長生きをしたいです。<br />
            素人の私が見てもすごく丁寧にして下さっていると思っておりました。<br />
            思っていたのは私だけではなく、近くの職人さんが「すごく丁寧にしてあるね。」と言われました。<br />
            思わず「そうなんですよ。」と言ってしまいました。<br />
            社長、奥様をはじめ、職人さんお一人お一人がとても心温かく安心してお任せできます。<br />
            社長、奥様のお話を少しお聞きするだけで、お仕事に対する熱意がすごく伝わります。<br />
            出来上がった時、そんな所まで、ここまでしてくださったんですねって感じです。<br />
            本当に感謝しか出てきません。</div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">広島市安佐北区・Ａ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice31_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice31_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            大変満足しています。<br />
            今どの工程をしていただいているかがわかる日記がありその事も信頼感につながりました。<br />
            どうもありがとうございました。<br />
            地元の会社なので安心感がありました。<br />
            誠実な社長、話しやすい奥様、心配りができる沖長さんのおかげで工事期間不安は一切なかったです。</div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">広島市安佐北区・Ｍ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice32_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice32_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            とても丁寧に説明していただきありがとうございました。<br />
            不安もなく安心してお願いする事ができました。<br />
            色も思い通りステキな色になり、キレイになった家でお正月を迎える事ができ嬉しく思っています。<br />
            年末までにという思いも聞いてくださりありがとうございました。</div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">広島市安佐北区・Ｈ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice33_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice33_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            佐々木塗装さんの広告を見て見積りをお願いしてもらった時、塗装の手順を十分に説明され私も納得してお願いしました。<br />
            広告に書いてあるように本当に丁寧に仕事をしていただき満足しています。<br />
            本当に有難うございました。</div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">広島市安佐北区・Ｆ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice34_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice34_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            色々な業者が訪問される中、全く知らない所は不安で顔が見える所がいいと思っていました。<br />
            どこにするかで決め手がなく延び延びになっていた時、知人に外壁塗装の話をしたら佐々木塗装さんでされて対応が良かったと言う声を聞きちょっと興味があった時、営業の沖長さんの話を聞きました。<br />
            近所にご迷惑をかけるのが心配でしたがご近所への対応もよくしてくださり仕事も丁寧で出来上がりをみた人達もいい色になったねと言われ佐々木塗装さんにして良かったと思っています。<br />
            ただ屋根の塗装が始まっても外壁の色が決まってなかったのが落ち着きませんでした。<br />
            友人にまだ色が決まっていないという必ずとエ～ッと言われました。</div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">広島市安佐北区・Ｓ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice35_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice35_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            本当に丁寧に作業していただき見違えるようになりました。<br />
            大満足です。<br />
            また工事費を安価にしていただき申し訳ありませんでした。<br />
            この会社に依頼したら間違いなく安心です。<br />
            私が保証いたします。</div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">広島市安佐北区・Ｔ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice36_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice36_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            思っていたよりきれいに丁寧に仕上がりが良かったです。<br />
            工事をしていただき本当に良かったです。<br />
            屋根の一部が腐っていたなんて全然知らず(放っておくと)大変な事になっていたでしょう。<br />
            ありがとうございます。<br />
            これからもよろしくお願いします。</div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">広島市安佐北区・Ｈ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice37_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice37_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            足場がある間は塗装の色が濃い過ぎるのではと心配したが足場を撤去後は思ったより薄く感じ今では満足している。<br />
            特に外構部のレンガ貼り付けは外観が元と比べて大きく異なり別の家のように感じ満足している。<br />
            近所の者、散歩中の者で家の塗装について話をした後に大部分の人は外構部のレンガの貼り付けを聞きたがっているのが目立った。<br />
            散歩中の通行中の人から足場を撤去した後に数軒、家を見た後に施工業者を聞かれた事があり答えておいた。</div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">広島市安佐北区・Ｍ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice38_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice38_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            ５月上旬から始まり、天候にも恵まれ約１ヶ月間で完了、大変お世話になりました。<br />
            工事、工程に関わってくださった方々、皆さん気持ちいい方々で出来上がりが楽しみでした。<br />
            外壁、塗装の色の選択で不安もありましたが思った以上の出来上がりで大満足！<br />
            プロタイムズさんにお任せして良かったと思っております。<br />
            また次回もお世話になりたいと思います。<br />
            よろしくお願い致します。</div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">廿日市市・Ｏ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice39_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice39_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            ２度目の塗り替えでした。<br />
            １回目の時より説明、打ち合わせ等丁寧で安心、信頼してお任せできました。<br />
            職人さん達も礼儀正しく笑顔の素敵な方々ばかりで好感が持てました。<br />
            薔薇の水やりで散水ホースのセットをお願いしましたが快く引き受けて下さり感謝しています。<br />
            工事に入る前、私の大事な薔薇の鉢を気を付けて運んで頂きました。<br />
            薔薇のトゲが刺さって大変だったと思います。<br />
            工事も丁寧で申し分ありません。<br />
            シートと足場が取り払われ、我が家全体が現れた時、新築みたいに美しくなっていました。<br />
            きっと薔薇を引き立たせてくれ、薔薇も含めて素敵な家になる事間違いなしです。<br />
            本当に満足です。<br />
            倉庫の塗り替えも芸術的で感動しました。<br />
            ありがとうございました。<br />
            安心、信頼してお任せできる会社です。<br />
            仕事も丁寧で細かい気配りも相談にもしっかりのって頂き信用できる会社ですよ。<br />
            選んで良かったと思っています。</div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">広島市安佐北区・Ｕ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice40_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice40_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            工事工程表を教えてもらえ、毎日朝夕に経過等の報告をしてもらえ、どうなるかとの不安もなく毎日を過ごす事ができました。<br />
            ペットの猫にも配慮してもらい、工事中不安なく過ごす事ができました。<br />
            出来上がりも満足しております。<br />
            細かな所にも気を遣っていただき良かったと思っております。<br />
            工事を頼む時、近所の人から気をつけて選んでと言われても何を基準にしていいかわからずいたのですが良かったと思っております。<br />
            室内干しとっても助かりました。</div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">広島市安佐北区・Ｈ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice41_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice41_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            色々な塗装会社の方々が何度も来られましたが、近隣への迷惑、駐車場の確保等々を考えるとなかなか工事に踏みきれずにいましたが今回佐々木塗装さんに決めたらそんな悩みをすぐに全て解決して下さり安心して工事をお願いする事ができました。<br />
            写真での説明もわかりやすく工事の流れ、日程等事前に必ず説明して下さいました。<br />
            担当の新田さんもとてもいい方で、子供達にもお隣さんにも挨拶をして下さっていました。<br />
            とても感じのいい方なので安心できました。<br />
            外壁は思い通りの色になりとても嬉しいです。<br />
            数々の配慮、気配りありがとうございました。<br />
            今後も宜しくお願い致します。</div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">広島市安佐北区・Ｈ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice42_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice42_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            足場を撤去するまで家の全体が見られないのでどんな色になっているか不安でしたが、とてもきれいに仕上がっていてとても嬉しかったです。<br />
            外壁や倉庫も塗装してもらい家全体がまとまった雰囲気になったので良かったです。<br />
            営業の方から以前から度々声をかけていただいていたのですが色々と質問した事について具体的に答えてくれました。<br />
            値段等も実際の見積りと差はなかったです。<br />
            工事中は連絡帳もあり、職人さん方にはとても丁寧に対応していただいたのでとても安心できました。<br />
            今までリフォーム等を他業者さんに頼む事が何度かありこちらの思いがうまく伝わらず困る事もありましたが佐々木塗装さんはいつも細かく連絡を取ってくれたのでこちらも相談しやすかったです。</div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">広島市安佐北区・Ｎ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice43_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice43_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            壁の塗り替えについて色見本で選んだ時にはあまりピンとこなかったが、実際に仕上がってみたら想像以上に良い仕上がりで大変満足できました。<br />
            雨樋と屋根のバランスも良く緑の屋根にして正解。<br />
            今までとまったく違った家になって外回りも気になりだした。<br />
            天候の影響を受ける為、長い間足場がありました。<br />
            取れてしまうと、こんなに明るかったのかと思わされました。</div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">広島市安佐北区・Ｋ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice44_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice44_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            屋根を葺き替えましたが出来栄えは非常に満足しています。<br />
            色具合も思っていたよりシックな感じで良かった。<br />
            雨樋も同時に取り替えた事、壁を洗ってもらった事により見違えるような外観となった。<br />
            また工事中は雨が大変多く時間がかかったと思う。<br />
            各職人さんも大変誠実に対応してもらったので良かった。</div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">広島市安佐北区・Ｋ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice45_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice45_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            1.施工については特に問題事項はありません。<br />
            2.毎日の連絡メモ帳は良い事と思います。<br />
            3.日々の作業開始、終了の連絡もきちんと行われていて助かりました。<br />
            4.作業も丁寧にされていましたので安心しています。</div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">広島市安佐北区・Ｋ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice46_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice46_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            とても丁寧に屋根(葺き替え)と外壁塗装していただきありがとうございました。<br />
            最初の説明も詳しく親切に教えてもらってこの方なら大丈夫、安心してお任せできると思いました。<br />
            本当にありがとうございました。</div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">東広島市　Ｔ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice01_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice01_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            台風の影響で雨の多い日程でしたが足場が外れ明るくなりホッとしました。
            ご近所への挨拶回りを何軒もしてくださったようで心配りありがとうございました。
            細かい箇所の塗装も快くしてくださりどの業者の方も親切丁寧で留守をする事もありましたが安心してお任せする事ができました。
            ご近所の方も見てくださり好評でした。
          </div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">広島市安佐北区　Ｔ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice02_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice02_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            梅雨時期の工事だったので毎日天気が気になっていました。
            塗装についてはメインの色だけでなく家の下部分の色も決めさせていただければ良かったかなとは思いますが、全体的な仕上がりには満足しております。
            工事に携わっていただいた方々には大変親切にしていただき感謝しています。
            ありがとうございました。
          </div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">広島市安佐北区　Ｈ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice03_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice03_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            最初に我が家を訪問され見積りの提示から工事を完了するまでどのような出来栄えになるか不安であったが、工事中の対応(近隣、居住者等)も確実に実施されており品質も満足されたものを引き渡していただいたと思います。
            今後も定期的に保守点検を実施していただければありがたいと思います。
            会社を維持する為には信用が第一ですので今の状況に満足しないで安全第一で頑張ってください。
          </div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">広島市安佐北区　Ｍ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice04_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice04_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            屋根の棟の修理、雨樋の交換、外壁塗装をお願いしました。
            各工事とも途中経過を毎日連絡していただき、気になる所も丁寧に仕上げてもらう事ができました。
            倉庫の塗装やガレージと外構の高圧洗浄もしてもらい新築のような仕上がりに満足しています。
          </div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">東広島市　Ｔ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice05_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice05_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            この度は丁寧に塗装していただきありがとうございました。
            当初、屋根及び外壁塗装しか考えておらず、提案された工事内容を見て予算面も含め悩みましたが決断に至ったのは事前の丁寧な屋根診断の結果を私たちの目で見る事ができたからだと思います。
            親身になって相談にのっていただき納得のいく色選びができました。
            ご近所方にも好評でうれしく思います。
            工事後の我が家を見て新築のようで大変感謝しています。
            ありがとうございました。
          </div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">廿日市市　Ｈ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice06_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice06_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            梅雨に入るので心配しましたが雨も少なく工事が終わりありがとうございました。
            塗装の事はよくわかりませんが外壁の色等お任せして満足しています。
            これからもよろしくお願いします
          </div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">広島市安佐北区　Ｋ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice07_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice07_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            この度事故なく無事に終了し本当にありがとうございました。
            最初の説明もわかりやすくて良かったと思います。
            カラーの見本がわかりやすかったので良い選択ができ私達の希望の色になったのでうれしかったです。
            毎日の交換ノートがあったので工程がわかり安心して任せる事ができました。
            出来上がりを見て新築のようになり大変満足しています。
            玄関の掃除や車庫の色塗り等様々なサービスがあり本当に感謝しています。
            屋根の補修も大変うれしかったです。
          </div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">広島市安佐北区　Ｏ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice08_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice08_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            1.工期　予定より少し遅れたが天候不順の為やむを得なかったと思う。
            2.費用　予算内で納めていただきありがとうございます。
            3.施工方法　着手前に説明してもらったので良く理解できました。
            4.近隣住人への配慮　施工前の挨拶や休日作業への理解など的確になされた。
            5.使用材料(品質保証)　写真や品質証明添付で理解できました。
            6.出来栄え　細部にわたり丁寧に仕上げてもらい大変満足しています。
            7.完了検査　素人への説明なのでもう少しして欲しい。
            8.交換日記　日々の作業内容や進捗状況が良くわかり好評です。
            9.その他　近隣への挨拶は程々で良いようです。
          </div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">広島市安佐北区　Ｓ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice09_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice09_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            以前から訪問、声掛けをしてくださり、今回思い切って決断して本当に良かったです。
            新築みたいにきれいになりありがとうございました。
            壁だけでなく瓦、樋まで新しくしたので本当にきれいになりました。
            玄関ブロック、石垣、基礎や倉庫まできれいにしてもらい良かったです。
            ご近所さんにも評判がいいです。
            各職人さん方は真面目で丁寧だったと思います。
            毎日朝、夕に沖長さん、増本さん(営業担当)が来られたので色々と相談しやすくて助かりました。
            駐車場を用意していただいたり、アンテナのアドバイスをしてもらったりと地元ならではの利点もあり佐々木塗装さんで良かったです。
            梅雨時だったので雨が多く心配でした。
          </div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">広島市安佐北区　Ｓ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice10_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice10_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            自宅の外装等劣化が目立つようになった。
            この際リフォームを決断し地元業者を選定し御社へ修繕依頼の声をかけた。
            御社へ工事発注し完了までの過程を注視していた。
            施工内容の説明及び施工技術等、特に問題なく引き渡し物件についても大変満足しております。
            ただ工事発注から施工開始に至るまで予定日が何回か延期になった事があり発注者の立場からみると不安感を抱いた事があった。
            御社の経営方針、施工実績、施工技術及び物件の保証等優良と判断し満足しております。
            御社を迷うことなく紹介致します。
          </div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">廿日市市　Ｙ様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice11_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice11_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            ■塗装の仕上がりに満足している(屋根はもう少し暗いイメージだった)
            ■足場の西、南側は家屋との間隔が若干狭かった。
            今回のように台風並みの風のせいで不備を生じた(西面)
            今後の課題①家屋と足場の間隔の確認　②風の対策　これらの対応お願いします。
            ■雨と連休がらみで工期が長く感じた。
          </div>
        </div>
        <div className="user_voice_box">
          <h3 className="voice_title">広島市安佐北区・T様</h3>
          <div className="flex-wrap">
            <div className="kansya_img"><img src="/images/voice/voice12_1.jpg" alt="" /></div>
            <div className="kansya_img"><img src="/images/voice/voice12_2.jpg" alt="" /></div>
          </div>
          <h4 className="voice_subtitle">お客様からのコメント</h4>
          <div>
            外壁のカラーサンプルでは小さい為、仕上がりがどのようになるのか、瓦とのバランスがどうか等不安(期待)があったのも確かです。<br />
            此度の外壁はもう少し濃い色になるものと考えておりましたが意外に明るい色だった為、少し期待していたものと違った感じがしました。<br />
            作業された方には大変良くやって頂き感謝しております。<br />
            屋根瓦や外壁も日毎になじんできて最近では良い色だと思っております。<br />
            ありがとうございました。</div>
          <h4 className="voice_subtitle">オススメポイント</h4>
          <div className="voice_txt_box">
            仕事が丁寧できめ細かい。<br />
            フォローがしっかりしていて安心できる。</div>
        </div>

            </div>
        </section>
      </Layout>
    </>
  )
}

export default voice
