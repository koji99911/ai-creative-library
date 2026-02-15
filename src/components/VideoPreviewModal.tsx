/**
 * 動画プレビューモーダル
 * Remotion Player でテンプレート動画をブラウザプレビュー再生
 */

import { Player } from '@remotion/player';
import { SalonIntroVideo, defaultSalonIntroProps } from '../remotion/templates/SalonIntroVideo';
import { ProductPromoVideo, defaultProductPromoProps } from '../remotion/templates/ProductPromoVideo';
import { SNSShortVideo, defaultSNSShortProps } from '../remotion/templates/SNSShortVideo';
import { BeforeAfterVideo, defaultBeforeAfterProps } from '../remotion/templates/BeforeAfterVideo';
import type { GalleryItem } from '../data/galleryData';

interface VideoPreviewModalProps {
    item: GalleryItem;
    onClose: () => void;
}

/** テンプレートIDからRemotionコンポーネントとpropsを解決 */
function resolveTemplate(itemId: string) {
    switch (itemId) {
        case 'vid-001':
            return {
                component: SalonIntroVideo,
                props: defaultSalonIntroProps,
                durationInFrames: 30 * 30,
                fps: 30,
                width: 1080,
                height: 1080,
            };
        case 'vid-002':
            return {
                component: ProductPromoVideo,
                props: defaultProductPromoProps,
                durationInFrames: 45 * 30,
                fps: 30,
                width: 1080,
                height: 1080,
            };
        case 'vid-003':
            return {
                component: SNSShortVideo,
                props: defaultSNSShortProps,
                durationInFrames: 15 * 30,
                fps: 30,
                width: 1080,
                height: 1920,
            };
        case 'vid-004':
            return {
                component: BeforeAfterVideo,
                props: defaultBeforeAfterProps,
                durationInFrames: 30 * 30,
                fps: 30,
                width: 1080,
                height: 1080,
            };
        default:
            return null;
    }
}

export default function VideoPreviewModal({ item, onClose }: VideoPreviewModalProps) {
    const template = resolveTemplate(item.id);

    // SNSショートは縦型プレビュー
    const isVertical = template && template.height > template.width;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/60 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className={`relative bg-white rounded-2xl shadow-2xl mx-4 overflow-hidden ${isVertical ? 'max-w-sm w-full' : 'max-w-2xl w-full'}`}
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

                {/* プレビューエリア */}
                <div className="p-4">
                    {template ? (
                        <div className={`bg-stone-100 rounded-lg overflow-hidden ${isVertical ? 'aspect-[9/16]' : 'aspect-square'}`}>
                            <Player
                                component={template.component}
                                inputProps={template.props}
                                durationInFrames={template.durationInFrames}
                                fps={template.fps}
                                compositionWidth={template.width}
                                compositionHeight={template.height}
                                style={{ width: '100%', height: '100%' }}
                                controls
                                autoPlay
                            />
                        </div>
                    ) : (
                        <div className="aspect-video bg-stone-100 rounded-lg flex items-center justify-center">
                            <div className="text-center text-stone-400">
                                <svg className="w-16 h-16 mx-auto mb-3 text-stone-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                <p className="text-sm">このテンプレートのプレビューは準備中です</p>
                                <p className="text-xs mt-1 text-stone-300">Remotion テンプレートを追加予定</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* フッター情報 */}
                <div className="px-4 pb-4">
                    <p className="text-sm text-stone-500 mb-3">{item.description}</p>
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
            </div>
        </div>
    );
}
