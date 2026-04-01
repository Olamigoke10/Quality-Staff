import About1 from '@/components/minipages/About1'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { SITE_NAME } from '@/lib/site'

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About — {SITE_NAME}</title>
        <meta
          name="description"
          content={`Learn about ${SITE_NAME}: our mission, story, and commitment to healthcare staffing in Wales.`}
        />
      </Helmet>
      <About1 />
    </div>
  )
}

export default About
