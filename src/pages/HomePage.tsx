import { Link } from 'react-router-dom';
import { imageItems, videoItems, categoryLabels } from '../data/galleryData';
import { usePageTitle } from '../hooks/usePageTitle';

/** 秒数をmm:ss形式に変換 */
function formatDuration(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
}

/** assetPath ヘルパー */
function assetPath(path: string): string {
    const base = import.meta.env.BASE_URL;
    return `${base}${path.startsWith('/') ? path.slice(1) : path}`;
}

/**
 * トップページ
 * ヒーロー + 信頼 + ペルソナ + サービス + Before/After + お客様の声 + ハイライト + CTA
 */
export default function HomePage() {
    usePageTitle('AI画像・動画制作 | 岡山の個人事業主・店舗向け | AI Creative Library');

    const highlightImages = imageItems.slice(0, 3);
    const highlightVideos = videoItems.slice(0, 3);

    return (
        <>
            {/* ===== ヒーローセクション（背景画像 + パララックス） ===== */}
            <section className="relative overflow-hidden min-h-[600px] sm:min-h-[700px] flex items-center">
                {/* 背景画像 with パララックス */}
                <div
                    className="absolute inset-0 -z-20"
                    style={{
                        backgroundImage: `url(${assetPath('/images/hero-studio.png')})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed',
                    }}
                />
                {/* 半透明オーバーレイ */}
                <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/50 to-ink/70 -z-10" />

                <div className="section-container py-20 sm:py-28 lg:py-36 w-full">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-amber-300 font-medium text-sm sm:text-base mb-4 tracking-wider">
                            AI × DESIGN for OKAYAMA
                        </p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6 drop-shadow-lg">
                            岡山の店舗・個人事業主の<br />ための<span className="text-amber-300">AIクリエイティブ</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
                            岡山県内の美容サロン・飲食店・個人事業主に選ばれています。<br className="hidden sm:block" />
                            プロ品質のデザインを、もっと手軽に。
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/gallery/images" className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-bold rounded-lg hover:bg-orange-800 transition-colors duration-200 text-base shadow-lg">
                                ギャラリーを見る
                            </Link>
                            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-lg border border-white/30 hover:bg-white/20 transition-colors duration-200 text-base">
                                お問い合わせ
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== 実績・信頼セクション ===== */}
            <section className="py-14 sm:py-20 bg-gradient-to-r from-stone-50 to-orange-50/50">
                <div className="section-container">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {/* 実績数 */}
                        <div className="text-center p-6">
                            <div className="w-14 h-14 mx-auto mb-4 bg-accent/10 rounded-2xl flex items-center justify-center">
                                <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <p className="text-3xl sm:text-4xl font-serif font-bold text-ink mb-1">50<span className="text-accent">+</span></p>
                            <p className="text-sm text-stone-500 font-medium">制作実績テンプレート</p>
                        </div>
                        {/* スピード */}
                        <div className="text-center p-6">
                            <div className="w-14 h-14 mx-auto mb-4 bg-teal/10 rounded-2xl flex items-center justify-center">
                                <svg className="w-7 h-7 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <p className="text-3xl sm:text-4xl font-serif font-bold text-ink mb-1">最短<span className="text-teal">翌日</span></p>
                            <p className="text-sm text-stone-500 font-medium">対応スピード納品</p>
                        </div>
                        {/* 修正 */}
                        <div className="text-center p-6">
                            <div className="w-14 h-14 mx-auto mb-4 bg-violet/10 rounded-2xl flex items-center justify-center">
                                <svg className="w-7 h-7 text-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </div>
                            <p className="text-3xl sm:text-4xl font-serif font-bold text-ink mb-1">何度でも<span className="text-violet">OK</span></p>
                            <p className="text-sm text-stone-500 font-medium">修正回数</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== サービス概要 ===== */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="section-container">
                    <div className="text-center mb-14">
                        <h2 className="section-title">制作の流れ</h2>
                        <p className="section-subtitle max-w-2xl mx-auto">
                            3つのステップで、あなただけのクリエイティブが完成します
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 mx-auto mb-5 bg-accent/10 rounded-2xl flex items-center justify-center">
                                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <div className="text-sm text-accent font-medium mb-2">STEP 01</div>
                            <h3 className="font-serif font-bold text-xl mb-3">サンプルを選ぶ</h3>
                            <p className="text-stone-500 text-sm leading-relaxed">
                                ギャラリーからお好みのデザインテンプレートをお選びください。画像・動画ともに豊富なバリエーションをご用意。
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 mx-auto mb-5 bg-teal/10 rounded-2xl flex items-center justify-center">
                                <svg className="w-8 h-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            </div>
                            <div className="text-sm text-teal font-medium mb-2">STEP 02</div>
                            <h3 className="font-serif font-bold text-xl mb-3">カスタマイズ</h3>
                            <p className="text-stone-500 text-sm leading-relaxed">
                                テキスト・画像・色・ロゴなど、あなたのビジネスに合わせてカスタマイズ。ヒアリングをもとにプロが仕上げます。
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 mx-auto mb-5 bg-violet/10 rounded-2xl flex items-center justify-center">
                                <svg className="w-8 h-8 text-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                                </svg>
                            </div>
                            <div className="text-sm text-violet font-medium mb-2">STEP 03</div>
                            <h3 className="font-serif font-bold text-xl mb-3">納品</h3>
                            <p className="text-stone-500 text-sm leading-relaxed">
                                完成したデザインをお渡し。SNS投稿や印刷物にすぐにお使いいただけるフォーマットでお届けします。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== こんな方におすすめ ===== */}
            <section className="py-16 sm:py-24">
                <div className="section-container">
                    <div className="text-center mb-14">
                        <h2 className="section-title">こんな方におすすめ</h2>
                        <p className="section-subtitle max-w-2xl mx-auto">
                            あなたのお悩み、クリエイティブで解決します
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* カード1: 美容サロン */}
                        <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="aspect-square overflow-hidden bg-pink-50">
                                <img
                                    src={assetPath('/images/persona-beauty.png')}
                                    alt="美容サロンオーナー"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <span className="text-xs text-accent font-medium bg-accent/10 px-3 py-1 rounded-full">美容サロン</span>
                                <h3 className="font-serif font-bold text-lg mt-3 mb-2">SNSの投稿画像に困っている<br />美容サロンオーナーさんへ</h3>
                                <p className="text-sm text-stone-500 leading-relaxed">
                                    施術の腕は確かなのに、SNSの見栄えがイマイチ…。プロ品質の画像・動画で、お店の魅力を最大限に伝えます。
                                </p>
                            </div>
                        </div>

                        {/* カード2: カフェ・飲食店 */}
                        <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="aspect-square overflow-hidden bg-green-50">
                                <img
                                    src={assetPath('/images/persona-cafe.png')}
                                    alt="カフェオーナー"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <span className="text-xs text-teal font-medium bg-teal/10 px-3 py-1 rounded-full">飲食店</span>
                                <h3 className="font-serif font-bold text-lg mt-3 mb-2">新メニューの告知をもっとおしゃれにしたい<br />飲食店オーナーさんへ</h3>
                                <p className="text-sm text-stone-500 leading-relaxed">
                                    季節メニューの告知や店舗紹介に。手軽にプロクオリティのデザインが手に入ります。
                                </p>
                            </div>
                        </div>

                        {/* カード3: 個人事業主 */}
                        <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="aspect-square overflow-hidden bg-blue-50">
                                <img
                                    src={assetPath('/images/persona-business.png')}
                                    alt="個人事業主"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <span className="text-xs text-violet font-medium bg-violet/10 px-3 py-1 rounded-full">個人事業主</span>
                                <h3 className="font-serif font-bold text-lg mt-3 mb-2">名刺やチラシのデザインを手軽に<br />リニューアルしたい方へ</h3>
                                <p className="text-sm text-stone-500 leading-relaxed">
                                    コーチ・セラピスト・コンサルタントの方に。ビジネスの印象を変えるデザインをご提案します。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== Before → After ===== */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="section-container">
                    <div className="text-center mb-14">
                        <h2 className="section-title">プロのデザインで、印象が変わる</h2>
                        <p className="section-subtitle max-w-2xl mx-auto">
                            同じ情報でも、デザイン次第でこれだけ変わります
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 items-center">
                            {/* Before */}
                            <div className="relative">
                                <div className="absolute -top-3 left-4 z-10">
                                    <span className="bg-stone-400 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow">BEFORE</span>
                                </div>
                                <div className="rounded-2xl overflow-hidden border-2 border-stone-300 shadow-sm">
                                    <img
                                        src={assetPath('/images/before-simple.png')}
                                        alt="自分で作った素材"
                                        className="w-full aspect-square object-cover"
                                    />
                                </div>
                                <p className="text-center text-xs text-stone-400 mt-2">自分で作った素材</p>
                            </div>

                            {/* 中央の矢印（モバイルは下向き、デスクトップは右向き） */}
                            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20">
                                <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-lg">
                                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex md:hidden justify-center -my-2 z-20 relative">
                                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                                    </svg>
                                </div>
                            </div>

                            {/* After */}
                            <div className="relative">
                                <div className="absolute -top-3 left-4 z-10">
                                    <span className="bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-full shadow">AFTER</span>
                                </div>
                                <div className="rounded-2xl overflow-hidden border-2 border-accent/30 shadow-lg ring-2 ring-accent/10">
                                    <img
                                        src={assetPath('/images/gallery/salon-spring-campaign.png')}
                                        alt="プロが制作した素材"
                                        className="w-full aspect-square object-cover"
                                    />
                                </div>
                                <p className="text-center text-xs text-accent font-medium mt-2">プロが制作した素材</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== お客様の声 ===== */}
            <section className="py-16 sm:py-24">
                <div className="section-container">
                    <div className="text-center mb-14">
                        <h2 className="section-title">お客様の声</h2>
                        <p className="section-subtitle max-w-2xl mx-auto">
                            ご利用いただいたお客様からの声をご紹介します
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                quote: 'イメージ以上のクオリティで大満足です。',
                                detail: 'SNS投稿用の画像を依頼しましたが、ブランドの世界観にぴったりの仕上がりでした。',
                                name: '美容サロン A様',
                                location: '岡山市',
                            },
                            {
                                quote: 'SNSの反応が目に見えて変わりました。',
                                detail: '新メニューの告知画像をお願いしたところ、いいねの数が倍以上に。リピートしています。',
                                name: 'カフェ B様',
                                location: '倉敷市',
                            },
                            {
                                quote: '名刺を渡すのが楽しくなりました。',
                                detail: '以前は名刺を出すのが恥ずかしかったのですが、今ではお渡しするのが楽しみです。',
                                name: 'セラピスト C様',
                                location: '岡山市',
                            },
                        ].map((review, i) => (
                            <div key={i} className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                                {/* 星評価 */}
                                <div className="flex gap-0.5 mb-4">
                                    {[...Array(5)].map((_, j) => (
                                        <svg key={j} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="font-serif font-bold text-ink text-base mb-2">
                                    「{review.quote}」
                                </p>
                                <p className="text-sm text-stone-500 leading-relaxed mb-4">
                                    {review.detail}
                                </p>
                                <div className="flex items-center gap-2 text-sm">
                                    <span className="text-stone-400">—</span>
                                    <span className="text-stone-600 font-medium">{review.location}</span>
                                    <span className="text-stone-600">{review.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-xs text-stone-400 mt-6">※ 上記はサービスイメージのためのサンプルです</p>
                </div>
            </section>

            {/* ===== 画像ハイライト ===== */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="section-container">
                    <div className="flex items-end justify-between mb-10">
                        <div>
                            <h2 className="section-title mb-2">画像テンプレート</h2>
                            <p className="text-stone-500">注目のデザインサンプル</p>
                        </div>
                        <Link
                            to="/gallery/images"
                            className="hidden sm:inline-flex items-center text-accent font-medium hover:underline"
                        >
                            すべて見る
                            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {highlightImages.map((item) => (
                            <Link
                                key={item.id}
                                to="/gallery/images"
                                className="group bg-white rounded-2xl overflow-hidden border border-stone-200 
                           shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="relative aspect-square overflow-hidden">
                                    <img
                                        src={item.imagePath}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-4">
                                    <span className="text-xs text-teal font-medium">
                                        {categoryLabels[item.category]}
                                    </span>
                                    <h3 className="font-serif font-bold text-base mt-1">{item.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="sm:hidden text-center mt-6">
                        <Link to="/gallery/images" className="btn-secondary text-sm">
                            画像ギャラリーをすべて見る →
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== 動画ハイライト ===== */}
            <section className="py-16 sm:py-24">
                <div className="section-container">
                    <div className="flex items-end justify-between mb-10">
                        <div>
                            <h2 className="section-title mb-2">動画テンプレート</h2>
                            <p className="text-stone-500">注目の動画サンプル</p>
                        </div>
                        <Link
                            to="/gallery/videos"
                            className="hidden sm:inline-flex items-center text-accent font-medium hover:underline"
                        >
                            すべて見る
                            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {highlightVideos.map((item) => (
                            <Link
                                key={item.id}
                                to="/gallery/videos"
                                className="group bg-cream rounded-2xl overflow-hidden border border-stone-200 
                           shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="relative aspect-video overflow-hidden">
                                    <img
                                        src={item.imagePath}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-ink/30 flex items-center justify-center">
                                        <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-6 h-6 text-accent ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    {item.duration && (
                                        <span className="absolute bottom-2 right-2 bg-ink/80 text-white text-xs px-2 py-0.5 rounded">
                                            {formatDuration(item.duration)}
                                        </span>
                                    )}
                                </div>
                                <div className="p-4">
                                    <span className="text-xs text-teal font-medium">
                                        {categoryLabels[item.category]}
                                    </span>
                                    <h3 className="font-serif font-bold text-base mt-1">{item.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="sm:hidden text-center mt-6">
                        <Link to="/gallery/videos" className="btn-secondary text-sm">
                            動画ギャラリーをすべて見る →
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== CTA セクション ===== */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="section-container">
                    <div className="bg-gradient-to-r from-accent to-orange-700 rounded-3xl p-10 sm:p-16 text-center text-white">
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
                            あなたのビジネスに合わせた<br className="sm:hidden" />
                            デザインを
                        </h2>
                        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                            テンプレートをベースに、ロゴ・テキスト・色をカスタマイズ。<br className="hidden sm:block" />
                            まずはお気軽にご相談ください。
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-accent font-bold rounded-lg hover:bg-stone-100 transition-colors duration-200 text-base"
                        >
                            無料で相談する
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
