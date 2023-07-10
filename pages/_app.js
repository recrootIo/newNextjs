import "./globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "../redux/slices/theme";
import { Provider } from "react-redux";
import { Rstore } from "@/redux/store/store";
import Alerts from "@/ui-components/Alerts/Alerts";
import { Inter } from "next/font/google";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loader from "@/components/Loader/Loader";
import cookies from "js-cookie";
import axios from "axios";
import { appWithTranslation } from "next-i18next";
import Script from "next/script";
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["cyrillic"] });

const App = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { pathname, asPath, query } = router;

  const GetCountryIp = async () => {
    const userIp = cookies.get("user-ip") ?? "";

    try {
      await axios.get(`https://ipapi.co/${userIp}/json`).then((res) => {
        const country = res?.data?.country;

        if (country === "LK" && !router.asPath.startsWith("/lk/")) {
          const targetUrl = { pathname, query, locale: "lk" };
          const currentUrl = router.asPath;

          if (targetUrl !== currentUrl) {
            router.push(targetUrl, asPath, { locale: "lk" });
          }
        }

        // if (country === "LK" && !router.asPath.startsWith("/lk/")) {
        // const excluded = ["lk/Employer/Dashboard"];
        // const newPaths = `lk${router.asPath}`;

        // router.push({ pathname, query }, asPath, { locale: "lk" });

        // if (excluded.includes(newPaths) || router.asPath === "/") {
        //   if (newPaths === "lk/Employer/Dashboard") {
        //     router.push(`Employer/Dashboard`);
        //   } else {
        //     router.push(`/${router.asPath}`);
        //   }
        // } else {
        //   if (newPaths === "lk/Employer/Dashboard") {
        //     router.push(`Employer/Dashboard`);
        //   } else {
        //     router.push(`/${router.asPath}`);
        //    router.push({ pathname, query }, asPath, { locale: nextLocale });
        //   }
        // }
        // }
      });
    } catch (error) {
      console.log("Error occurred while fetching country:", error);
    }
  };

  useEffect(() => {
    GetCountryIp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router]);

  return (
    <Provider store={Rstore}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div className={`page-container ${loading ? "blur" : ""}`}>
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
      </ThemeProvider>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-7F7LTF5XJN"
      />
      <Script strategy="afterInteractive" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-7F7LTF5XJN');
        `}
      </Script>
    </Provider>
  );
};

export default appWithTranslation(App);
