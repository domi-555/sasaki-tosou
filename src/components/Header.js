import React from 'react'
import { Link } from "gatsby"


import "@fortawesome/fontawesome-svg-core/styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
    return (
      <>
        <header>
            <div id="header">
                <div id="header_inner">
                    <h1 className="pc">広島の外壁塗装なら佐々木塗装 安心施工、保証付きのアフターサービス。</h1>
                    <div className="h_box">
                        <div className="h_logo_box"><Link to="/"><img src="/images/logo.svg" width={300} height={70} alt="株式会社佐々木塗装" /></Link></div>
                        <div className="g_nav">
                            <ul>
                                <li><Link to="/">ホーム</Link></li>
                                <li><span>メニュー</span>
                                    <ul>
                                        <li><Link to="/company/">会社案内</Link></li>
                                        <li><Link to="/staff/">スタッフ紹介</Link></li>
                                        <li><Link to="/workflow/">施工の流れ - 広島の外壁塗装なら佐々木塗装</Link></li>
                                        <li><Link to="/faq/">お客様Q&amp;A</Link></li>
                                        <li><Link to="/voice/">お客様の声</Link></li>
                                        <li><Link to="/leak/">雨漏り診断</Link></li>
                                        <li><Link to="/drone/">ドローン診断</Link></li>
                                        <li><Link to="/color-simulation/">カラーシミュレーション</Link></li>
                                        <li><Link to="/contact_page/">お問い合わせ</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/case/">施工事例</Link></li>
                                <li><Link to="/omoide/">思い出のかべ</Link></li>
                                <li><Link to="/blog/">ブログ</Link></li>
                            </ul>
                        </div>
                        <div className="h_tel_box">
                            <p>お電話でのお問い合わせはこちら</p>
                            <p className="tel_no"><Link to="tel:0120-116-795"><img src="/images/h_tel_icon.svg" alt="" width={40} height={26} />0120-116-795</Link></p>
                            <p>受付時間　9:00～20:00</p>
                        </div>
                    </div>
                
                    <article className="h_main dis_flex flex_jus_between flex_align_item_center smp">
                        <h1 className="h_logo">
                            <Link to="/"><img src="/images/logo.svg" width={250} height={58} alt="株式会社佐々木塗装" /></Link>
                        </h1>
                        <ul className="h_tools dis_flex flex_jus_end">
                            <li><Link to="tel:0120-116-795"><img src="/images/h_tel.png" width={44} height={44} alt="" /></Link></li>
                            <li className="btn_gnav" id="h_menu"><img src="/images/h_menu.png" width={44} height={44} alt="" /></li>
                        </ul>

                        <input type="checkbox" id="overlay-input" />
                        <label for="overlay-input" id="overlay-button"><span></span></label>

                        <div id="overlay">
                            <div>
                                <ul className="gnav__menu">
                                    <li className="gnav__menu__item"><Link to="/">ホーム</Link></li>
                                    <li className="gnav__menu__item"><Link to="/company/">代表挨拶</Link></li>
                                    <li className="gnav__menu__item"><Link to="/company/">会社案内</Link></li>
                                    <li className="gnav__menu__item"><Link to="/staff/">スタッフ紹介</Link></li>
                                    <li className="gnav__menu__item"><Link to="/blog/">ブログ</Link></li>
                                    <li className="gnav__menu__item"><Link to="/case/">施工事例</Link></li>
                                    <li className="gnav__menu__item"><Link to="/omoide/">思い出のかべ</Link></li>
                                    <li className="gnav__menu__item"><Link to="/voice/">お客様の声</Link></li>
                                </ul>
                                <ul className="sns_bt">
                                    <li><Link to="https://twitter.com/sasakipaint1116" target="_blank" className="tw_bt"><img src="/images/tw_icon.png" width={25} height={25} className="opa" alt="" /></Link></li>
                                    <li><Link to="https://www.facebook.com/profile.php?id=100063604571277" target="_blank" className="fb_bt"><img src="/images/fb_icon.png" width={25} height={25} className="opa" alt="" /></Link></li>
                                    <li><Link to="https://www.instagram.com/sasaki.ryoko/" target="_blank" className="insta_bt"><span className="insta"><img src="/images/insta_icon.svg" width={25} height={25} className="opa" alt="" /></span></Link></li>
                                </ul>

                            </div>
                        </div>

                    </article>
                
                </div>
            </div>
        </header>
        
      </>
    )
  }
  
  export default Header
