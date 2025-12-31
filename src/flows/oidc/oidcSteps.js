// src/flows/oidc/oidcSteps.js
// OIDC フローのステップメタデータ（Single Source of Truth）

export const OIDC_STEPS = {
  1: {
    id: 1,
    label: 'Click OIDC Login',
    from: 'User',
    to: 'Client',
    description:
      'ユーザーがクライアントアプリの「OIDCログイン」ボタンをクリック',
    detail: `
ユーザーはクライアントアプリケーション上で「OIDCでログイン」などのボタンをクリックします。
これにより、OAuth 2.0 / OIDC の認可フローが開始されます。
    `.trim(),
    httpMethod: null,
    payload: null,
  },
  2: {
    id: 2,
    label: 'Authorization Code Request',
    from: 'Client',
    to: 'Auth Server',
    description: 'クライアントが認可サーバーに認可コードをリクエスト',
    detail: `
クライアントは認可サーバーの /authorize エンドポイントにリダイレクトします。

リクエストには以下のパラメータが含まれます：
- response_type=code
- client_id
- redirect_uri
- scope (openid, profile, email など)
- state (CSRF対策)
- nonce (リプレイ攻撃対策)
    `.trim(),
    httpMethod: 'GET',
    endpoint: '/authorize',
    payload: {
      response_type: 'code',
      client_id: 'your-client-id',
      redirect_uri: 'https://your-app.com/callback',
      scope: 'openid profile email',
      state: 'random-state-value',
      nonce: 'random-nonce-value',
    },
  },
  3: {
    id: 3,
    label: 'Redirect to Login',
    from: 'Auth Server',
    to: 'User',
    description: '認可サーバーがユーザーをログイン画面にリダイレクト',
    detail: `
認可サーバーはユーザーを認証画面にリダイレクトします。
ユーザーがまだログインしていない場合、ID/パスワード入力画面が表示されます。
    `.trim(),
    httpMethod: null,
    payload: null,
  },
  4: {
    id: 4,
    label: 'Authentication & Consent',
    from: 'User',
    to: 'Auth Server',
    description: 'ユーザーがログインし、スコープへの同意を行う',
    detail: `
ユーザーは以下の操作を行います：
1. 認証情報（ID/パスワード、MFA等）を入力
2. 要求されたスコープ（プロフィール情報等）へのアクセスを同意

認可サーバーはユーザーの認証を検証し、同意を記録します。
    `.trim(),
    httpMethod: 'POST',
    endpoint: '/login',
    payload: {
      username: 'user@example.com',
      password: '********',
      consent: ['openid', 'profile', 'email'],
    },
  },
  5: {
    id: 5,
    label: 'Authorization Code',
    from: 'Auth Server',
    to: 'Client',
    description: '認可サーバーがクライアントに認可コードを返す',
    detail: `
認証・同意が完了すると、認可サーバーはクライアントの redirect_uri に
認可コード(code) を付与してリダイレクトします。

例: https://your-app.com/callback?code=AUTH_CODE&state=xxx

クライアントは state パラメータを検証してCSRF攻撃を防ぎます。
    `.trim(),
    httpMethod: null,
    payload: {
      code: 'SplxlOBeZQQYbYS6WxSbIA',
      state: 'random-state-value',
    },
  },
  6: {
    id: 6,
    label: 'Token Request',
    from: 'Client',
    to: 'Auth Server',
    description: 'クライアントが認可コードをトークンと交換',
    detail: `
クライアントはバックチャネル（サーバー間通信）で認可サーバーの
/token エンドポイントにPOSTリクエストを送信します。

このリクエストにはクライアント認証（client_id + client_secret）が必要です。
    `.trim(),
    httpMethod: 'POST',
    endpoint: '/token',
    payload: {
      grant_type: 'authorization_code',
      code: 'SplxlOBeZQQYbYS6WxSbIA',
      redirect_uri: 'https://your-app.com/callback',
      client_id: 'your-client-id',
      client_secret: 'your-client-secret',
    },
  },
  7: {
    id: 7,
    label: 'Validate Code',
    from: 'Auth Server',
    to: 'Auth Server',
    description: '認可サーバーが認可コードとクライアント認証を検証',
    detail: `
認可サーバーは以下を検証します：
1. 認可コードが有効か（期限切れでないか）
2. 認可コードが未使用か（一度しか使えない）
3. redirect_uri が認可リクエスト時と一致するか
4. client_id と client_secret が正しいか

検証に失敗した場合、エラーレスポンスを返します。
    `.trim(),
    httpMethod: null,
    payload: null,
  },
  8: {
    id: 8,
    label: 'Token Response',
    from: 'Auth Server',
    to: 'Client',
    description: '認可サーバーがID Token と Access Token を返す',
    detail: `
検証成功後、認可サーバーは以下のトークンを返します：
- id_token: ユーザー情報を含むJWT
- access_token: APIアクセス用トークン
- token_type: "Bearer"
- expires_in: トークンの有効期限（秒）
- refresh_token: (オプション) トークン更新用

クライアントは id_token を検証し、ユーザー情報を取得します。
    `.trim(),
    httpMethod: null,
    payload: {
      id_token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...',
      access_token: 'SlAV32hkKG',
      token_type: 'Bearer',
      expires_in: 3600,
      refresh_token: 'tGzv3JOkF0XG5Qx2TlKWIA',
    },
  },
  9: {
    id: 9,
    label: 'Login Complete',
    from: 'Client',
    to: 'User',
    description: 'クライアントがユーザーにログイン完了を通知',
    detail: `
クライアントアプリケーションは：
1. ID Token を検証（署名、issuer、audience、nonce、有効期限）
2. ユーザー情報を取得してセッションを作成
3. ユーザーをアプリケーションのホーム画面などにリダイレクト

これで OIDC 認可コードフローが完了します。
    `.trim(),
    httpMethod: null,
    payload: null,
  },
};

// ステップIDの配列（順序保証）
export const OIDC_STEP_ORDER = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// ステップラベル一覧（StepIndicator用）
export const OIDC_STEP_LABELS = OIDC_STEP_ORDER.map(
  (id) => OIDC_STEPS[id].label
);
