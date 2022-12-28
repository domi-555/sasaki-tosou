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

const yane = () => {
  return (
    <>
      <Layout>
        <Seo
            title="屋根塗装"
            description="外壁塗装・屋根塗装なら広島の佐々木塗装の屋根塗装ページです。"
        />
        <p id="page-top" data-sal="slide-bottom" viewOffset="0.2" data-sal-delay="200" data-sal-easing="ease"><AnchorLink to="/yane/#pagetop" title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink></p>

        <ul className="fix_bn" data-sal="slide-right" viewOffset="0.2" data-sal-delay="300" data-sal-easing="ease">
            <li><Link to="/contact_page/" className="mail_bt"><img src="/images/mail_icon.svg" width={45} height={45} className="opa" alt="" />
            <span>お問い合わせ</span></Link></li>
            <li><Link to="https://lin.ee/HR9JB00" className="line_bt" target="_blank"><img src="/images/line_icon.svg" width={45} height={45} className="opa" alt="" />
            <span>ライン見積もり</span></Link></li>
            <li className="pc"><Link to="https://twitter.com/sasakipaint1116" target="_blank" className="tw_bt"><StaticImage src="../images/tw_icon.png" width={25} height={25} className="opa" alt="" /></Link></li>
            <li className="pc"><Link to="https://www.facebook.com/profile.php?id=100063604571277" target="_blank" className="fb_bt"><StaticImage src="../images/fb_icon.png" width={25} height={25} className="opa" alt="" /></Link></li>
            <li className="pc"><Link to="https://www.instagram.com/sasaki.ryoko/" target="_blank" className="insta_bt"><span className="insta"><img src="/images/insta_icon.svg" width={25} height={25} className="opa" alt="" /></span></Link></li>
        </ul>
        <div id="mainimage-sub" className='yane'>
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
                    <Link to="/yane/" itemprop="item">
                        <span itemprop="name">屋根塗装</span>
                    </Link>
                    <meta itemprop="position" content="2" />
                </li>
            </ul>
        </div>
        <section id="sub-page">
            <div className='main-content'>
                
            <div className="gaiheki_title_box">
                    <h1>
                        <img src="/images/yane_img01.png" alt="塗りたてがキレイなのは当たり前。どこまで持たせるかは工事の品質によって変わります。 屋根塗装" className="pc" />
                        <img src="/images/yane_img01_smp.png" alt="塗りたてがキレイなのは当たり前。どこまで持たせるかは工事の品質によって変わります。 屋根塗装" className="smp" />
                    </h1>
                </div>

                <div className="gaiheki_img_box">
                    <div className='gaiheki_box_img'>
                        <img src="/images/yane_img02.jpg" alt="" />
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
                            <h2><img src="/images/yane_img03.png" alt="屋根塗装プラン30坪（100㎡程度）" /></h2>
                        </div>
                        <div className='gaiheki_title_txt'>
                            <img src="/images/yane_img04.png" alt="高圧洗浄→下地処理→塗装(3回)→アフター 全て含め ※ケレン作業・シーリング作業別途" />
                        </div>
                </div>

                <ul className="gaiheki_price_list">
                    <li><img src="/images/yane_price01.png" alt="シリコンプラン" /></li>
                    <li><img src="/images/yane_price02.png" alt="遮熱シリコンプラン" /></li>
                    <li><img src="/images/yane_price03.png" alt="フッ素プラン" /></li>
                </ul>

                <div className="comment_box">
                <div className="comment_l"><img src="/images/boss_photo2.jpg" alt="佐々木塗装代表-写真" /></div>
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

                <h2 class="page_title01 mt0">屋根塗装</h2>
                
                <p className="center mt3p">プラン別に塗料の特徴を紹介します</p>

                <div className="gaiheki_link_box">
                    <div className="link_bn_box">
                        <AnchorLink to="/yane/#silicon" offset="100">
                            <dl>
                                <dt>シリコン塗料<img src="/images/arrow_r.svg" alt="" /></dt>
                                <dd>コストパフォーマンスに優れた人気塗料<br />
                                10年毎の塗り替えに最適です。</dd>
                            </dl>
                        </AnchorLink>
                    </div>
                    <div className="link_bn_box">
                        <AnchorLink to="/yane/#radical" offset="-100">
                            <dl>
                                <dt>ラジカル制御型塗料<img src="/images/arrow_r.svg" alt="" /></dt>
                                <dd>汚れに強い塗料<br />
                                シリコンよりワンランク上のおススメ塗料</dd>
                            </dl>
                        </AnchorLink>
                    </div>
                    <div className="link_bn_box">
                        <AnchorLink to="/yane/#fluorine" offset="50">
                            <dl>
                                <dt>フッ素塗料<img src="/images/arrow_r.svg" alt="" /></dt>
                                <dd>紫外線や酸性雨に強く耐撰性の高い塗料</dd>
                            </dl>
                        </AnchorLink>
                    </div>
                    <div className="link_bn_box">
                        <AnchorLink to="/yane/#heat-shielding">
                            <dl>
                                <dt>遮熱塗料<img src="/images/arrow_r.svg" alt="" /></dt>
                                <dd>建物の表面で太陽熱を反射させ夏の暑さを<br />
                                軽減する省エネ効果がある塗料</dd>
                            </dl>
                        </AnchorLink>
                    </div>
                    <div className="link_bn_box">
                        <AnchorLink to="/yane/#insulation" offset="50">
                            <dl>
                                <dt>断熱塗料<img src="/images/arrow_r.svg" alt="" /></dt>
                                <dd>熱伝導を抑える効果を持った省エネ塗料<br />
                                音を小さくする防音効果も期待できます</dd>
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
                            <h4 className="noto_san bold orange txt160p mb3p">コストパフォーマンスに優れた人気塗料<br />
                                10年毎の塗り替えに最適です</h4>
                            <p className="noto_san">できるだけ費用を抑えたいという方にお勧めな塗料です。</p>
                            <p>スレート屋根　　下塗り・上塗り2回塗り㎡＝3,000円～<br />
                                鋼板屋根　　下塗り・上塗り2回塗り㎡＝3,300円～<br />
                                乾式コンクリート瓦　　下塗り・上塗り2回塗り㎡＝3,300円～<br />
                                セメント瓦　　上塗り2回塗り㎡＝3,500円～</p>
                            <p>※水性、弱溶剤で単価が変わります<br />
                                ※劣化具合により塗り回数が変わります</p>
                            <p>《推奨塗料》<br />
                                日本ペイント　ファインシリコンベスト<br />
                                日本ペイント　水性シリコンベストⅡ<br />
                                日本ペイント　ファインルーフシリコン<br />
                                水谷ペイント　水系シリコン<br />
                                オリエンタル塗料　ニューマイルド優雅</p>
                        </div>
                        <div className="w40p order1 penki_cont">
                            <p><img src="/images/yane_pic01.jpg" width={428} height={332} alt="" /></p>
                            <div className="penki_box">
                                <p className="noto_san bold txt12">《使用塗料》<br />
                                日本ペイントファインシリコンペスト</p>
                                <p><img src="/images/yane_pic02.jpg" width={100} height={100} alt="" /></p>
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
                                <dd>10年</dd>
                            </dl>
                            <div>※立地条件により変わります</div>
                        </div>
                    </div>
                    <div className="gaiheki_inner">
                        <div className="w60p order2 pl2p">
                            <h4 className="noto_san bold orange txt160p mb3p">汚れに強い塗料<br />
                            シリコンよりワンランク上のおススメ塗料</h4>
                            <p className="noto_san">塗膜の劣化原因であるラジカルの発生を抑制する酸化チタンと光安定剤(HALS)が含まれている塗料。<br />
                            チョーキング現象に対して高い効果があります。</p>
                            <p>スレート屋根　　下塗リ上塗り2回塗り㎡＝4,000円～</p>
                            <p>※劣化具合により塗り回数が変わります</p>
                            <p>《推奨塗料》<br />
                            日本ペイントファインパーフェクトベスト</p>
                        </div>
                        <div className="w40p order1 penki_cont">
                            <p><img src="/images/yane_pic03.jpg" width={428} height={332} alt="" /></p>
                            <div className="penki_box">
                                <p className="noto_san bold txt12">《使用塗料》<br />
                                    日本ペイントファイン<br className="pc" />
                                    パーフェクトペスト</p>
                                <p><img src="/images/yane_pic04.jpg" width={100} height={100} alt="" /></p>
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
                            <p>スレート屋根　下塗り・上塗り2回塗り㎡＝5,000円～<br />
                                鋼板屋根　下塗り・上塗り2回塗り㎡＝4,600円～</p>
                            <p>※水性、弱溶剤で単価が変わります<br />
                                ※劣化具合により塗り回数が変わります</p>
                            <p>《推奨塗料》<br />
                                日本ペイント　ファイン4Fベスト<br />
                                日本ペイント　デュフロン4Fルーフ</p>
                        </div>
                        <div className="w40p order1 penki_cont">
                            <p><img src="/images/yane_pic05.jpg" width={428} height={332} alt="" /></p>
                            <div className="penki_box">
                                <p className="noto_san bold txt12">《使用塗料》<br />
                                日本ペイントデュフロン4Fルーフ</p>
                                <p><img src="/images/yane_pic06.jpg" width={100} height={100} alt="" /></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="gaiheki_content" id="heat-shielding">
                    <div className="title">
                        <h3>遮熱塗料</h3>
                        <div className="nensu_box">
                            <div>※耐用年数は塗料に使用される樹憶や立地条件により妻わります</div>
                        </div>
                    </div>
                    <div className="gaiheki_inner">
                        <div className="w60p order2 pl2p">
                            <h4 className="noto_san bold orange txt160p mb3p">屋根の表面で太陽熱を反射させ夏の暑さを軽減する省エネ効果のある塗料</h4>
                            <p className="noto_san">年々上昇する夏の気温。遮熱塗料を使用する事で建物の表面温度が下がり室内温度も下がります。</p>
                            <p>スレート屋根　下塗り・上塗り2回塗り㎡＝4,800円～<br />
                            鋼板屋根　下塗り・上塗り2回塗り㎡＝4,600円～</p>
                            <p>※水性、弱溶剤で単価が変わります<br />
                            ※劣化具合により塗り回数が変わります</p>
                            <p>《推奨塗料》<br />
                            日本ペイント　サーモアイSi<br />
                            日本ペイント　サーモアイ4F<br />
                            日本ペイント　パーフェクトクーラーベスト</p>
                        </div>
                        <div className="w40p order1 penki_cont">
                            <p><img src="/images/yane_pic07.jpg" width={428} height={332} alt="" /></p>
                            <div className="penki_box">
                                <p className="noto_san bold txt12">《使用塗料》<br />
                                    日本ペイント　サーモアイSi</p>
                                <p><img src="/images/yane_pic08.jpg" width={100} height={100} alt="" /></p>
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
                                <dd>10～15年</dd>
                            </dl>
                            <div>※立地条件により変わります</div>
                        </div>
                    </div>
                    
                    <div className="gaiheki_inner">
                        <div className="w60p order2 pl2p">
                            <h4 className="noto_san bold orange txt160p mb3p">熱伝導を抑える効果を持った省エネ塗料</h4>
                            <p className="noto_san">太陽光を反射して吸収した熱を効率よく逃がしてくれる熱を溜めこまない塗料です。</p>
                            <p>スレート屋根　下塗り・上塗り2回塗り㎡＝5,000 円～<br />
                                乾式コンクリート屋根　下塗り・上塗り2回塗り㎡＝5,500 円～<br />
                                セメント瓦　下塗り・上塗り2回塗り㎡＝5,500 円～</p>
                            <p>※劣化具合により塗り回数が変わります</p>
                            <p>《推奨塗料》<br />
                                日進産業ガイナ</p>
                        </div>
                        <div className="w40p order1 penki_cont">
                            <p><img src="/images/yane_pic09.jpg" width={428} height={332} alt="" /></p>
                            <div className="penki_box">
                                <p className="noto_san bold txt12">《使用塗料》<br />
                                日進産業ガイナ</p>
                                <p><img src="/images/yane_pic10.jpg" width={100} height={100} alt="" /></p>
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

export default yane
