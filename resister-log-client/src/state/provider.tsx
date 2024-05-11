'use client';
import { Provider } from 'react-redux';
import React, { ReactNode } from 'react'
import store from '@/state/store';

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default Providers