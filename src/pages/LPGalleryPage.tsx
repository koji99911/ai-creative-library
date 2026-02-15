import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { lpItems, categoryLabels, type GalleryCategory, type GalleryItem } from '../data/galleryData';
import { usePageTitle } from '../hooks/usePageTitle';

/** LPギャラリーで使用するカテゴリフィルター */
const LP_CATEGORIES: { key: 'all' | GalleryCategory; label: string }[] = [
    { key: 'all', label: 'すべて' },
    { key: 'beauty', label: '美容' },
    { key: 'food', label: '飲食' },
    { key: 'fitness', label: 'フィットネス' },
    { key: 'business', label: 'ビジネス' },
];

/**
 * LPプレビューモーダル
 */
function LPPreviewModal({ item, onClose }: { item: GalleryItem; onClose: () => void }) {
    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/60 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full mx-4 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* ヘッダー */}
                <div className="flex items-center justify-between p-4 border-b border-stone-200">
                    <h3 className="font-serif font-bold text-lg text-ink">{item.title}</h3>
                    <button
                        onClick={onClose}
                        className="p-1 text-stone-400 hover:text-stone-700 transition-colors"
                        aria-label="閉じる"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* 画像プレビュー */}
                <div className="p-4">
                    <img
                        src={item.imagePath}
                        alt={item.title}
                        className="w-full rounded-lg"
                    />
                </div>

                {/* 情報エリア */}
                <div className="px-4 pb-4">
                    <p className="text-sm text-stone-500 mb-3">{item.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                        {item.customizable.map((elem) => (
                            <span
                                key={elem}
                                className="px-2 py-0.5 border border-violet/30 text-violet text-xs rounded"
                            >
                                {elem}
                            </span>
                        ))}
                    </div>
                    <Link
                        to="/contact"
                        className="btn-primary text-sm w-full"
                    >
                        このテンプレートで相談する
                    </Link>
                </div>
            </div>
        </div>
    );
}

/**
 * LPギャラリーページ
 * カテゴリフィルター + カードグリッド + クリックでモーダル表示
 */
export default function LPGalleryPage() {
    usePageTitle('LPテンプレート | 岡山の店舗向けランディングページ制作');
    const [activeCategory, setActiveCategory] = useState<'all' | GalleryCategory>('all');
    const [previewItem, setPreviewItem] = useState<GalleryItem | null>(null);

    const filteredItems = useMemo(() => {
        if (activeCategory === 'all') return lpItems;
        return lpItems.filter((item) => item.category === activeCategory);
    }, [activeCategory]);

    return (
        <div className="py-12 sm:py-16">
            <div className="section-container">
                {/* ページヘッダー */}
                <div className="text-center mb-10">
                    <h1 className="section-title">LPギャラリー</h1>
                    <p className="section-subtitle max-w-2xl mx-auto">
                        業種に合わせたランディングページテンプレート。すべてカスタマイズ可能です。
                    </p>
                </div>

                {/* カテゴリフィルター */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
                    {LP_CATEGORIES.map((cat) => (
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {filteredItems.map((item) => (
                        <article
                            key={item.id}
                            className="group bg-white rounded-2xl overflow-hidden border border-stone-200 
                         shadow-sm hover:shadow-xl transition-all duration-300 
                         hover:-translate-y-2 cursor-pointer"
                            onClick={() => setPreviewItem(item)}
                        >
                            {/* 画像部分 */}
                            <div className="relative aspect-square overflow-hidden">
                                <img
                                    src={item.imagePath}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* ホバーオーバーレイ */}
                                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors duration-300 flex items-center justify-center">
                                    <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-accent px-5 py-2.5 rounded-full text-sm">
                                        拡大して見る
                                    </span>
                                </div>
                            </div>

                            {/* カード情報 */}
                            <div className="p-5">
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
                                <h3 className="font-serif font-bold text-lg text-ink mb-2 leading-snug">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-stone-500 leading-relaxed mb-4 line-clamp-2">
                                    {item.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {item.customizable.map((elem) => (
                                        <span
                                            key={elem}
                                            className="px-2 py-0.5 border border-violet/30 text-violet text-xs rounded"
                                        >
                                            {elem}
                                        </span>
                                    ))}
                                </div>
                                <button
                                    className="w-full btn-primary text-sm"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setPreviewItem(item);
                                    }}
                                >
                                    このテンプレートで相談する
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                {filteredItems.length === 0 && (
                    <div className="text-center py-16 text-stone-400">
                        <p className="text-lg">該当するテンプレートがありません</p>
                    </div>
                )}
            </div>

            {/* プレビューモーダル */}
            {previewItem && (
                <LPPreviewModal
                    item={previewItem}
                    onClose={() => setPreviewItem(null)}
                />
            )}
        </div>
    );
}
