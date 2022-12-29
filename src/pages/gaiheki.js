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

const gaiheki = () => {
  return (
    <>
      <Layout>
        <Seo
            title="外壁塗装"
            description="外壁塗装・屋根塗装なら広島の佐々木塗装の外壁塗装ページです。"
        />
        <p id="page-top" data-sal="slide-bottom" viewOffset="0.2" data-sal-delay="200" data-sal-easing="ease"><AnchorLink to="/gaiheki/#pagetop" title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink></p>

        <ul className="fix_bn" data-sal="slide-right" viewOffset="0.2" data-sal-delay="300" data-sal-easing="ease">
            <li><Link to="/contact_page/" className="mail_bt"><img src="/images/mail_icon.svg" width={45} height={45} className="opa" alt="" />
            <span>お問い合わせ</span></Link></li>
            <li><Link to="https://lin.ee/HR9JB00" className="line_bt" target="_blank"><img src="/images/line_icon.svg" width={45} height={45} className="opa" alt="" />
            <span>ライン見積もり</span></Link></li>
            <li className="pc"><Link to="https://twitter.com/sasakipaint1116" target="_blank" className="tw_bt"><img src="../images/tw_icon.png" width={25} height={25} className="opa" alt="" /></Link></li>
            <li className="pc"><Link to="https://www.facebook.com/profile.php?id=100063604571277" target="_blank" className="fb_bt"><img src="../images/fb_icon.png" width={25} height={25} className="opa" alt="" /></Link></li>
            <li className="pc"><Link to="https://www.instagram.com/sasaki.ryoko/" target="_blank" className="insta_bt"><span className="insta"><img src="/images/insta_icon.svg" width={25} height={25} className="opa" alt="" /></span></Link></li>
        </ul>
        <div id="mainimage-sub" className='gaiheki'>
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
                    <Link to="/gaiheki/" itemprop="item">
                        <span itemprop="name">外壁塗装</span>
                    </Link>
                    <meta itemprop="position" content="2" />
                </li>
            </ul>
        </div>
        <section id="sub-page">
            <div className='main-content'>
                
                <div className="gaiheki_title_box">
                    <h1>
                    <StaticImage src="../images/gaiheki_img01.png" alt="塗りたてがキレイなのは当たり前。どこまで持たせるかは工事の品質によって変わります。 外壁塗装" className="pc" />
                    <StaticImage src="../images/gaiheki_img01_smp.png" alt="塗りたてがキレイなのは当たり前。どこまで持たせるかは工事の品質によって変わります。 外壁塗装" className="smp" />
                    </h1>
                </div>

                <div className="gaiheki_img_box">
                    <div className='gaiheki_box_img'>
                        <StaticImage src="../images/gaiheki_img02.jpg" alt="" />
                    </div>
                    <div className='gaiheki_box_txt'>
                        <p>外壁は傷み具合によって補修の有無、適正な塗料の選定も変わります。</p>
                        <p>これまで多くのお客様のお宅の工事を手掛けてきた私たちが自信を持って調査ご提案させていただいております。</p>
                        <p>施工は、職人経験のある社長のもと、経験豊富な職人たちが品質にこだわり丁寧に仕上げていきます。</p>
                        <p>お客様には、新しく生まれ変わるおうちのイメージを膨らませて、カラーシュミレーションを一緒に楽しんでいただきたいです。</p>
                    </div>
                </div>

                <div className="gaiheki_title_box p0 mt50">
                        <div className='gaiheki_title_img'>
                            <h2><StaticImage src="../images/gaiheki_img03.png" alt="外壁塗装プラン30坪（100㎡程度）" /></h2>
                        </div>
                        <div className='gaiheki_title_txt'>
                            <StaticImage src="../images/gaiheki_img04.png" alt="足場養生→高圧洗浄→下地処理→塗装(3回)→アフター 全て含め ※ケレン作業・シーリング作業別途" />
                        </div>
                </div>

                <ul className="gaiheki_price_list">
                    <li><StaticImage src="../images/gaiheki_price01.png" alt="シリコンプラン" /></li>
                    <li><StaticImage src="../images/gaiheki_price02.png" alt="ラジカル制御形プラン" /></li>
                    <li><StaticImage src="../images/gaiheki_price03.png" alt="低汚染プラン" /></li>
                    <li><StaticImage src="../images/gaiheki_price04.png" alt="無機プラン" /></li>
                    <li><StaticImage src="../images/gaiheki_price05.png" alt="最高級フッ素プラン" /></li>
                </ul>

                <div className="comment_box">
                <div className="comment_l"><StaticImage src="../images/boss_photo2.jpg" alt="佐々木塗装代表-写真" /></div>
                <div className="comment_r">
                    <div>
                        塗料の種類は様々です。<br />
                        ただ色をつけるだけでなく、最近は塗料そのものに機能をもった商品も多くあります。<br />
                        ただし、高級な塗料を選べば塗装工事が成功するわけではありません。<br />
                        大事なのは素材に合った塗料を選ぶ事。そして塗装の仕様を守る事です。<br />
                        お住いのメンテナンス計画も考慮してピッタリのプランを選んで下さい。
                    </div>
                </div>
                </div>

                <h2 class="page_title01 mt0">外壁塗装</h2>

                <p className="center mt3p">プラン別に塗料の特徴を紹介します</p>

                <div className="gaiheki_link_box">
                    <div className="link_bn_box">
                        <AnchorLink to="/gaiheki/#silicon" offset="50">
                            <dl>
                                <dt>シリコン塗料<img src="/images/arrow_r.svg" alt="" /></dt>
                                <dd>コストパフォーマンスに優れた人気塗料
                                10年毎の塗り替えに最適です。</dd>
                            </dl>
                        </AnchorLink>
                    </div>
                    <div className="link_bn_box">
                        <AnchorLink to="/gaiheki/#radical" offset="50">
                            <dl>
                                <dt>ラジカル制御型塗料<img src="/images/arrow_r.svg" alt="" /></dt>
                                <dd>汚れに強い塗料
                                シリコンよりワンランク上のおススメ塗料</dd>
                            </dl>
                        </AnchorLink>
                    </div>
                    <div className="link_bn_box">
                        <AnchorLink to="/gaiheki/#low-pollution" offset="50">
                        <dl>
                            <dt>低汚染塗料<img src="/images/arrow_r.svg" alt="" /></dt>
                            <dd>セルフクリーニング効果と親水性で汚れ知らず</dd>
                        </dl>
                        </AnchorLink>
                    </div>
                    <div className="link_bn_box">
                        <AnchorLink to="/gaiheki/#heat-shielding" offset="50">
                            <dl>
                                <dt>遮熱塗料<img src="/images/arrow_r.svg" alt="" /></dt>
                                <dd>建物の表面で太陽熱を反射させ夏の暑さを
                                軽減する省エネ効果がある塗料</dd>
                            </dl>
                        </AnchorLink>
                    </div>
                    <div className="link_bn_box">
                        <AnchorLink to="/gaiheki/#insulation" offset="50">
                            <dl>
                                <dt>断熱塗料<img src="/images/arrow_r.svg" alt="" /></dt>
                                <dd>熱伝導を抑える効果を持った省エネ塗料
                                音を小さくする防音効果も期待できます</dd>
                            </dl>
                        </AnchorLink>
                    </div>
                    <div className="link_bn_box">
                        <AnchorLink to="/gaiheki/#inorganic-hybrid" offset="50">
                            <dl>
                                <dt>無機ハイブリッド塗料<img src="/images/arrow_r.svg" alt="" /></dt>
                                <dd>有機と無機を融合させた新しいタイプの塗料
                                耐候性も優れています</dd>
                            </dl>
                        </AnchorLink>
                    </div>
                    <div className="link_bn_box">
                        <AnchorLink to="/gaiheki/#fluorine" offset="50">
                            <dl>
                                <dt>フッ素塗料<img src="/images/arrow_r.svg" alt="" /></dt>
                                <dd>紫外線や酸性雨に強く耐撰性の高い塗料</dd>
                            </dl>
                        </AnchorLink>
                    </div>
                    <div className="link_bn_box">
                        <AnchorLink to="/gaiheki/#clear-coating" offset="50">
                            <dl>
                                <dt>クリアー塗料<img src="/images/arrow_r.svg" alt="" /></dt>
                                <dd>無色透明な塗料を使用して外壁の保護を
                                する塗料</dd>
                            </dl>
                        </AnchorLink>
                    </div>
                    <div className="link_bn_box">
                        <AnchorLink to="/gaiheki/#variegated-pattern" offset="50">
                            <dl>
                                <dt>多彩模様塗料<img src="/images/arrow_r.svg" alt="" /></dt>
                                <dd>表面に吹き付けるカラーフレークにより
                                単色塗装にはない深みが生まれます</dd>
                            </dl>
                        </AnchorLink>
                    </div>
                    <div className="link_bn_box">
                        <AnchorLink to="/gaiheki/#finishing-touches" offset="50">
                            <dl>
                                <dt>多彩仕上工法<img src="/images/arrow_r.svg" alt="" /></dt>
                                <dd>2色または3色の塗料を使用して意匠性の
                                ある豪華な壁面を作り出します</dd>
                            </dl>
                        </AnchorLink>
                    </div>
                </div>

                <div className="gaiheki_content" id="silicon">
                    <div className="title">
                        <h3>シリコン塗料</h3>
                        <div className="nensu_box">
                            <dl>
                                <dt>耐用年数</dt>
                                <dd>7～10年</dd>
                            </dl>
                            <div>※立地条件により変わります</div>
                        </div>
                    </div>
                    <div className="gaiheki_inner">
                        <div className="w60p order2 pl2p">
                            <h4 className="noto_san bold orange txt160p mb3p">コストパフォーマンスに優れた人気塗料</h4>
                            <p className="noto_san">10年毎の塗り替えに最適です<br />
                                できるだけ費用を抑えたいという方にお勧めな塗料です。集合住宅でも多く採用されています。</p>
                            <p>モルタル・ALC　下塗り（フィラー）・上塗り2回塗り㎡＝2,500円～<br />
                                サイディング・パネル 下塗り（シーラー）・上塗り2回塗り㎡＝2,300円～</p>
                            <p>※水性、弱溶剤で単価が変わります<br />
                                ※劣化具合により塗り回数が変わります</p>
                            <p>《推奨塗料》<br />
                                アステックペイントス―パーラジカルシリコンGH</p>
                        </div>
                        
                        <div className="w40p order1 penki_cont">
                            <p><StaticImage src="../images/gaiheki_pic01.jpg" width={438} height={332} alt="" /></p>
                            <div className="penki_box">
                                <p className="noto_san bold txt12">《使用塗料》<br />
                                アステックペイントシリコンフレックス</p>
                                <p><StaticImage src="../images/gaiheki_pic02.jpg" width={101} height={119} alt="" /></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="gaiheki_content" id="radical">
                    <div className="title">
                        <h3>ラジカル制御型塗料</h3>
                        <div className="nensu_box">
                            <dl>
                                <dt>耐用年数</dt>
                                <dd>10～12年</dd>
                            </dl>
                            <div>※立地条件により変わります</div>
                        </div>
                    </div>
                    <div className="gaiheki_inner">
                        <div className="w60p order2 pl2p">
                            <h4 className="noto_san bold orange txt160p mb3p">汚れに強い塗料<br />
                            シリコンよりワンランク上のおススメ塗料</h4>
                            <p className="noto_san">塗膜の劣化原因であるラジカルの発生を抑制する酸化チタンと光安定剤(HALS)が含まれている塗料。<br />
                            チヨーキング現象に対して高い効果があります。</p>
                            <p>モルタル・ALC　下塗り(フィラー)・上塗り2回塗り㎡＝2,800円～<br />
                            サイディング・パネル　下塗り(シーラー)・上塗り2回塗り㎡＝2,500円～</p>
                            <p>※水性、弱溶剤で単価が変わります<br />
                            ※劣化具合により塗り回数が変わります</p>
                            <p>《推奨塗料》<br />
                            日本ペイント　パーフェクトトップ<br />
                            日本ペイントファインパーフェクトトップ<br />
                            エスケー化研プレミアムシリコン</p>
                        </div>
                        <div className="w40p order1 penki_cont">
                            <p><StaticImage src="../images/gaiheki_pic03.jpg" width={444} height={332} alt="" /></p>
                            <div className="penki_box">
                            <p className="noto_san bold txt12">《使用塗料》<br />
                                日本ペイントパ―フェクトトップ</p>
                            <p><StaticImage src="../images/gaiheki_pic04.jpg" width={111} height={148} alt="" /></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="gaiheki_content" id="low-pollution">
                    <div className="title">
                        <h3>低汚染塗料</h3>
                        <div className="nensu_box">
                            <dl>
                                <dt>耐用年数</dt>
                                <dd>12～15年</dd>
                            </dl>
                            <div>※立地条件により変わります</div>
                        </div>
                    </div>
                    <div className="gaiheki_inner">
                        <div className="w60p order2 pl2p">
                        <h4 className="noto_san bold orange txt160p mb3p">セルフクリーニング効果と親水性で汚れ知らず<br />
                            長い間美観を保持する事ができます</h4>
                        <p className="noto_san">外壁に汚れが付着しても雨水が汚れを浮かせて洗い流してくれます。<br />
                            いつまでもおうちをきれいに保ちたい方におススメです。</p>
                        <p>モルタル・ALC　下塗り（フィラー）・上塗り2回塗り㎡=3,500円～<br />
                            サイディング・パネル下塗り（シーラー） ・上塗り2回塗り㎡=3,200円～</p>
                        <p>※水性、弱溶剤で単価が変わります<br />
                            ※劣化具合により塗り回数が変わります</p>
                        <p>《推奨塗料》<br />
                            アステックペイント超低汚染リファイン1000Si-IR<br />
                            アステックペイント超低汚染リファイン1000MF-IR</p>
                        </div>
                        <div className="w40p order1 penki_cont">
                            <p><StaticImage src="../images/gaiheki_pic05.jpg" width={428} height={321} alt="" /></p>
                            <div className="penki_box">
                                <p className="noto_san bold txt12">《使用塗料》<br />
                                アステックペイント<br />
                                超低汚染リファイン1000Si-IR</p>
                                <p><StaticImage src="../images/gaiheki_pic06.jpg" width={105} height={103} alt="" /></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gaiheki_content" id="heat-shielding">
                    <div className="title">
                        <h3>遮熱塗料</h3>
                        <div className="nensu_box">
                            <div>※耐用年数は塗料に使用される樹脂や立地条件により変わります</div>
                        </div>
                    </div>
                    <div className="gaiheki_inner">
                        <div className="w60p order2 pl2p">
                            <h4 className="noto_san bold orange txt160p mb3p">建物の表面で太陽熱を反射させ夏の暑さを軽減する省エネ効果のある塗料</h4>
                            <p className="noto_san">年々上昇する夏の気温。遮熱塗料を使用する事で建物の表面温度が下がり室内温度も下がります。</p>
                            <p>モルタル・ALC　下塗り(フィラー)・上塗り2回塗り㎡＝3,500円～<br />
                            サイディング・パネル下塗り(シーラー)・上塗り2回塗り㎡＝3,200円～</p>
                            <p>※水性、弱溶剤、樹脂で単価が変わります<br />
                            ※劣化具合により塗り回数が変わります</p>
                            <p>《推奨塗料》<br />
                            日本ペイント水性サーモアイウォールSi<br />
                            アステックペイント　超低汚染リファイン1000Si-IR<br />
                            アステックペイント　超低汚染リファイン1000MF-IR<br />
                            NCK アドグリーンコート</p>
                        </div>
                        <div className="w40p order1 penki_cont">
                            <p><StaticImage src="../images/gaiheki_pic07.jpg" width={428} height={321} alt="" /></p>
                            <div className="penki_box">
                            <p className="noto_san bold txt12">《使用塗料》<br />
                                アステックペイント<br />
                                超低汚染リファイン1000Si-IR</p>
                            <p><StaticImage src="../images/gaiheki_pic08.jpg" width={105} height={103} alt="" /></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gaiheki_content" id="insulation">
                    <div className="title">
                        <h3>断熱塗料</h3>
                        <div className="nensu_box">
                            <dl>
                                <dt>耐用年数</dt>
                                <dd>12～15年</dd>
                            </dl>
                            <div>※立地条件により変わります</div>
                        </div>
                    </div>
                    <div className="gaiheki_inner">
                        <div className="w60p order2 pl2p">
                            <h4 className="noto_san bold orange txt160p mb3p">熱伝導を抑える効果を持った省エネ塗料<br />
                            音を小さくする防音効果も期待できます</h4>
                            <p className="noto_san">断熱材のように熱が伝わるのを防ぎ室温を外に逃さない効果もあります。</p>
                            <p>モルタル・ALC　下塗り（フィラー）・上塗り2回塗り㎡＝4,300 円～<br />
                            サイディング・パネル下塗り（シーラー）・上塗り2回塗り㎡＝4,000 円～</p>
                            <p>※劣化具合により塗り回数が変わります</p>
                            <p>《推奨塗料》<br />
                            日進産業ガイナ</p>
                        </div>
                        <div className="w40p order1 penki_cont">
                            <p><StaticImage src="../images/gaiheki_pic09.jpg" width={428} height={321} alt="" /></p>
                            <div className="penki_box">
                                <p className="noto_san bold txt12">《使用塗料》<br />
                                日進産業ガイナ</p>
                                <p><StaticImage src="../images/gaiheki_pic10.jpg" width={103} height={143} alt="" /></p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="gaiheki_content" id="inorganic-hybrid">
                    <div className="title">
                        <h3>無機ハイブリッド塗料</h3>
                        <div className="nensu_box">
                            <dl>
                                <dt>耐用年数</dt>
                                <dd>12～15年</dd>
                            </dl>
                            <div>※立地条件により変わります</div>
                        </div>
                    </div>
                    <div className="gaiheki_inner">
                        <div className="w60p order2 pl2p">
                            <h4 className="noto_san bold orange txt160p mb3p">有機と無機を融合させた新しいタイプの塗料<br />
                            耐候性も優れています</h4>
                            <p className="noto_san">セラミックやケイ素等の無機物を主成分とした塗料。<br />
                            低汚染性と防汚性もありカビや苔、汚れが付きにくいというメリットもあります。</p>
                            <p>サイディング・パネル下塗り（シーラー）・上塗り2回塗り㎡4,000円～</p>
                            <p>※水性、弱溶剤で単価が変わります<br />
                            ※劣化具合により塗り回数が変わります</p>
                            <p>《推奨塗料》<br />
                            日本ペイントパーフェクトセラミックトップG<br />
                            エスケー化研プレミアムMUKI<br />
                            ダイフレックスダイヤスーパーセランマイルド<br />
                            アステックペイント無機ハイブリッドウォール<br />
                            アステックペイント無機ハイブリッドウォールJY<br />
                            KFケミカルKFワールドセラシリーズ</p>
                        </div>
                        <div className="w40p order1 penki_cont">
                            <p><StaticImage src="../images/gaiheki_pic11.jpg" width={428} height={319} alt="" /></p>
                            <div className="penki_box">
                                <p className="noto_san bold txt12">《使用塗料》<br />
                                    タイフレックス<br />
                                    ダイヤスーパーセランマイルド</p>
                                <p><StaticImage src="../images/gaiheki_pic12.jpg" width={160} height={117} alt="" /></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="gaiheki_content" id="fluorine">
                    <div className="title">
                        <h3>フッ素塗料</h3>
                        <div className="nensu_box">
                            <dl>
                                <dt>耐用年数</dt>
                                <dd>15～20年</dd>
                            </dl>
                            <div>※立地条件により変わります</div>
                        </div>
                    </div>
                    <div className="gaiheki_inner">
                        <div className="w60p order2 pl2p">
                            <h4 className="noto_san bold orange txt160p mb3p">紫外線や酸性雨に強く耐候性の高い塗料</h4>
                            <p className="noto_san">蛍石を原料としたフッ素を配合した塗科。<br />
                                耐久性があるので何度も塗替えをしたくない方におススメです。</p>
                            <p>サイディング・パネル　下塗り(シーラー)・上塗り2回塗り㎡＝4,500円～</p>
                            <p>※水性、弱溶剤で単価が変わります<br />
                                ※劣化具合により塗り回数が変わります</p>
                            <p>《推奨塗料》<br />
                                日本ペイント　ファイン4Fセラミック<br />
                                エスケー化研　スーパーセラタイトF<br />
                                AGCコーテック　ルミステージ</p>
                        </div>
                        <div className="w40p order1 penki_cont">
                            <p><StaticImage src="../images/gaiheki_pic13.jpg" width={436} height={332} alt="" /></p>
                            <div className="penki_box">
                                <p className="noto_san bold txt12">《使用塗料》<br />
                                日本ペイントファイン4Fセラミック</p>
                                <p><StaticImage src="../images/gaiheki_pic14.jpg" width={130} height={139} alt="" /></p>
                            </div>
                        </div>
                    </div>
                </div>
                    
                <div className="gaiheki_content" id="clear-coating">
                    <div className="title">
                        <h3>クリアー塗料</h3>
                        <div className="nensu_box">
                            <div>※耐用年数は塗料に使用される樹脂や立地条件により査わります</div>
                        </div>
                    </div>
                    <div className="gaiheki_inner">
                        <div className="w60p order2 pl2p">
                            <h4 className="noto_san bold orange txt160p mb3p">無色透明な塗料を使用して外壁の保護をする塗料</h4>
                            <p className="noto_san">高意匠サイディングボードのデザインを損なう事なく塗装できます。<br />
                            ツヤ有り、ツヤ消しを選ぶ事もできます。</p>
                            <p>サイディング　下塗リ上塗り㎡＝2,800円～</p>
                            <p>※樹脂で単価が変わります<br />
                            ※劣化具合により塗り回数が変わります</p>
                            <p>《推奨塗料》<br />
                            日本ペイントピュアライドUVプロテクトクリヤー<br />
                            日本ペイントピュアライドUVプロテクト4Fクリヤー</p>
                        </div>
                        <div className="w40p order1 penki_cont">
                            <p><StaticImage src="../images/gaiheki_pic15.jpg" width={446} height={353} alt="" /></p>
                            <div className="penki_box">
                            <p className="noto_san bold txt12">《使用塗料》<br />
                                日本ペイント<br />
                                ピュアライドUVプロテクト4Fクリヤー</p>
                            <p><StaticImage src="../images/gaiheki_pic16.jpg" width={130} height={137} alt="" /></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gaiheki_content" id="variegated-pattern">
                    <div className="title">
                        <h3>多彩模様塗料</h3>
                        <div className="nensu_box">
                        <div>※耐用年数は塗料に使用される樹脂や立地条件により変わります</div>
                        </div>
                    </div>
                    <div className="gaiheki_inner">
                        <div className="w60p order2 pl2p">
                            <h4 className="noto_san bold orange txt160p mb3p">表面に吹き付けるカラーフレークより単色塗装にはない<br />
                                深みが生まれます</h4>
                            <p className="noto_san">高意匠サイディングポードのデザインを損なう事なく塗装できます。<br />
                                ツヤ有り、ツヤ消しを選ぶ事もできます。</p>
                            <p>サイディング・パネル 下塗り（シーラー）・上塗り2回塗り㎡＝4,900円～</p>
                            <p>※樹脂で単価が変わります<br />
                                ※劣化具合により塗り回数が変わります</p>
                            <p>《推奨塗料》<br />
                                ダイフレックスダイヤアーバントーン<br />
                                日本ペイント水性ペリアートUV</p>
                        </div>
                        <div className="w40p order1 penki_cont">
                            <p><StaticImage src="../images/gaiheki_pic17.jpg" width={425} height={158} alt="" /></p>
                            <div className="penki_box">
                                <p className="noto_san bold txt12">《使用塗料》<br />
                                ダイフレックスダイヤアーバントーン</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gaiheki_content" id="finishing-touches">
                    <div className="title">
                        <h3>多彩仕上工法</h3>
                        <div className="nensu_box">
                        <div>※耐用年数は塗料に使用される樹脂や立地条件により変わります</div>
                        </div>
                    </div>
                    <div className="gaiheki_inner">
                        <div className="w60p order2 pl2p">
                            <h4 className="noto_san bold orange txt160p mb3p">2色または3色の塗料を使用して意匠性のある豪華な壁面を作り出します</h4>
                            <p className="noto_san">高意匠サイディングボードを単色で塗りつぶしたくない方におススメです。<br />
                                高級感あふれる上質な仕上がりはまるでボードを張り替えたような満足感があります。</p>
                            <p>サイディング・パネル 下塗り（シーラー）・上塗り2回塗り㎡＝5,300円～</p>
                            <p>※樹脂で単価が変わります<br />
                                ※劣化具合により塗り回数が変わります</p>
                            <p>《使用塗料》<br />
                                スズカファインWBアートSi<br />
                                スズカファインWBアートF</p>
                        </div>
                        <div className="w40p order1 penki_cont">
                            <p><StaticImage src="../images/gaiheki_pic18.jpg" width={464} height={343} alt="" /></p>
                            <div className="penki_box">
                                <p className="noto_san bold txt12">《使用塗料》<br />
                                スズカファインWBアートSi</p>
                                <p><StaticImage src="../images/gaiheki_pic19.jpg" width={135} height={147} alt="" /></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
      </Layout>
    </>
  )
}

export default gaiheki
