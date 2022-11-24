/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "外壁塗装・屋根塗装なら広島の佐々木塗装｜安心施工、保証付きのアフターサービス。",
    description: "広島外壁塗装｜広島市安佐北区で施工実績No.1。広島発のドローンを使用した外装劣化診断士による診断。安心施工、保証付きのアフターサービス。大切な住まいの塗り替えは一級塗装技能士在籍、塗装のプロフェッショナル集団。屋根・外壁塗装の専門店の佐々木塗装にお任せください。 ［無料診断・無料見積を実施中］",
    image: "/images/mobile_img.jpg",
    url: "https://sasaki-tosou.co.jp",
    twitterUsername: "sasakipaint1116",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 75, //デフォルトは50
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-KXCBK4G",
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {        
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    
    

    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      }
    },
    
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: 1, // Percentage of an element's area that needs to be visible to launch animation アニメーションを起動するために必要な、要素の表示領域の割合。
          once: true, // Defines if animation needs to be launched once アニメーションを一回だけ起動する必要があるかどうかを定義する
          disable: false, // Flag for disabling animations アニメーションを無効にするフラグ
          
          // Advanced Options
          selector: '[data-sal]', // Selector of the elements to be animated アニメーションする要素のセレクタ
          animateClassName: 'sal-animate', // Class name which triggers animation アニメーションのトリガーとなるクラス名。
          disabledClassName: 'sal-disabled', // Class name which defines the disabled state 無効状態を定義するクラス名
          rootMargin: '0% 50%', // Corresponds to root's bounding box margin ルートのバウンディングボックスマージンに対応する
          enterEventName: 'sal:in', // Enter event name イベント名の入力
          exitEventName: 'sal:out', // Exit event name 終了イベント名
      }
    },

    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
  ],
}
