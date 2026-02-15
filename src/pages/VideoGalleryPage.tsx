import { useState, useMemo } from 'react';
import { videoItems, categoryLabels, type GalleryCategory } from '../data/galleryData';
import { usePageTitle } from '../hooks/usePageTitle';

/** 動画ギャラリーで使用するカテゴリフィルター */
const VIDEO_CATEGORIES: { key: 'all' | GalleryCategory; label: string }[] = [
    { key: 'all', label: 'すべて' },
    { key: 'promo', label: 'プロモーション' },
    { key: 'product', label: '商品紹介' },
    { key: 'campaign', label: 'キャンペーン' },
];

/** 秒数をmm:ss形式に変換 */
function formatDuration(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
}

/**
 * 動画ギャラリーページ
 * カテゴリフィルター + カードグリッド（再生ボタン + 尺表示つき）
 */
export default function VideoGalleryPage() {
    usePageTitle('AI動画テンプレート | 岡山の店舗向けプロモーション動画制作');
    const [activeCategory, setActiveCategory] = useState<'all' | GalleryCategory>('all');

    const filteredItems = useMemo(() => {
        if (activeCategory === 'all') return videoItems;
        return videoItems.filter((item) => item.category === activeCategory);
    }, [activeCategory]);

    return (
        <div className="py-12 sm:py-16">
            <div className="section-container">
                {/* ページヘッダー */}
                <div className="text-center mb-10">
                    <h1 className="section-title">動画ギャラリー</h1>
                    <p className="section-subtitle max-w-2xl mx-auto">
                        AIで生成した動画テンプレート。あなたのブランドに合わせてカスタマイズできます。
                    </p>
                </div>

                {/* カテゴリフィルター */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
                    {VIDEO_CATEGORIES.map((cat) => (
                        <button
                            key={cat.key}
                            onClick={() => setActiveCategory(cat.key)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === cat.key
                                ? 'bg-accent text-white shadow-md'
                                : 'bg-white text-stone-600 border border-stone-300 hover:border-accent hover:text-accent'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* カードグリッド */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
                    {filteredItems.map((item) => (
                        <article
                            key={item.id}
                            className="group bg-white rounded-2xl overflow-hidden border border-stone-200 
                         shadow-sm hover:shadow-xl transition-all duration-300 
                         hover:-translate-y-2"
                        >
                            {/* サムネイル + 再生ボタン */}
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={item.imagePath}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* ホバーオーバーレイ */}
                                <div className="absolute inset-0 bg-ink/30 group-hover:bg-ink/50 transition-colors duration-300 flex items-center justify-center">
                                    {/* 再生ボタン */}
                                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-7 h-7 text-accent ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                                {/* 尺表示バッジ */}
                                {item.duration && (
                                    <span className="absolute bottom-3 right-3 bg-ink/80 text-white text-xs font-medium px-2.5 py-1 rounded">
                                        {formatDuration(item.duration)}
                                    </span>
                                )}
                            </div>

                            {/* カード情報 */}
                            <div className="p-5">
                                {/* タグ */}
                                <div className="flex flex-wrap gap-1.5 mb-3">
                                    <span className="px-2.5 py-0.5 bg-teal/10 text-teal text-xs font-medium rounded-full">
                                        {categoryLabels[item.category]}
                                    </span>
                                    {item.tags.slice(0, 2).map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-0.5 bg-stone-100 text-stone-500 text-xs rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* タイトル */}
                                <h3 className="font-serif font-bold text-lg text-ink mb-2 leading-snug">
                                    {item.title}
                                </h3>

                                {/* 説明文 */}
                                <p className="text-sm text-stone-500 leading-relaxed mb-4 line-clamp-2">
                                    {item.description}
                                </p>

                                {/* カスタマイズ可能要素 */}
                                <div className="mb-4">
                                    <span className="text-xs font-medium text-stone-400 mb-1.5 block">
                                        カスタマイズ可能な要素:
                                    </span>
                                    <div className="flex flex-wrap gap-1.5">
                                        {item.customizable.map((elem) => (
                                            <span
                                                key={elem}
                                                className="px-2 py-0.5 border border-violet/30 text-violet text-xs rounded"
                                            >
                                                {elem}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* CTAボタン */}
                                <button className="w-full btn-primary text-sm">
                                    カスタマイズする
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                {/* フィルター結果が空の場合 */}
                {filteredItems.length === 0 && (
                    <div className="text-center py-16 text-stone-400">
                        <p className="text-lg">該当するテンプレートがありません</p>
                    </div>
                )}
            </div>
        </div>
    );
}
