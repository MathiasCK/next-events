import Head from "next/head";
import Layout from "../components/layout/layout";
import Notification from "../components/ui/notification";
import "../styles/app.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="NextJS Events" />
      </Head>
      <Component {...pageProps} />
      <Notification title="Test" message="This is a test" status="pending" />
    </Layout>
  );
};

export default MyApp;
