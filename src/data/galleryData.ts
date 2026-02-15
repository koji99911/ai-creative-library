/**
 * ギャラリーデータの型定義とサンプルデータ
 * 画像・動画テンプレートの情報を管理する
 */

/** ギャラリーアイテムのカテゴリ */
export type GalleryCategory =
    | 'beauty'    // 美容
    | 'food'      // 飲食
    | 'business'  // ビジネス
    | 'info'      // インフォグラフィック
    | 'bousai'    // 防災
    | 'lp'        // LP制作
    | 'fitness'   // フィットネス
    | 'promo'     // プロモーション（動画）
    | 'product'   // 商品紹介（動画）
    | 'campaign'; // キャンペーン（動画）

/** ギャラリーアイテムの型 */
export type GalleryItemType = 'image' | 'video' | 'lp';

/** カスタマイズ可能な要素 */
export type CustomizableElement = 'テキスト' | '画像' | '色' | 'ロゴ' | 'BGM' | 'ナレーション' | 'アニメーション';

/** ギャラリーアイテム */
export interface GalleryItem {
    /** 一意のID */
    id: string;
    /** 日本語タイトル */
    title: string;
    /** 日本語の説明文 */
    description: string;
    /** カテゴリ */
    category: GalleryCategory;
    /** タグの配列 */
    tags: string[];
    /** 画像パス（サムネイル） */
    imagePath: string;
    /** アイテム種別 */
    type: GalleryItemType;
    /** 動画の場合の秒数 */
    duration?: number;
    /** カスタマイズ可能な要素の配列 */
    customizable: CustomizableElement[];
}

/** カテゴリ表示名マッピング */
export const categoryLabels: Record<GalleryCategory, string> = {
    beauty: '美容',
    food: '飲食',
    business: 'ビジネス',
    info: 'インフォグラフィック',
    bousai: '防災',
    lp: 'LP制作',
    fitness: 'フィットネス',
    promo: 'プロモーション',
    product: '商品紹介',
    campaign: 'キャンペーン',
};

/**
 * publicディレクトリ内のアセットパスにViteのベースURLを付与する
 * ローカル開発時は '/'、GitHub Pages時は '/ai-creative-library/' が自動適用される
 */
function assetPath(path: string): string {
    const base = import.meta.env.BASE_URL;
    // baseは末尾に'/'を含み、pathは先頭に'/'を含むので重複を除去
    return `${base}${path.startsWith('/') ? path.slice(1) : path}`;
}

// ==========================================================
// 画像データ
// ==========================================================

export const imageItems: GalleryItem[] = [
    {
        id: 'img-001',
        title: '美容サロン春キャンペーン',
        description:
            'パステルピンクと桜モチーフの春限定キャンペーン用SNS投稿テンプレート。Instagram・X対応の正方形デザイン。',
        category: 'beauty',
        tags: ['SNS投稿', '春', 'キャンペーン', 'Instagram'],
        imagePath: assetPath('/images/gallery/salon-spring-campaign.png'),
        type: 'image',
        customizable: ['テキスト', '画像', '色', 'ロゴ'],
    },
    {
        id: 'img-002',
        title: 'カフェ新メニュー告知',
        description:
            '温かみのあるカフェ風デザインの新メニュー告知テンプレート。季節限定メニューのアピールに最適。',
        category: 'food',
        tags: ['SNS投稿', 'カフェ', '新メニュー', 'Instagram'],
        imagePath: assetPath('/images/gallery/cafe-new-menu.png'),
        type: 'image',
        customizable: ['テキスト', '画像', '色', 'ロゴ'],
    },
    {
        id: 'img-003',
        title: 'ビジネス向けサービスフロー図',
        description:
            'コンサルタント・士業向けのサービス紹介インフォグラフィック。3ステップで分かりやすくサービスの流れを解説。',
        category: 'business',
        tags: ['インフォグラフィック', 'サービス紹介', 'コンサルタント'],
        imagePath: assetPath('/images/gallery/business-service-flow.png'),
        type: 'image',
        customizable: ['テキスト', '色', 'ロゴ'],
    },
    {
        id: 'img-004',
        title: 'EC商品比較チャート',
        description:
            '商品やサービスの比較を一目で伝えるインフォグラフィック。「選ばれる5つの理由」形式で顧客の意思決定をサポート。',
        category: 'info',
        tags: ['比較表', 'EC', 'インフォグラフィック'],
        imagePath: assetPath('/images/gallery/product-comparison-chart.png'),
        type: 'image',
        customizable: ['テキスト', '画像', '色'],
    },
    {
        id: 'img-005',
        title: 'セラピスト名刺デザイン',
        description:
            'ラベンダーとゴールドのエレガントな名刺テンプレート。セラピスト・エステティシャン・ヒーラー向け。',
        category: 'beauty',
        tags: ['名刺', 'セラピスト', 'エレガント'],
        imagePath: assetPath('/images/gallery/therapist-card-design.png'),
        type: 'image',
        customizable: ['テキスト', '色', 'ロゴ'],
    },
    {
        id: 'img-006',
        title: '防災備蓄チェックリスト',
        description:
            'カテゴリ分けされた備蓄品チェックリスト。自治会・町内会の配布物やSNS投稿に活用できるデザイン。',
        category: 'bousai',
        tags: ['防災', 'チェックリスト', '自治会', 'インフォグラフィック'],
        imagePath: assetPath('/images/gallery/bousai-checklist.png'),
        type: 'image',
        customizable: ['テキスト', '色', 'ロゴ'],
    },
];

