import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import '@/styles/globals.css'
import Cookies from 'js-cookie';
import NextNProgress from 'nextjs-progressbar';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function reloadNav(){
  setReloadkey(Math.random())
}
export default function App({ Component, pageProps }) {
  const [reloadkey, setReloadkey] = useState(1)
  const router=useRouter()
  const reloadNav= (  ) => {
    setReloadkey(Math.random())
  }
  const logout = () => {
    Cookies.remove('jwtoken');
    setReloadkey(Math.random())
    toast.success('Logged out SucessFully', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      })
    router.push("/studentlogin")
  }
  
  return <>
  <NextNProgress color="#00ffff" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
  <Navbar key={reloadkey} reloadNav={reloadNav} logout={logout}/>
  <ToastContainer
position="bottom-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
  <Component {...pageProps} reloadNav={reloadNav} />
  <Footer/>
  </>
}
