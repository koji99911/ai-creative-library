/**
 * Remotion ルートコンポーネント
 * registerRoot() で使用 / Remotion Studio & CLI 用
 */

import { Composition } from 'remotion';
import { SalonIntroVideo, defaultSalonIntroProps } from './templates/SalonIntroVideo';
import { ProductPromoVideo, defaultProductPromoProps } from './templates/ProductPromoVideo';
import { SNSShortVideo, defaultSNSShortProps } from './templates/SNSShortVideo';
import { BeforeAfterVideo, defaultBeforeAfterProps } from './templates/BeforeAfterVideo';

export const RemotionRoot: React.FC = () => {
    return (
        <>
            {/* 美容サロン紹介 30秒 1080x1080 */}
            <Composition
                id="SalonIntro"
                component={SalonIntroVideo}
                durationInFrames={30 * 30}
                fps={30}
                width={1080}
                height={1080}
                defaultProps={defaultSalonIntroProps}
            />

            {/* 商品プロモーション 45秒 1080x1080 */}
            <Composition
                id="ProductPromo"
                component={ProductPromoVideo}
                durationInFrames={45 * 30}
                fps={30}
                width={1080}
                height={1080}
                defaultProps={defaultProductPromoProps}
            />

            {/* SNSショート 15秒 1080x1920 (9:16) */}
            <Composition
                id="SNSShort"
                component={SNSShortVideo}
                durationInFrames={15 * 30}
                fps={30}
                width={1080}
                height={1920}
                defaultProps={defaultSNSShortProps}
            />

            {/* ビフォーアフター 30秒 1080x1080 */}
            <Composition
                id="BeforeAfter"
                component={BeforeAfterVideo}
                durationInFrames={30 * 30}
                fps={30}
                width={1080}
                height={1080}
                defaultProps={defaultBeforeAfterProps}
            />
        </>
    );
};
