// src/flows/passkey/passkeySteps.ts
// Passkey (WebAuthn) フローのステップメタデータ（Single Source of Truth）

import type { FlowStep, FlowSteps } from '../../types';

export const PASSKEY_STEPS: FlowSteps = {
    1: {
        id: 1,
        label: 'Click Login',
        from: 'User',
        to: 'Frontend',
        description: 'ユーザーが「パスキーでログイン」ボタンをクリック',
        detail: `
ユーザーはクライアントアプリケーション上で「パスキーでログイン」ボタンをクリックします。
従来のパスワード入力ではなく、生体認証やPINによる認証フローが開始されます。
    `.trim(),
        httpMethod: null,
        endpoint: null,
        payload: null,
    },
    2: {
        id: 2,
        label: 'Authentication Begin',
        from: 'Frontend',
        to: 'Backend',
        description: 'フロントエンドがバックエンドに認証開始をリクエスト',
        detail: `
フロントエンドはバックエンドの認証開始エンドポイントにPOSTリクエストを送信します。
バックエンドはチャレンジ（ランダムな値）を生成する準備をします。
    `.trim(),
        httpMethod: 'POST',
        endpoint: '/webauthn/authenticate/begin',
        payload: {
            username: 'user@example.com',
        },
    },
    3: {
        id: 3,
        label: 'Challenge Options',
        from: 'Backend',
        to: 'Frontend',
        description: 'バックエンドがチャレンジとオプションを返却',
        detail: `
バックエンドは PublicKeyCredentialRequestOptions を生成して返します。
これには以下が含まれます：
- challenge: ランダムなバイト列（リプレイ攻撃防止）
- rpId: Relying Party ID（ドメイン）
- allowCredentials: 使用可能なクレデンシャルのリスト
- timeout: タイムアウト時間
- userVerification: ユーザー検証の要件
    `.trim(),
        httpMethod: null,
        endpoint: null,
        payload: {
            challenge: 'base64url-encoded-random-bytes',
            rpId: 'example.com',
            allowCredentials: [
                {
                    type: 'public-key',
                    id: 'credential-id-base64url',
                },
            ],
            timeout: 60000,
            userVerification: 'preferred',
        },
    },
    4: {
        id: 4,
        label: 'credentials.get()',
        from: 'Frontend',
        to: 'Authenticator',
        description: 'WebAuthn API を呼び出してAuthenticatorにアクセス',
        detail: `
フロントエンドは navigator.credentials.get() を呼び出します。
ブラウザはこのリクエストをAuthenticator（指紋センサー、Face ID、
セキュリティキーなど）に転送します。

const credential = await navigator.credentials.get({
  publicKey: options
});
    `.trim(),
        httpMethod: null,
        endpoint: null,
        payload: null,
    },
    5: {
        id: 5,
        label: 'Biometric / PIN Request',
        from: 'Authenticator',
        to: 'User',
        description: 'Authenticatorがユーザーに生体認証またはPINを要求',
        detail: `
Authenticatorはユーザーに認証を要求します：
- 指紋認証
- 顔認証（Face ID など）
- PIN入力
- セキュリティキーのタップ

この操作により、Authenticator内の秘密鍵へのアクセスが許可されます。
    `.trim(),
        httpMethod: null,
        endpoint: null,
        payload: null,
    },
    6: {
        id: 6,
        label: 'Authentication OK',
        from: 'User',
        to: 'Authenticator',
        description: 'ユーザーが生体認証またはPINで認証',
        detail: `
ユーザーが正常に認証されると、Authenticatorは：
1. 登録時に保存した秘密鍵を取り出す
2. チャレンジに対して秘密鍵で署名を生成
3. signCount（署名カウンタ）をインクリメント
    `.trim(),
        httpMethod: null,
        endpoint: null,
        payload: null,
    },
    7: {
        id: 7,
        label: 'Assertion',
        from: 'Authenticator',
        to: 'Frontend',
        description: 'Authenticatorが署名付きAssertionを返却',
        detail: `
AuthenticatorはAssertion（認証アサーション）を生成して返します：
- authenticatorData: rpIdHash, flags, signCount
- clientDataJSON: チャレンジ、オリジン、タイプ
- signature: 秘密鍵による署名
- userHandle: ユーザーID（オプション）

これらはすべてバイナリ形式（ArrayBuffer）で返されます。
    `.trim(),
        httpMethod: null,
        endpoint: null,
        payload: {
            id: 'credential-id-base64url',
            rawId: 'ArrayBuffer',
            response: {
                authenticatorData: 'ArrayBuffer',
                clientDataJSON: 'ArrayBuffer',
                signature: 'ArrayBuffer',
                userHandle: 'ArrayBuffer or null',
            },
            type: 'public-key',
        },
    },
    8: {
        id: 8,
        label: 'Authentication Complete',
        from: 'Frontend',
        to: 'Backend',
        description: 'フロントエンドがAssertionをバックエンドに送信',
        detail: `
フロントエンドはAuthenticatorから受け取ったAssertionを
Base64URLエンコードしてバックエンドに送信します。

バックエンドは受け取ったデータを検証する準備をします。
    `.trim(),
        httpMethod: 'POST',
        endpoint: '/webauthn/authenticate/complete',
        payload: {
            id: 'credential-id-base64url',
            rawId: 'credential-id-base64url',
            response: {
                authenticatorData: 'base64url-encoded',
                clientDataJSON: 'base64url-encoded',
                signature: 'base64url-encoded',
                userHandle: 'base64url-encoded',
            },
            type: 'public-key',
        },
    },
    9: {
        id: 9,
        label: 'Verify Challenge',
        from: 'Backend',
        to: 'Backend',
        description: 'バックエンドがチャレンジを検証',
        detail: `
バックエンドは以下を検証します：
1. clientDataJSON内のチャレンジが発行したものと一致するか
2. originが期待値と一致するか
3. typeが "webauthn.get" か
4. rpIdHash が正しいか
    `.trim(),
        httpMethod: null,
        endpoint: null,
        payload: null,
    },
    10: {
        id: 10,
        label: 'Verify Signature',
        from: 'Backend',
        to: 'Backend',
        description: 'バックエンドが署名を公開鍵で検証',
        detail: `
バックエンドは登録時に保存した公開鍵を使用して署名を検証します：

1. DBからcredentialIdに対応する公開鍵を取得
2. authenticatorData + clientDataHash に対して
   公開鍵で署名を検証
3. 署名が正しければ、認証成功

これにより、秘密鍵の所有者であることが暗号学的に証明されます。
    `.trim(),
        httpMethod: null,
        endpoint: null,
        payload: null,
    },
    11: {
        id: 11,
        label: 'Check signCount',
        from: 'Backend',
        to: 'Backend',
        description: 'signCount（署名カウンタ）をチェック',
        detail: `
バックエンドはsignCount（署名カウンタ）を検証します：

1. 受信したsignCountがDBに保存されている値より大きいか確認
2. もし小さい/同じ場合、Authenticatorのクローンの可能性
3. 検証成功後、新しいsignCountをDBに保存

signCountはAuthenticatorのクローン検出に使用されます。
    `.trim(),
        httpMethod: null,
        endpoint: null,
        payload: null,
    },
    12: {
        id: 12,
        label: 'Session Token',
        from: 'Backend',
        to: 'Frontend',
        description: 'バックエンドがセッショントークンを発行',
        detail: `
すべての検証に成功すると、バックエンドは：
1. ユーザーのセッションを作成
2. JWT または セッションIDを生成
3. フロントエンドにトークンを返却

これでパスワードレス認証が完了します。
    `.trim(),
        httpMethod: null,
        endpoint: null,
        payload: {
            success: true,
            token: 'eyJhbGciOiJIUzI1NiIs...',
            user: {
                id: 'user-id',
                email: 'user@example.com',
            },
        },
    },
    13: {
        id: 13,
        label: 'Authenticated',
        from: 'Frontend',
        to: 'User',
        description: 'フロントエンドが認証完了をユーザーに通知',
        detail: `
フロントエンドは：
1. 受け取ったトークンをセキュアに保存
2. 認証状態を更新
3. ユーザーに認証成功を通知
4. ダッシュボードなどの保護されたページにリダイレクト
    `.trim(),
        httpMethod: null,
        endpoint: null,
        payload: null,
    },
    14: {
        id: 14,
        label: 'Login Complete',
        from: 'User',
        to: 'Frontend',
        description: 'ユーザーがログイン状態でアプリを利用開始',
        detail: `
パスキー認証フローが完了しました。

ユーザーは：
- パスワードを入力せずにログイン
- 生体認証による高いセキュリティ
- フィッシング耐性のある認証

を体験できます。
    `.trim(),
        httpMethod: null,
        endpoint: null,
        payload: null,
    },
};

// ステップIDの配列（順序保証）
export const PASSKEY_STEP_ORDER: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
];

// ステップラベル一覧（StepIndicator用）
export const PASSKEY_STEP_LABELS: string[] = PASSKEY_STEP_ORDER.map(
    (id) => (PASSKEY_STEPS[id] as FlowStep).label
);
