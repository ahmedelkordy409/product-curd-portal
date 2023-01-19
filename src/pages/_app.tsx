import '../styles/globals.css'
import { useState } from 'react'
import type { AppProps } from 'next/app'
import { NextPage } from 'next';
import Head from 'next/head';
///
import { SessionProvider } from "next-auth/react"
// 
import { Hydrate, QueryClientProvider } from "react-query";
import queryClient from '@/lib/queryClient'

type NextPageAuth ={
  auth: boolean
} & NextPage;


interface MyAppProps extends AppProps {
  Component: NextPageAuth
}


export default function App({ Component, pageProps }: AppProps) {

  const [ queryClientState ] = useState(queryClient)
    
  return(
    <QueryClientProvider client={queryClientState}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}
