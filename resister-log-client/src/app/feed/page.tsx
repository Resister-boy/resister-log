import React from 'react'
import FeedClientPage from '@/app/feed/FeedClientPage'
import styles from '@/app/feed/page.module.scss'
import classNames from 'classnames/bind'

const cn = classNames.bind(styles)

const FeedPage = () => {
  return (
    <main>
      <FeedClientPage />
    </main>
  )
}

export default FeedPage
