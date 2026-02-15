import { usePageTitle } from '../hooks/usePageTitle';

/**
 * お問い合わせページ（プレースホルダー）
 */
export default function ContactPage() {
    usePageTitle('お問い合わせ | 岡山のAI画像・動画制作');

    return (
        <div className="section-container py-16">
            <h1 className="section-title">お問い合わせ</h1>
            <p className="section-subtitle">
                デザインのカスタマイズやお見積もりなど、お気軽にご相談ください。
            </p>
            <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center text-stone-400">
                Google Forms連携は今後実装されます
            </div>
        </div>
    );
}
