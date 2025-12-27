import Layout from "@/components/Layout";

export default function Custom404() {
  return (
    <Layout
      title="ページが見つかりません - 鴻巣ROOKIES"
      description="お探しのページは見つかりませんでした。"
    >
      <section className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 bg-cream flex items-center">
        <div className="max-w-2xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="text-8xl md:text-9xl font-black text-gold">404</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-4">
            ページが見つかりません
          </h1>
          <p className="text-navy/70 text-sm md:text-base mb-8">
            お探しのページは移動または削除された可能性があります。
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-navy text-white font-semibold rounded-lg transition-all duration-300 hover:bg-navy-light"
          >
            トップページに戻る
          </a>
        </div>
      </section>
    </Layout>
  );
}
