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

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const yanecover = () => {
  return (
    <>
        <Layout>
            <Seo
                title="屋根カバー工法"
                description="外壁塗装・屋根塗装なら広島の佐々木塗装の屋根カバー工法ページです。"
            />
            <p id="page-top" data-sal="slide-bottom" viewOffset="0.2" data-sal-delay="200" data-sal-easing="ease"><AnchorLink to="/yanecover/#pagetop" title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink></p>

            <ul className="fix_bn" data-sal="slide-right" viewOffset="0.2" data-sal-delay="300" data-sal-easing="ease">
                <li><Link to="/contact_page/" className="mail_bt"><img src="/images/mail_icon.svg" width={45} height={45} className="opa" alt="" />
                <span>お問い合わせ</span></Link></li>
                <li><Link to="https://lin.ee/HR9JB00" className="line_bt" target="_blank"><img src="/images/line_icon.svg" width={45} height={45} className="opa" alt="" />
                <span>ライン見積もり</span></Link></li>
                <li className="pc"><Link to="https://twitter.com/sasakipaint1116" target="_blank" className="tw_bt"><StaticImage src="../images/tw_icon.png" width={25} height={25} className="opa" alt="" /></Link></li>
                <li className="pc"><Link to="https://www.facebook.com/profile.php?id=100063604571277" target="_blank" className="fb_bt"><StaticImage src="../images/fb_icon.png" width={25} height={25} className="opa" alt="" /></Link></li>
                <li className="pc"><Link to="https://www.instagram.com/sasaki.ryoko/" target="_blank" className="insta_bt"><span className="insta"><img src="/images/insta_icon.svg" width={25} height={25} className="opa" alt="" /></span></Link></li>
            </ul>

            <div id="mainimage-sub" className='yane-cover'>
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
                        <Link to="/yanecover/" itemprop="item">
                            <span itemprop="name">屋根カバー工法</span>
                        </Link>
                        <meta itemprop="position" content="2" />
                    </li>
                </ul>
            </div>

            <section id="sub-page">
                <div className="main-content">

                    <div className="gaiheki_title_box">
                        <h1>
                            <img src="/images/yanecover/yane-cover_img01.png" alt="屋根の上にルーフィングと新しい屋根材をかぶせる工法 屋根カバー工法" className="pc" />
                            <img src="/images/yanecover/yane-cover_img01_smp.png" alt="屋根の上にルーフィングと新しい屋根材をかぶせる工法 屋根カバー工法" className="smp" />
                        </h1>
                    </div>

                    <div className="gaiheki_img_box">
                        <div className='gaiheki_box_img'>
                            <img src="/images/yanecover/yane-cover_pic13.jpg" alt="" />
                        </div>
                        <div className='gaiheki_box_txt'>
                            <p>屋根は傷み具合によって補修の有無、適正な屋根材の選定も変わります。</p>
                            <p>これまで多くのお客様のお宅の工事を手掛けてきた私たちが自信を持って調査ご提案させていただいております。</p>
                            <p>施工は、職人経験のある社長のもと、経験豊富な職人たちが品質にこだわり丁寧に仕上げていきます。</p>
                            <p>お客様には、新しく生まれ変わるおうちのイメージを膨らませて、カラーシュミレーションを一緒に楽しんでいただきたいです。</p>
                        </div>
                    </div>

                    <div className="gaiheki_title_box p0 mt50 mb0">
                        <div className="flex-wrap">
                            <div>
                                <h2><img src="/images/yanecover/yane-cover_img02.png" alt="屋根塗装プラン30坪（100㎡程度）" /></h2>
                            </div>
                            <div>
                                <img src="/images/yanecover/yane-cover_img03.png" alt="高圧洗浄→下地処理→塗装(3回)→アフター 全て含め ※ケレン作業・シーリング作業別途" />
                            </div>
                        </div>
                    </div>

                    <div className="flex-wrap">
                        <div className="gaiheki_inner">
                            <div className="w60p order2 pl2p">
                                <h4 className="noto_san bold orange txt160p mb3p">屋根の上にルーフィングと新しい屋根材をかぶせる工法</h4>
                                <p className="noto_san">既存の屋根材(スレート屋根・鋼板屋根)の上に防水シート（ルーフィング）と新しいガルバリウム製の
                                    屋根材をかぶせる改修工法です。</p>
                                <p>葺き替えと違い既存の屋根材を撤去する手間や処分料が不要になり工期を短縮できるというメリットもあります。
                                    厚みのある断熱材が付いており断熱効果が得られます。
                                    また表面には遮熱塗料が塗布されているので夏場の暑さを軽減する効果があります。</p>
                                <p>スレート屋根に鋼板屋根をかぶせる場合　㎡＝8,000円～</p>
                                <p>※屋根材の傷み具合によってはカバー工法ができない場合もあります
                                    ※屋根材の傷み具合によっては下地の追い張りが必要な場合もあります</p>
                                <p>《使用屋根材》<br />
                                    アイジー工業（株）　スーパーガルテクト<br />
                                    色　Ｓシェイドモスグリーン</p>
                            </div>
                            <div className="w40p order1 penki_cont">
                                <p><img src="/images/yanecover/yane-cover_pic12.jpg" alt="" /></p>
                            </div>
                        </div>
                    </div>

                    <div className="gaiheki_content cover">
                        <div className="title">
                            <h3>スーパーガルテクトが選ばれる3つのポイント</h3>
                        </div>
                        <div className='yane_cover_content'>
                            <div className='cover_point_list'>
                                <div className="cover_point">
                                    <div className='cover_point_inner'>
                                    <AnchorLink to="/yanecover/#point01" offset="50"><img src="/images/yanecover/point/btn-point1.png" alt="" /></AnchorLink>
                                        <p className='bold noto_san txt120p'>長期保証<br />
                                        コストパフォーマンス</p>
                                    </div>
                                </div>
                                <div className="cover_point" offset="50">
                                    <div className='cover_point_inner'>
                                    <AnchorLink to="/yanecover/#point02"><img src="/images/yanecover/point/btn-point2.png" alt="" /></AnchorLink>
                                        <p className='bold noto_san txt120p'>遮熱性・断熱性</p>
                                    </div>
                                </div>
                                <div className="cover_point" offset="50">
                                    <div className='cover_point_inner'>
                                    <AnchorLink to="/yanecover/#point03"><img src="/images/yanecover/point/btn-point3.png" alt="" /></AnchorLink>
                                        <p className='bold noto_san txt120p'>簡単施工・毎日安心性能</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='plr40'>
                                <h3 id="point01">01 長期保証コストパフォーマンス</h3>

                                <div className='flex-vcenter'>

                                    <div className='cover_point_l'>
                                    <img src="/images/yanecover/point/ph-point1-1.png" alt="" />
                                    </div>

                                    <div className='cover_point_r txt110p noto_san'>
                                    スーパーガルテクトは、さびにくい金属の<br />
                                    <span className='marker bold'>「超高耐久ガルバ」</span>を使うことで、<span className='marker bold'>高い耐久性</span>を実現しました。
                                    </div>
                                </div>

                                <div className='flex-vcenter mt20'>
                                    <div className='cover_point_l order2'>
                                    <img src="/images/yanecover/point/ph-point1-2.png" alt="" />
                                    </div>

                                    <div className='w50p txt110p noto_san order1'>
                                    めっき層に含まれる、アルミ、亜鉛、マグネシウムの成分がベースの鋼板を<span className='marker bold'>強⼒にガード</span>します。
                                    </div>
                                </div>

                                <div className='flex-vcenter mt20'>
                                    <div className='cover_point_l'>
                                    <img src="/images/yanecover/point/ph-point1-3.png" alt="" />
                                    </div>

                                    <div className='cover_point_r txt110p noto_san'>
                                    <span className='marker bold'>めっき量も多く</span>、⼀般的なガルバリウム鋼板の約1.25倍の厚み！<br />
                                    だから、塗膜15年、⾚さび20年、⽳あき25年の<span className='marker bold'>⻑期保証！</span>
                                    </div>
                                </div>

                                <h4 className='yane_cover_title'>さらに、丈夫で長持ちするからコスパもグッド！</h4>
                                        <div className='cover_img'><img src="/images/yanecover/point/ph-point1-4.png" alt="" /></div>
                                        <p className='txt110p'>⼀般的な屋根は、リフォーム後10年で、再塗装が必要ですが、スーパーガルテクトなら、<span className='marker bold'>15年間は再塗装がいりません！</span><br />
                                        初期費⽤は、塗装リフォームよりちょっとだけお⾼めですが、<span className='marker bold'>⻑期的にみると、断然お得！</span><br />
                                        スーパーガルテクトは、丈夫で⻑持ち、オトク！<span className='marker bold'>ずーっと安⼼できる屋根なんです！</span></p>
                                        
                                        <p>※ メンテナンス時期を保証するものではありません。住宅の地域や環境により表面劣化の進行状況が異なります。</p>

                                <h3 id="point02">02 遮熱性＆断熱性</h3>

                                <div className='flex-vcenter'>

                                    <div className='cover_point_l'>
                                    <img src="/images/yanecover/point/ph-point2-1.png" alt="" />
                                    </div>

                                    <div className='cover_point_r txt110p noto_san'>
                                    <p>スーパーガルテクトの構造には、<span className='marker bold'>アイジー⼯業の独⾃技術</span>がギュギュっとつまっています！断熱材は、⼩さな泡の集合体でできていて、泡に封じ込められている熱を伝えにくいガスが、<span className='marker bold'>⾼い断熱効果を発揮</span>してくれるんです！<br/>
                                    表⾯の塗料には、遮熱性が⾼いものを採⽤。</p>
                                    
                                    <p>屋根⾃体の構造も、アイジーの独⾃技術で<span className='marker bold'>遮熱性がさらにUP！</span>接合部分にまで、断熱材が充てんされているから、屋根裏への熱の侵⼊を防ぎます。</p>
                                    </div>
                                </div>

                                <div className='flex-vcenter mt20'>
                                    <div className='cover_point_l order2'>
                                    <img src="/images/yanecover/point/ph-point2-2-model.png" alt="" />
                                    </div>

                                    <div className='cover_point_r txt110p noto_san order1'>
                                    <span className='marker bold'>遮熱と断熱のWパワー</span>で、おうちの中は、夏は涼しく、冬は暖かい！
                                    </div>
                                </div>

                                <div className='flex-vcenter mt20'>

                                    <div className='cover_point_l'>
                                    <img src="/images/yanecover/point/ph-point2-3.png" alt="" />
                                    </div>

                                    <div className='cover_point_r noto_san'>
                                    <p className='txt110p'>スーパーガルテクトでリフォームすれば、屋根裏⾯温度の上昇が抑られ、<span className='marker bold'>1年を通して安⼼・快適に過ごせます。</span><br />
                                    さらに、<span className='marker bold'>断熱材は防⽕性能もグッド！</span>「⾃⼰消火性」があるから、燃え広がるリスクを軽減し、<span className='marker bold'>万が⼀の時も⼼強いんです！</span></p>
                                    <p>※アイジー工業（株）の試験による参考値です。実際の屋根を再現した模型に人工太陽を照射し、温度が安定した状態（80分経過後）に屋内をサーモカメラで撮影した結果です。試験条件：屋根表面温度80℃、外気温30℃、小屋裏温度30℃。</p>
                                    </div>
                                </div>

                                <h3 id="point03">03 簡単施工＆毎日安全性能</h3>

                                <div className='flex-vcenter'>

                                    <div className='cover_point_l'>
                                    <img src="/images/yanecover/point/ph-point3-1.png" alt="" />
                                    </div>

                                    <div className='cover_point_r txt110p noto_san'>
                                    <p>スーパーガルテクトは1㎡当たり5㎏で、スレート屋根に比べて約1/4、和瓦屋根に比べて約1/10と<span className='marker bold'>超軽量</span>です！<br />
                                    さらに金属製のため、<span className='marker bold'>地震時の「割れ」の心配がありません。</span></p>
                                    </div>
                                </div>

                                <div className='flex-vcenter mt20'>
                                    <div className='cover_point_l order2'>
                                    <img src="/images/yanecover/point/ph-point3-2.png" alt="" />
                                    </div>

                                    <div className='cover_point_r txt110p noto_san order1'>
                                    施⼯のしやすさと丈夫さから、台⾵や地震発⽣後の災害復旧にも使われています。<br />
                                    もちろん、<span className='marker bold'>災害対策</span>にもおすすめ。<br />
                                    屋根の劣化やひび割れが原因で起こる屋根の⾶散は、⾦属製のスーパーガルテクトが<span className='marker bold'>しっかりガード</span>してくれるので安⼼です。
                                    </div>
                                </div>

                                <div className='flex-vcenter mt20'>

                                    <div className='cover_point_l'>
                                    <img src="/images/yanecover/point/ph-point3-3.png" alt="" />
                                    </div>

                                    <div className='cover_point_r noto_san'>
                                    <p>台⾵を想定した強⾵実験では、⾵速65m/sを超える<span className='marker bold'>強⾵でも問題はありません</span>でした。</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        
                    </div>

                    <h2 className="page_title01">作業の流れ</h2>

                    <p className="center red">（スレート屋根に鋼板屋根をかぶせる場合）</p>
                    
                    <div className="flex-wrap">
                        <div className="yane_fuki_box">
                            <p><img src="/images/yanecover/yane-cover_pic01.jpg" alt="" /></p>
                            <p>1.高圧洗浄</p>
                        </div>
                        <div className="yane_fuki_box">
                            <p><img src="/images/yanecover/yane-cover_pic02.jpg" alt="" /></p>
                            <p>2.既存板金撤去</p>
                        </div>
                        <div className="yane_fuki_box">
                            <p><img src="/images/yanecover/yane-cover_pic03.jpg" alt="" /></p>
                            <p>3.既存雪止め撤去</p>
                        </div>
                        <div className="yane_fuki_box">
                            <p><img src="/images/yanecover/yane-cover_pic04.jpg" alt="" /></p>
                            <p>4.新規防水シート（ルーフィング）敷き</p>
                        </div>
                        <div className="yane_fuki_box">
                            <p><img src="/images/yanecover/yane-cover_pic05.jpg" alt="" /></p>
                            <p>5.軒先板金取付け</p>
                        </div>
                        <div className="yane_fuki_box">
                            <p><img src="/images/yanecover/yane-cover_pic06.jpg" alt="" /></p>
                            <p>6.新規屋根材張り</p>
                        </div>
                        <div className="yane_fuki_box">
                            <p><img src="/images/yanecover/yane-cover_pic07.jpg" alt="" /></p>
                            <p>7.新規雪止め取付け</p>
                        </div>
                        <div className="yane_fuki_box">
                            <p><img src="/images/yanecover/yane-cover_pic08.jpg" alt="" /></p>
                            <p>8.新規棟下地取付け</p>
                        </div>
                        <div className="yane_fuki_box">
                            <p><img src="/images/yanecover/yane-cover_pic09.jpg" alt="" /></p>
                            <p>9.新規棟板金取付け</p>
                        </div>
                        <div className="yane_fuki_box">
                            <p><img src="/images/yanecover/yane-cover_pic10.jpg" alt="" /></p>
                            <p>10.換気棟取付け</p>
                        </div>
                        <div className="yane_fuki_box">
                            <p><img src="/images/yanecover/yane-cover_pic11.jpg" alt="" /></p>
                            <p>屋根カバー工法完</p>
                        </div>
                    </div>

                    <div className="gaiheki_content cover">
                        <div className="title">
                            <h3>福泉工業（株） シルキー G2</h3>
                        </div>
                        <div className="gaiheki_inner">
                            <div className="w70p order2 pl2p">
                                <h4 className="noto_san bold orange txt160p mb3p">遮熱顔料入りちぢみ塗装による優れた耐久性能</h4>
                                <p className="noto_san">一般社団法人 日本屋根診断士協会推奨品</p>
                                <p>穴あき保証25年<br />
                                赤さび保証20年<br />
                                塗膜保証 1 5年</p>
                                <p className='noto_san bold txt160p'>㎡=¥7, 000～</p>
                            </div>
                            <div className="w30p order1">
                                <p><img src="/images/yanecover/yane-cover_pic13.jpg" alt="" /></p>
                            </div>
                        </div>
                    </div>
                    <div className='yane_cover_content'>
                        <h3>商品の特長 シルキーG2とは</h3>

                        <div className='G2_box'>
                            <div className='G2_box_l'><img src="/images/yanecover/G2_new01.png" alt='' /></div>
                            <div className='G2_box_r'>
                                <h4>断熱性がさらにアップ</h4>
                                <p>シルキーG2の裏面はウレタンフォーム+アルミライナー紙で、さらに断熱性能がアップしました。</p>
                            </div>
                        </div>

                        <div className='G2_box'>
                            <div className='G2_box_l'><img src="/images/yanecover/G2_new02.png" alt='' /></div>
                            <div className='G2_box_r'>
                                <h4>豪雨・強風にも心強い</h4>
                                <p>シルキーG2は、ハゼ掛け嵌合方式を採用しているので、ビス打ち部・切断部・接合部が露出せず直接雨水に触れません。左記の試験では漏水はもとより” バタつき ” すらないという結果です。</p>
                            </div>
                        </div>

                        <div className='G2_box'>
                            <div className='G2_box_r2'>
                                <h4>遮熱顔料入り塗装による高耐久性能</h4>
                                <p>シルキーG2の表面は、ポリエステル樹脂塗装を焼付塗装することで優れた耐久性能を実現しました。ちぢみ保護膜の形成により耐磨耗性に優れ、屋根を美しく保ちます。</p>
                            </div>
                            <div className='G2_box_l2'><img src="/images/yanecover/G2_new03.png" alt='' /></div>
                        </div>

                        <div className='G2_box'>
                            <div className='G2_box_r2'>
                                <h4>遮熱＋断熱＋防音で快適に</h4>
                                <p>表面は、遮熱顔料をふんだんに含んだ遮熱塗膜で、赤外線を反射して小屋裏の温度上昇を抑制します。また、裏面にはノンフロンウレタンフォームを9mmの厚さとアルミライナー紙で、断熱効果＋防音効果も抜群です。</p>
                            </div>
                            <div className='G2_box_l2'><img src="/images/yanecover/G2_new04.png" alt='' /></div>
                        </div>

                        <div className='G2_box'>
                            <div className='G2_box_r2'>
                                <h4>何度も塗装を繰返すよりも葺替え！</h4>
                                <p>シルキーG2は、ガルバリウム鋼板製ということもあって、サビにも圧倒的な強さで塗替えや葺替の心配も少なくお手入れや補修の費用もシッカリ抑えて長い目で見ても、とっても経済的です。</p>
                            </div>
                            <div className='G2_box_l2'><img src="/images/yanecover/G2_new05.png" alt='' /></div>
                        </div>

                        <div className='G2_box'>
                            <div className='G2_box_r2'>
                                <h4>軽量で地震に心強い</h4>
                                <p>シルキーG2は日本瓦の約1/10の軽さで、建物への負担を極力おさえ、もしもの地震の際にも心強い屋根材です。この軽さでカバー工法によるリフォームにも最適な屋根材です。</p>
                            </div>
                            <div className='G2_box_l2'><img src="/images/yanecover/G2_new06.png" alt='' /></div>
                        </div>

                        <div className='G2_box'>
                            <div className='G2_box_r2'>
                                <h4>接合部まで美しく強い！</h4>
                                <p>シルキーG2は、水平方向の”重なり段差”が出ない接合方式を採用することで、直線が際立ち、屋根を美しく演出します。この接合方法により、ロスが抑えた施工が可能になり短工期をも実現しました。</p>
                            </div>
                            <div className='G2_box_l2'><img src="/images/yanecover/G2_new07.png" alt='' /></div>
                        </div>

                    </div>

                    <div className="gaiheki_content cover">
                        <div className="title">
                            <h3>アイジー工業（株） スーパーガルテクト</h3>
                        </div>
                        <div className="gaiheki_inner">
                            <div className="w70p order2 pl2p">
                                <h4 className="noto_san bold orange txt160p mb3p">特殊なちぢみ塗装で、 高級感あふれる質感を実現</h4>
                                <p className="noto_san">一般社団法人 日本屋根診断士協会推奨品</p>
                                <p>穴あき保証25年<br />
                                赤さび保証20年<br />
                                塗膜保証 1 5年</p>
                                <p className='noto_san bold txt160p'>㎡=¥8, 000～</p>
                            </div>
                            <div className="w30p order1">
                                <p><img src="/images/yanecover/yane-cover_pic18.jpg" alt="" /></p>
                            </div>
                        </div>
                    </div>

                    <div className='yane_cover_content'>

                        <h3>商品の特長 アイジールーフ「スーパーガルテクト」とは</h3>

                        <h2>抜群の遮熱性・断熱性を発揮する材料構成と形状で快適空間を実現！</h2>

                        <p>アイジールーフ「スーパーガルテクト」は、屋根材と断熱材をひとつにした独自の材料構成により、軽量で抜群に優れた遮熱性・断熱性を発揮する金属屋根材です。表面材に「超高耐久ガルバ」を採用し、穴あき25年保証と沿岸地域への保証範囲も充実。耐久性にも優れ、沿岸地域でも安心してお使いいただけます。</p>

                        <p className='center'><img src="/images/yanecover/yane-cover_img04.png" alt='' /></p>

                        <p><img src="/images/yanecover/yane-cover_pic14.jpg" alt="" /></p>

                        <h3>アイジールーフには3つの商品があります</h3>
                        
                        <div className='flex-wrap'>
                            <div className='yane_cover_item'>
                                <div className='yane_cover_item_inner'>
                                <p className='yane_cover_item_title'>スーパーガルテクト フッ素</p>                    
                                <p>フッ素と3コートの塗膜構成で、耐久性が高く色褪せしにくい</p>
                                </div>
                                <div><img src="/images/yanecover/yane-cover_pic15.jpg" alt="" /></div>
                            </div>
                            <div className='yane_cover_item'>
                                <div className='yane_cover_item_inner'>
                                <p className='yane_cover_item_title'>スーパーガルテクト</p>                    
                                <p>特殊なちぢみ塗装で高級感あふれる質感を実現</p>
                                </div>
                                <div><img src="/images/yanecover/yane-cover_pic16.jpg" alt="" /></div>
                            </div>
                            <div className='yane_cover_item'>
                                <div className='yane_cover_item_inner'>
                                <p className='yane_cover_item_title'>スーパーガルテクトC</p>                    
                                <p>スーパーガルテクトと同じ仕様で扱いやすいコンパクトサイズ</p>
                                </div>
                                <div><img src="/images/yanecover/yane-cover_pic17.jpg" alt="" /></div>
                            </div>
                        </div>
                        
                        <h3>軽量なので施工も楽々</h3>
                        
                        <p>スーパーガルテクトは施工現場での取り回しにおいて、他材料に比べて優位性を発揮します。働き長さ2,960mmの本体1枚あたりの重さが約4kgと軽量なので、現場での施工が簡単です。さらに「スーパーガルテクトC」はスーパーガルテクトの短尺タイプで、狭小地の現場でも扱いやすい長さです。</p>

                        <p className='center'><img src="/images/yanecover/yane-cover_img05.png" alt="" /></p>

                    </div>

                    <div className="gaiheki_content cover">
                        <div className="title">
                            <h3>ディーズルーフィング　ローマン</h3>
                        </div>
                        <div className="gaiheki_inner">
                            <div className="w70p order2 pl2p">
                                <h4 className="noto_san bold orange txt160p mb3p">特殊なちぢみ塗装で、 高級感あふれる質感を実現</h4>
                                <p className="noto_san">温もりのあるセラミックコートを施した世界中に認められた美しい屋根材</p>
                                <p>製品品質保証30年</p>
                                <p className='noto_san bold txt160p'>㎡=¥9, 000～</p>
                            </div>
                            <div className="w30p order1">
                                <p><img src="/images/yanecover/yane-cover_pic19.jpg" alt="" /></p>
                            </div>
                        </div>
                    </div>
                    <div className='yane_cover_content'>

                        <h3>商品の特長 ディーズルーフィング　ローマンとは</h3>

                        <div className='roman_box'>
                            <div className='roman_l'>
                                <h4>優雅な曲線美で建築物の高級感を引き出すローマン</h4>
                                <p>S字瓦調が最大の特徴のローマンは、曲線のデザインが非常に美しく、建築物を格式高く昇華させます。一番人気のカラーはタスカニーで、建築物を明るく美しく彩ることが出来る活気あるオレンジです。<br />
                                他の直線的な屋根材とは違い、その曲線美から結婚式場や有料老人ホームなどに使われることも多く、ローマンを導入している優雅な建築物が増えています。<br />
                                基材に30年保証を付けておりますので、安心してお選びいただける屋根材です。</p>
                            </div>
                            <div className='roman_r'>
                            <img src="/images/yanecover/roman_01.jpg" alt='' />
                            </div>
                        </div>

                        <h3>カラーバリエーション</h3>

                        <div className='roman_color'>
                            <div className='roman_color_txt order2'>
                                <p><img src="/images/yanecover/roman_02.jpg" alt='タスカニー' /></p>
                                <div className='roman_bg_gr'>
                                タスカニーは、パッと眼を引くヨーロピアン調のあざやかなオレンジにクリーム色のフラッシュで、見る人を飽きさせることのない色合いです。
                                </div>
                            </div>
                            <div className='roman_color_img order1'><img src="/images/yanecover/roman_03.png" alt='' /></div>
                        </div>

                        <div className='roman_color'>
                            <div className='roman_color_txt'>
                                <p><img src="/images/yanecover/roman_04.jpg" alt='モスブラウン' /></p>
                                <div className='roman_bg_gr'>
                                数種類の色をブレンドする事によって生まれたモスブラウン。これによって単色では表現できない立体的なコントラストが生まれます。
                                </div>
                            </div>
                            <div className='roman_color_img'><img src="/images/yanecover/roman_05.png" alt='' /></div>
                        </div>
                        
                        <div className='roman_color'>
                            <div className='roman_color_txt order2'>
                                <p><img src="/images/yanecover/roman_06.jpg" alt='ネロ' /></p>
                                <div className='roman_bg_gr'>
                                ネロの漆黒の美しさには安定感があり、年代問わず人気のカラーです。
                                </div>
                            </div>
                            <div className='roman_color_img order1'><img src="/images/yanecover/roman_07.png" alt='' /></div>
                        </div>

                        <h3>ローマン 本体仕様</h3>

                        <div className='flex-wrap'>
                            <div className='w30p flex-center'><img src="/images/yanecover/roman_08.jpg" alt='' /></div>
                            <div className='w70p'>
                                <table className='study_table'>
                                    <tr>
                                        <th>材質</th>
                                        <td>JIS G 3321同等品 ASTM A792M<br />
                                        ジンカリウム鋼板0.39mm<br />
                                        自然石粒仕上げ</td>
                                    </tr>
                                    <tr>
                                        <th>寸法</th>
                                        <td>1320mm×465mm</td>
                                    </tr>
                                    <tr>
                                        <th>働き</th>
                                        <td>1265mm×395mm</td>
                                    </tr>
                                    <tr>
                                        <th>1m²あたりの重量</th>
                                        <td>6.6kg</td>
                                    </tr>
                                    <tr>
                                        <th>1m²あたりの枚数</th>
                                        <td>2枚</td>
                                    </tr>
                                    <tr>
                                        <th>施工可能範囲</th>
                                        <td>2.5寸勾配以上</td>
                                    </tr>
                                    <tr>
                                        <th>国土交通省不燃認定番号</th>
                                        <td>NM2035</td>
                                    </tr>
                                </table>
                                <ul className='img_list3'>
                                    <li><img src="/images/yanecover/roman_09.jpg" alt='' /></li>
                                    <li><img src="/images/yanecover/roman_10.jpg" alt='' /></li>
                                    <li><img src="/images/yanecover/roman_11.jpg" alt='' /></li>
                                </ul>
                            </div>
                        </div>

                        <h3>施工事例</h3>
                        
                        <Swiper
                        spaceBetween={0}                        
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        loop={true}
                        autoHeight>
                            <SwiperSlide><img src="/images/yanecover/roman01_b.jpg" alt='' /></SwiperSlide>
                            <SwiperSlide><img src="/images/yanecover/roman02_b.jpg" alt='' /></SwiperSlide>
                            <SwiperSlide><img src="/images/yanecover/roman03_b.jpg" alt='' /></SwiperSlide>
                            <SwiperSlide><img src="/images/yanecover/roman04_b.jpg" alt='' /></SwiperSlide>
                        </Swiper>

                        

                    </div>
                    
                </div>
            </section>
        </Layout>
    </>
  )
}

export default yanecover
