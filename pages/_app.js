import Head from "next/head";
import Layout from "../components/layout/layout";
import { NotificationContextProvider } from "../store/notification.context";
import "../styles/app.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="description" content="NextJS Events" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
};

export default MyApp;
