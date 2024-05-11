import React from 'react'
import AboutClientPage from '@/app/about/AboutClientPage'
import styles from '@/app/about/page.module.scss'
import classNames from 'classnames/bind'

const cn = classNames.bind(styles)

const AboutPage = () => {
  return (
    <main>
      <AboutClientPage />
    </main>
  )
}

export default AboutPage
