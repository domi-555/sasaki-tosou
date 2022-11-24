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

const drainspout = () => {
  return (
    <>
      <Layout>
        <Seo
            title="雨樋の交換"
            description="外壁塗装・屋根塗装なら広島の佐々木塗装の雨樋の交換ページです。"
        />
        <p id="page-top" data-sal="slide-bottom" viewOffset="0.2" data-sal-delay="200" data-sal-easing="ease"><AnchorLink to="/drainspout/#pagetop" title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink></p>

        <ul className="fix_bn" data-sal="slide-right" viewOffset="0.2" data-sal-delay="300" data-sal-easing="ease">
            <li><Link to="/contact_page/" className="mail_bt"><img src="/images/mail_icon.svg" width={45} height={45} className="opa" alt="" />
            <span>お問い合わせ</span></Link></li>
            <li><Link to="https://lin.ee/HR9JB00" className="line_bt" target="_blank"><img src="/images/line_icon.svg" width={45} height={45} className="opa" alt="" />
            <span>ライン見積もり</span></Link></li>
            <li className="pc"><Link to="https://twitter.com/sasakipaint1116" target="_blank" className="tw_bt"><StaticImage src="../images/tw_icon.png" width={25} height={25} className="opa" alt="" /></Link></li>
            <li className="pc"><Link to="https://www.facebook.com/profile.php?id=100063604571277" target="_blank" className="fb_bt"><StaticImage src="../images/fb_icon.png" width={25} height={25} className="opa" alt="" /></Link></li>
            <li className="pc"><Link to="https://www.instagram.com/sasaki.ryoko/" target="_blank" className="insta_bt"><span className="insta"><img src="/images/insta_icon.svg" width={25} height={25} className="opa" alt="" /></span></Link></li>
        </ul>
        <div id="mainimage-sub" className='drainspout'>
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
                    <Link to="/drainspout/" itemprop="item">
                        <span itemprop="name">雨樋の交換</span>
                    </Link>
                    <meta itemprop="position" content="2" />
                </li>
            </ul>
        </div>
        <section id="sub-page">
            <div className='main-content'>
                
            <div className="gaiheki_title_box">
                <h1>
                    <img src="/images/drainspout_img01.png" alt="雨樋の破損や詰まりは放っておかずに早目のお手入れを！ 雨樋の交換" className="pc" />
                    <img src="/images/drainspout_img01_smp.png" alt="雨樋の破損や詰まりは放っておかずに早目のお手入れを！ 雨樋の交換" className="smp" />
                </h1>
            </div>

            <p>建物の中でも重要な役割を持つ雨樋。<br />
            強風で外れてしまったり、紫外線の影響で少しづつ傷んで割れやすくなったり、雪の重みで変形したり、勾配が変わって雨水が滞留したり、苔やヘドロが堆積してオーバーフローする場合もあります。<br />
            素材によって劣化していくまでの期間の幅はありますが、雨樋の寿命は20～25年と考えておきましょう。<br />
            詰まりなどのよる排水不良で雨樋が正常に機能しなくなると不具合が起こり雨漏りのリスクも上がります。</p>

            <h2 className='page_title01'>年数の経過した雨樋</h2>
            
            <p className='center'>こんな状態になってしまったら要注意！</p>

            <ul className='drainspout_img_list'>
                <li>留め金具の錆び<br />
                <img src="/images/drainspout_pic01.jpg" alt="" /></li>
                <li>雨樋の外れ<br />
                <img src="/images/drainspout_pic02.jpg" alt="" /></li>
                <li>軒樋の湾曲<br />
                <img src="/images/drainspout_pic03.jpg" alt="" /></li>
                <li>雨水の滞留<br />
                <img src="/images/drainspout_pic04.jpg" alt="" /></li>
                <li>ヘドロの堆積<br />
                <img src="/images/drainspout_pic05.jpg" alt="" /></li>
                <li>苔の繁殖<br />
                <img src="/images/drainspout_pic06.jpg" alt="" /></li>
            </ul>

            <h3 className='page_title01'>おススメの雨樋</h3>
            <p className='center'>おうちのデザインによって合う雨樋は変わります</p>

            <ul className='drainspout_img_list2'>
                <li><img src="/images/drainspout_pic07.jpg" alt="" /></li>
                <li><img src="/images/drainspout_pic08.jpg" alt="" /></li>
            </ul>

            <div className="drainspout_content mt10p">
                <div className="title">
                    <h3>おススメの雨樋</h3>
                </div>
                <div className='flex-wrap'>
                    <div className="drainspout_osusume">
                        <h3 className="noto_san bold orange txt160p mb3p">半丸105</h3>
                        <p><img src="/images/drainspout_pic09.jpg" alt="" /></p>
                        
                        <p>和風住宅でよく使用される雨樋です。<br />
                        交換する際は金具もステンレス製に変わります。</p>
                    </div>
                    <div className="drainspout_osusume">
                        <h3 className="noto_san bold orange txt160p mb3p">角樋（Σ90）</h3>
                        <p><img src="/images/drainspout_pic10.jpg" alt="" /></p>
                        
                        <p>洋風住宅でよく使用される雨樋です。<br />
                        優美なフォルムで独特の陰影をもつ樋です。<br />
                        強度はもちろん、施工性や意匠性にも優れています。</p>
                    </div>
                    <div className="drainspout_osusume">
                        <h3 className="noto_san bold orange txt160p mb3p">角樋(Ｈ120)</h3>
                        <p><img src="/images/drainspout_pic11.jpg" alt="" /></p>
                        
                        <p>洋風住宅で良く使用される雨樋です。<br />
                        端正で美しいシルエットが特徴です。<br />
                        シンプルなため屋根材や外装材との馴染みが良く外観の一体感を高めます。<br />
                        色褪せや汚れを抑える高耐候処理も施され機能性にも優れています。</p>
                    </div>
                </div>
            </div>

            <h3 className='page_title01 mt10p'>雨樋交換工事金額の目安</h3>

            
            <div className="drainspout_content">
                <div className="title">
                    <h3>軒樋</h3>
                </div>
                <div className='flex-wrap'>
                    <div className="drainspout_osusume">
                        <h3 className="noto_san bold orange txt160p mb3p">半丸105</h3>
                        <p><img src="/images/drainspout_pic12.jpg" alt="" /></p>
                        <p className='txt_r'>2,000円／ｍ～</p>
                        <p>和風住宅によく使用されます</p>
                    </div>
                    <div className="drainspout_osusume">
                        <h3 className="noto_san bold orange txt160p mb3p">角樋（Σ90）</h3>
                        <p><img src="/images/drainspout_pic13.jpg" alt="" /></p>
                        <p className='txt_r'>2,400円／ｍ～</p>
                        <p>洋風住宅によく使用されます<br />
                        半丸から角樋に交換する事もできます<br />
                        内金具なので台風の影響を受けにくいメリットがあります</p>
                    </div>
                    <div className="drainspout_osusume">
                        <h3 className="noto_san bold orange txt160p mb3p">角樋（Ｈ120）</h3>
                        <p><img src="/images/drainspout_pic14.jpg" alt="" /></p>
                        <p className='txt_r'>2,700円／ｍ～</p>
                        <p>洋風住宅によく使用されます<br />
                        軒先を包むように際立たせるボリュームのある樋です</p>
                    </div>
                </div>
            </div>

            <div className="drainspout_content">
                <div className="title">
                    <h3>竪樋</h3>
                </div>
                <div className='flex-wrap'>
                    <div className="drainspout_osusume">
                        <h3 className="noto_san bold orange txt160p mb3p">丸樋</h3>
                        <p><img src="/images/drainspout_pic15.jpg" alt="" /></p>
                        <p className='txt_r'>2,000円／ｍ～</p>
                        <p>和風住宅から洋風住宅まで幅広く使用されます</p>
                    </div>
                    <div className="drainspout_osusume">
                        <h3 className="noto_san bold orange txt160p mb3p">角樋</h3>
                        <p><img src="/images/drainspout_pic16.jpg" alt="" /></p>
                        <p className='txt_r'>2,000円／ｍ～</p>
                        <p>洋風住宅によく使用されます</p>
                    </div>                    
                </div>
            </div>

            <h3 className='page_title01 mt10p'>落ち葉除けネットってご存知ですか？</h3>

            <p>紅葉の季節、晩秋に見られる落ち葉は見ているだけならとても風情がありますが落ち葉により大切なお住まいが<br />
            ダメージを受ける事もあります。特に裏山に面しているお宅は要注意です。<br />
            風に乗って飛んで来た葉が軒樋の内部に入り込んでしまいます。</p>

            <ul className='drainspout_img_list'>
                <li><img src="/images/drainspout_pic17.jpg" alt="" /></li>
                <li><img src="/images/drainspout_pic18.jpg" alt="" /></li>
                <li><img src="/images/drainspout_pic19.jpg" alt="" /></li>
            </ul>

            <p>軒樋の雨水の流れを堰き止めてしまいます。また集水器周辺に落ち葉が溜まると竪樋に雨水が流れなくなります。</p>

            <p className='mb0'>このように落ち葉は軒樋の中で腐食し腐葉土となって堆積します。</p>

            <ul className='drainspout_img_list'>
                <li><img src="/images/drainspout_pic20.jpg" alt="" /></li>
            </ul>

            <div className="drainspout_content">
                <div className="title">
                    <h3>落ち葉やごみによる雨樋の水つまりを防ぐ「落ち葉除けネット」がおススメです。</h3>
                </div>
                <div className='p2p'>
                        <h3 className="noto_san bold orange txt160p mb3p">軒先に丸めて挿入し、針金などで固定します。</h3>
                        <p><img src="/images/drainspout_pic21.jpg" width={380} alt="" /></p>
                        <p>4,000円／ｍ～<br />
                        外壁塗装や樋の架け替え工事など足場を仮設するタイミングで取付けるのがベストです。</p>
                    </div> 
            </div>

            <h3 className='page_title01 mt10p'>冬場の雪でお困りではありませんか？</h3>

            <p className='center'>冬、大雪が降ると屋根から落ちてきた雪で、雨樋が壊れたりカーポートやテラスの屋根材が割れたり、<br />
            また雪が隣りの敷地に入り込み迷惑をかけてしまうという事があります。<br />
            たいていの屋根には雪止めが付いていますが大雪の場合はそれでは間に合わない事も。<br />
            落雪を防止する屋根用雪止融雪装置があります。</p>

            <ul className='drainspout_img_list2'>
                <li><img src="/images/drainspout_pic22.jpg" alt="" /></li>
                <li><img src="/images/drainspout_pic23.jpg" alt="" /></li>
            </ul>

            <div className="drainspout_content">
                <div className="title">
                    <h3>スノーキング（屋根用雪止融雪装置）</h3>
                </div>
                <div className="drainspout_osusume">                        
                    <p><img src="/images/drainspout_pic24.jpg" alt="" /></p>
                </div>                    
                
            </div>
            <div className="drainspout_content">
                <div className="title">
                    <h3>スノーキング（屋根用雪止融雪装置）取付例</h3>                    
                </div>
                <div className='flex-wrap'>
                    <div className="drainspout_osusume">
                        <h3 className="noto_san bold orange txt160p mb3p">ケース①</h3>
                        <p>屋根からの雪がカーポートに落下する（陶器瓦　雪止め瓦有り）</p>
                        <p><img src="/images/drainspout_pic25.jpg" alt="" /></p>
                        <p>上屋根の軒先7.7ｍにスノーキング(小型)を取付けました。</p>
                    </div>
                    <div className="drainspout_osusume">
                        <h3 className="noto_san bold orange txt160p mb3p">ケース②</h3>
                        <p>屋根からの落雪で隣りの敷地に雪が落ちる（鋼板屋根　雪止めなし）</p>
                        <p><img src="/images/drainspout_pic26.jpg" alt="" /></p>
                        <p>上屋根の軒先5.5ｍにスノーキング(小型　ステンレス)を取付けました。</p>
                    </div>
                    <div className="drainspout_osusume">
                        <h3 className="noto_san bold orange txt160p mb3p">ケース③</h3>
                        <p>屋根からの落雪で１階のテラスの屋根材が破損してしまった（陶器平板瓦　雪止め金具有り）</p>
                        <p><img src="/images/drainspout_pic27.jpg" alt="" /></p>
                        <p>上屋根の軒先にスノーキング(小型　ステンレス)を取り付けました。</p>
                    </div>
                </div>
            </div>

            </div>
        </section>
      </Layout>
    </>
  )
}

export default drainspout