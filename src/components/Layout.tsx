import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  ogImage?: string;
}

const SITE_URL = "https://konosu-rookies.vercel.app";

export default function Layout({
  children,
  title = "鴻巣ROOKIES - 埼玉県鴻巣市の草野球チーム",
  description = "鴻巣ROOKIESは埼玉県鴻巣市を拠点とする草野球チームです。未経験者・初心者大歓迎！10代〜30代のメンバーを募集中。一緒に野球を楽しみましょう。",
  ogImage = "/og-image.png",
}: LayoutProps) {
  const ogImageUrl = `${SITE_URL}${ogImage}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e2a4a" />
      </Head>
      <Header />
      <main className="pt-16 md:pt-20">{children}</main>
      <Footer />
    </>
  );
}
