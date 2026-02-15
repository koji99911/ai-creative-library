/**
 * 美容サロン紹介ムービー（30秒）
 * Remotion テンプレート
 *
 * 構成:
 *  0-5秒:   ロゴ/店名フェードイン
 *  5-12秒:  キャッチコピースライドイン
 *  12-25秒: 特徴3点が順番にspring()で登場
 *  25-30秒: 予約CTA フェードイン
 */

import {
    AbsoluteFill,
    Sequence,
    useCurrentFrame,
    useVideoConfig,
    interpolate,
    spring,
    Img,
} from 'remotion';

/** Props: 外部から変更可能なパラメータ */
export interface SalonIntroProps {
    shopName: string;
    catchCopy: string;
    features: [string, string, string];
    ctaText: string;
    ctaContact: string;
    primaryColor: string;
    backgroundImage?: string;
}

/** デフォルト値 */
export const defaultSalonIntroProps: SalonIntroProps = {
    shopName: 'Bloom Beauty Salon',
    catchCopy: 'あなたの美しさを、もっと自由に。',
    features: [
        '完全個室のプライベート空間',
        'オーガニック製品のみ使用',
        '駅徒歩3分・駐車場完備',
    ],
    ctaText: 'ご予約はこちら',
    ctaContact: '080-1234-5678',
    primaryColor: '#f472b6',
    backgroundImage: undefined,
};

/* ============================================================ *
 *  シーン 1: ロゴ / 店名  (0 – 5 s)
 * ============================================================ */
function LogoScene({ shopName, primaryColor }: { shopName: string; primaryColor: string }) {
    const frame = useCurrentFrame();
    const opacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: 'clamp' });
    const scale = interpolate(frame, [0, 30], [0.8, 1], { extrapolateRight: 'clamp' });

    return (
        <AbsoluteFill
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                background: `linear-gradient(135deg, ${primaryColor}22 0%, ${primaryColor}44 100%)`,
            }}
        >
            <div
                style={{
                    opacity,
                    transform: `scale(${scale})`,
                    textAlign: 'center',
                }}
            >
                <div
                    style={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        background: primaryColor,
                        margin: '0 auto 24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 36,
                        color: '#fff',
                        fontWeight: 700,
                    }}
                >
                    {shopName.charAt(0)}
                </div>
                <h1
                    style={{
                        fontFamily: '"Noto Serif JP", serif',
                        fontSize: 48,
                        fontWeight: 700,
                        color: '#1c1917',
                    }}
                >
                    {shopName}
                </h1>
            </div>
        </AbsoluteFill>
    );
}

/* ============================================================ *
 *  シーン 2: キャッチコピー  (5 – 12 s)
 * ============================================================ */
function CatchCopyScene({ catchCopy, primaryColor }: { catchCopy: string; primaryColor: string }) {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    const slideIn = spring({ frame, fps, config: { damping: 15, stiffness: 100 } });
    const x = interpolate(slideIn, [0, 1], [300, 0]);

    return (
        <AbsoluteFill
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                background: `linear-gradient(135deg, #fff 0%, ${primaryColor}11 100%)`,
            }}
        >
            <p
                style={{
                    fontFamily: '"Noto Serif JP", serif',
                    fontSize: 42,
                    fontWeight: 600,
                    color: '#1c1917',
                    transform: `translateX(${x}px)`,
                    maxWidth: '80%',
                    textAlign: 'center',
                    lineHeight: 1.6,
                }}
            >
                {catchCopy}
            </p>
        </AbsoluteFill>
    );
}

/* ============================================================ *
 *  シーン 3: 特徴3点  (12 – 25 s)
 * ============================================================ */
