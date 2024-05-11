import React from 'react'
import PostDetailClientPage from '@/app/post/[id]/PostDetailClientPage'
import styles from '@/app/post/[id]/page.module.scss'
import classNames from 'classnames/bind'

const cn = classNames.bind(styles)

const PostDetail = () => {
  return (
    <main>
      <PostDetailClientPage />
    </main>
  )
}

export default PostDetail
