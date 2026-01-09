// src/i18n/types.ts
// 多言語対応の型定義

/**
 * サポートする言語コード
 */
export type Language = 'ja' | 'en';

/**
 * 翻訳キーの構造（型安全のため）
 */
export interface TranslationKeys {
    // 共通
    common: {
        appName: string;
        settings: string;
        home: string;
        back: string;
        next: string;
        previous: string;
        close: string;
        save: string;
        cancel: string;
        loading: string;
        error: string;
        notFound: string;
        language: string;
        theme: string;
        lightMode: string;
        darkMode: string;
        systemDefault: string;
    };

    // ホームページ
    home: {
        title: string;
        subtitle: string;
        authFlows: string;
        compare: string;
        oidcTitle: string;
        oidcDescription: string;
        passkeyTitle: string;
        passkeyDescription: string;
        magicLinkTitle: string;
        magicLinkDescription: string;
        compareTitle: string;
        compareDescription: string;
    };

    // 設定ページ
    settings: {
        title: string;
        subtitle: string;
        languageSection: string;
        languageDescription: string;
        appearanceSection: string;
        appearanceDescription: string;
        animationSection: string;
        animationDescription: string;
        animationEnabled: string;
        animationDisabled: string;
        saveSuccess: string;
    };

    // OIDC フロー
    oidc: {
        title: string;
        subtitle: string;
        steps: Record<number, StepTranslation>;
    };

    // Passkey フロー
    passkey: {
        title: string;
        subtitle: string;
        steps: Record<number, StepTranslation>;
    };

    // Magic Link フロー
    magic: {
        title: string;
        subtitle: string;
        steps: Record<number, StepTranslation>;
    };

    // 比較ページ
    compare: {
        title: string;
        subtitle: string;
        stepDetails: string;
        stepDetailsHint: string;
        notSelected: string;
        flowA: string;
        flowB: string;
    };

    // ステップ詳細
    stepDetail: {
        httpMethod: string;
        endpoint: string;
        payload: string;
    };

    // フロー名（FlowPicker用）
    flowNames: {
        oidc: string;
        passkey: string;
        magic: string;
    };

    // ステップUI共通
    stepUI: {
        back: string;
        next: string;
        stepN: string; // "ステップ N" / "Step N"
        whatHappens: string; // "このステップで起こること" / "What happens in this step"
        behindTheScenes: string; // "Behind the Scenes"
        requestContent: string; // "リクエスト内容"
        sentParameters: string; // "送信されるパラメータ"
        loginWithPasskey: string;
        loginWithOidc: string;
        sendMagicLink: string;
    };

    // OIDCステップUI
    oidcStepUI: {
        clientApp: string;
        clientAppDesc: string;
        authCodeRequest: string;
        authCodeRequestDesc: string;
        redirectToLogin: string;
        redirectToLoginDesc: string;
        providerLogin: string;
        providerLoginDesc: string;
        redirectWithCode: string;
        redirectWithCodeDesc: string;
        tokenRequest: string;
        tokenRequestDesc: string;
        validateCode: string;
        validateCodeDesc: string;
        tokenResponse: string;
        tokenResponseDesc: string;
        loginComplete: string;
        loginCompleteDesc: string;
        // Behind the scenes
        stateForCsrf: string;
        nonceForIdToken: string;
        invisibleSafety: string;
        browserRedirect: string;
        requestContains: string;
        userNotLoggedIn: string;
        userEntersCreds: string;
        serverValidates: string;
        serverRecordsConsent: string;
        serverGeneratesCode: string;
        clientValidatesState: string;
        backChannelRequest: string;
        clientAuth: string;
        serverValidatesCode: string;
        serverValidatesCodeDetails: string;
        serverIssuesTokens: string;
        tokenDetails: string;
        clientValidatesIdToken: string;
        clientExtractsUser: string;
        clientCreatesSession: string;
        goHome: string;
        clientBuildsAuthRequest: string;
        mockLoginForm: string;
        mockBrowserUrl: string;
        queryContainsCodeState: string;
        csrfMismatchAbort: string;
        mockLoginStatus: string;
        accessTokenUsedForApi: string;
        oidcFlowComplete: string;
    };

