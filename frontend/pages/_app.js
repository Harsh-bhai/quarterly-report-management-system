import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import '@/styles/globals.css'
import NextNProgress from 'nextjs-progressbar';
import { useState } from 'react';


export default function App({ Component, pageProps }) {
  const [reloadkey, setReloadkey] = useState(1)
  const reloadNav= (  ) => {
    setReloadkey(Math.random())
  }
  
  return <>
  <NextNProgress color="#00ffff" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
  <Navbar reloadNav={reloadNav}/>
  <Component {...pageProps} />
  <Footer/>
  </>
}
