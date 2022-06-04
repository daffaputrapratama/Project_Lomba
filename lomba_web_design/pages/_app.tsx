import "../styles/globals.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: any) {
  const router = useRouter();
  return <Component key={router.asPath} {...pageProps} />;
}

export default MyApp;
