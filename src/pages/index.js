import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Privacy policy</h1>
    <p>I needed this because the Play Store said I had to have a privacy policy URL. I don't collect any information, and everything is processed on your devie only.</p>
    <p>The source code is <a href="https://github.com/jieqiangli/QRScanner">on GitHub</a></p>

    <p>Now go do something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
