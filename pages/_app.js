import "./globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "../redux/slices/theme";
import { Provider } from "react-redux";
import { Rstore } from "@/redux/store/store";
import Alerts from "@/ui-components/Alerts/Alerts";
import { Inter } from "next/font/google";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Loader from '@/components/Loader/Loader'
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["cyrillic"] });

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);
  return (
    <Provider store={Rstore}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline>
        <div className={`page-container ${loading ? 'blur' : ''}`}>
         <Component {...pageProps} className={inter.className} />
        </div>
        {loading && (
        <div className="loading-overlay">
          <Loader />
        </div>
      )}
          <Alerts />
          <style jsx global>{`
        .page-container {
          position: relative;
        }

        .blur {
          filter: blur(4px);
          pointer-events: none;
        }
        .loading-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 2;
        }
      `}</style>
        </CssBaseline>
      </ThemeProvider>
    </Provider>
  );
}
