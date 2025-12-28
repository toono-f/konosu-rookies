import Image from "next/image";

export default function JoinSection() {
  return (
    <section
      id="join"
      className="py-12 md:py-20 lg:py-28 bg-cream scroll-mt-16 md:scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-navy text-xl sm:text-2xl md:text-3xl font-bold accent-line">
            一緒に野球を始めませんか？
          </h2>
        </div>

        {/* Flow Image */}
        <div className="flex justify-center mb-10 md:mb-14">
          <div className="relative w-full max-w-xl">
            <Image
              src="/flow.png"
              alt="入部までの流れ: 1.見学に行こう！ 2.体験入部！ 3.入部意思を伝えよう！ 4.正式入部！"
              width={800}
              height={800}
              className="w-full h-auto rounded-xl md:rounded-2xl shadow-md"
              priority
            />
          </div>
        </div>

        {/* Application Info */}
        <div className="bg-navy rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-10">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-4 md:mb-6 text-center">
            【入部体験・練習参加のご案内/応募方法】
          </h3>

          <div className="bg-white/10 rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 mb-5">
            <div className="text-white/90 text-xs sm:text-sm md:text-base mb-4 space-y-2">
              <p>
                一度参加してみたいという方は、ぜひ一度、下記例に沿ってご連絡ください。
              </p>
              <p>
                現在、あと1名の入部募集中で10代〜30代の未経験・初心者大歓迎ですので宜しくお願い致します。
              </p>
            </div>

            <p className="text-white/90 text-xs sm:text-sm md:text-base mb-2">
              以下の手順でお気軽にご連絡ください。
            </p>
            <p className="text-gold font-semibold text-xs sm:text-sm md:text-base mb-3">
              〈ご連絡時の記入例〉
            </p>

            <ol className="space-y-1.5 md:space-y-2 text-white/80 text-xs sm:text-sm md:text-base mb-4 md:mb-5">
              <li className="flex items-baseline gap-2">
                <span className="shrink-0 w-4 h-4 md:w-5 md:h-5 bg-gold/30 rounded-full flex items-center justify-center text-gold text-[10px] md:text-xs font-semibold">
                  1
                </span>
                <span>お名前（苗字だけでも可）</span>
              </li>
              <li className="flex items-baseline gap-2">
                <span className="shrink-0 w-4 h-4 md:w-5 md:h-5 bg-gold/30 rounded-full flex items-center justify-center text-gold text-[10px] md:text-xs font-semibold">
                  2
                </span>
                <span>年齢</span>
              </li>
              <li className="flex items-baseline gap-2">
                <span className="shrink-0 w-4 h-4 md:w-5 md:h-5 bg-gold/30 rounded-full flex items-center justify-center text-gold text-[10px] md:text-xs font-semibold">
                  3
                </span>
                <span>
                  野球歴（未経験でもOK）※未経験の場合はスポーツ歴をご教示ください。
                </span>
              </li>
              <li className="flex items-baseline gap-2">
                <span className="shrink-0 w-4 h-4 md:w-5 md:h-5 bg-gold/30 rounded-full flex items-center justify-center text-gold text-[10px] md:text-xs font-semibold">
                  4
                </span>
                <span>お住まい地域（例：鴻巣市）</span>
              </li>
              <li className="flex items-baseline gap-2">
                <span className="shrink-0 w-4 h-4 md:w-5 md:h-5 bg-gold/30 rounded-full flex items-center justify-center text-gold text-[10px] md:text-xs font-semibold">
                  5
                </span>
                <span>希望ポジション（3つほど記載ください）</span>
              </li>
            </ol>

            {/* Example */}
            <div className="bg-white/5 rounded-lg p-3 md:p-4 mb-3">
              <p className="text-gold text-[10px] md:text-xs font-semibold mb-2">
                例）
              </p>
              <div className="text-white/70 text-[10px] md:text-xs space-y-0.5 leading-relaxed">
                <p>
                  こんにちは。●●（Ex.チームHP,ジモティ等）を拝見して連絡しました。
                </p>
                <p>1. 佐藤</p>
                <p>2. 32歳</p>
                <p>3. 小5〜小6、高校部活1年、草野球2年（31歳〜現在）</p>
                <p>4. 鴻巣市</p>
                <p>5. 捕手、投手、外野等</p>
                <p className="mt-1">よろしくお願いします。</p>
              </div>
            </div>

            <p className="text-white/60 text-[10px] md:text-xs mb-3">
              ※数日以内に返信がない場合には、お手数ですが再度ご連絡ください（受信設定のご確認もお願いします）。
            </p>

            <div className="bg-gold/20 rounded-lg p-3 text-center">
              <p className="text-white font-semibold text-xs sm:text-sm md:text-base">
                あなたからの「一緒に野球を楽しみたい！」というご連絡を、チーム一同お待ちしています！
              </p>
            </div>
          </div>

          {/* Final message */}
          <div className="mt-5">
            <div className="bg-burgundy rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6">
              <h4 className="text-sm md:text-base font-bold text-white mb-2 md:mb-3 text-center">
                【最後にひとこと】
              </h4>
              <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed sm:text-center">
                「野球が好き」「もう一度グラウンドに立ちたい」「気の合う仲間といい汗を流したい」
                <br />
                そんな想いを持つあなたを歓迎します。
                <br />
                鴻巣ROOKIESは、硬さではなく&ldquo;楽しさ&rdquo;&ldquo;成長&rdquo;&ldquo;仲間づくり&rdquo;を大切にするチームです。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