// ==========================================================
// 動画データ
// ==========================================================

export const videoItems: GalleryItem[] = [
    {
        id: 'vid-001',
        title: '美容サロン紹介ムービー',
        description:
            'サロンの雰囲気やメニューを30秒で伝えるプロモーション動画テンプレート。SNSやWebサイト掲載に最適。',
        category: 'promo',
        tags: ['プロモーション', '美容サロン', 'SNS動画'],
        imagePath: assetPath('/images/gallery/salon-spring-campaign.png'),
        type: 'video',
        duration: 30,
        customizable: ['テキスト', '画像', '色', 'ロゴ', 'BGM'],
    },
    {
        id: 'vid-002',
        title: '商品プロモーション動画',
        description:
            '商品の魅力を45秒で伝えるプロモーション動画テンプレート。EC商品やハンドメイド作品の紹介に。',
        category: 'product',
        tags: ['商品紹介', 'EC', 'プロモーション'],
        imagePath: assetPath('/images/gallery/product-comparison-chart.png'),
        type: 'video',
        duration: 45,
        customizable: ['テキスト', '画像', '色', 'ロゴ', 'BGM', 'ナレーション'],
    },
    {
        id: 'vid-003',
        title: 'SNSショート動画',
        description:
            '15秒で印象を残すSNSショート動画テンプレート。Instagram Reels・TikTok・YouTubeショート対応。',
        category: 'campaign',
        tags: ['ショート動画', 'SNS', 'キャンペーン', 'Reels'],
        imagePath: assetPath('/images/gallery/cafe-new-menu.png'),
        type: 'video',
        duration: 15,
        customizable: ['テキスト', '画像', '色', 'BGM', 'アニメーション'],
    },
    {
        id: 'vid-004',
        title: 'ビフォーアフター動画',
        description:
            '施術前後の変化を30秒で魅せるビフォーアフター動画テンプレート。美容・リフォーム・クリーニング等に。',
        category: 'promo',
        tags: ['ビフォーアフター', '美容', '施術', 'プロモーション'],
        imagePath: assetPath('/images/gallery/therapist-card-design.png'),
        type: 'video',
        duration: 30,
        customizable: ['テキスト', '画像', '色', 'ロゴ', 'BGM', 'アニメーション'],
    },
];

// ==========================================================
// LPデータ
// ==========================================================

export const lpItems: GalleryItem[] = [
    {
        id: 'lp-001',
        title: '美容サロンLP',
        description:
            'ピンクとゴールドを基調とした高級感のある美容サロン向けランディングページ。予約導線・メニュー・ビフォーアフター・お客様の声セクション付き。',
        category: 'beauty',
        tags: ['LP', '美容サロン', 'ランディングページ'],
        imagePath: assetPath('/images/gallery/lp-beauty-salon.png'),
        type: 'lp',
        customizable: ['テキスト', '画像', '色', 'ロゴ'],
    },
    {
        id: 'lp-002',
        title: 'パーソナルトレーナーLP',
        description:
            'ネイビーとオレンジのスポーティなパーソナルトレーニングジム向けLP。料金プラン・トレーナー紹介・変化事例セクション付き。',
        category: 'fitness',
        tags: ['LP', 'パーソナルトレーナー', 'フィットネス'],
        imagePath: assetPath('/images/gallery/lp-personal-trainer.png'),
        type: 'lp',
        customizable: ['テキスト', '画像', '色', 'ロゴ'],
    },
    {
        id: 'lp-003',
        title: 'カフェLP',
        description:
            'ベージュとグリーンのナチュラルなカフェ向けランディングページ。季節メニュー・ストーリー・アクセス・予約セクション付き。',
        category: 'food',
        tags: ['LP', 'カフェ', '飲食店'],
        imagePath: assetPath('/images/gallery/lp-cafe.png'),
        type: 'lp',
        customizable: ['テキスト', '画像', '色', 'ロゴ'],
    },
];

// ==========================================================
// 全データ結合
// ==========================================================

/** 全ギャラリーアイテム */
export const allGalleryItems: GalleryItem[] = [...imageItems, ...videoItems, ...lpItems];
