import React from 'react'
import { Link } from "gatsby"

const Footer = () => {
  return (
    <>
        <footer>
            <div id="footer">
                <div id="footer-inner">
                    <div className="w30p mb3p_smp">
                        <p className="center_smp mb20"><Link to="/"><img src="/images/logo.svg" width={400} alt="株式会社佐々木塗装" /></Link></p>
                        <p className="center_smp">〒731-0212<br />
                        広島市安佐北区三入東2丁目69-3<br />
                        TEL 082-810-5310 FAX 082-810-5311</p>
                    </div>
                    <div className="w70p">
                        <div className="foot_link_box">
                            <div className="foot_link">
                                <h3>メニュー</h3>
                                <ul>
                                    <li><Link to="/">ホーム</Link></li>
                                    <li><Link to="/company/">会社案内</Link></li>
                                    <li><Link to="/staff/">スタッフ紹介</Link></li>
                                    <li><Link to="/voice/">お客様の声</Link></li>
                                    <li><Link to="/faq/">お客様Q&amp;A</Link></li>
                                    <li><Link to="/omoide/">思い出のかべ</Link></li>
                                    <li><Link to="/tosou-arekore/">外壁塗装コラム</Link></li>
                                </ul>
                            </div>
                            <div className="foot_link">
                                <h3>塗装について</h3>
                                <ul>
                                    <li><Link to="/gaiheki/">外壁塗装</Link></li>
                                    <li><Link to="/yane/">屋根塗装</Link></li>
                                    <li><Link to="/yanefuki/">屋根葺替</Link></li>
                                    <li><Link to="/yanecover/">屋根カバー工法</Link></li>
                                    <li><Link to="/drainspout/">雨樋の交換</Link></li>
                                    <li><Link to="/exterior/">エクステリア</Link></li>
                                </ul>
                            </div>
                            <div className="foot_link">
                                <h3>施工事例</h3>
                                <ul>
                                    <li><Link to="/case/">施工事例一覧</Link></li>
                                    <li><Link to="/workflow/">施工の流れ</Link></li>
                                    <li><Link to="/karucera_works/">カルセラリフォーム施工例</Link></li>
                                    <li><Link to="/omoide/">思い出のかべ</Link></li>
                                    <li><Link to="/now-working/">ただいま施工中</Link></li>
                                </ul>
                            </div>
                            <div className="foot_link">
                                <h3>お問い合わせ</h3>
                                <ul>
                                    <li><Link to="/#souba_check">最短10秒無料相場チェック</Link></li>
                                    <li><Link to="/leak/">雨漏り無料診断</Link></li>
                                    <li><Link to="/drone/">ドローン診断</Link></li>
                                    <li><Link to="/color_simulation/">カラーシミュレーション</Link></li>
                                    <li><Link to="/contact_page/">お問い合わせ</Link></li>
                                    <li><Link to="https://lin.ee/HR9JB00">ライン見積もり</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="address">
                <address>Copyright &copy; 株式会社佐々木塗装 All rights reserved.</address>
            </div>
        </footer>
    </>
  )
}

export default Footer
