import Layout from "@/components/Layout";
import Link from "next/link";

export default function PolicyPage() {
  return (
    <Layout
      title="チーム方針 - 鴻巣ROOKIES"
      description="鴻巣ROOKIESのチーム方針をご紹介。協力姿勢・参加率・一生懸命プレーする人を大切にし、年会費無料で楽しく野球ができる環境を提供しています。"
    >
      <section className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 bg-cream">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy text-center mb-8 md:mb-12 accent-line">
            チーム方針
          </h1>

          {/* Policy Section */}
          <div className="space-y-6 md:space-y-8 mb-12 md:mb-16">
            {/* Policy 1 */}
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 md:p-8">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gold rounded-full flex items-center justify-center text-navy font-bold text-lg md:text-xl">
                  1
                </span>
                <div>
                  <h2 className="text-base md:text-lg font-bold text-navy mb-3">
                    チームの規律を守り、チーム内（周囲）へ協力姿勢がある人を大切にします
                  </h2>
                  <div className="text-navy/70 text-sm md:text-base leading-relaxed space-y-3">
                    <p>
                      草野球でありがちな、上手いという理由だけで、打順もポジションも希望通りになるということはありません。
                    </p>
                    <p>
                      つまり、チーム内への協力姿勢がない人、出欠連絡をしない人、無断で遅刻や欠席をする人、突然の欠席が何回もある人の希望は後回しになるということです。
                    </p>
                    <p className="text-burgundy font-semibold">
                      このチームでは、「出欠連絡を期日までにしっかり行う人」、「無断の遅刻や欠席などをしない人」、「チーム運営等の協力姿勢がある人」を大切にします。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Policy 2 */}
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 md:p-8">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gold rounded-full flex items-center justify-center text-navy font-bold text-lg md:text-xl">
                  2
                </span>
                <div>
                  <h2 className="text-base md:text-lg font-bold text-navy mb-3">
                    参加率が高い人を大切にします ― 楽しさ優先＆フェアな運営
                  </h2>
                  <div className="text-navy/70 text-sm md:text-base leading-relaxed space-y-3">
                    <p>
                      草野球でありがちな、たまにしか来ない人を上手いからという理由で優遇するということはありません。喧嘩・暴力はもちろん×。代表や旧友だけが出場する「特別扱い」もナシ。出欠・参加に真摯な人がきちんと評価される環境です。
                    </p>
                    <p className="text-burgundy font-semibold">
                      このチームでは、参加率が高い人の希望を優先します。
                    </p>
                    <p>
                      例えば、打順を組む時も打率より参加率を参考にします。イメージとしては、参加率が高い人で上位打線を組み、参加率の低い人たちで下位打線を組む感じです。チームの全員が参加率高い場合は、日替わり打線を組む方針です。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Policy 3 */}
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 md:p-8">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gold rounded-full flex items-center justify-center text-navy font-bold text-lg md:text-xl">
                  3
                </span>
                <div>
                  <h2 className="text-base md:text-lg font-bold text-navy mb-3">
                    一生懸命プレーする人を大切にします
                  </h2>
                  <div className="text-navy/70 text-sm md:text-base leading-relaxed space-y-3">
                    <p>
                      たとえ野球が上手くても、怠慢プレーをする人を私は好みません。
                    </p>
                    <p className="text-burgundy font-semibold">
                      このチームでは、「凡打でもちゃんと走る人」「エラーしても、その後のプレーを諦めずに最後までやる人」「誰にでも出来ることをしっかりとやる人」を大切にします。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Policy 4 */}
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 md:p-8">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gold rounded-full flex items-center justify-center text-navy font-bold text-lg md:text-xl">
                  4
                </span>
                <div>
                  <h2 className="text-base md:text-lg font-bold text-navy mb-3">
                    年会費は無料！会費はとらない方針です
                  </h2>
                  <div className="text-navy/70 text-sm md:text-base leading-relaxed space-y-3">
                    <p>
                      各メンバーの費用負担の不平等をなくすため、会費は無料。活動参加費をグランド代の割り勘費用＋100円にし、リーグ加盟費、道具関係費用等に充当します。
                    </p>
                    <p className="text-burgundy font-semibold">
                      1回の活動で300円前後を目安とし、1回の活動費用を500円以内にする努力をしています。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-xl md:text-2xl font-bold text-navy text-center mb-6 md:mb-8 accent-line">
              チームの特徴・ポイント
            </h2>
            <div className="bg-navy rounded-2xl md:rounded-3xl p-6 md:p-8">
              <ul className="space-y-5 md:space-y-6">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-gold rounded-full mt-2"></span>
                  <div className="text-white/90 text-sm md:text-base">
                    <p className="font-semibold text-gold mb-1">たくさん野球できる機会を提供します</p>
                    <p>適正な参加人数で基本的に1日4時間やります（試合開催時は2試合が基本）。有志は朝早めに集まり、5時間以上野球することもできます。</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-gold rounded-full mt-2"></span>
                  <div className="text-white/90 text-sm md:text-base">
                    <p className="font-semibold text-gold mb-1">出席率を優先してメンバー全員への平等な運営</p>
                    <p>代表自身が過去に嫌な思いをしてるので特定の人への特別扱いや贔屓もしません。希望のポジションや打順も平等に対応することでメンバー全員が楽しめるように努力します。</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-gold rounded-full mt-2"></span>
                  <div className="text-white/90 text-sm md:text-base">
                    <p className="font-semibold text-gold mb-1">年齢、経験有無、性別は問いません</p>
                    <p>学生・社会人として最低限の常識、協調性があれば問題ないです。野球の上手さは関係なく、チームが楽しめる雰囲気を阻害しない人柄を重視します。</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-gold rounded-full mt-2"></span>
                  <div className="text-white/90 text-sm md:text-base">
                    <p className="font-semibold text-gold mb-1">初めてでも参加しやすい雰囲気</p>
                    <p>ネットで集まった方が多く、旧友の内輪ノリとかはございません。人柄重視なので皆さん優しく、初めての方でも楽しみやすい雰囲気です。</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-gold rounded-full mt-2"></span>
                  <div className="text-white/90 text-sm md:text-base">
                    <p className="font-semibold text-gold mb-1">未経験・初心者のみで成長過程を楽しめます</p>
                    <p>高校野球以上の経験者はおらず、FA補強はせず、自前の生え抜き（未経験・初心者）のみで経験者チームに勝てるチーム作りを目指しております。</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-gold rounded-full mt-2"></span>
                  <div className="text-white/90 text-sm md:text-base">
                    <p className="font-semibold text-gold mb-1">週一回、土曜午前に活動</p>
                    <p>毎回出る必要はないです。チームの雰囲気が良い為、有志で日曜・祝日も不定期に練習・試合活動しております。</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-gold rounded-full mt-2"></span>
                  <div className="text-white/90 text-sm md:text-base">
                    <p className="font-semibold text-gold mb-1">道具はグローブのみでOK</p>
                    <p>バットはあります。マイバットや道具をお持ちの方はもちろんお持ち込み大歓迎。</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-gold rounded-full mt-2"></span>
                  <div className="text-white/90 text-sm md:text-base">
                    <p className="font-semibold text-gold mb-1">途中参加・帰宅OK</p>
                    <p>プライベートや家庭の時間を削りません。あくまでやりたいときに野球を行い、やりたくない時は無理しなくて良いです。</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-gold rounded-full mt-2"></span>
                  <div className="text-white/90 text-sm md:text-base">
                    <p className="font-semibold text-gold mb-1">正規メンバーは最大11人以下を目安</p>
                    <p>ベンチ要員は作りません。メンバーが増えすぎると各メンバーの練習機会、試合機会が減少する為、少数精鋭で楽しくやれるチームにします。</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Future Plans */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-xl md:text-2xl font-bold text-navy text-center mb-6 md:mb-8 accent-line">
              今後の構想
            </h2>
            <div className="bg-burgundy rounded-2xl md:rounded-3xl p-6 md:p-8">
              <div className="text-white/90 text-sm md:text-base leading-relaxed space-y-4">
                <p className="font-bold text-gold text-base md:text-lg">
                  2026.4からへたっぴリーグ加盟予定
                </p>
                <p>
                  未経験・初心者チームで構成されたリーグで私達には最適リーグです。問題なければ、来年度に加盟して試合機会の確保に努めます。
                </p>
                <p>
                  ちなみに試合は鴻巣市内で1開催2試合を構想し、可能なかぎり、皆さんの希望守備、打席機会の確保に努めます。
                </p>
                <p>
                  試合では野球の上手さではなく、出席率を重視して打順、守備を組みますので、よくある代表者の独裁オーダーにはするつもりございません。メンバー全員が可能な限り、不満なく楽しく野球をやれる環境を努力します。
                </p>
              </div>
            </div>
          </div>

          {/* Closing Message */}
          <div className="bg-gold/20 rounded-2xl md:rounded-3xl p-6 md:p-8 text-center mb-10 md:mb-12">
            <p className="text-navy font-semibold text-sm md:text-base leading-relaxed">
              価値観をご理解いただき、野球をたくさんやりたい方は経験有無を問わず、まだ募集中なのであなたからのご連絡お待ちします。
            </p>
          </div>

          {/* Back to Top */}
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-navy text-white font-semibold rounded-lg transition-all duration-300 hover:bg-navy-light"
            >
              トップページに戻る
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
