/**
 * トップページ（プレースホルダー）
 * プロンプト5で本実装する
 */
export default function HomePage() {
    return (
        <div className="section-container py-16">
            <div className="text-center">
                <h1 className="section-title">
                    AIで、あなたのビジネスを<span className="text-accent">彩る</span>
                </h1>
                <p className="section-subtitle max-w-2xl mx-auto">
                    画像・動画テンプレートのギャラリーサイト。
                    サンプルを見て、あなた用にカスタマイズできます。
                </p>
                <a href="/gallery/images" className="btn-primary">
                    ギャラリーを見る
                </a>
            </div>
        </div>
    );
}
