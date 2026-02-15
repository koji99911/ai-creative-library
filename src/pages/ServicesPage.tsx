import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';

/** プランデータ */
const plans = [
    {
        id: 'image',
        name: 'AI画像制作',
        description: 'SNS投稿画像・バナー・名刺・チラシなど',
        price: '¥5,000〜',
        priceSuffix: '/ 1点',
        features: ['テンプレートベースのカスタマイズ', 'テキスト・色・ロゴ差し替え', '3回まで修正無料', 'SNS各種サイズ対応'],
        color: 'accent' as const,
        recommended: false,
    },
    {
        id: 'video',
        name: 'AI動画制作',
        description: 'プロモーション動画・SNSショート・紹介ムービー',
        price: '¥15,000〜',
        priceSuffix: '/ 1本',
        features: ['Remotionベースの高品質動画', 'BGM・テキスト・画像カスタマイズ', '30秒〜60秒対応', 'MP4 / MOV納品'],
        color: 'teal' as const,
        recommended: false,
    },
    {
        id: 'lp',
        name: 'LP制作',
        description: 'ランディングページ・特設ページ制作',
        price: '¥30,000〜',
        priceSuffix: '/ 1ページ',
        features: ['スマホ完全対応のレスポンシブ', '問い合わせフォーム設置', 'SEO基本設定込み', 'サーバー設定サポート'],
        color: 'violet' as const,
        recommended: false,
    },
    {
        id: 'pack',
        name: 'まるごとパック',
        description: '画像＋動画＋LPのフルセットプラン',
        price: '¥40,000〜',
        priceSuffix: '/ セット',
        features: ['画像5点 + 動画1本 + LP1ページ', '統一ブランディング対応', '何度でも修正OK', '初回ヒアリング付き'],
        color: 'accent' as const,
        recommended: true,
    },
    {
        id: 'monthly',
        name: '月額サポート',
        description: 'SNS運用を継続的にサポート',
        price: '¥20,000〜',
        priceSuffix: '/ 月',
        features: ['月4枚の画像制作', '月1本の動画制作', 'コンテンツカレンダー提案', '優先サポート対応'],
        color: 'teal' as const,
        recommended: false,
    },
];

/** カラーマップ */
const colorMap = {
    accent: {
        bg: 'bg-accent/10',
        text: 'text-accent',
        border: 'border-accent',
        btn: 'bg-accent hover:bg-orange-800',
        ring: 'ring-accent',
    },
    teal: {
        bg: 'bg-teal/10',
        text: 'text-teal',
        border: 'border-teal',
        btn: 'bg-teal hover:bg-emerald-800',
        ring: 'ring-teal',
    },
    violet: {
        bg: 'bg-violet/10',
        text: 'text-violet',
        border: 'border-violet',
        btn: 'bg-violet hover:bg-purple-800',
        ring: 'ring-violet',
    },
};

/**
 * サービス・料金ページ
 * 5つのプランカード + 制作フロー3ステップ
 */
