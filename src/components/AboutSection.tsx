import Link from "next/link";

export default function AboutSection() {
  const targetAudience = [
    "野球を楽しく始めたいけど、どこに入ればいいかわからない",
    "初心者だけど、もっと上手くなりたい",
    "未経験・経験浅めでも活躍できる環境を探している",
    "初心者中心チームで一緒に成長過程を楽しみたい",
    "野球をとことん楽しみたくなった",
    "上下関係や出場機会の少なさがモヤモヤしている",
    "所属チームの野球が物足りない",
    "楽しさ優先のはずがエラーや三振すると気まずい",
    "上級者優遇で出番が少なくてつまらない",
    "毎回出席しているのに扱いが雑",
    "特別扱い・贔屓起用にうんざりする",
  ];

  return (
    <section id="about" className="py-12 md:py-20 lg:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy mb-4 md:mb-6 leading-snug accent-line">
            野球を「やってみたい」「また始めたい」と思っているあなたへ。
          </h2>
          <div className="text-navy/70 text-xs sm:text-sm md:text-base mx-auto leading-relaxed space-y-3 mt-6">
            <p>
              「どこに入ればいいか迷っている」「もっと野球を楽しみたい・成長したい」――
              <br />
              そんな想いを持っていませんか？
            </p>
            <p>
              鴻巣ROOKIESは、&ldquo;初心者・未経験でも安心&rdquo;&ldquo;みんなと一緒に成長＆楽しめる&rdquo;をモットーに、
              <br />
              和気あいあいと活動する草野球チームです。
            </p>
            <p>
              &ldquo;野球を心から好きな人&rdquo;なら、年齢・性別・経験は問いません。
              <br />
              一緒にグローブを持って、気軽にプレーしませんか？
            </p>
          </div>
        </div>

        {/* Target Audience */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-navy text-center mb-5 md:mb-8">
            なぜ当チーム？／&ldquo;こんな悩み&rdquo;に応えます
          </h3>
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-5 sm:p-6 md:p-10">
            <ul className="space-y-3 md:space-y-4">
              {targetAudience.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="shrink-0 w-5 h-5 md:w-6 md:h-6 bg-gold rounded-full flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4 text-navy"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-navy/80 text-sm md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 md:mt-8 text-burgundy font-semibold text-xs sm:text-sm md:text-base text-left sm:text-center">
              などなど、、、そんな&ldquo;野球に対するモヤモヤ&rdquo;を抱えているなら、ぜひ鴻巣ROOKIES（チーム方針）をご覧ください！
            </p>
          </div>
        </div>

        {/* Policy & Origin Cards */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {/* Team Policy - Link only */}
          <Link
            href="/policy"
            className="bg-navy rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 text-white block hover:bg-navy-light transition-colors"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gold rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-5">
              <svg
                className="w-6 h-6 md:w-7 md:h-7 text-navy"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gold">
              チーム方針
            </h3>
            <p className="text-white/80 text-sm md:text-base leading-relaxed mb-3">
              詳しいチーム方針はこちらをご覧ください。
            </p>
            <span className="inline-flex items-center gap-2 text-gold text-sm md:text-base hover:text-gold-light transition-colors">
              詳細を見る
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </Link>

          {/* Team Name Origin */}
          <div className="bg-burgundy rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 text-white">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gold rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-5">
              <svg
                className="w-6 h-6 md:w-7 md:h-7 text-navy"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gold">
              チーム名の由来
            </h3>
            <p className="text-white/80 text-sm md:text-base leading-relaxed mb-3">
              以下3点の想いが詰まっております。
            </p>
            <ul className="text-white/80 text-sm md:text-base space-y-2 md:space-y-3">
              <li>・鴻巣市内で活動する草野球チーム</li>
              <li>
                ・ルーキー（初心者・未経験者）も大歓迎。ブランクがあってもOK。野球をまた始めたい方もどうぞ。
              </li>
              <li>
                ・TBSドラマ「ROOKIES」のような少数精鋭組織で、絆（仲間意識）の強い、楽しめる野球チームにしたい
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
