import "../styles/globals.css";
import { useRouter } from "next/router";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return <Component key={router.asPath} {...pageProps} />;
}

export default MyApp;