    // PasskeyステップUI
    passkeyStepUI: {
        loginClick: string;
        loginClickDesc: string;
        authBegin: string;
        authBeginDesc: string;
        challengeOptions: string;
        challengeOptionsDesc: string;
        credentialsGet: string;
        credentialsGetDesc: string;
        biometricRequest: string;
        biometricRequestDesc: string;
        authOk: string;
        authOkDesc: string;
        assertion: string;
        assertionDesc: string;
        authComplete: string;
        authCompleteDesc: string;
        verifyChallenge: string;
        verifyChallengeDesc: string;
        verifySignature: string;
        verifySignatureDesc: string;
        checkSignCount: string;
        checkSignCountDesc: string;
        sessionToken: string;
        sessionTokenDesc: string;
        authenticated: string;
        authenticatedDesc: string;
        loginComplete: string;
        loginCompleteDesc: string;
        // Behind the scenes
        frontendReceivesAction: string;
        preparesBackendRequest: string;
        backendStartsSession: string;
        challengeGenerated: string;
        noUserIdYet: string;
        backendGeneratesOptions: string;
        optionsIncludes: string;
        browserCallsApi: string;
        apiForwardsToAuth: string;
        authRequestsVerification: string;
        userVerifies: string;
        onSuccess: string;
        authGeneratesAssertion: string;
        assertionIncludes: string;
        frontendPostsAssertion: string;
        dataBase64Encoded: string;
        backendSearchesCredential: string;
        backendValidates: string;
        signCountCheck: string;
        cloneDetection: string;
        sessionGenerated: string;
        sessionSaved: string;
        frontendSavesSession: string;
        authStateUpdated: string;
        passkeyAuthComplete: string;
        noPasswordNeeded: string;
        goHome: string;
    };

    // MagicLinkステップUI
    magicStepUI: {
        emailInput: string;
        emailInputDesc: string;
        magicLinkRequest: string;
        magicLinkRequestDesc: string;
        userLookup: string;
        userLookupDesc: string;
        userResponse: string;
        userResponseDesc: string;
        createToken: string;
        createTokenDesc: string;
        tokenIdResponse: string;
        tokenIdResponseDesc: string;
        sendEmail: string;
        sendEmailDesc: string;
        emailAccepted: string;
        emailAcceptedDesc: string;
        apiResponse: string;
        apiResponseDesc: string;
        checkEmail: string;
        checkEmailDesc: string;
        openEmail: string;
        openEmailDesc: string;
        clickLink: string;
        clickLinkDesc: string;
        verifyRequest: string;
        verifyRequestDesc: string;
        lookupToken: string;
        lookupTokenDesc: string;
        tokenRecord: string;
        tokenRecordDesc: string;
        validateToken: string;
        validateTokenDesc: string;
        loginComplete: string;
        loginCompleteDesc: string;
        // Behind the scenes
        userEntersEmail: string;
        frontendAction: string;
        nextStepApiCall: string;
        frontendCallsApi: string;
        clientInfoSecurity: string;
        apiProcesses: string;
        apiSearchesUser: string;
        newUserMayCreate: string;
        dbReturnsUser: string;
        existingUser: string;
        newUser: string;
        errorNotFound: string;
        apiGeneratesToken: string;
        tokenStored: string;
        expirationSet: string;
        tokenStoredSuccess: string;
        recordIdentifiable: string;
        apiRequestsEmail: string;
        linkContains: string;
        emailServiceAccepts: string;
        asyncDelivery: string;
        apiReturnsSuccess: string;
        showCheckEmailMessage: string;
        userChecksMailbox: string;
        userOpensEmail: string;
        emailContainsLink: string;
        userClicksLink: string;
        browserOpensCallback: string;
        frontendExtractsToken: string;
        sendsVerification: string;
        apiSearchesToken: string;
        tokenStoreReturns: string;
        apiValidatesToken: string;
        tokenInvalidated: string;
        magicLinkComplete: string;
        noPasswordEmail: string;
        goHome: string;
        // Mock box labels
        dbQuery: string;
        dbResponse: string;
        tokenCreateRequest: string;
        tokenStoreResponse: string;
        emailSendRequest: string;
        loginLink: string;
        clickLinkToLogin: string;
        emailServiceResponse: string;
        checkYourEmail: string;
        sentLoginLink: string;
        clickLinkInEmail: string;
        emailFrom: string;
        emailSubject: string;
        emailGreeting: string;
        emailClickLink: string;
        linkValidTime: string;
        tokenStoreSearch: string;
        unusedValid: string;
        verificationChecklist: string;
        hashMatch: string;
        expiresAtValid: string;
        usedFalse: string;
        verificationSuccess: string;
        loginStateSample: string;
    };

