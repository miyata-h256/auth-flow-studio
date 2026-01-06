// src/flows/magic/magicSteps.ts
// Magic Link Login フローのステップメタデータ（Single Source of Truth）

import type { FlowStep, FlowSteps } from '../../types';

export const MAGIC_STEPS: FlowSteps = {
    1: {
        id: 1,
        label: 'Email Input',
        from: 'User',
        to: 'Frontend',
        description: 'ユーザーがメールアドレスを入力して送信',
        detail: `
ユーザーはログイン画面でメールアドレスを入力し、
「マジックリンクを送信」ボタンをクリックします。

パスワードは不要で、メールアドレスのみで認証を開始します。
    `.trim(),
        httpMethod: null,
        endpoint: null,
        payload: null,
    },
    2: {
        id: 2,
        label: 'Magic Link Request',
        from: 'Frontend',
        to: 'Auth API',
        description: 'フロントエンドがAPIにマジックリンクを要求',
        detail: `
フロントエンドはバックエンドのAPIに対して、
マジックリンクの発行をリクエストします。

メールアドレスがリクエストボディに含まれます。
    `.trim(),
        httpMethod: 'POST',
        endpoint: '/auth/magic-link/request',
        payload: {
            email: 'user@example.com',
        },
    },
    3: {
        id: 3,
        label: 'User Lookup',
        from: 'Auth API',
        to: 'User DB',
        description: 'APIがユーザーDBでメールアドレスを検索',
        detail: `
Auth APIはUser DBに対して、
入力されたメールアドレスでユーザーを検索します。

存在しない場合は新規ユーザーとして作成することもあります。
    `.trim(),
        httpMethod: null,
        endpoint: null,
        payload: {
            query: "SELECT * FROM users WHERE email = 'user@example.com'",
        },
    },
    4: {
        id: 4,
        label: 'User Response',
        from: 'User DB',
        to: 'Auth API',
        description: 'DBがユーザー情報またはステータスを返却',
        detail: `
User DBはユーザー検索の結果を返します：
- 既存ユーザー: userId、ステータスなど
- 新規ユーザー: 作成されたユーザーのID
- エラー: ユーザーが見つからない（設定による）
    `.trim(),
        httpMethod: null,
        endpoint: null,
        payload: {
            userId: 'user-123',
            email: 'user@example.com',
            status: 'active',
            created_at: '2024-01-01T00:00:00Z',
        },
    },
    5: {
        id: 5,
        label: 'Create Token',
        from: 'Auth API',
        to: 'Token Store',
        description: 'APIがワンタイムトークンを生成して保存',
        detail: `
Auth APIは以下を行います：
1. セキュアなランダムトークン（32バイト以上）を生成
2. トークンのハッシュ値を計算
3. Token Store（DB/Redis）にハッシュ値を保存
4. 有効期限を設定（通常15分〜1時間）

元のトークンはメールリンクに含まれます。
    `.trim(),
        httpMethod: null,
        endpoint: null,
        payload: {
            token: 'secure-random-token-abc123...',
            hash: 'sha256-hash-of-token',
            userId: 'user-123',
            expiresAt: '2024-01-01T00:15:00Z',
        },
    },
    6: {
        id: 6,
        label: 'Token ID Response',
        from: 'Token Store',
        to: 'Auth API',
        description: 'Token StoreがトークンIDを返却',
        detail: `
Token Storeはトークンレコードの保存に成功し、
トークンIDまたは確認を返します。

これにより、後でトークン検証時にレコードを
特定できるようになります。
    `.trim(),
        httpMethod: null,
        endpoint: null,
        payload: {
            tokenId: 'token-record-id-456',
            success: true,
        },
    },
    7: {
        id: 7,
        label: 'Send Email',
        from: 'Auth API',
        to: 'Email Service',
        description: 'APIがメールサービスにマジックリンクを送信依頼',
        detail: `
Auth APIはEmail Service（SMTP/SES/SendGrid等）に
マジックリンクを含むメールの送信を依頼します。

リンクには以下が含まれます：
- rid（ランダムID）
- token（ワンタイムトークン）
- 有効期限情報
    `.trim(),
        httpMethod: 'POST',
        endpoint: '/send',
        payload: {
            to: 'user@example.com',
            subject: 'ログインリンク',
            body: 'https://app.example.com/magic/callback?rid=xxx&token=yyy',
        },
    },
    8: {
        id: 8,
        label: 'Email Accepted',
        from: 'Email Service',
        to: 'Auth API',
        description: 'メールサービスが送信受付を返却',
        detail: `
Email Serviceはメール送信リクエストを受け付け、
処理キューに追加したことを確認します。

実際の配信は非同期で行われます。
    `.trim(),
        httpMethod: null,
        endpoint: null,
        payload: {
            messageId: 'msg-789',
            status: 'queued',
        },
    },
    9: {
        id: 9,
        label: 'API Response',
        from: 'Auth API',
        to: 'Frontend',
        description: 'APIがフロントエンドに成功レスポンスを返却',
        detail: `
Auth APIはフロントエンドに対して、
マジックリンクの送信が開始されたことを通知します。

セキュリティ上、メールの存在有無は明かしません。
    `.trim(),
        httpMethod: null,
        endpoint: null,
        payload: {
            success: true,
            message: 'メールアドレスが登録されている場合、リンクを送信しました',
        },
    },
    10: {
        id: 10,
        label: 'Check Email',
        from: 'Frontend',
        to: 'User',
        description: 'フロントエンドがユーザーにメール確認を案内',
        detail: `
フロントエンドはユーザーに対して、
メールを確認するよう案内画面を表示します。

「メールを確認してください」
「リンクの有効期限は15分です」
などのメッセージが表示されます。
    `.trim(),
        httpMethod: null,
        endpoint: null,
        payload: null,
    },
    11: {
        id: 11,
        label: 'Open Email',
        from: 'User',
        to: 'Email Service',
        description: 'ユーザーがメールを開く',
        detail: `
ユーザーはメールクライアント（Gmail、Outlook等）で
Auth APIから送信されたマジックリンクメールを開きます。

メール本文には認証用のリンクが含まれています。
    `.trim(),
        httpMethod: null,
        endpoint: null,
        payload: null,
    },
    12: {
        id: 12,
        label: 'Click Link',
        from: 'User',
        to: 'Frontend',
        description: 'ユーザーがマジックリンクをクリック',
        detail: `
ユーザーがメール内のマジックリンクをクリックすると、
ブラウザがアプリケーションのコールバックURLを開きます。

URL例:
https://app.example.com/magic/callback?rid=xxx&token=yyy
    `.trim(),
        httpMethod: 'GET',
        endpoint: '/magic/callback',
        payload: {
            rid: 'random-id-xxx',
            token: 'one-time-token-yyy',
        },
    },
    13: {
        id: 13,
        label: 'Verify Request',
        from: 'Frontend',
        to: 'Auth API',
        description: 'フロントエンドがAPIにトークン検証をリクエスト',
        detail: `
フロントエンドはURLパラメータからridとtokenを取得し、
Auth APIにトークンの検証をリクエストします。
    `.trim(),
        httpMethod: 'POST',
        endpoint: '/auth/magic-link/verify',
        payload: {
            rid: 'random-id-xxx',
            token: 'one-time-token-yyy',
        },
    },
    14: {
        id: 14,
        label: 'Lookup Token',
        from: 'Auth API',
        to: 'Token Store',
        description: 'APIがToken Storeでトークンを検索',
        detail: `
Auth APIはToken Store（DB/Redis）に対して、
ridをキーにトークンレコードを検索します。
    `.trim(),
        httpMethod: null,
        endpoint: null,
        payload: {
            query: "SELECT * FROM magic_tokens WHERE rid = 'xxx'",
        },
    },
    15: {
        id: 15,
        label: 'Token Record',
        from: 'Token Store',
        to: 'Auth API',
        description: 'Token Storeがトークンレコードを返却',
        detail: `
Token Storeはトークンレコードを返します：
- tokenHash: 保存されたトークンのハッシュ値
- userId: 関連するユーザーID
- expiresAt: 有効期限
- used: 使用済みフラグ
    `.trim(),
        httpMethod: null,
        endpoint: null,
        payload: {
            tokenHash: 'sha256-hash-of-token',
            userId: 'user-123',
            expiresAt: '2024-01-01T00:15:00Z',
            used: false,
        },
    },
    16: {
        id: 16,
        label: 'Validate Token',
        from: 'Auth API',
        to: 'Auth API',
        description: 'APIがトークンを検証（ハッシュ比較、有効期限確認）',
        detail: `
Auth APIは以下の検証を行います：
1. 受信したtokenのハッシュを計算
2. 保存されているtokenHashと比較
3. 有効期限が切れていないか確認
4. 使用済みでないか確認
5. 検証成功後、トークンを使用済みにマーク

すべてパスすればセッションを発行します。
    `.trim(),
        httpMethod: null,
        endpoint: null,
        payload: null,
    },
    17: {
        id: 17,
        label: 'Login Complete',
        from: 'Auth API',
        to: 'Frontend',
        description: 'APIがセッショントークンを発行してログイン完了',
        detail: `
検証成功後、Auth APIは：
1. ユーザーのセッションを作成
2. JWTまたはセッションIDを発行
3. フロントエンドにトークンを返却
4. フロントエンドはユーザーをダッシュボードにリダイレクト

マジックリンク認証が完了しました。
    `.trim(),
        httpMethod: null,
        endpoint: null,
        payload: {
            success: true,
            token: 'eyJhbGciOiJIUzI1NiIs...',
            user: {
                id: 'user-123',
                email: 'user@example.com',
            },
        },
    },
};

// ステップIDの配列（順序保証）
export const MAGIC_STEP_ORDER: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
];

// ステップラベル一覧（StepIndicator用）
export const MAGIC_STEP_LABELS: string[] = MAGIC_STEP_ORDER.map(
    (id) => (MAGIC_STEPS[id] as FlowStep).label
);
