'use client'
import React, { Fragment, ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from '@/layout';

const queryClient = new QueryClient();

const BaseProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <Layout>
          {children}
        </Layout>
      </QueryClientProvider>
    </Fragment>
  )
}

export default BaseProvider