function FeaturesScene({
    features,
    primaryColor,
}: {
    features: [string, string, string];
    primaryColor: string;
}) {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const icons = ['✦', '✧', '★'];

    return (
        <AbsoluteFill
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                background: '#fff',
                padding: 60,
            }}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
                {features.map((feat, i) => {
                    // 各特徴を ~4秒ずつずらして登場
                    const delay = i * 12; // 12 frames ≈ 0.4s
                    const s = spring({
                        frame: frame - delay * 3,
                        fps,
                        config: { damping: 12, stiffness: 80 },
                    });
                    const opacity = interpolate(s, [0, 1], [0, 1]);
                    const translateY = interpolate(s, [0, 1], [40, 0]);

                    return (
                        <div
                            key={i}
                            style={{
                                opacity,
                                transform: `translateY(${translateY}px)`,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 20,
                            }}
                        >
                            <div
                                style={{
                                    width: 56,
                                    height: 56,
                                    borderRadius: 16,
                                    background: `${primaryColor}22`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: 24,
                                    color: primaryColor,
                                    flexShrink: 0,
                                }}
                            >
                                {icons[i]}
                            </div>
                            <span
                                style={{
                                    fontFamily: '"Noto Sans JP", sans-serif',
                                    fontSize: 28,
                                    fontWeight: 500,
                                    color: '#1c1917',
                                }}
                            >
                                {feat}
                            </span>
                        </div>
                    );
                })}
            </div>
        </AbsoluteFill>
    );
}

/* ============================================================ *
 *  シーン 4: CTA  (25 – 30 s)
 * ============================================================ */
function CTAScene({
    ctaText,
    ctaContact,
    primaryColor,
}: {
    ctaText: string;
    ctaContact: string;
    primaryColor: string;
}) {
    const frame = useCurrentFrame();
    const opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' });

    return (
        <AbsoluteFill
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}cc 100%)`,
            }}
        >
            <div style={{ textAlign: 'center', opacity }}>
                <p
                    style={{
                        fontFamily: '"Noto Sans JP", sans-serif',
                        fontSize: 36,
                        fontWeight: 700,
                        color: '#fff',
                        marginBottom: 16,
                    }}
                >
                    {ctaText}
                </p>
                <p
                    style={{
                        fontFamily: '"Noto Sans JP", sans-serif',
                        fontSize: 48,
                        fontWeight: 800,
                        color: '#fff',
                        letterSpacing: 4,
                    }}
                >
                    {ctaContact}
                </p>
            </div>
        </AbsoluteFill>
    );
}

/* ============================================================ *
 *  背景画像 (Ken Burns)
 * ============================================================ */
function KenBurnsBackground({ src }: { src: string }) {
    const frame = useCurrentFrame();
    const { durationInFrames } = useVideoConfig();
    const scale = interpolate(frame, [0, durationInFrames], [1, 1.15], {
        extrapolateRight: 'clamp',
    });

    return (
        <AbsoluteFill>
            <Img
                src={src}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: `scale(${scale})`,
                    opacity: 0.15,
                }}
            />
        </AbsoluteFill>
    );
}

/* ============================================================ *
 *  メインコンポジション
 * ============================================================ */
export const SalonIntroVideo: React.FC<SalonIntroProps> = (props) => {
    const { fps } = useVideoConfig();
    const p = { ...defaultSalonIntroProps, ...props };

    return (
        <AbsoluteFill style={{ backgroundColor: '#fdf2f8' }}>
            {/* Ken Burns 背景 (任意) */}
            {p.backgroundImage && <KenBurnsBackground src={p.backgroundImage} />}

            {/* シーン1: 0-5秒 (0 – 5*fps) */}
            <Sequence from={0} durationInFrames={5 * fps}>
                <LogoScene shopName={p.shopName} primaryColor={p.primaryColor} />
            </Sequence>

            {/* シーン2: 5-12秒 */}
            <Sequence from={5 * fps} durationInFrames={7 * fps}>
                <CatchCopyScene catchCopy={p.catchCopy} primaryColor={p.primaryColor} />
            </Sequence>

            {/* シーン3: 12-25秒 */}
            <Sequence from={12 * fps} durationInFrames={13 * fps}>
                <FeaturesScene features={p.features} primaryColor={p.primaryColor} />
            </Sequence>

            {/* シーン4: 25-30秒 */}
            <Sequence from={25 * fps} durationInFrames={5 * fps}>
                <CTAScene
                    ctaText={p.ctaText}
                    ctaContact={p.ctaContact}
                    primaryColor={p.primaryColor}
                />
            </Sequence>
        </AbsoluteFill>
    );
};
