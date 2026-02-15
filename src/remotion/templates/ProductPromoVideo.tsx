/**
 * 商品プロモーション動画（45秒）
 * Remotion テンプレート
 *
 * 構成:
 *  0-5秒:   タイトルカード (商品名 + ブランド)
 *  5-15秒:  商品ビジュアル + キャッチコピー
 *  15-30秒: 特長3点 (順番に登場)
 *  30-40秒: 価格 + 特典情報
 *  40-45秒: CTA (購入・問い合わせ先)
 */

import {
    AbsoluteFill,
    Sequence,
    useCurrentFrame,
    useVideoConfig,
    interpolate,
    spring,
} from 'remotion';

export interface ProductPromoProps {
    productName: string;
    brandName: string;
    catchCopy: string;
    features: [string, string, string];
    price: string;
    specialOffer: string;
    ctaUrl: string;
    primaryColor: string;
    accentColor: string;
}

export const defaultProductPromoProps: ProductPromoProps = {
    productName: 'オーガニック美容オイル',
    brandName: 'Bloom Cosmetics',
    catchCopy: '自然由来100%の\n贅沢な潤い',
    features: [
        '厳選された植物オイルを配合',
        '敏感肌にもやさしい処方',
        '朝晩のスキンケアに最適',
    ],
    price: '¥4,980（税込）',
    specialOffer: '初回限定 20% OFF',
    ctaUrl: 'www.example.com',
    primaryColor: '#0f766e',
    accentColor: '#ea580c',
};

/* ---- シーン 1: タイトルカード ---- */
function TitleScene({ productName, brandName, primaryColor }: {
    productName: string; brandName: string; primaryColor: string;
}) {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    const s = spring({ frame, fps, config: { damping: 14 } });
    const scale = interpolate(s, [0, 1], [0.6, 1]);
    const opacity = interpolate(s, [0, 1], [0, 1]);

    return (
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', background: '#fff' }}>
            <div style={{ opacity, transform: `scale(${scale})`, textAlign: 'center' }}>
                <p style={{ fontFamily: '"Noto Sans JP"', fontSize: 20, color: primaryColor, letterSpacing: 4, marginBottom: 12, fontWeight: 600 }}>
                    {brandName}
                </p>
                <h1 style={{ fontFamily: '"Noto Serif JP"', fontSize: 52, fontWeight: 700, color: '#1c1917', lineHeight: 1.3 }}>
                    {productName}
                </h1>
                <div style={{ width: 60, height: 3, background: primaryColor, margin: '20px auto 0', borderRadius: 2 }} />
            </div>
        </AbsoluteFill>
    );
}

/* ---- シーン 2: キャッチコピー ---- */
function CatchCopyScene({ catchCopy, primaryColor }: { catchCopy: string; primaryColor: string }) {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    const slide = spring({ frame, fps, config: { damping: 15, stiffness: 100 } });
    const x = interpolate(slide, [0, 1], [-200, 0]);
    const opacity = interpolate(slide, [0, 1], [0, 1]);

    return (
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', background: `linear-gradient(135deg, ${primaryColor}11, ${primaryColor}33)` }}>
            <p style={{
                fontFamily: '"Noto Serif JP"', fontSize: 44, fontWeight: 600, color: '#1c1917',
                lineHeight: 1.7, textAlign: 'center', opacity, transform: `translateX(${x}px)`,
                whiteSpace: 'pre-line',
            }}>
                {catchCopy}
            </p>
        </AbsoluteFill>
    );
}

