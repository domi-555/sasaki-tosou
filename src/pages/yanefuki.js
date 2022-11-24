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

const yanefuki = () => {
  return (
    <>
      <Layout>
        <Seo
            title="屋根葺替え"
            description="外壁塗装・屋根塗装なら広島の佐々木塗装の屋根葺替えページです。"
        />
        <p id="page-top" data-sal="slide-bottom" viewOffset="0.2" data-sal-delay="200" data-sal-easing="ease"><AnchorLink to="/yanefuki/#pagetop" title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink></p>

        <ul className="fix_bn" data-sal="slide-right" viewOffset="0.2" data-sal-delay="300" data-sal-easing="ease">
            <li><Link to="/contact_page/" className="mail_bt"><img src="/images/mail_icon.svg" width={45} height={45} className="opa" alt="" />
            <span>お問い合わせ</span></Link></li>
            <li><Link to="https://lin.ee/HR9JB00" className="line_bt" target="_blank"><img src="/images/line_icon.svg" width={45} height={45} className="opa" alt="" />
            <span>ライン見積もり</span></Link></li>
            <li className="pc"><Link to="https://twitter.com/sasakipaint1116" target="_blank" className="tw_bt"><StaticImage src="../images/tw_icon.png" width={25} height={25} className="opa" alt="" /></Link></li>
            <li className="pc"><Link to="https://www.facebook.com/profile.php?id=100063604571277" target="_blank" className="fb_bt"><StaticImage src="../images/fb_icon.png" width={25} height={25} className="opa" alt="" /></Link></li>
            <li className="pc"><Link to="https://www.instagram.com/sasaki.ryoko/" target="_blank" className="insta_bt"><span className="insta"><img src="/images/insta_icon.svg" width={25} height={25} className="opa" alt="" /></span></Link></li>
        </ul>
        <div id="mainimage-sub" className='yanefuki'>
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
                    <Link to="/yanefuki/" itemprop="item">
                        <span itemprop="name">屋根葺替え</span>
                    </Link>
                    <meta itemprop="position" content="2" />
                </li>
            </ul>
        </div>
        <section id="sub-page">
        <div className="main-content">

        <div className="gaiheki_title_box">
                    <h1>
                        <img src="/images/yanefuki_img_title.png" alt="古くなった屋根材を新しい屋根材に交換 外壁塗装 屋根葺替え" className="pc" />
                        <img src="/images/yanefuki_img_title_smp.png" alt="古くなった屋根材を新しい屋根材に交換 外壁塗装 屋根葺替え" className="smp" />
                    </h1>
                </div>

          
          
          <div className='yanefuki_box'>
            <h2>「瓦屋根は地震に弱い・・・」<br />
            その報道は<span>間違っています。</span></h2>
            <div className='yanefuki_img_box'>
            <div><img src='/images/yanefuki_img_batsu.png' alt="" /></div>
            <div><img src='/images/yanefuki_img01.png' alt="" /></div>
            </div>
            <div className='yanefuki_txt01'>
            <p>倒れた家屋。散乱した瓦。阪神・淡路大震災や東日本大震災、<br />
            そして2016年4月の熊本地震においても、<br />
            様々なメディアを通じて「瓦屋根の家は地震に弱い」といった報道やイメージが一斉に広がりました。<br />
            はたして瓦は本当に地震に弱いのでしょうか？<br />
            いいえ。それは<span className='noto_san bold skyblue'>大きな誤解です。</span></p>
            </div>

            <div className='yanefuki_inner'>

            <div className='yanefuki_in_box'>

            <h3>家屋倒壊の理由は...</h3>
            <h4>「旧耐震基準」にアリ</h4>
            <p>1981年に建築基準法の耐震基準が大幅に見直され、以前よりも約1.4倍の壁量が必要となりました。今回の熊本地震で倒壊した住宅を見ても、1981年以前の「旧耐震基準」の家がほとんど。倒壊の原因は耐震性の低さにあるのに、これらの古い住宅には日本古来の瓦屋根が多く使われていたことから、「重い瓦は地震に弱い」という誤ったイメージが定着してしまったのです。</p>
            <p>[ 耐震基準の変遷(必要壁量) ]（単位：cm/m&sup2;）</p>
            <p>木造住宅は地震や台風などの力に、耐力壁で抵抗します。建築基準法施行令で最低限必要な壁量が定められており、これを「必要壁量」といいます。</p>
            <div><img src='/images/yanefuki_img04.png' alt="" /></div>
            </div>
            <div className='yanefuki_in_box'>
            <h3>瓦のズレや落下は..</h3>
            <h4>「施工方法が古い」から</h4>
            <p>瓦屋根の施工方法は、長年「土葺き工法」や「釘打ち無しの工法」が一般的で、土の上に載っているだけ、桟木にひっかけてあるだけの不安定な状態でした。近年のガイドライン工法確立後も古い施工仕様がまだまだ残っており、今回の熊本地震でも瓦のズレや落下が多数発生しました。こうした被害状況も、瓦の耐震性の低さが指摘される一因となっています。</p>

            <div><img src='/images/yanefuki_img02.png' alt="" /></div>

            <div className='yanefuki_hikaku'>

            <h3>同じ震度でも...</h3>
            
            <h4>屋根の被害に大きな差が</h4>
            
            <p>写真左は2000年以降に建てられた家で、瓦屋根に被害なし。右は旧耐震基準で建てられた家で、屋根の施工方法も古く、瓦のズレや落下が多数見られます。</p>

            <p><img src='/images/yanefuki_img03.jpg' alt="" /></p>

            </div>


            </div>

            </div>

          </div>

          <div className='yanefuki_box2'>
            <div className='yanefuki_box2_l'>
              <h3><span className='txt80p'>熊本地震でもズレ・脱落ほとんどナシ。</span><br />
              <span className='skyblue txt120p'>〝防災瓦〟なら、</span><br />
              地震も台風も怖くない。</h3>
              <p>日本の屋根といえば「瓦」。でも最近は「地震に弱い」という誤解の声がちらほら・・・。<br />
              そんな今こそ、進化した瓦「防災瓦」がオススメです。<br />
              熊本地震の調査結果によると、以前の瓦の屋根にはたくさんのズレ・脱落が見つかりましたが、<br />
              「防災瓦」の屋根にはほとんど被害が見当たりませんでした。<br />
              では、防災瓦は一体何が違うのか・・・。そのヒミツ、お教えします！</p>

              

            </div>

            <div className='yanefuki_box2_r'><img src='/images/yanefuki_img05.png' alt="" /></div>

            <div>

            

              <div className='himitsu_box'>
                <div>
                  <p className='center'><img src='/images/yanefuki_img06.png' alt="" /></p>
                  <p>以前の土葺き工法のように重い土を使わず、屋根重量を約半分程度に軽量化しました。</p>
                </div>
                <div>
                  <p className='center'><img src='/images/yanefuki_img07.png' alt="" /></p>
                  <p>すべての瓦を釘やネジでしっかり固定。瓦同士も固定し、ズレや脱落を防止します。</p>
                </div>
                <div>
                  <p className='center'><img src='/images/yanefuki_img08.png' alt="" /></p>
                  <p>屋根の棟部分を金具などでしっかり固定するガイドライン工法で崩壊を防ぎます。</p>
                </div>
              </div>

              <div className='fukkou_box'>

                <h3>復興住宅にも〝防災瓦〟が使われています！</h3>

                <div className='flex-wrap'>

                  <div>
                  <p>東日本大震災の被災地では、その後の災害公営住宅に数多くの「防災瓦」が採用されています。それは「防災瓦」が現行の耐震基準での耐震性が認められたのはもちろん、耐久性・メンテナンス性に加え、性能面・デザイン面でも評価されたことを証明しています。</p>
                  </div>
                  <div>
                  <img src="/images/fukkou_img01.jpg" alt="" />
                  </div>
                  <div>
                  <img src="/images/fukkou_img02.jpg" alt="" />
                  </div>

                </div>

              </div>

            </div>
          </div>

          <div className="yanefuki_box5">
            <div className="yanefuki_box5_inner">

              <p className='noto_san dark-green txt180p bold700 mb0'>日本の屋根には、やっぱり瓦！</p>
              <h3 className='yanefuki_subttl'><span className='skyblue'>鶴弥</span>の<span className='skyblue'>〝防災瓦〟</span>は<br  className='pc'/>
              ココが違います。</h3>

              <div className='yanefuki_img_box'>
                <div><img src='/images/yanefuki_img_maru.png' alt="" /></div>
                <div><img src='/images/yanefuki_img18.png' alt="" /></div>
              </div>

              <h4 className='noto_san dark-green bold700 txt140p'><span className='under_wavy'>瓦の重さは、50年、100年と屋根を守り抜く「責任」の重さです。</span><br />
              耐震性はもちろん、ランニングコストや快適性を考えても、鶴弥の「防災瓦」で決まりです。</h4>

              <div className="yanefuki_box3">
                <div className="yanefuki_box3_inner">
                  <h3><span className='skyblue txt120p'> 耐震性</span>が違う！<img src='/images/yanefuki_img19.png' alt="" /></h3>

                  <div className='taisin_box'>
                    <div className='taisin_l'>
                      <h4 className='pc'>これまでの瓦</h4>
                      <h5 className='noto_san dark-green'>屋根が重く、地震時にズレが…</h5>
                      <div className='flex-wrap'>
                        <div className='w60p pr3p'>
                        <p>非常に重い土葺き屋根。<br />
                        たくさんの土を使っていたため、建物に大きな負荷がかかり、瓦がずれ落ちることも…。</p>
                        </div>
                        <div className='w40p center'><img src='/images/yanefuki_img20.jpg' alt="" /></div>
                      </div>
                    </div>
                    <div className='taisin_r'>
                      <h4 className='pc'>鶴弥の防災瓦</h4>
                      <h5 className='noto_san dark-green'>土を使わず、屋根重量を<span className='skyblue txt140p'>最大60％軽量化</span></h5>

                      <div className='flex-wrap'>
                        <div className='w50p pr3p'>                  
                        <p>鶴弥の防災瓦にすれば、屋根の重量も土葺き工法の約半分程度に。建物への負荷を大幅に軽減します。</p>
                        </div>
                        <div className='w50p center'><img src='/images/yanefuki_img21.jpg' alt="" /></div>
                      </div>
                    </div>
                  </div>

                  <div className='taisin_box'>
                    <div className='taisin_l'>
                      
                      <h5 className='noto_san dark-green'>固定不足で瓦が飛散…</h5>
                      <div className='flex-wrap'>
                        <div className='w60p pr3p'>
                          <p>以前は釘止め基準が4枚に1枚程度で、大きな台風が来ると瓦が飛び、隣家に被害をもたらすことも…。</p>
                        </div>
                        <div className='w40p center'><img src='/images/yanefuki_img22.jpg' alt="" /></div>
                      </div>
                    </div>
                    <div className='taisin_r'>
                      
                      <h5 className='noto_san dark-green'><span className='skyblue txt140p'>スーパーロック工法</span>でズレ・飛散防止</h5>

                      <div className='flex-wrap'>
                        <div className='w50p pr3p'>                  
                          <p>上下の瓦同士をがっちりロック。さらに瓦を釘で固定し、大地震の揺れや台風でも安心です。</p>
                        </div>
                        <div className='w50p center'><img src='/images/yanefuki_img23.png' alt="" /></div>
                      </div>
                    </div>
                  </div>

                  <div className='taisin_box'>
                    <div className='taisin_l'>
                      
                      <h5 className='noto_san dark-green'>棟の崩壊…</h5>
                      <div className='flex-wrap'>
                        <div className='w60p pr3p'>
                          <p>棟を銅線で固定している場合の多くが棟芯材なし。地震時に崩壊する可能性が…。</p>
                        </div>
                        <div className='w40p center'><img src='/images/yanefuki_img24.jpg' alt="" /></div>
                      </div>
                    </div>
                    <div className='taisin_r'>
                      
                      <h5 className='noto_san dark-green'><span className='skyblue txt140p'>ガイドライン工法</span>で崩壊防止</h5>

                      <div className='flex-wrap'>
                        <div className='w50p pr3p'>                  
                          <p>パッキン付ステンレスねじで棟部をしっかり固定。科学的実験により実証された、耐震性の高い工法です。<br />
                          ※棟金具仕様は、地域によって仕様が異なります</p>
                        </div>
                        <div className='w50p center'><img src='/images/yanefuki_img25.png' alt="" /></div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="yanefuki_box3">
                <div className="yanefuki_box3_inner">
                <h3><span className='skyblue txt120p'>耐久性</span>が違う！<img src='/images/yanefuki_img09.png' alt="" /></h3>
                
                
                <div className='yanefuki_box3_inbox'>
                  <div>
                  <h4>サビない<br className='pc' />
                色落ちしない</h4>
                    <p>鶴弥の防災瓦は釉薬を施し、高音で焼き上げた粘土瓦です。<br />
                    30年経過しても、サビない、色落ちしない。塗り替えメンテナンスがいらないことも特徴のひとつです。</p>
                  </div>
                  <div>
                    <h5>サビた金属屋根</h5>
                    <img src='/images/yanefuki_img10.jpg' alt="" />
                  </div>
                  <div>
                    <h5>色落ちした化粧スレート屋根</h5>
                    <img src='/images/yanefuki_img11.jpg' alt="" />
                  </div>
                  <div>
                    <h5>30年後の瓦屋根</h5>
                    <img src='/images/yanefuki_img12.jpg' alt="" />
                  </div>
                </div>

                </div>
              </div>

              <div className="yanefuki_box4">
                <div className="yanefuki_box4_inner">

                  <h3><span className='skyblue txt120p'>経済性</span>が違う！<img src='/images/yanefuki_img13.png' alt="" /></h3>

                  <div className='flex-wrap'>

                    <div className='w60p'>

                      <p>［コストとメンテナンスのイメージ］<br />
                      屋根面積100m&sup2;で、メンテナンスコスト・シミュレーションを行いました。</p>

                      <p><img src='/images/yanefuki_img14.png' alt="" /></p>

                      <p>※1 専門業者による定期点検を10年に1回程度を目安として実施するようにお願いします。</p>

                    </div>

                    <div className='w40p'>

                      <h4 className='yanefuki_fukidasi'>化粧スレートと比べて30年間で<br className='pc' />
                      <span>約</span><span className='txt220p'>230万円</span>お得!!</h4>
                      
                      <h5 className='noto_san bold txt180p dark-green'>長持ちするから<br className='pc' />
                      「塗替えコスト不要」</h5>
                      
                      <p>防災瓦の初期費用は、化粧スレートに比べると高いのは事実。しかし、20年、30年という単位でみると、200万円以上のコストメリットがあります。</p>

                    </div>

                  </div>

                </div>
              </div>

              <div className="yanefuki_box4">
                <div className="yanefuki_box4_inner">

                  <h3><span className='skyblue txt120p'>快適性</span>が違う！<img src='/images/yanefuki_img15.png' alt="" /></h3>

                  <div className='flex-wrap'>

                  <div className='kaiteki_box'>

                  <h4 className='noto_san bold dark-green txt160p'>高い「通気性」と<br className='pc' />
                  「断熱性」を実現</h4>
                  
                  <p>防災瓦の場合、野地面との間に空気層ができます。そのため通気性もよくなり、熱を屋根裏へ伝えにくく、また室内の熱を逃しにくい働きがあります。</p>

                  </div>

                  <div className='kaiteki_box'><img src='/images/yanefuki_img16.png' alt="" /></div>

                  <div className='kaiteki_box'><img src='/images/yanefuki_img17.png' alt="" /></div>

                  </div>

                </div>
              </div>

            </div>
          </div>

          <h3 className="page_title01">屋根葺き替え工事の流れ</h3>

          <p className="center red">（スレート屋根から陶器平板瓦に交換する場合）</p>

          <div className="flex-wrap">            
            <div className="yane_fuki_box">
              <p><img src="/images/yane_fuki_pic05.jpg" alt="" /></p>
              <p>1.既存屋根材撤去</p>
            </div>
            <div className="yane_fuki_box">
              <p><img src="/images/yane_fuki_pic06.jpg" alt="" /></p>
              <p>2.新規コンパネ追い張り</p>
            </div>
            <div className="yane_fuki_box">
              <p><img decoding="async" src="/images/yane_fuki_pic07.jpg" alt="" /></p>
              <p>3.新規ルーフィング(防水シート)張り</p>
            </div>
            <div className="yane_fuki_box">
              <p><img decoding="async" src="/images/yane_fuki_pic08.jpg" alt="" /></p>
              <p>4.桟木取付け</p>
            </div>
            <div className="yane_fuki_box">
              <p><img decoding="async" src="/images/yane_fuki_pic09.jpg" alt="" /></p>
              <p>5.新規瓦葺き</p>
            </div>
            <div className="yane_fuki_box">
              <p><img decoding="async" src="/images/yane_fuki_pic10.jpg" alt="" /></p>
              <p>6.棟換気取付け</p>
            </div>
            <div className="yane_fuki_box">
              <p><img decoding="async" src="/images/yane_fuki_pic11.jpg" alt="" /></p>
              <p>7.新規棟積み</p>
            </div>
            <div className="yane_fuki_box">
              <p><img decoding="async" src="/images/yane_fuki_pic12.jpg" alt="" /></p>
              <p>8.新規壁際板金取付け</p>
            </div>
            <div className="yane_fuki_box">
              <p><img decoding="async" src="/images/yane_fuki_pic13.jpg" alt="" /></p>
              <p>屋根葺き替え完</p>
            </div>
          </div>

          <div className="gaiheki_content">
            <div className="title">
              <h3>屋根葺き替え工事</h3>
            </div>
            <div className="gaiheki_inner">
              <div className="w60p order2 pl2p">
                <h4 className="noto_san bold orange txt160p mb3p">古くなった屋根材を新しい屋根材に交換</h4>
                <p className="noto_san">古くなった屋根材を全面的に交換する工事です。<br />
                  既存の屋根材(瓦、乾式コンクリート瓦、スレート屋根)を撤去して新しい屋根材に交換します。<br />
                  無機の素材である陶器瓦にする事で塗装等のメンテナンスが不要になります。<br />
                  最近は低勾配用の瓦もあるので2寸からの葺き替えが可能です。</p>
                <p>乾式コンクリート、セメント瓦、スレート屋根から陶器瓦に交換する場合　㎡＝8,000円～</p>
                <p>※スレート屋根の場合、コンパネの追い張りが必要です<br />
                  ※アスベストを含有している屋根材の場合、処分費が割高になります</p>
                <p>《使用瓦》<br />
                  (株)鶴弥　スーパートライ110　ＴＹＰＥⅠ<br />
                  色　アンティックブラウン</p>
              </div>
              <div className="w40p order1 penki_cont">
                <p><img decoding="async" src="/images/yane_fuki_pic16.jpg" alt="" /></p>
              </div>
            </div>
          </div>
          
        </div>
      </section>
      </Layout>
    </>
  )
}

export default yanefuki
