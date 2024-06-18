import Image from 'next/image'
import React from 'react'
import ResisterboyImage from '@/assets/image/resisterboy.png'
import styles from '@/components/Logo/Logo.module.scss'
import classNames from 'classnames/bind'
import Link from 'next/link'

const cn = classNames.bind(styles)

type LogoProps = {
  withImage?: boolean;
  withText?: boolean;
}

const Logo = ({ withImage = true, withText = true }: LogoProps) => {
  return (
    <Link href={'/'}>
      <div className={cn('container')}>
        {withImage && (
          <Image
            src={ResisterboyImage}
            alt='Logo'
            width={200}
            height={200}
            className={cn('image')}
          />
        )}
        {withText && <span className={cn('text')}>RESISTER-BOY.LOG</span>}
      </div>
    </Link>

  )
}

export default Logo
