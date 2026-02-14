import { Link, NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';

/**
 * 共通レイアウトコンポーネント
 * ヘッダー（ナビゲーション）+ メインコンテンツ + フッター
 */
export default function Layout() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { to: '/', label: 'ホーム' },
        { to: '/gallery/images', label: '画像ギャラリー' },
        { to: '/gallery/videos', label: '動画ギャラリー' },
        { to: '/services', label: 'サービス・料金' },
        { to: '/contact', label: 'お問い合わせ' },
    ];

    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
        `transition-colors duration-200 font-medium ${isActive
            ? 'text-accent'
            : 'text-stone-600 hover:text-accent'
        }`;

    return (
        <div className="min-h-screen flex flex-col">
            {/* ヘッダー */}
            <header className="bg-white/80 backdrop-blur-sm border-b border-stone-200 sticky top-0 z-50">
                <div className="section-container">
                    <div className="flex items-center justify-between h-16">
                        {/* ロゴ */}
                        <Link to="/" className="flex items-center gap-2">
                            <span className="text-xl font-serif font-bold text-ink">
                                AI Creative<span className="text-accent"> Library</span>
                            </span>
                        </Link>

                        {/* デスクトップナビ */}
                        <nav className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    end={link.to === '/'}
                                    className={navLinkClass}
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                        </nav>

                        {/* モバイルメニューボタン */}
                        <button
                            className="md:hidden p-2 text-stone-600 hover:text-accent transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="メニュー"
                        >
                            {isMobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* モバイルナビ */}
                {isMobileMenuOpen && (
                    <nav className="md:hidden bg-white border-t border-stone-200">
                        <div className="section-container py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    end={link.to === '/'}
                                    className={navLinkClass}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                        </div>
                    </nav>
                )}
            </header>

            {/* メインコンテンツ */}
            <main className="flex-1">
                <Outlet />
            </main>

            {/* フッター */}
            <footer className="bg-stone-900 text-stone-300">
                <div className="section-container py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* ブランド情報 */}
                        <div>
                            <h3 className="text-white text-lg font-serif font-bold mb-3">
                                AI Creative Library
                            </h3>
                            <p className="text-sm leading-relaxed">
                                AIを活用した画像・動画テンプレートで、<br />
                                あなたのビジネスを彩ります。
                            </p>
                        </div>

                        {/* ナビゲーション */}
                        <div>
                            <h4 className="text-white font-medium mb-3">ページ</h4>
                            <ul className="space-y-2 text-sm">
                                {navLinks.map((link) => (
                                    <li key={link.to}>
                                        <Link
                                            to={link.to}
                                            className="hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 連絡先 */}
                        <div>
                            <h4 className="text-white font-medium mb-3">お問い合わせ</h4>
                            <p className="text-sm leading-relaxed">
                                デザインのカスタマイズや<br />
                                お見積もりのご相談はお気軽にどうぞ。
                            </p>
                            <Link
                                to="/contact"
                                className="inline-block mt-3 text-accent hover:text-orange-400 transition-colors text-sm font-medium"
                            >
                                お問い合わせはこちら →
                            </Link>
                        </div>
                    </div>

                    <div className="border-t border-stone-700 mt-8 pt-8 text-center text-xs text-stone-500">
                        © 2025 AI Creative Library. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}
