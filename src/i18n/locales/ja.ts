// src/i18n/locales/ja.ts
// 日本語翻訳ファイル

import type { TranslationKeys } from '../types';

export const ja: TranslationKeys = {
    common: {
        appName: 'Auth Flow Studio',
        settings: '設定',
        home: 'ホーム',
        back: '戻る',
        next: '次へ',
        previous: '前へ',
        close: '閉じる',
        save: '保存',
        cancel: 'キャンセル',
        loading: '読み込み中...',
        error: 'エラー',
        notFound: 'ページが見つかりません',
        language: '言語',
        theme: 'テーマ',
        lightMode: 'ライトモード',
        darkMode: 'ダークモード',
        systemDefault: 'システム設定に従う',
    },

    home: {
        title: 'Auth Flow Studio',
        subtitle: '各種ログイン方式の「裏側」で何が起きているかを体感するためのミニアプリ',
        authFlows: '認証フロー',
        compare: '比較',
        oidcTitle: 'OIDC Code Flow',
        oidcDescription: 'OAuth2 / OIDC の典型的な認証フローをステップごとに可視化',
        passkeyTitle: 'Passkey (WebAuthn)',
        passkeyDescription: 'パスワードレスな認証がどう動いているかをざっくり追体験',
        magicLinkTitle: 'Magic Link',
        magicLinkDescription: 'メールのワンタイムリンクでログインする仕組みを理解する',
        compareTitle: 'Compare Flows',
        compareDescription: '各認証フローを並べて比較する',
    },

    settings: {
        title: '設定',
        subtitle: 'アプリケーションの設定を変更します',
        languageSection: '言語設定',
        languageDescription: '表示言語を選択してください。変更は即座に反映されます。',
        appearanceSection: '外観',
        appearanceDescription: 'アプリケーションの外観を設定します。',
        animationSection: 'アニメーション',
        animationDescription: 'フロー表示時のアニメーションを設定します。',
        animationEnabled: '有効',
        animationDisabled: '無効',
        saveSuccess: '設定を保存しました',
    },

    oidc: {
        title: 'OIDC Code Flow',
        subtitle: 'OAuth2 / OIDC の典型的なコードフローを、画面と裏側の動きで追体験',
        steps: {
            1: {
                label: 'OIDCログイン開始',
                description: 'ユーザーがクライアントアプリの「OIDCログイン」ボタンをクリック',
                detail: `ユーザーはクライアントアプリケーション上で「OIDCでログイン」などのボタンをクリックします。
これにより、OAuth 2.0 / OIDC の認可フローが開始されます。`,
            },
            2: {
                label: '認可コード要求',
                description: 'クライアントが認可サーバーに認可コードをリクエスト',
                detail: `クライアントは認可サーバーの /authorize エンドポイントにリダイレクトします。

リクエストには以下のパラメータが含まれます：
- response_type=code
- client_id
- redirect_uri
- scope (openid, profile, email など)
- state (CSRF対策)
- nonce (リプレイ攻撃対策)`,
            },
            3: {
                label: 'ログイン画面へリダイレクト',
                description: '認可サーバーがユーザーをログイン画面にリダイレクト',
                detail: `認可サーバーはユーザーを認証画面にリダイレクトします。
ユーザーがまだログインしていない場合、ID/パスワード入力画面が表示されます。`,
            },
            4: {
                label: 'ログイン / 同意',
                description: 'ユーザーがログインし、スコープへの同意を行う',
                detail: `ユーザーは以下の操作を行います：
1. 認証情報（ID/パスワード、MFA等）を入力
2. 要求されたスコープ（プロフィール情報等）へのアクセスを同意

認可サーバーはユーザーの認証を検証し、同意を記録します。`,
            },
            5: {
                label: 'Code 受け取り',
                description: '認可サーバーがクライアントに認可コードを返す',
                detail: `認証・同意が完了すると、認可サーバーはクライアントの redirect_uri に
認可コード(code) を付与してリダイレクトします。

例: https://your-app.com/callback?code=AUTH_CODE&state=xxx

クライアントは state パラメータを検証してCSRF攻撃を防ぎます。`,
            },
            6: {
                label: 'トークン要求',
                description: 'クライアントが認可コードをトークンと交換',
                detail: `クライアントはバックチャネル（サーバー間通信）で認可サーバーの
/token エンドポイントにPOSTリクエストを送信します。

このリクエストにはクライアント認証（client_id + client_secret）が必要です。`,
            },
            7: {
                label: '認可コード検証',
                description: '認可サーバーが認可コードとクライアント認証を検証',
                detail: `認可サーバーは以下を検証します：
1. 認可コードが有効か（期限切れでないか）
2. 認可コードが未使用か（一度しか使えない）
3. redirect_uri が認可リクエスト時と一致するか
4. client_id と client_secret が正しいか

検証に失敗した場合、エラーレスポンスを返します。`,
            },
            8: {
                label: 'Token取得',
                description: '認可サーバーがID Token と Access Token を返す',
                detail: `検証成功後、認可サーバーは以下のトークンを返します：
- access_token: リソースサーバーへのアクセスに使用
- id_token: ユーザー情報を含むJWT
- refresh_token: アクセストークン更新用（オプション）
- token_type: Bearer
- expires_in: 有効期限（秒）`,
            },
            9: {
                label: 'ログイン完了',
                description: 'クライアントがユーザーをログイン状態にする',
                detail: `クライアントは取得したトークンを使用して：
1. id_tokenを検証（署名、issuer、audience、nonce等）
2. ユーザー情報を抽出
3. セッションを作成
4. ユーザーをログイン済み状態として扱う`,
            },
        },
    },

    passkey: {
        title: 'Passkey (WebAuthn)',
        subtitle: 'パスワードレスな認証がどう動いているかを追体験',
        steps: {
            1: {
                label: 'ログインクリック',
                description: 'ユーザーが「パスキーでログイン」ボタンをクリック',
                detail: `ユーザーはクライアントアプリケーション上で「パスキーでログイン」ボタンをクリックします。
従来のパスワード入力ではなく、生体認証やPINによる認証フローが開始されます。`,
            },
            2: {
                label: '認証開始',
                description: 'フロントエンドがバックエンドに認証開始をリクエスト',
                detail: `フロントエンドはバックエンドの認証開始エンドポイントにPOSTリクエストを送信します。
バックエンドはチャレンジ（ランダムな値）を生成する準備をします。`,
            },
            3: {
                label: 'チャレンジオプション',
                description: 'バックエンドがチャレンジとオプションを返却',
                detail: `バックエンドは PublicKeyCredentialRequestOptions を生成して返します。
これには以下が含まれます：
- challenge: ランダムなバイト列（リプレイ攻撃防止）
- rpId: Relying Party ID（ドメイン）
- allowCredentials: 使用可能なクレデンシャルのリスト
- timeout: タイムアウト時間
- userVerification: ユーザー検証の要件`,
            },
            4: {
                label: 'credentials.get()',
                description: 'WebAuthn API を呼び出してAuthenticatorにアクセス',
                detail: `フロントエンドは navigator.credentials.get() を呼び出します。
ブラウザはこのリクエストをAuthenticator（指紋センサー、Face ID、
セキュリティキーなど）に転送します。

const credential = await navigator.credentials.get({
  publicKey: options
});`,
            },
            5: {
                label: '生体認証 / PIN 要求',
                description: 'Authenticatorがユーザーに生体認証またはPINを要求',
                detail: `Authenticatorはユーザーに認証を要求します：
- 指紋認証
- 顔認証（Face ID など）
- PIN入力
- セキュリティキーのタップ

この操作により、Authenticator内の秘密鍵へのアクセスが許可されます。`,
            },
            6: {
                label: '認証OK',
                description: 'ユーザーが生体認証またはPINで認証',
                detail: `ユーザーが正常に認証されると、Authenticatorは：
1. 登録時に保存した秘密鍵を取り出す
2. チャレンジに対して秘密鍵で署名を生成
3. signCount（署名カウンタ）をインクリメント`,
            },
            7: {
                label: 'Assertion',
                description: 'Authenticatorが署名付きAssertionを返却',
                detail: `AuthenticatorはAssertion（認証アサーション）を生成して返します：
- authenticatorData: rpIdHash, flags, signCount
- clientDataJSON: チャレンジ、オリジン、タイプ
- signature: 秘密鍵による署名
- userHandle: ユーザーID（オプション）

これらはすべてバイナリ形式（ArrayBuffer）で返されます。`,
            },
            8: {
                label: 'Assertion送信',
                description: 'フロントエンドがAssertionをバックエンドに送信',
                detail: `フロントエンドはAuthenticatorから受け取ったAssertionを
バックエンドの認証完了エンドポイントにPOSTします。

データはBase64URLエンコードされて送信されます。`,
            },
            9: {
                label: 'クレデンシャル検索',
                description: 'バックエンドがDBからクレデンシャルを検索',
                detail: `バックエンドは credential ID を使って
データベースから登録済みの公開鍵と関連情報を検索します。`,
            },
            10: {
                label: '署名検証',
                description: 'バックエンドが公開鍵で署名を検証',
                detail: `バックエンドは以下の検証を行います：
1. clientDataJSON のチャレンジが一致するか
2. originが正しいか
3. rpIdHashが正しいか
4. 公開鍵を使って署名を検証`,
            },
            11: {
                label: 'signCount確認',
                description: 'バックエンドがsignCountをチェック',
                detail: `クローン検出のため、signCountを確認します：
- 受信したsignCountが保存値より大きいことを確認
- 異常がある場合はクローンの可能性あり
- 正常なら保存値を更新`,
            },
            12: {
                label: 'セッショントークン',
                description: 'バックエンドがセッショントークンを発行',
                detail: `認証成功後、バックエンドは：
1. セッショントークンを生成
2. セッション情報をサーバーに保存
3. トークンをレスポンスとして返却`,
            },
            13: {
                label: '認証済み',
                description: 'フロントエンドがセッションを保存',
                detail: `フロントエンドはセッショントークンを受け取り：
1. Cookie または LocalStorage に保存
2. 認証状態を更新
3. 保護されたリソースへのアクセスが可能に`,
            },
            14: {
                label: 'ログイン完了',
                description: 'ユーザーがアプリにログイン成功',
                detail: `パスキー認証が完了し、ユーザーはアプリケーションに
ログインした状態になります。

パスワードなしで、生体認証だけで安全にログインできました。`,
            },
        },
    },

    magic: {
        title: 'Magic Link',
        subtitle: 'メールのワンタイムリンクでログインする仕組みを理解する',
        steps: {
            1: {
                label: 'メールアドレス入力',
                description: 'ユーザーがメールアドレスを入力して送信',
                detail: `ユーザーはログイン画面でメールアドレスを入力し、
「マジックリンクを送信」ボタンをクリックします。

パスワードは不要で、メールアドレスのみで認証を開始します。`,
            },
            2: {
                label: 'マジックリンク要求',
                description: 'フロントエンドがAPIにマジックリンクを要求',
                detail: `フロントエンドはバックエンドのAPIに対して、
マジックリンクの発行をリクエストします。

メールアドレスがリクエストボディに含まれます。`,
            },
            3: {
                label: 'ユーザー検索',
                description: 'APIがユーザーDBでメールアドレスを検索',
                detail: `Auth APIはUser DBに対して、
入力されたメールアドレスでユーザーを検索します。

存在しない場合は新規ユーザーとして作成することもあります。`,
            },
            4: {
                label: 'ユーザー情報返却',
                description: 'DBがユーザー情報またはステータスを返却',
                detail: `User DBはユーザー検索の結果を返します：
- 既存ユーザー: userId、ステータスなど
- 新規ユーザー: 作成されたユーザーのID
- エラー: ユーザーが見つからない（設定による）`,
            },
            5: {
                label: 'トークン作成',
                description: 'APIがワンタイムトークンを生成して保存',
                detail: `Auth APIは以下を行います：
1. セキュアなランダムトークン（32バイト以上）を生成
2. トークンのハッシュ値を計算
3. Token Store（DB/Redis）にハッシュ値を保存
4. 有効期限を設定（通常15分〜1時間）

元のトークンはメールリンクに含まれます。`,
            },
            6: {
                label: 'トークンID返却',
                description: 'Token StoreがトークンIDを返却',
                detail: `Token Storeはトークンレコードの保存に成功し、
トークンIDまたは確認を返します。

これにより、後でトークン検証時にレコードを
特定できるようになります。`,
            },
            7: {
                label: 'メール送信',
                description: 'APIがメールサービスにマジックリンクを送信依頼',
                detail: `Auth APIはEmail Service（SMTP/SES/SendGrid等）に
マジックリンクを含むメールの送信を依頼します。

リンクには以下が含まれます：
- rid（ランダムID）
- token（ワンタイムトークン）
- 有効期限情報`,
            },
            8: {
                label: 'メール受付',
                description: 'メールサービスが送信を受け付け',
                detail: `Email Serviceはメールの送信リクエストを受け付けます。
実際の配信は非同期で行われます。`,
            },
            9: {
                label: 'API応答',
                description: 'APIがフロントエンドに成功を返却',
                detail: `Auth APIはフロントエンドに成功レスポンスを返します。
「メールを確認してください」というメッセージを表示するためです。`,
            },
            10: {
                label: 'メール確認',
                description: 'ユーザーがメールボックスを確認',
                detail: `ユーザーは自分のメールボックスを開いて、
Auth Flowからのメールを探します。`,
            },
            11: {
                label: 'メールを開く',
                description: 'ユーザーがマジックリンクメールを開く',
                detail: `ユーザーは受信したメールを開きます。
メールにはマジックリンクが含まれています。`,
            },
            12: {
                label: 'リンクをクリック',
                description: 'ユーザーがマジックリンクをクリック',
                detail: `ユーザーがメール内のリンクをクリックすると、
ブラウザでアプリケーションの認証コールバックURLが開かれます。`,
            },
            13: {
                label: '検証リクエスト',
                description: 'フロントエンドがトークンの検証をリクエスト',
                detail: `フロントエンドはURLからトークンを抽出し、
バックエンドに検証リクエストを送信します。`,
            },
            14: {
                label: 'トークン検索',
                description: 'APIがToken Storeでトークンを検索',
                detail: `Auth APIはToken Storeで、
受け取ったトークンのハッシュ値を検索します。`,
            },
            15: {
                label: 'トークンレコード',
                description: 'Token Storeがトークンレコードを返却',
                detail: `Token Storeはトークンに関連付けられた
ユーザーID、有効期限、使用状態などを返します。`,
            },
            16: {
                label: 'トークン検証',
                description: 'APIがトークンの有効性を検証',
                detail: `Auth APIは以下を検証します：
1. トークンが存在するか
2. 有効期限内か
3. まだ使用されていないか

検証成功後、トークンを無効化（使用済みに）します。`,
            },
            17: {
                label: 'ログイン完了',
                description: 'ユーザーがアプリにログイン成功',
                detail: `Magic Link認証が完了し、ユーザーはアプリケーションに
ログインした状態になります。

パスワードなしで、メールだけで安全にログインできました。`,
            },
        },
    },

    compare: {
        title: 'Flow Compare',
        subtitle: '2つの認証フローを並べて、差を"目で"理解する',
        stepDetails: 'Step Details',
        stepDetailsHint: 'フロー上のステップ（番号サークル）をクリックすると詳細が出ます',
        notSelected: '未選択',
        flowA: 'Flow A',
        flowB: 'Flow B',
    },

    stepDetail: {
        httpMethod: 'HTTPメソッド',
        endpoint: 'エンドポイント',
        payload: 'ペイロード',
    },

    flowNames: {
        oidc: 'OIDC / Authorization Code',
        passkey: 'Passkey',
        magic: 'Magic Link',
    },

    // ステップUI共通
    stepUI: {
        back: '← 戻る',
        next: '次へ →',
        stepN: 'ステップ',
        whatHappens: 'このステップで起こること',
        behindTheScenes: 'Behind the Scenes',
        requestContent: 'リクエスト内容',
        sentParameters: '送信されるパラメータ（一部）',
        loginWithPasskey: 'パスキーでログイン',
        loginWithOidc: 'Login with OIDC',
        sendMagicLink: 'Magic Link を送信',
    },

    // OIDCステップUI
    oidcStepUI: {
        clientApp: 'Client Application',
        clientAppDesc: 'ユーザーはクライアントアプリから「OIDCでログイン」を開始します。',
        authCodeRequest: 'Authorization Code Request',
        authCodeRequestDesc: 'クライアントが認可サーバーに対して Authorization Code を要求します。',
        redirectToLogin: 'Redirect to Login',
        redirectToLoginDesc: '認可サーバーがユーザーをログイン画面へリダイレクトします。',
        providerLogin: 'Provider Login',
        providerLoginDesc: 'ユーザーが認証情報を入力し、スコープへの同意を行います。',
        redirectWithCode: 'Redirect with Code',
        redirectWithCodeDesc: '認可サーバーがクライアントに認可コードを付与してリダイレクトします。',
        tokenRequest: 'Token Request',
        tokenRequestDesc: 'クライアントが認可コードをトークンと交換します。',
        validateCode: 'Validate Code',
        validateCodeDesc: '認可サーバーが認可コードを検証します。',
        tokenResponse: 'Token Response',
        tokenResponseDesc: '認可サーバーがID Token と Access Token を返します。',
        loginComplete: 'ログイン完了',
        loginCompleteDesc: 'ユーザーがアプリにログインしました。',
        stateForCsrf: 'state は CSRF 対策用のランダム値。',
        nonceForIdToken: 'nonce は ID Token を後で検証するための一時値。',
        invisibleSafety: 'これらはフロントの画面からは見えませんが、重要な安全装置です。',
        browserRedirect: 'ブラウザは認可エンドポイントへリダイレクトされます。',
        requestContains: 'リクエストには response_type=code 等が含まれます。',
        userNotLoggedIn: 'ユーザーが未ログインの場合、ログイン画面が表示されます。',
        userEntersCreds: 'ユーザーが認証情報（ID/パスワード等）を入力します。',
        serverValidates: '認可サーバーが認証情報を検証します。',
        serverRecordsConsent: '要求されたスコープへの同意が記録されます。',
        serverGeneratesCode: '認可サーバーが認可コードを生成してリダイレクトURIに付与します。',
        clientValidatesState: 'クライアントは state パラメータを検証してCSRF攻撃を防ぎます。',
        backChannelRequest: 'クライアントはバックチャネル（サーバー間通信）でトークンを要求します。',
        clientAuth: 'このリクエストにはクライアント認証が必要です。',
        serverValidatesCode: '認可サーバーが以下を検証します：',
        serverValidatesCodeDetails: '認可コードの有効性、未使用か、redirect_uri一致、クライアント認証',
        serverIssuesTokens: '検証成功後、認可サーバーがトークンを発行します。',
        tokenDetails: 'access_token, id_token, refresh_token（オプション）が含まれます。',
        clientValidatesIdToken: 'クライアントがid_tokenを検証（署名、issuer、audience、nonce等）',
        clientExtractsUser: 'ユーザー情報を抽出してセッションを作成します。',
        clientCreatesSession: 'ユーザーをログイン済み状態として扱います。',
        goHome: 'ホームに戻る',
    },

    // PasskeyステップUI
    passkeyStepUI: {
        loginClick: 'ログインボタンクリック',
        loginClickDesc: 'ユーザーが「パスキーでログイン」ボタンをクリックします。',
        authBegin: '認証開始リクエスト',
        authBeginDesc: 'フロントエンドがバックエンドに POST /webauthn/authenticate/begin リクエストを送ります。',
        challengeOptions: 'チャレンジ & オプション',
        challengeOptionsDesc: 'バックエンドがチャレンジとオプションを返します。',
        credentialsGet: 'credentials.get() 呼び出し',
        credentialsGetDesc: 'フロントエンドがWebAuthn APIを呼び出します。',
        biometricRequest: '生体認証 / PIN 要求',
        biometricRequestDesc: 'Authenticatorがユーザーに認証を要求します。',
        authOk: '認証完了',
        authOkDesc: 'ユーザーが生体認証またはPINで認証しました。',
        assertion: 'Assertion 生成',
        assertionDesc: 'Authenticatorが署名付きAssertionを生成します。',
        authComplete: 'Assertion 送信',
        authCompleteDesc: 'フロントエンドがAssertionをバックエンドに送信します。',
        verifyChallenge: 'クレデンシャル検索',
        verifyChallengeDesc: 'バックエンドがDBからクレデンシャルを検索します。',
        verifySignature: '署名検証',
        verifySignatureDesc: 'バックエンドが公開鍵で署名を検証します。',
        checkSignCount: 'signCount 確認',
        checkSignCountDesc: 'バックエンドがsignCountをチェックします。',
        sessionToken: 'セッショントークン発行',
        sessionTokenDesc: 'バックエンドがセッショントークンを発行します。',
        authenticated: '認証確立',
        authenticatedDesc: 'フロントエンドがセッションを保存します。',
        loginComplete: 'ログイン完了',
        loginCompleteDesc: 'ユーザーがアプリにログインしました。',
        frontendReceivesAction: 'フロントエンドアプリケーションがユーザーの操作を受け取ります。',
        preparesBackendRequest: 'バックエンドに認証開始のリクエストを送る準備をします。',
        backendStartsSession: 'バックエンドで認証セッションが開始されます。',
        challengeGenerated: '認証に必要な challenge が生成されます。',
        noUserIdYet: 'このリクエストはまだユーザー識別情報を含みません。',
        backendGeneratesOptions: 'バックエンドが PublicKeyCredentialRequestOptions を生成します。',
        optionsIncludes: 'challenge, rpId, allowCredentials, timeout 等が含まれます。',
        browserCallsApi: 'ブラウザが navigator.credentials.get() を呼び出します。',
        apiForwardsToAuth: 'リクエストがAuthenticatorに転送されます。',
        authRequestsVerification: 'Authenticatorがユーザーに認証を要求します（指紋、顔、PIN等）。',
        userVerifies: 'ユーザーが認証すると、秘密鍵へのアクセスが許可されます。',
        onSuccess: '認証成功時：',
        authGeneratesAssertion: 'Authenticatorが署名付きAssertionを生成します。',
        assertionIncludes: 'authenticatorData, clientDataJSON, signature 等が含まれます。',
        frontendPostsAssertion: 'フロントエンドがAssertionをバックエンドにPOSTします。',
        dataBase64Encoded: 'データはBase64URLエンコードされて送信されます。',
        backendSearchesCredential: 'バックエンドがcredential IDでDBを検索します。',
        backendValidates: 'バックエンドが以下を検証：challenge一致、origin、rpIdHash、署名',
        signCountCheck: 'signCountが保存値より大きいことを確認します。',
        cloneDetection: '異常がある場合はクローンの可能性があります。',
        sessionGenerated: 'セッショントークンが生成されます。',
        sessionSaved: 'セッション情報がサーバーに保存されます。',
        frontendSavesSession: 'フロントエンドがCookie/LocalStorageにトークンを保存します。',
        authStateUpdated: '認証状態が更新され、保護されたリソースにアクセス可能になります。',
        passkeyAuthComplete: 'パスキー認証が完了しました。',
        noPasswordNeeded: 'パスワードなしで、生体認証だけで安全にログインできました。',
        goHome: 'ホームに戻る',
    },

    // MagicLinkステップUI
    magicStepUI: {
        emailInput: 'メールアドレス入力',
        emailInputDesc: 'ユーザーはログイン用のメールアドレスを入力し、送信ボタンを押します。',
        magicLinkRequest: 'Magic Link リクエスト',
        magicLinkRequestDesc: 'フロントエンドからAuth APIへMagic Linkリクエストを送信します。',
        userLookup: 'ユーザー検索',
        userLookupDesc: 'Auth APIがUser DBでメールアドレスを検索します。',
        userResponse: 'ユーザー情報返却',
        userResponseDesc: 'DBがユーザー情報を返却します。',
        createToken: 'トークン発行',
        createTokenDesc: 'APIがワンタイムトークンを生成して保存します。',
        tokenIdResponse: 'トークンID返却',
        tokenIdResponseDesc: 'Token StoreがトークンIDを返却します。',
        sendEmail: 'メール送信',
        sendEmailDesc: 'APIがメールサービスにマジックリンクを送信依頼します。',
        emailAccepted: 'メール受付',
        emailAcceptedDesc: 'メールサービスが送信を受け付けました。',
        apiResponse: 'API応答',
        apiResponseDesc: 'APIがフロントエンドに成功を返却します。',
        checkEmail: 'メール確認案内',
        checkEmailDesc: 'ユーザーにメールを確認するよう案内します。',
        openEmail: 'メールを開く',
        openEmailDesc: 'ユーザーがマジックリンクメールを開きます。',
        clickLink: 'リンクをクリック',
        clickLinkDesc: 'ユーザーがマジックリンクをクリックします。',
        verifyRequest: '検証リクエスト',
        verifyRequestDesc: 'フロントエンドがトークンの検証をリクエストします。',
        lookupToken: 'トークン検索',
        lookupTokenDesc: 'APIがToken Storeでトークンを検索します。',
        tokenRecord: 'トークンレコード',
        tokenRecordDesc: 'Token Storeがトークンレコードを返却します。',
        validateToken: 'トークン検証',
        validateTokenDesc: 'APIがトークンの有効性を検証します。',
        loginComplete: 'ログイン完了',
        loginCompleteDesc: 'ユーザーがアプリにログインしました。',
        userEntersEmail: 'ユーザーがメールアドレスを入力して「送信」をクリックします。',
        frontendAction: 'このステップはフロントエンドで行われます。',
        nextStepApiCall: '次のステップで、フロントエンドからAPIへリクエストが送信されます。',
        frontendCallsApi: 'フロントエンドがAuth APIの /auth/magic-link/request エンドポイントを呼び出します。',
        clientInfoSecurity: 'clientInfo にはセキュリティ目的でユーザーエージェントやIPなどを含めることがあります。',
        apiProcesses: 'APIはこれを受け取ってユーザー検索・トークン発行を行います。',
        apiSearchesUser: 'Auth APIがUser DBでメールアドレスを検索します。',
        newUserMayCreate: '存在しない場合は新規ユーザーとして作成することもあります。',
        dbReturnsUser: 'DBがユーザー検索結果を返します：',
        existingUser: '既存ユーザー: userId、ステータスなど',
        newUser: '新規ユーザー: 作成されたユーザーのID',
        errorNotFound: 'エラー: ユーザーが見つからない（設定による）',
        apiGeneratesToken: 'APIがセキュアなランダムトークンを生成します。',
        tokenStored: 'トークンのハッシュ値がToken Storeに保存されます。',
        expirationSet: '有効期限が設定されます（通常15分〜1時間）。',
        tokenStoredSuccess: 'Token Storeがトークンの保存成功を確認します。',
        recordIdentifiable: 'これにより、後でトークン検証時にレコードを特定できます。',
        apiRequestsEmail: 'APIがEmail Service（SMTP/SES/SendGrid等）にメール送信を依頼します。',
        linkContains: 'リンクにはrid（ランダムID）とtoken（ワンタイムトークン）が含まれます。',
        emailServiceAccepts: 'Email Serviceがメール送信リクエストを受け付けます。',
        asyncDelivery: '実際の配信は非同期で行われます。',
        apiReturnsSuccess: 'Auth APIがフロントエンドに成功レスポンスを返します。',
        showCheckEmailMessage: '「メールを確認してください」というメッセージを表示します。',
        userChecksMailbox: 'ユーザーが自分のメールボックスを開いてメールを探します。',
        userOpensEmail: 'ユーザーが受信したメールを開きます。',
        emailContainsLink: 'メールにはマジックリンクが含まれています。',
        userClicksLink: 'ユーザーがメール内のリンクをクリックします。',
        browserOpensCallback: 'ブラウザでアプリケーションの認証コールバックURLが開かれます。',
        frontendExtractsToken: 'フロントエンドがURLからトークンを抽出します。',
        sendsVerification: 'バックエンドに検証リクエストを送信します。',
        apiSearchesToken: 'Auth APIがToken Storeでトークンのハッシュ値を検索します。',
        tokenStoreReturns: 'Token StoreがユーザーID、有効期限、使用状態などを返します。',
        apiValidatesToken: 'APIがトークンの存在、有効期限、使用状態を検証します。',
        tokenInvalidated: '検証成功後、トークンは無効化（使用済みに）されます。',
        magicLinkComplete: 'Magic Link認証が完了しました。',
        noPasswordEmail: 'パスワードなしで、メールだけで安全にログインできました。',
        goHome: 'ホームに戻る',
        // Mock box labels
        dbQuery: 'DBクエリ（イメージ）',
        dbResponse: 'DBレスポンス',
        tokenCreateRequest: 'トークン作成リクエスト',
        tokenStoreResponse: 'Token Storeレスポンス',
        emailSendRequest: 'メール送信リクエスト',
        loginLink: 'ログインリンク',
        clickLinkToLogin: '以下のリンクをクリックしてログインしてください',
        emailServiceResponse: 'Email Serviceレスポンス',
        checkYourEmail: 'メールを確認してください',
        sentLoginLink: '入力したメールアドレスにログインリンクを送信しました。',
        clickLinkInEmail: 'メール内のリンクをクリックしてログインしてください。',
        emailFrom: 'noreply@app.example.com',
        emailSubject: '件名: あなたのログインリンク',
        emailGreeting: 'こんにちは、',
        emailClickLink: '以下のリンクをクリックしてログインしてください：',
        linkValidTime: 'このリンクは15分間有効です。',
        tokenStoreSearch: 'Token Store検索',
        unusedValid: '未使用・有効期限内',
        verificationChecklist: '検証チェックリスト',
        hashMatch: 'hash(token) がstoredHashと一致',
        expiresAtValid: 'expiresAt が現在時刻より後（有効期限内）',
        usedFalse: 'used = false（未使用）',
        verificationSuccess: '検証成功',
        loginStateSample: 'ログイン状態（サンプル）',
    },

    // PasskeyステップUI詳細
    passkeyStepUIDetail: {
        receivedOptions: '受信するオプション',
        apiCall: 'API 呼び出し',
        biometricDialogShown: '生体認証ダイアログが表示されます',
        biometricExample: '例: Touch ID / Face ID / Windows Hello',
        authStatus: '認証ステータス',
        returnedAssertion: '返却される Assertion',
        requestContent: 'リクエスト内容',
        verificationContent: '検証内容',
        returnedToken: '返却されるトークン',
        frontendState: 'フロントエンドの状態',
        loginCompleteState: 'ログイン完了状態',
        // Explanation texts
        backendReturnsOptions: 'バックエンドがフロントエンドに PublicKeyCredentialRequestOptions を返します。',
        challengeSentToFrontend: 'バックエンドが生成した challenge がフロントエンドに送られます。',
        challengeUsedForSignature: 'challenge は一時的で、署名検証時に使われます。',
        allowCredentialsLimit: 'オプションに allowCredentials が含まれる場合、ユーザーの登録済みデバイスを限定できます。',
        frontendCallsWebAuthn: 'フロントエンドが WebAuthn API の credentials.get() を呼び出します。',
        requestToAuthenticator: 'フロントエンドからオーセンティケーターにリクエストが送られます。',
        apiIsAsync: 'この API は非同期で、ユーザーの操作を待ちます。',
        authenticatorRequestsBiometric: '次のステップで、ユーザーの生体認証（Touch ID / Face ID）が要求されます。',
        deviceSecureHardware: 'デバイスのセキュアなハードウェアが起動します（Touch ID など）。',
        userEntersBiometricOrPin: 'ユーザーは生体認証またはデバイス PIN を入力します。',
        authFailsHere: '認証失敗時は、ここで処理が止まります。',
        userBiometricSuccess: 'ユーザーが生体認証に成功しました。',
        deviceConfirmedAuth: 'デバイスは認証を確認しました。',
        readyToSign: '秘密鍵を使ってチャレンジに署名する準備ができました。',
        privateKeyNeverLeaves: '秘密鍵はデバイスから出ません — デバイス内で署名が生成されます。',
        authenticatorReturnsAssertion: 'オーセンティケーターがチャレンジに署名した Assertion をフロントエンドに返します。',
        signatureWithPrivateKey: 'signature: チャレンジに対する秘密鍵での署名',
        authenticatorDataDesc: 'authenticatorData: デバイス側の認証情報',
        clientDataJsonDesc: 'clientDataJSON: クライアント側の情報（origin, challenge など）',
        assertionUsedForVerification: 'この Assertion がサーバでの署名検証に使われます。',
        frontendSendsAssertion: 'フロントエンドが Assertion をバックエンドに送信し、POST /webauthn/authenticate/complete を実行します。',
        backendVerifiesAndAuth: 'バックエンドはこれから署名を検証し、ユーザーを認証します。',
        clientProcessingComplete: 'クライアント側の処理はここでほぼ完了です。',
        backendVerifiesChallenge: 'バックエンドが clientDataJSON 内のチャレンジが自分が送ったものと一致するか確認します。',
        preventsReplayAttack: 'Replay 攻撃を防止します。',
        challengeMismatchFails: 'チャレンジが一致しない場合、認証は失敗します。',
        challengeOneTimeOnly: 'チャレンジは通常 1 回限りで、複数回使用はできません。',
        backendVerifiesWithPublicKey: 'バックエンドが登録済みの公開鍵を使って署名を検証します。',
        publicKeyPrivateKeyRelated: '公開鍵と秘密鍵は数学的に関連しており、公開鍵で検証されたということは秘密鍵で署名されたことの証拠です。',
        verifiedMeansOwnership: '秘密鍵の所有を証明しているのと同じです。',
        backendChecksSignCount: 'バックエンドがオーセンティケーターの signCount を確認し、複製品でないことを検証します。',
        eachAuthRecordsSignCount: '各オーセンティケーターは signCount（署名回数）を記録します。',
        greaterThanStoredOk: 'サーバが保存した signCount より大きければ、正規のデバイスです。',
        lessOrEqualMayBeCloned: 'signCount が前回以下なら、デバイスが複製された可能性があります。',
        allVerificationsPassed: 'すべての検証に成功しました。バックエンドがセッショントークン（JWT など）をフロントエンドに返します。',
        sessionTokenReturned: 'セッショントークンがフロントエンドに返されます。',
        tokenUsedForAuthState: '以降のリクエストでこのトークンを使い、認証状態を保つことができます。',
        frontendSavesToStorage: 'フロントエンドがセッショントークンを保存し、ユーザーが認証状態にあることを確認します。',
        subsequentRequests: '今後のすべてのリクエストにこのトークンを含めることで、認証状態を保つことができます。',
        pageReloadRestoresAuth: 'ページをリロードしても、トークンを使って認証状態が復元されます。',
        passkeyFlowComplete: 'パスキー認証フローが完了し、ユーザーがログインした状態になります。',
        noPasswordSent: 'パスワードは一度も送信されていません。',
        privateKeyInDevice: '秘密鍵は端末から出ません — 署名のみが送られます。',
        publicKeyCrypto: '公開鍵暗号により、非常に安全な認証が実現されています。',
        multipleSecurityChecks: '複数のセキュリティチェック (チャレンジ検証、署名検証、signCount チェック) により、スプーフィング攻撃が防止されます。',
    },

    // SVG diagram translations (MagicFlowSvg)
    magicFlowSvg: {
        // Notes
        noteEmailInput: '① メールアドレス入力',
        noteOneTimeToken: '② ワンタイムトークン発行（短命）',
        noteSendEmail: '③ メール送信（リンク埋め込み）',
        noteUserOpensEmail: '④ ユーザーがメールを開いてリンクを押す',
        noteTokenVerify: '⑤ トークン検証してログイン確定',
        // Arrow labels
        emailInputAndSend: 'メール入力 & 送信',
        userLookupCreate: 'ユーザー検索/作成',
        createMagicToken: 'create magic_token (hash保存)',
        sendEmailMagicLink: 'Send email (Magic Link)',
        checkYourEmail: '200 OK "メールを確認してください"',
        checkEmailMessage: '"メールを確認してね"',
        readEmail: 'メール閲覧',
        hashVerify: 'hash(token)一致確認',
        expiryUsedCheck: '期限確認 / used=false確認',
    },
};
