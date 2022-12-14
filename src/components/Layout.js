import React from 'react'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from './Header'
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
            <section>
                <div className='main-content'>
                    {children}
                </div>
            </section>
        <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
