import { Link } from 'react-router-dom';
import { imageItems, videoItems, categoryLabels } from '../data/galleryData';

/** 秒数をmm:ss形式に変換 */
function formatDuration(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
}

/**
 * トップページ
 * ヒーローセクション + サービス概要 + ハイライト作品
 */
export default function HomePage() {
    // ハイライト: 画像3点 + 動画3点
    const highlightImages = imageItems.slice(0, 3);
    const highlightVideos = videoItems.slice(0, 3);

    return (
        <>
            {/* ===== ヒーローセクション ===== */}
            <section className="relative overflow-hidden">
                {/* 背景のグラデーション装飾 */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-cream to-teal/5 -z-10" />
                <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal/5 rounded-full blur-3xl -z-10" />

                <div className="section-container py-20 sm:py-28 lg:py-36">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-accent font-medium text-sm sm:text-base mb-4 tracking-wider">
                            AI × DESIGN TEMPLATES
                        </p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-ink leading-tight mb-6">
                            AIで、あなたの<br />
                            ビジネスを<span className="text-accent">彩る</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-stone-600 leading-relaxed mb-10 max-w-2xl mx-auto">
                            プロ品質のデザインテンプレートを、あなたのブランドに合わせてカスタマイズ。
                            画像・動画のサンプルをご覧いただき、お気軽にご相談ください。
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/gallery/images" className="btn-primary text-base px-8 py-4">
                                ギャラリーを見る
                            </Link>
                            <Link to="/contact" className="btn-secondary text-base px-8 py-4">
                                お問い合わせ
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== サービス概要 ===== */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="section-container">
                    <div className="text-center mb-14">
                        <h2 className="section-title">サービス概要</h2>
                        <p className="section-subtitle max-w-2xl mx-auto">
                            3つのステップで、あなただけのクリエイティブが完成します
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* ステップ1 */}
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

                        {/* ステップ2 */}
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

                        {/* ステップ3 */}
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

            {/* ===== 画像ハイライト ===== */}
            <section className="py-16 sm:py-24">
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
            <section className="py-16 sm:py-24 bg-white">
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
                                    {/* 再生ボタン */}
                                    <div className="absolute inset-0 bg-ink/30 flex items-center justify-center">
                                        <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-6 h-6 text-accent ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                    {/* 尺表示 */}
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
            <section className="py-16 sm:py-24">
                <div className="section-container">
                    <div className="bg-gradient-to-r from-accent to-orange-700 rounded-3xl p-10 sm:p-16 text-center text-white">
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
                            あなたのビジネスに合わせた<br className="sm:hidden" />
                            デザインを
                        </h2>
                        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                            テンプレートをベースに、ロゴ・テキスト・色をカスタマイズ。
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
