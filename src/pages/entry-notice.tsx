import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";

const suitableTraits = [
  {
    text: "チーム内で揉め事やトラブルを起こさず、周囲と仲良くやれる方",
    isMain: true,
  },
  {
    text: "組織で活動していく中で一定の協調性や常識をお持ちの方",
    isMain: true,
  },
  {
    text: "強いこだわりがなく、希望ポジション3つくらいを楽しめる人",
    isMain: true,
  },
  {
    text: "出欠の連絡を期日までにしっかり対応できること",
    isMain: true,
  },
  {
    text: "相手チームと審判に直接文句やヤジを言わない人",
    isMain: true,
  },
  {
    text: "チーム運営における最低限の協力ができる人",
    isMain: true,
    note: "こちらは各個人の環境も考えて、過度な負担にならないようにお願いする場合があります。",
  },
];

const additionalTraits = [
  { text: "とにかく一生懸命プレーする人" },
  { text: "日替わり打線を楽しめる人" },
  {
    text: "最低限のマナーはわきまえてるけど、上下関係なんて嫌だという人（年齢の上下関係撤廃）",
    note: "チームが年齢関係なく親しくなってほしい為、年齢の上下関係は撤廃してます。全員平等",
  },
  { text: "味方のミスにも前向きな言葉をかけれる人" },
  { text: "参加率が高い人" },
  { text: "たくさん野球ができる環境を好む方（1日中野球がしたくてうずうずする人）" },
];

const unsuitableTraits = [
  {
    text: "野球上級者だから、打順もポジションも優遇して欲しいという人",
  },
  {
    text: "4番じゃなきゃ嫌だとか特定のポジション（ex.投手、ショート等）以外はやりたくないという人",
    note: "投手ができない、捕手ができない、実力的にセカンドしか守れない等というのはもちろん問題ないです。ポジションに対してエゴの強い方は本チームに向かないという趣旨の内容になります。",
  },
  {
    text: "出欠連絡等、チームの必要最低限の協力ができない人",
  },
  {
    text: "謎の上下関係を持ち込もうとする人（本チームは年齢の上下関係は撤廃してます。全員平等）",
  },
  {
    text: "チームの価値観、方針、規約を理解できていない方",
  },
  {
    text: "自分の価値観を他人や周囲に強要する方・チームの方針や考えに共感できず、組織内でアンチ勢力を作り始める方（雰囲気を悪くする方）",
  },
  {
    text: "相手チームや審判に直接文句やヤジをいう人",
  },
  {
    text: "味方のエラーやプレーに文句を言う人",
  },
  {
    text: "いろんなチーム運営準備がある中で野球活動ができている周りへの感謝・理解に欠けてる方",
  },
];


export default function EntryNoticePage() {
  return (
    <Layout
      title="チーム加入注意事項 - 鴻巣ROOKIES"
      description="鴻巣ROOKIESに向いている人・向かない人の特徴をご紹介。チームの価値観に共感できる方からのご連絡をお待ちしております。"
    >
      <section className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 bg-cream">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy text-center mb-8 md:mb-12 accent-line">
            チーム加入注意事項
          </h1>

          {/* このチームに向いている人 */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-xl md:text-2xl font-bold text-navy text-center mb-6 md:mb-8">
              このチームに向いている人
            </h2>

            <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 md:p-8">
              <ul className="space-y-4 md:space-y-5">
                {suitableTraits.map((trait, index) => (
                  <li key={index}>
                    <div className="flex items-baseline gap-3">
                      <span className="shrink-0 text-gold font-bold text-lg">
                        ★
                      </span>
                      <div>
                        <p className="text-navy font-semibold text-sm md:text-base underline underline-offset-2">
                          {trait.text}
                        </p>
                        {trait.note && (
                          <p className="text-navy text-xs md:text-sm mt-2">
                            →{trait.note}
                          </p>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2 mt-4">
                {additionalTraits.map((trait, index) => (
                  <li key={`additional-${index}`}>
                    <div className="flex items-baseline gap-2">
                      <span className="shrink-0 text-navy/70">・</span>
                      <div>
                        <p className="text-navy/80 text-sm">
                          {trait.text}
                        </p>
                        {trait.note && (
                          <p className="text-navy/70 text-xs mt-1">
                            ※{trait.note}
                          </p>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* このチームに向かない人 */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-xl md:text-2xl font-bold text-navy text-center mb-6 md:mb-8">
              このチームに向かない人
            </h2>

            <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 md:p-8">
              <ul className="space-y-4 md:space-y-5">
                {unsuitableTraits.map((trait, index) => (
                  <li key={index}>
                    <div className="flex items-baseline gap-3">
                      <span className="shrink-0 text-burgundy font-bold text-lg">
                        ◎
                      </span>
                      <div>
                        <p className="text-navy font-semibold text-sm md:text-base underline underline-offset-2">
                          {trait.text}
                        </p>
                        {trait.note && (
                          <p className="text-navy text-xs md:text-sm mt-2">
                            →{trait.note}
                          </p>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
                {/* 追加項目 */}
                <li className="flex items-baseline gap-3 pt-2">
                  <span className="shrink-0 text-navy">・</span>
                  <p className="text-navy text-sm md:text-base">
                    野球は上手くても怠慢プレーをする人
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </Layout>
  );
}
