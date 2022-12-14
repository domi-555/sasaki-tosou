import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"
import PropTypes from "prop-types"

const SEO = ({ title, description, image, article }) => {
  const { site } = useStaticQuery(query)
  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata
  const { pathname } = useLocation()

  const seo = {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet>
      <html lang="ja" />
      <body id="pagetop" />
      <title>{seo.title}</title>
      <meta name="keywords" content="佐々木塗装,外壁塗装,広島,外壁塗装 広島,広島 外壁塗装,屋根塗装,塗り替え,一級塗装技能士在籍,安佐北区,東区,西区,南区,安芸区,佐伯区,安佐南区,海田町,府中町,熊野町,坂町,五日市,廿日市市,東広島市,安芸高田市" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}

      {/*スマホ検索画像*/}
          {/*
            <PageMap>
              <DataObject type="thumbnail">
                <Attribute name="src" value="https://sasaki-tosou.co.jp/images/mobile_img.jpg"/>
                <Attribute name="width" value="120"/>
                <Attribute name="height" value="120"/>
              </DataObject>
            </PageMap>
          */}
          <meta name="thumbnail" content="https://sasaki-tosou.co.jp/images/mobile_img.jpg" />
        {/*スマホ検索画像*/}
      
    </Helmet>
  )
}

export default SEO

const query = graphql`
  query {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
`

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}