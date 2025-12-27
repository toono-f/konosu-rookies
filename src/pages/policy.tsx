import Layout from "@/components/Layout";

export default function PolicyPage() {
  return (
    <Layout>
      <section className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 bg-cream">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy text-center mb-8 md:mb-12 accent-line">
            チーム方針
          </h1>

          <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-8 md:p-12 text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 md:w-10 md:h-10 text-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-navy mb-4">
              現在準備中
            </h2>
            <p className="text-navy/70 text-sm md:text-base leading-relaxed mb-6">
              チーム方針ページは現在準備中です。
              <br />
              近日公開予定ですので、もうしばらくお待ちください。
            </p>
            <a
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-navy text-white font-semibold rounded-lg transition-all duration-300 hover:bg-navy-light"
            >
              トップページに戻る
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