export default function ServicesPage() {
    usePageTitle('料金・サービス | 岡山のAI画像・動画制作');

    return (
        <div className="py-12 sm:py-16">
            {/* ヘッダー */}
            <section className="section-container text-center mb-14">
                <h1 className="section-title">料金・サービス</h1>
                <p className="section-subtitle max-w-2xl mx-auto">
                    あなたのビジネスに合わせたプランをご用意しています。<br className="hidden sm:block" />
                    すべてのプランにヒアリング・修正対応が含まれます。
                </p>
            </section>

            {/* プランカード */}
            <section className="section-container mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {plans.map((plan) => {
                        const colors = colorMap[plan.color];
                        return (
                            <div
                                key={plan.id}
                                className={`relative bg-white rounded-2xl border-2 ${plan.recommended
                                    ? `${colors.border} ring-2 ${colors.ring}/20 shadow-xl`
                                    : 'border-stone-200 shadow-sm'
                                    } p-6 hover:shadow-xl transition-all duration-300 flex flex-col`}
                            >
                                {/* おすすめバッジ */}
                                {plan.recommended && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        <span className={`${colors.btn} text-white text-xs font-bold px-4 py-1.5 rounded-full shadow`}>
                                            おすすめ
                                        </span>
                                    </div>
                                )}

                                {/* プラン名 */}
                                <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}>
                                    {plan.id === 'image' && (
                                        <svg className={`w-6 h-6 ${colors.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    )}
                                    {plan.id === 'video' && (
                                        <svg className={`w-6 h-6 ${colors.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>
                                    )}
                                    {plan.id === 'lp' && (
                                        <svg className={`w-6 h-6 ${colors.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    )}
                                    {plan.id === 'pack' && (
                                        <svg className={`w-6 h-6 ${colors.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                        </svg>
                                    )}
                                    {plan.id === 'monthly' && (
                                        <svg className={`w-6 h-6 ${colors.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    )}
                                </div>

                                <h3 className="font-serif font-bold text-xl text-ink mb-1">{plan.name}</h3>
                                <p className="text-sm text-stone-500 mb-4">{plan.description}</p>

                                {/* 価格 */}
                                <div className="mb-6">
                                    <span className={`text-3xl font-bold ${colors.text}`}>{plan.price}</span>
                                    <span className="text-stone-400 text-sm ml-1">{plan.priceSuffix}</span>
                                </div>

                                {/* 特徴リスト */}
                                <ul className="space-y-3 mb-6 flex-1">
                                    {plan.features.map((feat, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-sm text-stone-600">
                                            <svg className={`w-5 h-5 ${colors.text} shrink-0 mt-0.5`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {feat}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTAボタン */}
                                <Link
                                    to="/contact"
                                    className={`w-full inline-flex items-center justify-center px-6 py-3 ${colors.btn} text-white font-medium rounded-lg transition-colors duration-200 text-sm`}
                                >
                                    お気軽にご相談ください
                                </Link>
                            </div>
                        );
                    })}
                </div>

                <p className="text-center text-xs text-stone-400 mt-6">
                    ※ 料金はすべて税込です。内容によって変動いたします。
                </p>
            </section>

            {/* 制作の流れ */}
            <section className="section-container mb-20">
                <div className="text-center mb-14">
                    <h2 className="section-title">制作の流れ</h2>
                    <p className="section-subtitle">シンプル3ステップで完成</p>
                </div>

                <div className="max-w-3xl mx-auto">
                    {[
                        {
                            step: '01',
                            title: 'ヒアリング',
                            desc: 'お問い合わせフォームまたはLINEでご連絡ください。ご希望のデザイン・用途・イメージをお伺いします。',
                            color: 'accent',
                        },
                        {
                            step: '02',
                            title: 'デザイン制作',
                            desc: 'テンプレートをベースに、あなたのビジネスに合わせてカスタマイズ。初稿を24〜48時間以内にお届けします。',
                            color: 'teal',
                        },
                        {
                            step: '03',
                            title: '納品・修正',
                            desc: 'ご確認いただき、修正があればお気軽にどうぞ。最終版を高品質なフォーマットでお渡しします。',
                            color: 'violet',
                        },
                    ].map((item, i) => (
                        <div key={i} className="flex gap-6 mb-8 last:mb-0">
                            {/* ステップ番号 & ライン */}
                            <div className="flex flex-col items-center">
                                <div className={`w-12 h-12 rounded-full ${colorMap[item.color as keyof typeof colorMap].bg} flex items-center justify-center shrink-0`}>
                                    <span className={`font-bold text-sm ${colorMap[item.color as keyof typeof colorMap].text}`}>{item.step}</span>
                                </div>
                                {i < 2 && <div className="w-0.5 h-full bg-stone-200 my-2" />}
                            </div>
                            {/* テキスト */}
                            <div className={`bg-white rounded-2xl border border-stone-200 p-6 flex-1 ${i < 2 ? 'mb-0' : ''}`}>
                                <h3 className="font-serif font-bold text-lg text-ink mb-2">{item.title}</h3>
                                <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="section-container">
                <div className="bg-gradient-to-r from-teal to-emerald-700 rounded-3xl p-10 sm:p-16 text-center text-white">
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
                        まずは無料で<br className="sm:hidden" />ご相談ください
                    </h2>
                    <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                        「こんなものが作れる？」「予算はどれくらい？」など<br className="hidden sm:block" />
                        どんなご質問でもお気軽にどうぞ。
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal font-bold rounded-lg hover:bg-stone-100 transition-colors duration-200 text-base"
                    >
                        お問い合わせフォームへ
                    </Link>
                </div>
            </section>
        </div>
    );
}
