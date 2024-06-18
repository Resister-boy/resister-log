'use client'
import React, { Fragment, ReactNode } from 'react'
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  )
}

export default Layout
