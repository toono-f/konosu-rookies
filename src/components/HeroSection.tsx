export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy to-burgundy-dark" />

      {/* 装飾: 光線エフェクト */}
      <div className="light-rays" />

      {/* 装飾: 上部のアクセントライン */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-left sm:text-center py-12 md:py-16">
        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 tracking-tight text-center animate-on-load animate-fade-in-up">
          <span className="text-gradient-gold text-glow">鴻巣ROOKIES</span>
        </h1>

        {/* 装飾ライン */}
        <div className="flex justify-center mb-8 md:mb-10 animate-on-load animate-fade-in animate-delay-200">
          <div className="w-20 md:w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>

        {/* Subtitle */}
        <div className="text-xs sm:text-sm md:text-base text-white/90 max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed animate-on-load animate-fade-in-up animate-delay-200">
          <p className="text-sm sm:text-base md:text-lg font-semibold mb-2">未経験・初心者歓迎！</p>
          <p>鴻巣市で"野球をとことん楽しめる"仲間をあと1名募集します。上手さは問わないので10代〜30代の未経験・初心者からの応募をお待ちしています。</p>
        </div>

        {/* Description */}
        <div className="text-xs sm:text-sm md:text-base text-white/70 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed space-y-2 animate-on-load animate-fade-in-up animate-delay-300">
          <p>「野球をやってみたい」「もう一度プレーしたい」――そんなあなたへ。</p>
          <p>鴻巣ROOKIESは、埼玉県鴻巣市を拠点に活動する草野球チームです。初心者・ブランクありの方も安心して参加でき、明るく楽しく活動しています。</p>
          <p>毎週土曜午前に練習・試合を行い、「楽しさ」「成長」「仲間づくり」を大切にしています。</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center animate-on-load animate-fade-in-up animate-delay-400">
          <a
            href="#about"
            className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-gold text-navy text-sm md:text-base font-bold rounded-lg transition-all duration-300 hover:bg-gold-light hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-1"
          >
            チームを知る
            <svg
              className="w-4 h-4 md:w-5 md:h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
          <a
            href="#join"
            className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 border-2 border-white/30 text-white text-sm md:text-base font-bold rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-white/50"
          >
            入部案内を見る
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce animate-on-load animate-fade-in animate-delay-600">
        <svg
          className="w-5 h-5 text-white/40"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>

      {/* 装飾: 下部のグラデーションフェード */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-burgundy-dark/50 to-transparent pointer-events-none" />
    </section>
  );
}
