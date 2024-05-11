'use client'
import React, { Fragment, ReactNode } from 'react'
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'

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
