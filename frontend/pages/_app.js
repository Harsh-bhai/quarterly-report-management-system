import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import '@/styles/globals.css'
import NextNProgress from 'nextjs-progressbar';


export default function App({ Component, pageProps }) {
  
  return <>
  <NextNProgress color="#00ffff" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
  <Navbar />
  <Component {...pageProps} />
  <Footer/>
  </>
}
