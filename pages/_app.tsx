import '../styles/globals.css'
// import {ThemeProvider} from 'next-themes';
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/index';
import FeedbackWidget from '../components/FeedbackWidget/index'
// import DarkMode from '../components/DarkMode/index';
export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      {/* <ThemeProvider attribute='class'> */}
        <div className="whole-page bg-white dark:bg-black">
          <Navbar />
          <Component {...pageProps} />
          <Footer/>
        </div>
        <FeedbackWidget/>
        {/* <DarkMode/> */}
      {/* </ThemeProvider> */}
    </>
  )
}
