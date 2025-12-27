import Layout from "@/components/Layout";

export default function ActivitiesPage() {
  return (
    <Layout
      title="活動一覧 - 鴻巣ROOKIES"
      description="鴻巣ROOKIESの活動情報。練習会の予定や試合結果をご確認いただけます。体験練習会への参加もお気軽にご連絡ください。"
    >
      <section className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 bg-cream">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy text-center mb-8 md:mb-12 accent-line">
            活動一覧
          </h1>

          {/* Notice */}
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 md:p-8 mb-6 md:mb-8">
            <p className="text-navy/80 text-sm md:text-base leading-relaxed">
              現在、チーム加入検討者の体験練習会のみ受け付けており、ご興味ある方はお気軽に直接連絡ください
            </p>
          </div>

          {/* Practice Schedule */}
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 md:p-8 mb-6 md:mb-8">
            <h2 className="text-lg md:text-xl font-bold text-navy mb-4 md:mb-6">
              【練習会直近予定表】
            </h2>
            <div className="bg-burgundy/10 rounded-xl p-5 md:p-6">
              <p className="text-burgundy font-bold text-sm md:text-base leading-relaxed">
                参加希望者は↓の連絡先にて参加希望いただけましたら、詳細案内を送ります。
              </p>
            </div>
            <div className="mt-6 text-center">
              <a
                href="mailto:konosurookies@gmail.com"
                className="inline-flex items-center gap-2 text-navy font-semibold hover:text-burgundy transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                konosurookies@gmail.com
              </a>
            </div>
          </div>

          {/* Game Results */}
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 md:p-8 mb-6 md:mb-8">
            <h2 className="text-lg md:text-xl font-bold text-navy mb-4 md:mb-6">
              【試合結果】
            </h2>
            <a
              href="https://teams.one/teams/konosurookies/game"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-burgundy font-semibold underline hover:text-burgundy-light transition-colors text-sm md:text-base break-all"
            >
              TEAMS 試合結果ページ
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          {/* Back to Top */}
          <div className="text-center">
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
