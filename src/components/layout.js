/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Intro from "./intro"
import VideoSection from "./video"
import "./layout.css"
import Footer from "./footer"

const Layout = () => {

  return (
    <div>
      <Header />
      <Intro />
      <VideoSection />
      <Footer />
      
    </div>
  )
}

export default Layout
