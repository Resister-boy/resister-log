import React, { ReactNode } from 'react';
import styles from '@/module/editorModule/components/placeholder/Placeholder.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

const Placeholder = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={cn(className || 'placeholder')}>{children}</div>;
};

export default Placeholder;
