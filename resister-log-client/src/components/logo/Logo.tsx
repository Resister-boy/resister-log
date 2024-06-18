import Image from 'next/image'
import React from 'react'
import ResisterboyImage from '@/assets/image/resisterboy.png'
import styles from '@/components/Logo/Logo.module.scss'
import classNames from 'classnames/bind'
import Link from 'next/link'

const cn = classNames.bind(styles)

type LogoProps = {
  withImage?: boolean;
}

const Logo = ({ withImage = true }: LogoProps) => {
  return (
    <Link href={'/'}>
      <div className={cn('container')}>
        {withImage && (
          <Image
            src={ResisterboyImage}
            alt='Logo'
            width={48}
            height={48}
            className={cn('image')}
          />
        )}
        <span className={cn('text')}>RESISTER-BOY.LOG</span>
      </div>
    </Link>

  )
}

export default Logo
