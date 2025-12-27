import Layout from "@/components/Layout";
import Image from "next/image";

const snsLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/konosu_rookies/",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    bgClass: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/konosu_rookies",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    bgClass: "bg-black",
  },
  {
    name: "TEAMS HP",
    href: "https://teams.one/teams/konosurookies",
    image: "/teams.png",
    bgClass: "bg-[#1a1a1a]",
  },
  {
    name: "labola",
    href: "https://labola.jp/community/AZlc6PbW9AYWdhhDBgtV",
    image: "/labola.jpg",
    bgClass: "bg-[#009FD2]",
  },
  {
    name: "ジモティー",
    href: "https://jmty.jp/profiles/629ca2b057d3a915ae843dcf",
    image: "/jimoto.png",
    bgClass: "bg-white",
  },
];

export default function SNSPage() {
  return (
    <Layout>
      <section className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 bg-cream">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy text-center mb-4 md:mb-6 accent-line">
            SNS一覧
          </h1>
          <p className="text-navy/70 text-sm md:text-base text-center mb-8 md:mb-12">
            各SNSで鴻巣ROOKIESの最新情報をチェック！
          </p>

          {/* SNS Links Grid */}
          <div className="grid gap-4 md:gap-6">
            {snsLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-5 md:p-6 flex items-center gap-4 md:gap-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 ${link.bgClass}`}
                >
                  {link.icon ? (
                    link.icon
                  ) : (
                    <Image
                      src={link.image!}
                      alt={link.name}
                      width={48}
                      height={48}
                      className="w-10 h-10 md:w-12 md:h-12 object-contain"
                    />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg md:text-xl font-bold text-navy">
                    {link.name}
                  </h2>
                </div>
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-navy/40 shrink-0"
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
            ))}
          </div>

          {/* Back to Top */}
          <div className="text-center mt-10 md:mt-12">
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
