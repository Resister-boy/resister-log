'use client'
import React from 'react'
import styles from '@/components/layout/Header/header.module.scss'
import classNames from 'classnames/bind'
import Logo from '@/components/logo/Logo'

const cn = classNames.bind(styles)

const Header = () => {
  return (
    <header className={cn('container')}>
      <div className={cn('inner')}>
        <Logo
          withImage={true}
        />
      </div>
    </header>
  )
}

export default Header