/* ---- シーン 3: 特長3点 ---- */
function FeaturesScene({ features, primaryColor, accentColor }: {
    features: [string, string, string]; primaryColor: string; accentColor: string;
}) {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    const numbers = ['01', '02', '03'];

    return (
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', background: '#fafaf9', padding: 60 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 36, width: '100%', maxWidth: 800 }}>
                {features.map((feat, i) => {
                    const delay = i * 15;
                    const s = spring({ frame: frame - delay, fps, config: { damping: 12 } });
                    const opacity = interpolate(s, [0, 1], [0, 1]);
                    const translateX = interpolate(s, [0, 1], [80, 0]);

                    return (
                        <div key={i} style={{ opacity, transform: `translateX(${translateX}px)`, display: 'flex', alignItems: 'center', gap: 24 }}>
                            <span style={{
                                fontFamily: '"Noto Sans JP"', fontSize: 32, fontWeight: 800,
                                color: i === 0 ? accentColor : primaryColor, minWidth: 50,
                            }}>
                                {numbers[i]}
                            </span>
                            <div style={{ height: 2, width: 30, background: `${primaryColor}44`, flexShrink: 0 }} />
                            <span style={{ fontFamily: '"Noto Sans JP"', fontSize: 26, fontWeight: 500, color: '#1c1917' }}>
                                {feat}
                            </span>
                        </div>
                    );
                })}
            </div>
        </AbsoluteFill>
    );
}

/* ---- シーン 4: 価格 + 特典 ---- */
function PriceScene({ price, specialOffer, primaryColor, accentColor }: {
    price: string; specialOffer: string; primaryColor: string; accentColor: string;
}) {
    const frame = useCurrentFrame();
    const opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' });
    const scale = interpolate(frame, [0, 20], [0.9, 1], { extrapolateRight: 'clamp' });

    return (
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', background: '#fff' }}>
            <div style={{ opacity, transform: `scale(${scale})`, textAlign: 'center' }}>
                <p style={{
                    fontFamily: '"Noto Sans JP"', fontSize: 56, fontWeight: 800, color: '#1c1917', marginBottom: 16,
                }}>
                    {price}
                </p>
                <div style={{
                    display: 'inline-block', padding: '12px 32px', borderRadius: 40,
                    background: accentColor, color: '#fff',
                    fontFamily: '"Noto Sans JP"', fontSize: 24, fontWeight: 700,
                }}>
                    {specialOffer}
                </div>
            </div>
        </AbsoluteFill>
    );
}

/* ---- シーン 5: CTA ---- */
function CTAScene({ ctaUrl, primaryColor }: { ctaUrl: string; primaryColor: string }) {
    const frame = useCurrentFrame();
    const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' });

    return (
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', background: primaryColor }}>
            <div style={{ opacity, textAlign: 'center' }}>
                <p style={{ fontFamily: '"Noto Sans JP"', fontSize: 32, fontWeight: 700, color: '#fff', marginBottom: 16 }}>
                    詳しくはこちら
                </p>
                <p style={{ fontFamily: '"Noto Sans JP"', fontSize: 40, fontWeight: 800, color: '#fff', letterSpacing: 2 }}>
                    {ctaUrl}
                </p>
            </div>
        </AbsoluteFill>
    );
}

/* ---- メインコンポジション ---- */
export const ProductPromoVideo: React.FC<ProductPromoProps> = (props) => {
    const { fps } = useVideoConfig();
    const p = { ...defaultProductPromoProps, ...props };

    return (
        <AbsoluteFill style={{ backgroundColor: '#fff' }}>
            <Sequence from={0} durationInFrames={5 * fps}>
                <TitleScene productName={p.productName} brandName={p.brandName} primaryColor={p.primaryColor} />
            </Sequence>
            <Sequence from={5 * fps} durationInFrames={10 * fps}>
                <CatchCopyScene catchCopy={p.catchCopy} primaryColor={p.primaryColor} />
            </Sequence>
            <Sequence from={15 * fps} durationInFrames={15 * fps}>
                <FeaturesScene features={p.features} primaryColor={p.primaryColor} accentColor={p.accentColor} />
            </Sequence>
            <Sequence from={30 * fps} durationInFrames={10 * fps}>
                <PriceScene price={p.price} specialOffer={p.specialOffer} primaryColor={p.primaryColor} accentColor={p.accentColor} />
            </Sequence>
            <Sequence from={40 * fps} durationInFrames={5 * fps}>
                <CTAScene ctaUrl={p.ctaUrl} primaryColor={p.primaryColor} />
            </Sequence>
        </AbsoluteFill>
    );
};
