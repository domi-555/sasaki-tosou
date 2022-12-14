import React from 'react'
import { Link } from "gatsby"

const kuchikomi = () => {
  return (
    <>

    

      <section id="kuchikomi">
        <div className="main-content">
            <div className="kuchikomi_title">
                <div className="kuchikomi_title_l flex-center">
                    <span className="g_logo"><img src="../images/g_logo.svg" width={100} height={32} alt="Google" /></span>
                </div>                
                <div className="kuchikomi_title_r">
                    <h3>佐々木塗装の口コミ<br />
                    総合評価:4.7<span className="g_kuchi_star">★★★★★</span> <br className="smp" />口コミ数:32</h3>
                </div>
            </div>

            <div className="kuchikomi_box">

            <iframe id="google_kuchikomi" width="100%" height={400} scrolling="auto" src="https://sasaki-tosou.co.jp/kuchikomi.html" title="Google口コミ" target="_top" />

            </div>

            <p className="center"><Link to="https://goo.gl/maps/C2XvY7mLg1dtShSH9" className='bt01'>すべての口コミを見る</Link></p>
            
        </div>
    </section>
    </>
  )
}

export default kuchikomi
