import React, { useCallback, useMemo, useRef, useState } from 'react';
import styles from '@/widget/modal/createLogModal/CreateLogModal.module.scss';
import classNames from 'classnames/bind';
import BaseModal from '@/components/modal/baseModal/BaseModal';
import useOnClickOutside from '@/hooks/useOnClick';
import { useDispatch } from 'react-redux';
import { CLOSE_MODAL } from '@/state/slice/modalSlice';
import CloseModalButton from '@/widget/button/closeModalButton/CloseModalButton';
import useFunnel from '@/hooks/useFunnel';
import { CREATE_LOG_STEP } from '@/constants/steps';
import CreateLogConfig from '@/module/createLogConfig/CreateLogConfig';
import CreateLogPost from '@/module/createLogPost/CreateLogPost';
import ShadowButton from '@/components/button/shadowButton/ShadowButton';
import { CREATE_LOG_STEP_TYPE } from '@/interface/ui/step';
import { HiHashtag } from 'react-icons/hi';
import { COLOR } from '@/styles/COLOR';
import BaseDropdown from '@/components/dropdown/baseDropdown/BaseDropdown';
import { CATEGORY_OPTION, PUBLIC_OPTION } from '@/constants/content';

const cn = classNames.bind(styles);

type Props = {
  params: string;
  initialStep?: CREATE_LOG_STEP_TYPE;
};

const CreateLogModal = ({
  params,
  initialStep = CREATE_LOG_STEP.CONFIG,
}: Props) => {
  const [isInitial, setIsInitial] = useState<boolean>(true);
  const [currentStep, setCurrentStep] =
    useState<CREATE_LOG_STEP_TYPE>(initialStep);
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const [Funnel, setStep] = useFunnel(
    Object.values(CREATE_LOG_STEP),
    initialStep,
  );
  const dispatch = useDispatch();
  const closeModal = useCallback(() => {
    dispatch(CLOSE_MODAL());
  }, []);

  useOnClickOutside({
    ref: bodyRef,
    handler: () => closeModal(),
    mouseEvent: 'click',
  });

  const handleFunnel = useCallback(() => {
    const nextStep =
      currentStep === CREATE_LOG_STEP.CONFIG
        ? CREATE_LOG_STEP.POST
        : CREATE_LOG_STEP.CONFIG;
    setCurrentStep(nextStep);
    setStep(nextStep);
    setIsInitial(false);
  }, [currentStep]);

  const showConfig = useMemo(() => {
    return currentStep === CREATE_LOG_STEP.CONFIG && !isInitial ? true : false;
  }, [currentStep]);

  const showPost = useMemo(() => {
    return currentStep === CREATE_LOG_STEP.POST ? true : false;
  }, [currentStep]);

  return (
    <BaseModal type={'dark'}>
      <div className={cn('container')} ref={bodyRef}>
        <Funnel>
          <Funnel.Step name={CREATE_LOG_STEP.CONFIG}>
            <div className={cn('inner', showConfig && 'inner-right')}>
              <div className={cn('bullet-container')}>
                <div className={cn('bullet-text')}>
                  <div className={cn('icon')}>
                    <HiHashtag color={COLOR.PRIMARY} />
                  </div>
                  참조할 도서 선택
                </div>
              </div>
              <CreateLogConfig />
            </div>
          </Funnel.Step>
          <Funnel.Step name={CREATE_LOG_STEP.POST}>
            <div className={cn('inner', showPost && 'inner-left')}>
              <CreateLogPost handleNext={handleFunnel} />
            </div>
          </Funnel.Step>
        </Funnel>
        <CloseModalButton onClick={closeModal} />
        <div className={cn('button-container')}>
          <div className={cn('button-left')}>
            <BaseDropdown
              type={'public'}
              list={PUBLIC_OPTION}
              value={null}
              setValue={() => {}}
            />
            <BaseDropdown
              type={'category'}
              list={CATEGORY_OPTION}
              value={null}
              setValue={() => {}}
            />
            <BaseDropdown
              type={'language'}
              list={[]}
              value={null}
              setValue={() => {}}
            />
            <BaseDropdown
              type={'keyword'}
              list={[]}
              value={null}
              setValue={() => {}}
            />
          </div>
          <div className={cn('button-right')}>
            <div className={cn('button-item')}>
              <ShadowButton name="임시저장" theme={'gray'} onClick={() => {}} />
            </div>
            <div className={cn('button-item')}>
              <ShadowButton
                name={
                  currentStep === CREATE_LOG_STEP.CONFIG ? '로그' : '게시하기'
                }
                theme={'primary'}
                onClick={() => {
                  if (currentStep === CREATE_LOG_STEP.CONFIG) {
                    handleFunnel();
                  } else {
                    // create post
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </BaseModal>
  );
};

export default CreateLogModal;
