import React from 'react'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const kuchikomi = () => {
  return (
    <>
      <section id="kuchikomi">
        <div className="main-content">
            <div className="kuchikomi_title">
                <div className="kuchikomi_title_l flex-center">
                    <span className="g_logo"><StaticImage src="../images/g_logo.svg" width={100} height={32} alt="Google" /></span>
                </div>                
                <div className="kuchikomi_title_r">
                    <h3>佐々木塗装の口コミ<br />
                    総合評価:4.7<span className="g_kuchi_star">★★★★★</span> <br className="smp" />口コミ数:32</h3>
                </div>
            </div>
        
            <ul className="kuchikomi_box">
              <li><span className="star">★★★★★</span> <span className="bold">2022/12/27 ゆうこ様</span><br />
              軒天の色の変更にも快く応じて頂きありがとうございました。職人さんも感じのいい方で、丁寧に対応して頂き感謝しています。</li>
              <li><span className="star">★★★★★</span> <span className="bold">2022/10/20 中田良枝様</span><br />
              丁寧で、キレイに作業して頂きました。ありがとうございます。</li>
              <li><span className="star">★★★★★</span> <span className="bold">2022/10/19 レッドブルー様</span><br />
              外壁塗装ありがとうございました。社長、スタッフさんの対応に心がこもっており、親切丁寧な説明でとても安心できました。工事完了後はまるで新築の様な外観に仕上がっていて大変感動しました。</li>
              <li><span className="star">★★★★☆</span> <span className="bold">2022/10/12 久保雄造様</span><br />
              佐々木塗装さんには見積もりから、丁寧な説明して頂きましまた、３回塗りを契約しましたが塗装担当のかたが小さなところまできれいに丁寧に仕上げて頂きました、知人にお勧めしたいと思います</li>
              <li><span className="star">★★★★★</span> <span className="bold">2022/10/5 松木俊博様</span><br />
              きめ細やかな配慮と丁寧な仕事ぶりに心から感謝しております。プライバシーも理解していただいて大変ありがたかったです。引き続きよろしくお願いします。松木</li>
              <li><span className="star">★★★★★</span> <span className="bold">2022/8/18 福田叔将様</span><br />
              営業.職人の方が非常によい方でした。塗装も綺麗にして頂き満足してます。ありがとございました。</li>
              <li><span className="star">★★★★★</span> <span className="bold">2022/7/28 藤原千恵様</span><br />
              古くなっていた屋根や外装が見違えるほど綺麗になりました。作業して下さった方々も親切、丁寧で、佐々木塗装さんにお願いして良かったです。</li>
              <li><span className="star">★★★★★</span> <span className="bold">2022/7/28 しまちゃん様</span><br />
              この度は我が家の屋根カベを綺麗にして頂きとても気持ち良くなりました。見積もりからご近所への挨拶も丁寧にして頂きました。社長さんをはじめ社員さん職人さん、他の工事業者の方まで柔らかく丁寧な作業に佐々木塗装さんにお願いして本当に良かったです。ありがとうございました。他にも窓ガラスをオシャレな二重窓にしてもらったりと色々お家の事もされているので、また何か改装するときは佐々木塗装さんにお願いしたいです。</li>
              <li><span className="star">★★★★★</span> <span className="bold">2022/5/26 中田様</span><br />
              高評価: 対応の早さ, 外壁塗装をお願いしました。 どんな色にするか迷いましたが、色見本を作っていただき気に入った色に塗装する事が出来ました。 施工中も工事予定・進捗状況の説明があり、工事状況がよく分かりました。 職人の方々に細かいところまで丁寧に仕事をしていただき、きれいになり気持ちいいです。 ありがとうございました。 残念なのは、外構の塗装色を慎重に決めなかった事です。</li>
              <li><span className="star">★★★★★</span> <span className="bold">2022/5/25 ココナッツ様</span><br />
              高評価: プロ意識, 品質, 外壁塗装をお願いしましたが、見積りの時から丁寧な対応と分かりやすい説明をして頂いたので、信頼して依頼することができました。職人の方々の丁寧な作業にもとても感謝しています。</li>
              <li><span className="star">★★★★★</span> <span className="bold">2022/5/12 岡下英未様</span><br />
              高評価: プロ意識, 品質,収納のアドバイスをして頂きました。 思い浮かばなかった収納の仕方もあったので勉強になりました！部屋がスッキリして嬉しいです！ありがとうございました！</li>
              <li><span className="star">★★★★★</span> <span className="bold">2022/4/14 岡下美智留様</span><br />
              数年前、外壁塗装をしてもらいました。 色々アドバイスをしてもらい、とても気に入っています。ありがとうございました??</li>
              <li><span className="star">★★★★★</span> <span className="bold">2022/4/13 西田祥子様</span><br />
              高評価: プロ意識, 対応の早さ, 時間を厳守したか 皆さんまじめで几帳面にお仕事され周りにも気遣いが良かったです。</li>
              <li><span className="star">★★★★★</span> <span className="bold">2022/4/3 木村紀子様</span><br />
              高評価: プロ意識, 対応の早さ, 時間を厳守したか 外壁塗装工事が終わってひと月が経ちましたが家を見るたびに本当に綺麗にして頂いたと実感しています 本当に有難うございました！感謝の言葉以外ありません。 社員さん職人さんの丁寧且つ真摯な対応、仕事には頭が下がるばかりでした。 佐々木塗装さんに工事をお願いして本当に良かったと思っています これからも宜しくお願いいたします!</li>
              <li><span className="star">★★★★★</span> <span className="bold">2022/3/17 hatsue tsuchiya様</span><br />
              外壁塗装をお願いしました。 寒い時期でしたがとてもツ丁寧に段取り良くしていただき、安心してお任せすることができました。 家も綺麗になり、満足しております。 この度はお世話になり、ありがとうございました。</li>
              <li><span className="star">★★★★★</span> <span className="bold">2021/10/16 hiro ban様</span><br />
              15年ぶり2回目の塗装です。値段は安過ぎず高過ぎず、技術力は高く信頼のできる業者さんを選びたくて3社と商談しました。決め手に困りましたが、地元での施工実績が多い事が信頼の証と思いました。工事が始まるとスタッフの方や職人さんが次々と来られました。皆さん親しみのある方々でしたが、仕事は厳しく取り組んでおられました。その姿に感謝しかありませんでした。佐々木塗装さんにお願いして良かったです。</li>
              <li><span className="star">★★★★★</span> <span className="bold">2021/9/7 三谷香様</span><br />
              佐々木塗装さんには、家の外壁塗装をお願いしました。 職人さんも親切、丁寧な対応でとても安心できました。 仕上がりもとてもきれいで大変満足しています。 ありがとうございました。</li>
              <li><span className="star">★★★★★</span> <span className="bold">2021/8/26 mm12yuu様</span><br />
              他社で何件か見積を出してもらっていましたが、比べ物にならないくらい佐々木塗装さんの見積書は事細かく記載してあり説明も詳細にして頂いたり施工事例の場所まで連れて行って頂いたりと、とても丁寧でした。 仕上がりも綺麗でありがとうございました♪ サービス: 屋外の塗装</li>
              <li><span className="star">★★★★★</span> <span className="bold">2021/6/28 松田和明様</span><br />
              この度、佐々木塗装さんには築40年余りの我が家の外壁塗装、雨樋の取り替え、柱塗り等の工事をしてもらいました。柱の木目部分が多くて職人さんには大変だったと思います。外から見ると新築のようになり嬉しく思っています。<br />
              佐々木塗装さんは優れた職人さんをおもちで、コツコツときめ細かい仕事をしていただき本当に心から感謝しております。 M.H</li>
            </ul>
        </div>
      </section>
    </>
  )
}

export default kuchikomi
