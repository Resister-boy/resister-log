import React, {
  Fragment,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from '@/module/editorModule/components/dropdown/base/DropdownContainer.module.scss';
import classNames from 'classnames/bind';
import DropdownList from '@/module/editorModule/components/dropdown/base/DropdownList';
import { blockTypeToBlockName } from '@/module/editorModule/plugins/toolbarPlugin/ToolbarPlugin';
import BlockFormatIcon from '@/module/editorModule/components/icons/blockFormatIcons/BlockFormatIcon';
import DropdownIcon from '@/assets/icons/chevron-down.svg';

const cn = classNames.bind(styles);

const dropDownPadding = 4;

export type DropdownType = 'blockFormat' | 'codeLanguage';

const DropdownContainer = ({
  disabled = false,
  buttonLabel,
  buttonAriaLabel,
  buttonClassName,
  buttonIconClassName,
  children,
  stopCloseOnClickSelf,
  type,
  icon,
}: {
  disabled?: boolean;
  buttonAriaLabel?: string;
  buttonClassName: string;
  buttonIconClassName?: string;
  buttonLabel?: string;
  children: ReactNode;
  stopCloseOnClickSelf?: boolean;
  type: DropdownType;
  icon: keyof typeof blockTypeToBlockName;
}) => {
  const dropDownRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const handleClose = () => {
    setShowDropDown(false);
    if (buttonRef && buttonRef.current) {
      buttonRef.current.focus();
    }
  };

  const renderIcon = useCallback(() => {
    switch (type) {
      case 'blockFormat': {
        return <BlockFormatIcon name={icon} />;
      }
    }
  }, [type, icon]);

  useEffect(() => {
    const button = buttonRef.current;
    const dropDown = dropDownRef.current;

    if (showDropDown && button !== null && dropDown !== null) {
      const { top, left } = button.getBoundingClientRect();
      dropDown.style.top = `${top + button.offsetHeight + dropDownPadding}px`;
      dropDown.style.left = `${Math.min(
        left,
        window.innerWidth - dropDown.offsetWidth - 20,
      )}px`;
    }
  }, [dropDownRef, buttonRef, showDropDown]);

  useEffect(() => {
    const button = buttonRef.current;

    if (button !== null && showDropDown) {
      const handle = (event: MouseEvent) => {
        const target = event.target;
        if (stopCloseOnClickSelf) {
          if (
            dropDownRef.current &&
            dropDownRef.current.contains(target as Node)
          ) {
            return;
          }
        }
        if (!button.contains(target as Node)) {
          setShowDropDown(false);
        }
      };
      document.addEventListener('click', handle);

      return () => {
        document.removeEventListener('click', handle);
      };
    }
  }, [dropDownRef, buttonRef, showDropDown, stopCloseOnClickSelf]);

  useEffect(() => {
    const handleButtonPositionUpdate = () => {
      if (showDropDown) {
        const button = buttonRef.current;
        const dropDown = dropDownRef.current;
        if (button !== null && dropDown !== null) {
          const { top } = button.getBoundingClientRect();
          const newPosition = top + button.offsetHeight + dropDownPadding;
          if (newPosition !== dropDown.getBoundingClientRect().top) {
            dropDown.style.top = `${newPosition}px`;
          }
        }
      }
    };

    document.addEventListener('scroll', handleButtonPositionUpdate);

    return () => {
      document.removeEventListener('scroll', handleButtonPositionUpdate);
    };
  }, [buttonRef, dropDownRef, showDropDown]);

  return (
    <Fragment>
      <button
        type="button"
        disabled={disabled}
        aria-label={buttonAriaLabel || buttonLabel}
        className={cn('container', buttonClassName)}
        onClick={() => setShowDropDown(!showDropDown)}
        ref={buttonRef}
      >
        {buttonIconClassName && <span className={buttonIconClassName} />}
        {buttonLabel && (
          <Fragment>
            <div className={cn('inner')}>
              {renderIcon()}
              <span className={cn('text', 'dropdown-button-text')}>
                {buttonLabel}
              </span>
            </div>
            <DropdownIcon />
          </Fragment>
        )}
      </button>
      {showDropDown && (
        <DropdownList dropDownRef={dropDownRef} onClose={handleClose}>
          {children}
        </DropdownList>
      )}
    </Fragment>
  );
};

export default DropdownContainer;
