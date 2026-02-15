/**
 * Remotion ルートコンポーネント
 * registerRoot() で使用 / Remotion Studio & CLI 用
 */

import { Composition } from 'remotion';
import { SalonIntroVideo, defaultSalonIntroProps } from './templates/SalonIntroVideo';

export const RemotionRoot: React.FC = () => {
    return (
        <>
            <Composition
                id="SalonIntro"
                component={SalonIntroVideo}
                durationInFrames={30 * 30}
                fps={30}
                width={1080}
                height={1080}
                defaultProps={defaultSalonIntroProps}
            />
        </>
    );
};
