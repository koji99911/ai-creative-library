/**
 * ビフォーアフター動画（30秒）
 * Remotion テンプレート
 *
 * 構成:
 *  0-5秒:   タイトル (施術名)
 *  5-13秒:  BEFORE ステート
 *  13-14秒: ワイプ/トランジション
 *  14-22秒: AFTER ステート
 *  22-30秒: 結果テキスト + CTA
 */

import {
    AbsoluteFill,
    Sequence,
    useCurrentFrame,
    useVideoConfig,
    interpolate,
    spring,
} from 'remotion';

export interface BeforeAfterProps {
    title: string;
    beforeLabel: string;
    afterLabel: string;
    beforeDescription: string;
    afterDescription: string;
    resultText: string;
    ctaText: string;
    primaryColor: string;
}

export const defaultBeforeAfterProps: BeforeAfterProps = {
    title: 'ヘッドスパ施術',
    beforeLabel: 'BEFORE',
    afterLabel: 'AFTER',
    beforeDescription: '頭皮の疲れ・ストレスで\nコンディションが低下',
    afterDescription: '施術後は血行促進で\nツヤと弾力が復活',
    resultText: '満足度 98% のヘッドスパ',
    ctaText: 'ご予約は DM または TEL',
    primaryColor: '#8b5cf6',
};

/* ---- シーン1: タイトル ---- */
function TitleScene({ title, primaryColor }: { title: string; primaryColor: string }) {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    const s = spring({ frame, fps, config: { damping: 14 } });
    const scale = interpolate(s, [0, 1], [0.7, 1]);
    const opacity = interpolate(s, [0, 1], [0, 1]);

    return (
        <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', background: '#fafaf9' }}>
            <div style={{ opacity, transform: `scale(${scale})`, textAlign: 'center' }}>
                <div style={{
                    width: 50, height: 3, background: primaryColor,
                    margin: '0 auto 20px', borderRadius: 2,
                }} />
                <h1 style={{
                    fontFamily: '"Noto Serif JP"', fontSize: 48, fontWeight: 700,
                    color: '#1c1917',
                }}>
                    {title}
                </h1>
                <div style={{
                    width: 50, height: 3, background: primaryColor,
                    margin: '20px auto 0', borderRadius: 2,
                }} />
            </div>
        </AbsoluteFill>
    );
}

/* ---- シーン2/4: Before/After カード ---- */
function StateScene({ label, description, color, isAfter }: {
    label: string; description: string; color: string; isAfter: boolean;
}) {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    const s = spring({ frame, fps, config: { damping: 12, stiffness: 80 } });
    const x = interpolate(s, [0, 1], [isAfter ? 200 : -200, 0]);
    const opacity = interpolate(s, [0, 1], [0, 1]);

    return (
        <AbsoluteFill style={{
            justifyContent: 'center', alignItems: 'center',
            background: isAfter ? '#ecfdf5' : '#fef2f2',
        }}>
            <div style={{ opacity, transform: `translateX(${x}px)`, textAlign: 'center' }}>
                <span style={{
                    fontFamily: '"Noto Sans JP"', fontSize: 22, fontWeight: 800,
                    color, letterSpacing: 6,
                    display: 'inline-block', padding: '8px 28px',
                    border: `3px solid ${color}`, borderRadius: 8,
                    marginBottom: 24,
                }}>
                    {label}
                </span>
                <p style={{
                    fontFamily: '"Noto Sans JP"', fontSize: 32, fontWeight: 600,
                    color: '#1c1917', lineHeight: 1.6, whiteSpace: 'pre-line',
                    marginTop: 24,
                }}>
                    {description}
                </p>
            </div>
        </AbsoluteFill>
    );
}

/* ---- シーン3: ワイプトランジション ---- */
function WipeTransition({ primaryColor }: { primaryColor: string }) {
    const frame = useCurrentFrame();
    const { width: W } = useVideoConfig();
    const progress = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: 'clamp' });

    return (
        <AbsoluteFill>
            <div style={{
                position: 'absolute', top: 0, left: 0, bottom: 0,
                width: `${progress * 100}%`,
                background: `linear-gradient(90deg, ${primaryColor}, ${primaryColor}cc)`,
            }} />
            {progress > 0.4 && progress < 0.8 && (
                <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <p style={{
                        fontFamily: '"Noto Sans JP"', fontSize: 40, fontWeight: 900,
                        color: '#fff', letterSpacing: 8,
                    }}>
                        ▶
                    </p>
                </AbsoluteFill>
            )}
        </AbsoluteFill>
    );
}

/* ---- シーン5: 結果 + CTA ---- */
function ResultScene({ resultText, ctaText, primaryColor }: {
    resultText: string; ctaText: string; primaryColor: string;
}) {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    const s = spring({ frame, fps, config: { damping: 14 } });
    const opacity = interpolate(s, [0, 1], [0, 1]);
    const scale = interpolate(s, [0, 1], [0.9, 1]);

    const s2 = spring({ frame: frame - 20, fps, config: { damping: 14 } });
    const ctaOpacity = interpolate(s2, [0, 1], [0, 1]);

    return (
        <AbsoluteFill style={{
            justifyContent: 'center', alignItems: 'center',
            background: `linear-gradient(180deg, ${primaryColor}22, ${primaryColor}44)`,
        }}>
            <div style={{ textAlign: 'center' }}>
                <p style={{
                    fontFamily: '"Noto Serif JP"', fontSize: 40, fontWeight: 700,
                    color: '#1c1917', opacity, transform: `scale(${scale})`,
                    marginBottom: 32,
                }}>
                    {resultText}
                </p>
                <div style={{
                    opacity: ctaOpacity, display: 'inline-block',
                    padding: '14px 40px', borderRadius: 40,
                    background: primaryColor, color: '#fff',
                    fontFamily: '"Noto Sans JP"', fontSize: 22, fontWeight: 700,
                }}>
                    {ctaText}
                </div>
            </div>
        </AbsoluteFill>
    );
}

/* ---- メインコンポジション ---- */
export const BeforeAfterVideo: React.FC<BeforeAfterProps> = (props) => {
    const { fps } = useVideoConfig();
    const p = { ...defaultBeforeAfterProps, ...props };

    return (
        <AbsoluteFill style={{ backgroundColor: '#fafaf9' }}>
            {/* 0-5s: タイトル */}
            <Sequence from={0} durationInFrames={5 * fps}>
                <TitleScene title={p.title} primaryColor={p.primaryColor} />
            </Sequence>

            {/* 5-13s: Before */}
            <Sequence from={5 * fps} durationInFrames={8 * fps}>
                <StateScene label={p.beforeLabel} description={p.beforeDescription} color="#ef4444" isAfter={false} />
            </Sequence>

            {/* 13-14s: ワイプ */}
            <Sequence from={13 * fps} durationInFrames={1 * fps}>
                <WipeTransition primaryColor={p.primaryColor} />
            </Sequence>

            {/* 14-22s: After */}
            <Sequence from={14 * fps} durationInFrames={8 * fps}>
                <StateScene label={p.afterLabel} description={p.afterDescription} color="#10b981" isAfter={true} />
            </Sequence>

            {/* 22-30s: 結果 + CTA */}
            <Sequence from={22 * fps} durationInFrames={8 * fps}>
                <ResultScene resultText={p.resultText} ctaText={p.ctaText} primaryColor={p.primaryColor} />
            </Sequence>
        </AbsoluteFill>
    );
};
