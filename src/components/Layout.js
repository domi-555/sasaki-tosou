import React from 'react'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from './Header'
import FootContact from './FootContact'
import Footer from './Footer'

const Layout = ({ children }) => {
    const data = useStaticQuery(
        graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `)
    return (
        <>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div id="content">
            <div className="maincontent">

                {children}

            </div>
        </div>
        <FootContact />
        <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
