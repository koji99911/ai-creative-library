/**
 * SNSショート動画（15秒、9:16 縦型）
 * Remotion テンプレート
 *
 * 構成:
 *  0-3秒:   アテンション（キャッチ + 背景フラッシュ）
 *  3-10秒:  メイン情報（テキスト + アイコン）
 *  10-15秒: CTA（フォロー・予約誘導）
 */

import {
    AbsoluteFill,
    Sequence,
    useCurrentFrame,
    useVideoConfig,
    interpolate,
    spring,
} from 'remotion';

export interface SNSShortProps {
    hookText: string;
    mainText: string;
    subText: string;
    ctaText: string;
    accountHandle: string;
    primaryColor: string;
    backgroundColor: string;
}

export const defaultSNSShortProps: SNSShortProps = {
    hookText: '🔥 期間限定！',
    mainText: 'カット + カラー\n¥8,800',
    subText: '通常 ¥12,000 → 今だけ特別価格',
    ctaText: 'プロフィールから予約 →',
    accountHandle: '@bloom_beauty_salon',
    primaryColor: '#ec4899',
    backgroundColor: '#1c1917',
};

/* ---- シーン 1: アテンションフック ---- */
function HookScene({ hookText, primaryColor }: { hookText: string; primaryColor: string }) {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // パルスエフェクト
    const pulse = Math.sin(frame * 0.3) * 0.05 + 1;
    const s = spring({ frame, fps, config: { damping: 8, stiffness: 200 } });
    const scale = interpolate(s, [0, 1], [0.3, 1]) * pulse;
    const opacity = interpolate(s, [0, 1], [0, 1]);

    // 背景グラデーション回転
    const angle = interpolate(frame, [0, 90], [0, 360], { extrapolateRight: 'clamp' });

    return (
        <AbsoluteFill style={{
            justifyContent: 'center', alignItems: 'center',
            background: `conic-gradient(from ${angle}deg, ${primaryColor}, ${primaryColor}88, ${primaryColor})`,
        }}>
            <div style={{ opacity, transform: `scale(${scale})`, textAlign: 'center' }}>
                <p style={{
                    fontFamily: '"Noto Sans JP"', fontSize: 64, fontWeight: 900,
                    color: '#fff', textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                }}>
                    {hookText}
                </p>
            </div>
        </AbsoluteFill>
    );
}

/* ---- シーン 2: メイン情報 ---- */
function MainScene({ mainText, subText, primaryColor, backgroundColor }: {
    mainText: string; subText: string; primaryColor: string; backgroundColor: string;
}) {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    const s = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
    const y = interpolate(s, [0, 1], [100, 0]);
    const opacity = interpolate(s, [0, 1], [0, 1]);

    // サブテキストは少し遅れて登場
    const s2 = spring({ frame: frame - 10, fps, config: { damping: 14 } });
    const subOpacity = interpolate(s2, [0, 1], [0, 1]);

    return (
        <AbsoluteFill style={{
            justifyContent: 'center', alignItems: 'center', padding: 40,
            background: backgroundColor,
        }}>
            <div style={{ textAlign: 'center' }}>
                <p style={{
                    fontFamily: '"Noto Sans JP"', fontSize: 52, fontWeight: 900,
                    color: '#fff', lineHeight: 1.4, opacity,
                    transform: `translateY(${y}px)`, whiteSpace: 'pre-line',
                }}>
                    {mainText}
                </p>
                <div style={{
                    width: 50, height: 3, background: primaryColor,
                    margin: '20px auto', borderRadius: 2,
                    opacity: subOpacity,
                }} />
                <p style={{
                    fontFamily: '"Noto Sans JP"', fontSize: 22, fontWeight: 500,
                    color: '#a8a29e', opacity: subOpacity,
                }}>
                    {subText}
                </p>
            </div>
        </AbsoluteFill>
    );
}

/* ---- シーン 3: CTA ---- */
function CTAScene({ ctaText, accountHandle, primaryColor, backgroundColor }: {
    ctaText: string; accountHandle: string; primaryColor: string; backgroundColor: string;
}) {
    const frame = useCurrentFrame();
    const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' });

    // 矢印の揺れアニメ
    const arrowBounce = Math.sin(frame * 0.4) * 5;

    return (
        <AbsoluteFill style={{
            justifyContent: 'center', alignItems: 'center', padding: 40,
            background: backgroundColor,
        }}>
            <div style={{ opacity, textAlign: 'center' }}>
                <p style={{
                    fontFamily: '"Noto Sans JP"', fontSize: 28, fontWeight: 700,
                    color: primaryColor, marginBottom: 24,
                    transform: `translateX(${arrowBounce}px)`,
                }}>
                    {ctaText}
                </p>
                <div style={{
                    display: 'inline-block', padding: '14px 36px', borderRadius: 40,
                    border: `2px solid ${primaryColor}`,
                }}>
                    <p style={{
                        fontFamily: '"Noto Sans JP"', fontSize: 24, fontWeight: 600,
                        color: '#fff',
                    }}>
                        {accountHandle}
                    </p>
                </div>
            </div>
        </AbsoluteFill>
    );
}

/* ---- メインコンポジション ---- */
export const SNSShortVideo: React.FC<SNSShortProps> = (props) => {
    const { fps } = useVideoConfig();
    const p = { ...defaultSNSShortProps, ...props };

    return (
        <AbsoluteFill style={{ backgroundColor: p.backgroundColor }}>
            <Sequence from={0} durationInFrames={3 * fps}>
                <HookScene hookText={p.hookText} primaryColor={p.primaryColor} />
            </Sequence>
            <Sequence from={3 * fps} durationInFrames={7 * fps}>
                <MainScene mainText={p.mainText} subText={p.subText} primaryColor={p.primaryColor} backgroundColor={p.backgroundColor} />
            </Sequence>
            <Sequence from={10 * fps} durationInFrames={5 * fps}>
                <CTAScene ctaText={p.ctaText} accountHandle={p.accountHandle} primaryColor={p.primaryColor} backgroundColor={p.backgroundColor} />
            </Sequence>
        </AbsoluteFill>
    );
};
