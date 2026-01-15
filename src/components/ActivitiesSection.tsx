import Link from "next/link";

export default function ActivitiesSection() {
  return (
    <section id="activities" className="py-12 md:py-20 lg:py-28 bg-white scroll-mt-16 md:scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy accent-line">
            チーム活動
          </h2>
        </div>

        {/* Activity Details */}
        <div className="bg-cream rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-10 mb-8 md:mb-10">
          <div className="space-y-4 md:space-y-5 text-sm md:text-base">
            <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
              <span className="font-bold text-navy min-w-[140px] md:min-w-[160px]">
                【活動曜日】
              </span>
              <span className="text-navy/80">土曜日午前（最低4時間以上）</span>
            </div>

            <div className="pl-0 sm:pl-[148px] md:sm:pl-[168px] text-navy/70 text-xs md:text-sm">
              <p>
                ※現在有志で日・祝も不定期に練習・試合活動してるたくさん野球できる環境です
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
              <span className="font-bold text-navy min-w-[140px] md:min-w-[160px]">
                【活動時間】
              </span>
              <span className="text-navy/80">基本9時〜13時or8時〜12時</span>
            </div>

            <div className="pl-0 sm:pl-[148px] md:sm:pl-[168px] text-navy/70 text-xs md:text-sm">
              <p>
                有志は朝早くから集まり5時間以上野球したり、時には午後練もしています。
                <br className="hidden sm:inline" />
                部活の雰囲気ではなく、やりたい人で楽しくやっています。
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
              <span className="font-bold text-navy min-w-[140px] md:min-w-[160px]">
                【活動頻度】
              </span>
              <span className="text-navy/80">週に1回</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
              <span className="font-bold text-navy min-w-[140px] md:min-w-[160px]">
                【活動場所】
              </span>
              <span className="text-navy/80">鴻巣市内グランド</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
              <span className="font-bold text-navy min-w-[140px] md:min-w-[160px]">
                【募集年代】
              </span>
              <span className="text-navy/80">老若男女様々です。</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
              <span className="font-bold text-navy min-w-[140px] md:min-w-[160px]">
                【募集ポジション】
              </span>
              <span className="text-navy/80">
                平等運営なため、全ポジ可能です。
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
              <span className="font-bold text-navy min-w-[140px] md:min-w-[160px]">
                【年会費】
              </span>
              <span className="text-navy/80">無料</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
              <span className="font-bold text-navy min-w-[140px] md:min-w-[160px]">
                【参加費】
              </span>
              <div className="text-navy/80">
                <p>年会費無料</p>
                <p>毎回の参加費:300円前後（目安）</p>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule Link */}
        <div className="text-center">
          <Link
            href="/activities"
            className="inline-flex items-center gap-2 bg-burgundy text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-sm md:text-base font-semibold hover:bg-burgundy-light transition-colors"
          >
            <svg
              className="w-4 h-4 md:w-5 md:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            週次の活動スケジュール
          </Link>
        </div>
      </div>
    </section>
  );
}
