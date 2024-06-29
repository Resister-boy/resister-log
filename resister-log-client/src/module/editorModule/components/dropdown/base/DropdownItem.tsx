import React, { useEffect, useRef } from 'react';
import styels from '@/module/editorModule/components/dropdown/base/DropdownItem.module.scss';
import classNames from 'classnames/bind';
import { DropDownContext } from '@/module/editorModule/context/DropdownContext';

const cn = classNames.bind(styels);

const DropdownItem = ({
  children,
  className,
  onClick,
  title,
}: {
  children: React.ReactNode;
  className: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  title?: string;
}) => {
  const ref = useRef<HTMLButtonElement | null>(null);

  const dropDownContext = React.useContext(DropDownContext);

  if (dropDownContext === null) {
    throw new Error('DropDownItem must be used within a DropDown');
  }

  const { registerItem } = dropDownContext;

  useEffect(() => {
    if (ref && ref.current) {
      registerItem(ref);
    }
  }, [ref, registerItem]);

  return (
    <button
      className={cn('item-container', `item-container-${className}`)}
      onClick={onClick}
      ref={ref}
      title={title}
      type="button"
    >
      {children}
    </button>
  );
};

export default DropdownItem;
