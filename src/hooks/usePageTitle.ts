import { useEffect } from 'react';

/**
 * ページごとのタイトルを動的に設定するカスタムフック
 * SEO対策: 各ページに固有のtitleを付与
 */
export function usePageTitle(title: string) {
    useEffect(() => {
        document.title = title;
    }, [title]);
}
