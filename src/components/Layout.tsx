import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({
  children,
  title = "鴻巣ROOKIES - 埼玉県鴻巣市の草野球チーム",
  description = "鴻巣ROOKIESは埼玉県鴻巣市を拠点とする草野球チームです。未経験者・初心者大歓迎！10代〜30代のメンバーを募集中。一緒に野球を楽しみましょう。",
}: LayoutProps) {
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
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main className="pt-16 md:pt-20">{children}</main>
      <Footer />
    </>
  );
}
