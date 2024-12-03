import React from 'react'
import Layout from '../../components/Layouts/Layout'
import  "../../styles/HomeStyle.css"
import Section1 from './Section1'
import AboutSection2 from './AboutSection2'
import MenuSction3 from './MenuSction3'
import Section4 from './Section4'
import ShopSection5 from './ShopSection5'
import BlogSection6 from './BlogSection6'
import Section7 from './Section7'

function Home() {
  return (
    <>
      <Layout>
        {/* Section Hero Banner */}
        <Section1></Section1>
        <AboutSection2></AboutSection2>
        <MenuSction3></MenuSction3>
        <Section4></Section4>
        <ShopSection5></ShopSection5>
        <BlogSection6></BlogSection6>
        <Section7></Section7>
      </Layout>
    </>
  )
}

export default Home