import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const sideb = () => {
  return (
    <>
      <ul className="center">
        <li><Link to="/leak/"><StaticImage src="../images/side01.jpg" alt="雨漏り診断" /></Link></li>
        <li><Link href="/drone/"><StaticImage src="../images/side02.jpg" alt="ドローンによる調査・診断を始めました" /></Link></li>
        <li><Link href="/omoide/"><StaticImage src="../images/side03.jpg" alt="思い出のかべ" /></Link></li>
        <li><Link href="https://lin.ee/HR9JB00" target="_blank" rel="noopener noreferrer"><StaticImage src="../images/side04.jpg" alt="お気軽にLINEで簡単お問い合わせ" /></Link></li>
        <li><Link href="/karucera_works/"><StaticImage src="../images/karucera_bn.jpg" alt="カルセラ" /></Link></li>
        <li><Link href="https://www.chord.or.jp/" target="_blank" rel="noopener noreferrer"><StaticImage src="../images/smiledial_logo.png" alt="住まいるダイヤル" /></Link></li>
        <li><Link href="https://www.j-anshin.co.jp/" target="_blank" rel="noopener noreferrer"><img src="/images/side_ansin.svg" alt="株式会社住宅あんしん保証" /></Link></li>
        <li><StaticImage src="../images/side06.jpg" alt="外装リフォームの教科書" /></li>
        <li><Link href="https://www.mokutokyo.jp/" target="_blank" rel="noopener noreferrer"><StaticImage src="../images/side07.jpg" alt="（一社）木造住宅塗装リフォーム協会" /></Link></li>
        <li><Link href="/aeon_credit/"><StaticImage src="../images/side05.jpg" alt="便利な分割ローン" /></Link></li>
        <li><StaticImage src="../images/side09.jpg" alt="選べる支払方法" /></li>
      </ul>
    </>
  )
}

export default sideb