    // PasskeyステップUI詳細
    passkeyStepUIDetail: {
        receivedOptions: string;
        apiCall: string;
        biometricDialogShown: string;
        biometricExample: string;
        authStatus: string;
        returnedAssertion: string;
        requestContent: string;
        verificationContent: string;
        returnedToken: string;
        frontendState: string;
        loginCompleteState: string;
        // Explanation texts
        backendReturnsOptions: string;
        challengeSentToFrontend: string;
        challengeUsedForSignature: string;
        allowCredentialsLimit: string;
        frontendCallsWebAuthn: string;
        requestToAuthenticator: string;
        apiIsAsync: string;
        authenticatorRequestsBiometric: string;
        deviceSecureHardware: string;
        userEntersBiometricOrPin: string;
        authFailsHere: string;
        userBiometricSuccess: string;
        deviceConfirmedAuth: string;
        readyToSign: string;
        privateKeyNeverLeaves: string;
        authenticatorReturnsAssertion: string;
        signatureWithPrivateKey: string;
        authenticatorDataDesc: string;
        clientDataJsonDesc: string;
        assertionUsedForVerification: string;
        frontendSendsAssertion: string;
        backendVerifiesAndAuth: string;
        clientProcessingComplete: string;
        backendVerifiesChallenge: string;
        preventsReplayAttack: string;
        challengeMismatchFails: string;
        challengeOneTimeOnly: string;
        backendVerifiesWithPublicKey: string;
        publicKeyPrivateKeyRelated: string;
        verifiedMeansOwnership: string;
        backendChecksSignCount: string;
        eachAuthRecordsSignCount: string;
        greaterThanStoredOk: string;
        lessOrEqualMayBeCloned: string;
        allVerificationsPassed: string;
        sessionTokenReturned: string;
        tokenUsedForAuthState: string;
        frontendSavesToStorage: string;
        subsequentRequests: string;
        pageReloadRestoresAuth: string;
        passkeyFlowComplete: string;
        noPasswordSent: string;
        privateKeyInDevice: string;
        publicKeyCrypto: string;
        multipleSecurityChecks: string;
    };

    // SVG diagram translations (MagicFlowSvg)
    magicFlowSvg: {
        // Notes
        noteEmailInput: string;
        noteOneTimeToken: string;
        noteSendEmail: string;
        noteUserOpensEmail: string;
        noteTokenVerify: string;
        // Arrow labels
        emailInputAndSend: string;
        userLookupCreate: string;
        createMagicToken: string;
        sendEmailMagicLink: string;
        checkYourEmail: string;
        checkEmailMessage: string;
        readEmail: string;
        hashVerify: string;
        expiryUsedCheck: string;
    };
}

/**
 * ステップの翻訳構造
 */
export interface StepTranslation {
    label: string;
    description: string;
    detail: string;
}

/**
 * 言語設定
 */
export interface LanguageOption {
    code: Language;
    name: string;
    nativeName: string;
}

/**
 * 利用可能な言語一覧
 */
export const AVAILABLE_LANGUAGES: LanguageOption[] = [
    { code: 'ja', name: 'Japanese', nativeName: '日本語' },
    { code: 'en', name: 'English', nativeName: 'English' },
];
