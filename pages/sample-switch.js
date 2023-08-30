import Switch from "../components/switch";
import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";

export default function SampleSwitch() {
  return (
    <Layout>
      <Head>
        <title>Sample Switch</title>
      </Head>
      <Switch textLeft="Off" textRight="On" showIndicator={true} />
    </Layout>
  );
}
