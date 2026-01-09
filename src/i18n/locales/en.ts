// src/i18n/locales/en.ts
// English translation file

import type { TranslationKeys } from '../types';

export const en: TranslationKeys = {
    common: {
        appName: 'Auth Flow Studio',
        settings: 'Settings',
        home: 'Home',
        back: 'Back',
        next: 'Next',
        previous: 'Previous',
        close: 'Close',
        save: 'Save',
        cancel: 'Cancel',
        loading: 'Loading...',
        error: 'Error',
        notFound: 'Page Not Found',
        language: 'Language',
        theme: 'Theme',
        lightMode: 'Light Mode',
        darkMode: 'Dark Mode',
        systemDefault: 'System Default',
    },

    home: {
        title: 'Auth Flow Studio',
        subtitle: 'A mini app to experience what happens behind the scenes of various login methods',
        authFlows: 'Authentication Flows',
        compare: 'Compare',
        oidcTitle: 'OIDC Code Flow',
        oidcDescription: 'Visualize the typical OAuth2/OIDC authentication flow step by step',
        passkeyTitle: 'Passkey (WebAuthn)',
        passkeyDescription: 'Experience how passwordless authentication works',
        magicLinkTitle: 'Magic Link',
        magicLinkDescription: 'Understand the mechanism of logging in with a one-time email link',
        compareTitle: 'Compare Flows',
        compareDescription: 'Compare different authentication flows side by side',
    },

    settings: {
        title: 'Settings',
        subtitle: 'Configure application settings',
        languageSection: 'Language Settings',
        languageDescription: 'Select your display language. Changes take effect immediately.',
        appearanceSection: 'Appearance',
        appearanceDescription: 'Configure the application appearance.',
        animationSection: 'Animation',
        animationDescription: 'Configure flow display animations.',
        animationEnabled: 'Enabled',
        animationDisabled: 'Disabled',
        saveSuccess: 'Settings saved',
    },

    oidc: {
        title: 'OIDC Code Flow',
        subtitle: 'Experience the typical OAuth2/OIDC code flow through screens and backend operations',
        steps: {
            1: {
                label: 'Click OIDC Login',
                description: 'User clicks the "OIDC Login" button on the client app',
                detail: `The user clicks the "Login with OIDC" button on the client application.
This initiates the OAuth 2.0 / OIDC authorization flow.`,
            },
            2: {
                label: 'Authorization Code Request',
                description: 'Client requests authorization code from the authorization server',
                detail: `The client redirects to the authorization server's /authorize endpoint.

The request includes the following parameters:
- response_type=code
- client_id
- redirect_uri
- scope (openid, profile, email, etc.)
- state (CSRF protection)
- nonce (replay attack protection)`,
            },
            3: {
                label: 'Redirect to Login',
                description: 'Authorization server redirects user to login screen',
                detail: `The authorization server redirects the user to the authentication screen.
If the user is not yet logged in, an ID/password input screen is displayed.`,
            },
            4: {
                label: 'Login & Consent',
                description: 'User logs in and consents to the requested scopes',
                detail: `The user performs the following actions:
1. Enter credentials (ID/password, MFA, etc.)
2. Consent to access the requested scopes (profile information, etc.)

The authorization server validates the user's authentication and records consent.`,
            },
            5: {
                label: 'Authorization Code',
                description: 'Authorization server returns authorization code to client',
                detail: `After authentication and consent, the authorization server redirects to the client's redirect_uri with an authorization code.

Example: https://your-app.com/callback?code=AUTH_CODE&state=xxx

The client validates the state parameter to prevent CSRF attacks.`,
            },
            6: {
                label: 'Token Request',
                description: 'Client exchanges authorization code for tokens',
                detail: `The client sends a POST request to the authorization server's /token endpoint via back-channel (server-to-server communication).

This request requires client authentication (client_id + client_secret).`,
            },
            7: {
                label: 'Validate Code',
                description: 'Authorization server validates authorization code and client credentials',
                detail: `The authorization server validates the following:
1. Is the authorization code valid (not expired)?
2. Has the authorization code been used before (can only be used once)?
3. Does the redirect_uri match the one from the authorization request?
4. Are the client_id and client_secret correct?

If validation fails, an error response is returned.`,
            },
            8: {
                label: 'Token Response',
                description: 'Authorization server returns ID Token and Access Token',
                detail: `After successful validation, the authorization server returns the following tokens:
- access_token: Used to access the resource server
- id_token: JWT containing user information
- refresh_token: Used to refresh access token (optional)
- token_type: Bearer
- expires_in: Validity period (seconds)`,
            },
            9: {
                label: 'Login Complete',
                description: 'Client establishes user session',
                detail: `The client uses the obtained tokens to:
1. Validate id_token (signature, issuer, audience, nonce, etc.)
2. Extract user information
3. Create session
4. Treat user as logged in`,
            },
        },
    },

    passkey: {
        title: 'Passkey (WebAuthn)',
        subtitle: 'Experience how passwordless authentication works',
        steps: {
            1: {
                label: 'Click Login',
                description: 'User clicks the "Login with Passkey" button',
                detail: `The user clicks the "Login with Passkey" button on the client application.
Instead of traditional password input, an authentication flow using biometrics or PIN begins.`,
            },
            2: {
                label: 'Authentication Begin',
                description: 'Frontend requests authentication initiation from backend',
                detail: `The frontend sends a POST request to the backend's authentication start endpoint.
The backend prepares to generate a challenge (random value).`,
            },
            3: {
                label: 'Challenge Options',
                description: 'Backend returns challenge and options',
                detail: `The backend generates and returns PublicKeyCredentialRequestOptions.
This includes:
- challenge: Random bytes (replay attack prevention)
- rpId: Relying Party ID (domain)
- allowCredentials: List of available credentials
- timeout: Timeout period
- userVerification: User verification requirements`,
            },
            4: {
                label: 'credentials.get()',
                description: 'Call WebAuthn API to access Authenticator',
                detail: `The frontend calls navigator.credentials.get().
The browser forwards this request to the Authenticator (fingerprint sensor, Face ID, security key, etc.).

const credential = await navigator.credentials.get({
  publicKey: options
});`,
            },
            5: {
                label: 'Biometric / PIN Request',
                description: 'Authenticator requests biometric or PIN from user',
                detail: `The Authenticator requests authentication from the user:
- Fingerprint authentication
- Face authentication (Face ID, etc.)
- PIN input
- Security key tap

This operation grants access to the private key within the Authenticator.`,
            },
            6: {
                label: 'Authentication OK',
                description: 'User authenticates with biometric or PIN',
                detail: `When the user successfully authenticates, the Authenticator:
1. Retrieves the private key stored during registration
2. Generates a signature using the private key against the challenge
3. Increments the signCount (signature counter)`,
            },
            7: {
                label: 'Assertion',
                description: 'Authenticator returns signed Assertion',
                detail: `The Authenticator generates and returns an Assertion (authentication assertion):
- authenticatorData: rpIdHash, flags, signCount
- clientDataJSON: challenge, origin, type
- signature: Signature by private key
- userHandle: User ID (optional)

These are all returned in binary format (ArrayBuffer).`,
            },
            8: {
                label: 'Send Assertion',
                description: 'Frontend sends Assertion to backend',
                detail: `The frontend POSTs the Assertion received from the Authenticator to the backend's authentication completion endpoint.

Data is sent Base64URL encoded.`,
            },
            9: {
                label: 'Credential Lookup',
                description: 'Backend searches for credential in database',
                detail: `The backend uses the credential ID to search the database for the registered public key and related information.`,
            },
            10: {
                label: 'Verify Signature',
                description: 'Backend verifies signature with public key',
                detail: `The backend performs the following validations:
1. Does the challenge in clientDataJSON match?
2. Is the origin correct?
3. Is the rpIdHash correct?
4. Verify signature using public key`,
            },
            11: {
                label: 'Check signCount',
                description: 'Backend checks signCount',
                detail: `To detect clones, verify the signCount:
- Confirm received signCount is greater than stored value
- If abnormal, there may be a clone
- If normal, update stored value`,
            },
            12: {
                label: 'Session Token',
                description: 'Backend issues session token',
                detail: `After successful authentication, the backend:
1. Generates a session token
2. Saves session information on server
3. Returns token as response`,
            },
            13: {
                label: 'Authenticated',
                description: 'Frontend saves session',
                detail: `The frontend receives the session token and:
1. Saves to Cookie or LocalStorage
2. Updates authentication state
3. Access to protected resources becomes available`,
            },
            14: {
                label: 'Login Complete',
                description: 'User successfully logged into app',
                detail: `Passkey authentication is complete and the user is now logged into the application.

Logged in securely with just biometrics, no password needed.`,
            },
        },
    },

    magic: {
        title: 'Magic Link',
        subtitle: 'Understand the mechanism of logging in with a one-time email link',
        steps: {
            1: {
                label: 'Email Input',
                description: 'User enters email address and submits',
                detail: `The user enters their email address on the login screen and clicks the "Send Magic Link" button.

No password required, authentication starts with just the email address.`,
            },
            2: {
                label: 'Magic Link Request',
                description: 'Frontend requests magic link from API',
                detail: `The frontend requests the backend API to issue a magic link.

The email address is included in the request body.`,
            },
            3: {
                label: 'User Lookup',
                description: 'API searches for email address in User DB',
                detail: `The Auth API searches the User DB for the entered email address.

If not found, a new user may be created depending on settings.`,
            },
            4: {
                label: 'User Response',
                description: 'DB returns user information or status',
                detail: `User DB returns the search result:
- Existing user: userId, status, etc.
- New user: ID of created user
- Error: User not found (depending on settings)`,
            },
            5: {
                label: 'Create Token',
                description: 'API generates and stores one-time token',
                detail: `The Auth API performs the following:
1. Generate a secure random token (32+ bytes)
2. Calculate hash of the token
3. Store hash in Token Store (DB/Redis)
4. Set expiration (typically 15 minutes to 1 hour)

The original token is included in the email link.`,
            },
            6: {
                label: 'Token ID Response',
                description: 'Token Store returns token ID',
                detail: `Token Store confirms successful storage of the token record and returns a token ID or confirmation.

This allows the record to be identified during token verification later.`,
            },
            7: {
                label: 'Send Email',
                description: 'API requests email service to send magic link',
                detail: `The Auth API requests the Email Service (SMTP/SES/SendGrid, etc.) to send an email containing the magic link.

The link includes:
- rid (random ID)
- token (one-time token)
- expiration information`,
            },
            8: {
                label: 'Email Accepted',
                description: 'Email service accepts send request',
                detail: `The Email Service accepts the email send request.
Actual delivery is performed asynchronously.`,
            },
            9: {
                label: 'API Response',
                description: 'API returns success to frontend',
                detail: `The Auth API returns a success response to the frontend.
This is to display a "Please check your email" message.`,
            },
            10: {
                label: 'Check Email',
                description: 'User checks their mailbox',
                detail: `The user opens their mailbox and looks for the email from Auth Flow.`,
            },
            11: {
                label: 'Open Email',
                description: 'User opens the magic link email',
                detail: `The user opens the received email.
The email contains a magic link.`,
            },
            12: {
                label: 'Click Link',
                description: 'User clicks the magic link',
                detail: `When the user clicks the link in the email, the browser opens the application's authentication callback URL.`,
            },
            13: {
                label: 'Verify Request',
                description: 'Frontend requests token verification',
                detail: `The frontend extracts the token from the URL and sends a verification request to the backend.`,
            },
            14: {
                label: 'Token Lookup',
                description: 'API searches for token in Token Store',
                detail: `The Auth API searches the Token Store for the hash of the received token.`,
            },
            15: {
                label: 'Token Record',
                description: 'Token Store returns token record',
                detail: `Token Store returns the user ID, expiration, usage status, etc. associated with the token.`,
            },
            16: {
                label: 'Validate Token',
                description: 'API validates token',
                detail: `The Auth API validates the following:
1. Does the token exist?
2. Is it within the expiration period?
3. Has it not been used yet?

After successful validation, the token is invalidated (marked as used).`,
            },
            17: {
                label: 'Login Complete',
                description: 'User successfully logged into app',
                detail: `Magic Link authentication is complete and the user is now logged into the application.

Logged in securely with just email, no password needed.`,
            },
        },
    },

    compare: {
        title: 'Flow Compare',
        subtitle: 'Compare two authentication flows side by side to understand the differences visually',
        stepDetails: 'Step Details',
        stepDetailsHint: 'Click on a step (number circle) in the flow to see details',
        notSelected: 'Not selected',
        flowA: 'Flow A',
        flowB: 'Flow B',
    },

    stepDetail: {
        httpMethod: 'HTTP Method',
        endpoint: 'Endpoint',
        payload: 'Payload',
    },

    flowNames: {
        oidc: 'OIDC / Authorization Code',
        passkey: 'Passkey',
        magic: 'Magic Link',
    },

    // Step UI common
    stepUI: {
        back: '← Back',
        next: 'Next →',
        stepN: 'Step',
        whatHappens: 'What happens in this step',
        behindTheScenes: 'Behind the Scenes',
        requestContent: 'Request Content',
        sentParameters: 'Sent Parameters',
        loginWithPasskey: 'Login with Passkey',
        loginWithOidc: 'Login with OIDC',
        sendMagicLink: 'Send Magic Link',
    },

    // OIDC Step UI
    oidcStepUI: {
        clientApp: 'Client Application',
        clientAppDesc: 'User starts "Login with OIDC" from the client application.',
        authCodeRequest: 'Authorization Code Request',
        authCodeRequestDesc: 'Client requests an Authorization Code from the authorization server.',
        redirectToLogin: 'Redirect to Login',
        redirectToLoginDesc: 'Authorization server redirects user to login screen.',
        providerLogin: 'Provider Login',
        providerLoginDesc: 'User enters credentials and consents to requested scopes.',
        redirectWithCode: 'Redirect with Code',
        redirectWithCodeDesc: 'Authorization server redirects to client with authorization code.',
        tokenRequest: 'Token Request',
        tokenRequestDesc: 'Client exchanges authorization code for tokens.',
        validateCode: 'Validate Code',
        validateCodeDesc: 'Authorization server validates the authorization code.',
        tokenResponse: 'Token Response',
        tokenResponseDesc: 'Authorization server returns ID Token and Access Token.',
        loginComplete: 'Login Complete',
        loginCompleteDesc: 'User has logged into the application.',
        stateForCsrf: 'state is a random value for CSRF protection.',
        nonceForIdToken: 'nonce is a temporary value for ID Token verification.',
        invisibleSafety: 'These are invisible from the frontend but are important security measures.',
        browserRedirect: 'Browser is redirected to the authorization endpoint.',
        requestContains: 'Request contains response_type=code etc.',
        userNotLoggedIn: 'If user is not logged in, login screen is displayed.',
        userEntersCreds: 'User enters credentials (ID/password etc.).',
        serverValidates: 'Authorization server validates credentials.',
        serverRecordsConsent: 'Consent to requested scopes is recorded.',
        serverGeneratesCode: 'Authorization server generates authorization code and appends to redirect URI.',
        clientValidatesState: 'Client validates state parameter to prevent CSRF attacks.',
        backChannelRequest: 'Client requests tokens via back-channel (server-to-server).',
        clientAuth: 'This request requires client authentication.',
        serverValidatesCode: 'Authorization server validates the following:',
        serverValidatesCodeDetails: 'Code validity, unused, redirect_uri match, client authentication',
        serverIssuesTokens: 'After validation, authorization server issues tokens.',
        tokenDetails: 'Includes access_token, id_token, refresh_token (optional).',
        clientValidatesIdToken: 'Client validates id_token (signature, issuer, audience, nonce, etc.)',
        clientExtractsUser: 'Extracts user information and creates session.',
        clientCreatesSession: 'Treats user as logged in.',
        goHome: 'Go to Home',
        clientBuildsAuthRequest: 'Client builds the Authorization Request.',
        mockLoginForm: 'Login Form (mock)',
        mockBrowserUrl: 'Browser URL (mock)',
        queryContainsCodeState: 'Query contains code and state.',
        csrfMismatchAbort: 'If they don\'t match, a CSRF attack is suspected and processing is aborted.',
        mockLoginStatus: 'Login Status (sample)',
        accessTokenUsedForApi: 'Subsequent requests use the Access Token for API calls.',
        oidcFlowComplete: 'This completes the overview of the OIDC Code Flow.',
    },

    // Passkey Step UI
    passkeyStepUI: {
        loginClick: 'Login Button Click',
        loginClickDesc: 'User clicks the "Login with Passkey" button.',
        authBegin: 'Authentication Begin Request',
        authBeginDesc: 'Frontend sends POST /webauthn/authenticate/begin request to backend.',
        challengeOptions: 'Challenge & Options',
        challengeOptionsDesc: 'Backend returns challenge and options.',
        credentialsGet: 'credentials.get() Call',
        credentialsGetDesc: 'Frontend calls WebAuthn API.',
        biometricRequest: 'Biometric / PIN Request',
        biometricRequestDesc: 'Authenticator requests user verification.',
        authOk: 'Authentication OK',
        authOkDesc: 'User authenticated with biometric or PIN.',
        assertion: 'Assertion Generation',
        assertionDesc: 'Authenticator generates signed Assertion.',
        authComplete: 'Assertion Submission',
        authCompleteDesc: 'Frontend sends Assertion to backend.',
        verifyChallenge: 'Credential Lookup',
        verifyChallengeDesc: 'Backend searches for credential in database.',
        verifySignature: 'Signature Verification',
        verifySignatureDesc: 'Backend verifies signature with public key.',
        checkSignCount: 'signCount Check',
        checkSignCountDesc: 'Backend checks signCount.',
        sessionToken: 'Session Token Issuance',
        sessionTokenDesc: 'Backend issues session token.',
        authenticated: 'Session Established',
        authenticatedDesc: 'Frontend saves session.',
        loginComplete: 'Login Complete',
        loginCompleteDesc: 'User has logged into the application.',
        frontendReceivesAction: 'Frontend application receives user action.',
        preparesBackendRequest: 'Prepares to send authentication start request to backend.',
        backendStartsSession: 'Backend starts authentication session.',
        challengeGenerated: 'Challenge required for authentication is generated.',
        noUserIdYet: 'This request does not yet contain user identification.',
        backendGeneratesOptions: 'Backend generates PublicKeyCredentialRequestOptions.',
        optionsIncludes: 'Includes challenge, rpId, allowCredentials, timeout, etc.',
        browserCallsApi: 'Browser calls navigator.credentials.get().',
        apiForwardsToAuth: 'Request is forwarded to Authenticator.',
        authRequestsVerification: 'Authenticator requests user verification (fingerprint, face, PIN, etc.).',
        userVerifies: 'When user authenticates, access to private key is granted.',
        onSuccess: 'On success:',
        authGeneratesAssertion: 'Authenticator generates signed Assertion.',
        assertionIncludes: 'Includes authenticatorData, clientDataJSON, signature, etc.',
        frontendPostsAssertion: 'Frontend POSTs Assertion to backend.',
        dataBase64Encoded: 'Data is sent Base64URL encoded.',
        backendSearchesCredential: 'Backend searches database by credential ID.',
        backendValidates: 'Backend validates: challenge match, origin, rpIdHash, signature',
        signCountCheck: 'Confirms signCount is greater than stored value.',
        cloneDetection: 'If abnormal, there may be a clone.',
        sessionGenerated: 'Session token is generated.',
        sessionSaved: 'Session information is saved on server.',
        frontendSavesSession: 'Frontend saves token to Cookie/LocalStorage.',
        authStateUpdated: 'Auth state is updated, protected resources become accessible.',
        passkeyAuthComplete: 'Passkey authentication complete.',
        noPasswordNeeded: 'Logged in securely with just biometrics, no password needed.',
        goHome: 'Go to Home',
    },

    // MagicLink Step UI
    magicStepUI: {
        emailInput: 'Email Input',
        emailInputDesc: 'User enters email address and clicks send button.',
        magicLinkRequest: 'Magic Link Request',
        magicLinkRequestDesc: 'Frontend sends Magic Link request to Auth API.',
        userLookup: 'User Lookup',
        userLookupDesc: 'Auth API searches for email address in User DB.',
        userResponse: 'User Response',
        userResponseDesc: 'DB returns user information.',
        createToken: 'Token Creation',
        createTokenDesc: 'API generates and stores one-time token.',
        tokenIdResponse: 'Token ID Response',
        tokenIdResponseDesc: 'Token Store returns token ID.',
        sendEmail: 'Send Email',
        sendEmailDesc: 'API requests email service to send magic link.',
        emailAccepted: 'Email Accepted',
        emailAcceptedDesc: 'Email service accepted send request.',
        apiResponse: 'API Response',
        apiResponseDesc: 'API returns success to frontend.',
        checkEmail: 'Check Email Prompt',
        checkEmailDesc: 'Prompts user to check their email.',
        openEmail: 'Open Email',
        openEmailDesc: 'User opens the magic link email.',
        clickLink: 'Click Link',
        clickLinkDesc: 'User clicks the magic link.',
        verifyRequest: 'Verify Request',
        verifyRequestDesc: 'Frontend requests token verification.',
        lookupToken: 'Token Lookup',
        lookupTokenDesc: 'API searches for token in Token Store.',
        tokenRecord: 'Token Record',
        tokenRecordDesc: 'Token Store returns token record.',
        validateToken: 'Validate Token',
        validateTokenDesc: 'API validates token.',
        loginComplete: 'Login Complete',
        loginCompleteDesc: 'User has logged into the application.',
        userEntersEmail: 'User enters email address and clicks "Send".',
        frontendAction: 'This step happens on the frontend.',
        nextStepApiCall: 'In the next step, frontend sends request to API.',
        frontendCallsApi: 'Frontend calls Auth API /auth/magic-link/request endpoint.',
        clientInfoSecurity: 'clientInfo may include user agent and IP for security purposes.',
        apiProcesses: 'API receives this and performs user lookup/token issuance.',
        apiSearchesUser: 'Auth API searches User DB for email address.',
        newUserMayCreate: 'If not found, may create as new user.',
        dbReturnsUser: 'DB returns user search result:',
        existingUser: 'Existing user: userId, status, etc.',
        newUser: 'New user: ID of created user',
        errorNotFound: 'Error: User not found (depending on settings)',
        apiGeneratesToken: 'API generates a secure random token.',
        tokenStored: 'Token hash is stored in Token Store.',
        expirationSet: 'Expiration is set (typically 15 minutes to 1 hour).',
        tokenStoredSuccess: 'Token Store confirms successful storage.',
        recordIdentifiable: 'This allows the record to be identified during token verification.',
        apiRequestsEmail: 'API requests Email Service (SMTP/SES/SendGrid) to send email.',
        linkContains: 'Link contains rid (random ID) and token (one-time token).',
        emailServiceAccepts: 'Email Service accepts the email send request.',
        asyncDelivery: 'Actual delivery happens asynchronously.',
        apiReturnsSuccess: 'Auth API returns success response to frontend.',
        showCheckEmailMessage: 'Shows "Please check your email" message.',
        userChecksMailbox: 'User opens their mailbox and looks for the email.',
        userOpensEmail: 'User opens the received email.',
        emailContainsLink: 'Email contains a magic link.',
        userClicksLink: 'User clicks the link in the email.',
        browserOpensCallback: 'Browser opens application\'s authentication callback URL.',
        frontendExtractsToken: 'Frontend extracts token from URL.',
        sendsVerification: 'Sends verification request to backend.',
        apiSearchesToken: 'Auth API searches Token Store for token hash.',
        tokenStoreReturns: 'Token Store returns userId, expiration, usage status, etc.',
        apiValidatesToken: 'API validates token existence, expiration, and usage status.',
        tokenInvalidated: 'After successful validation, token is invalidated (marked as used).',
        magicLinkComplete: 'Magic Link authentication complete.',
        noPasswordEmail: 'Logged in securely with just email, no password needed.',
        goHome: 'Go to Home',
        // Mock box labels
        dbQuery: 'DB Query (Example)',
        dbResponse: 'DB Response',
        tokenCreateRequest: 'Token Creation Request',
        tokenStoreResponse: 'Token Store Response',
        emailSendRequest: 'Email Send Request',
        loginLink: 'Login Link',
        clickLinkToLogin: 'Click the link below to log in',
        emailServiceResponse: 'Email Service Response',
        checkYourEmail: 'Please check your email',
        sentLoginLink: 'We sent a login link to the email address you entered.',
        clickLinkInEmail: 'Click the link in the email to log in.',
        emailFrom: 'noreply@app.example.com',
        emailSubject: 'Subject: Your Login Link',
        emailGreeting: 'Hello,',
        emailClickLink: 'Click the link below to log in:',
        linkValidTime: 'This link is valid for 15 minutes.',
        tokenStoreSearch: 'Token Store Search',
        unusedValid: 'Unused & Within Expiration',
        verificationChecklist: 'Verification Checklist',
        hashMatch: 'hash(token) matches storedHash',
        expiresAtValid: 'expiresAt is after current time (within expiration)',
        usedFalse: 'used = false (unused)',
        verificationSuccess: 'Verification Success',
        loginStateSample: 'Login State (Sample)',
    },

    // Passkey Step UI Detail
    passkeyStepUIDetail: {
        receivedOptions: 'Received Options',
        apiCall: 'API Call',
        biometricDialogShown: 'Biometric dialog is displayed',
        biometricExample: 'e.g., Touch ID / Face ID / Windows Hello',
        authStatus: 'Authentication Status',
        returnedAssertion: 'Returned Assertion',
        requestContent: 'Request Content',
        verificationContent: 'Verification Content',
        returnedToken: 'Returned Token',
        frontendState: 'Frontend State',
        loginCompleteState: 'Login Complete State',
        // Explanation texts
        backendReturnsOptions: 'Backend returns PublicKeyCredentialRequestOptions to frontend.',
        challengeSentToFrontend: 'The challenge generated by the backend is sent to the frontend.',
        challengeUsedForSignature: 'The challenge is temporary and used for signature verification.',
        allowCredentialsLimit: 'If allowCredentials is included in options, you can limit to user\'s registered devices.',
        frontendCallsWebAuthn: 'Frontend calls WebAuthn API\'s credentials.get().',
        requestToAuthenticator: 'Request is sent from frontend to authenticator.',
        apiIsAsync: 'This API is asynchronous and waits for user action.',
        authenticatorRequestsBiometric: 'In the next step, user biometric authentication (Touch ID / Face ID) will be requested.',
        deviceSecureHardware: 'Device\'s secure hardware is activated (Touch ID, etc.).',
        userEntersBiometricOrPin: 'User enters biometric or device PIN.',
        authFailsHere: 'If authentication fails, processing stops here.',
        userBiometricSuccess: 'User successfully authenticated with biometrics.',
        deviceConfirmedAuth: 'Device has confirmed authentication.',
        readyToSign: 'Ready to sign the challenge with private key.',
        privateKeyNeverLeaves: 'Private key never leaves the device — signature is generated within the device.',
        authenticatorReturnsAssertion: 'Authenticator returns signed Assertion to frontend.',
        signatureWithPrivateKey: 'signature: Signature with private key against the challenge',
        authenticatorDataDesc: 'authenticatorData: Device-side authentication information',
        clientDataJsonDesc: 'clientDataJSON: Client-side information (origin, challenge, etc.)',
        assertionUsedForVerification: 'This Assertion is used for server-side signature verification.',
        frontendSendsAssertion: 'Frontend sends Assertion to backend and executes POST /webauthn/authenticate/complete.',
        backendVerifiesAndAuth: 'Backend will verify the signature and authenticate the user.',
        clientProcessingComplete: 'Client-side processing is mostly complete here.',
        backendVerifiesChallenge: 'Backend verifies that the challenge in clientDataJSON matches the one it sent.',
        preventsReplayAttack: 'Prevents replay attacks.',
        challengeMismatchFails: 'If challenge doesn\'t match, authentication fails.',
        challengeOneTimeOnly: 'Challenge is typically one-time use only and cannot be used multiple times.',
        backendVerifiesWithPublicKey: 'Backend verifies signature using registered public key.',
        publicKeyPrivateKeyRelated: 'Public key and private key are mathematically related; verification with public key proves it was signed with the private key.',
        verifiedMeansOwnership: 'This proves ownership of the private key.',
        backendChecksSignCount: 'Backend checks authenticator\'s signCount to verify it\'s not a clone.',
        eachAuthRecordsSignCount: 'Each authenticator records signCount (signature count).',
        greaterThanStoredOk: 'If greater than server\'s stored signCount, it\'s a legitimate device.',
        lessOrEqualMayBeCloned: 'If signCount is less than or equal to previous value, device may be cloned.',
        allVerificationsPassed: 'All verifications passed. Backend returns session token (JWT, etc.) to frontend.',
        sessionTokenReturned: 'Session token is returned to frontend.',
        tokenUsedForAuthState: 'This token can be used in subsequent requests to maintain authentication state.',
        frontendSavesToStorage: 'Frontend saves session token and confirms user is authenticated.',
        subsequentRequests: 'By including this token in all subsequent requests, authentication state can be maintained.',
        pageReloadRestoresAuth: 'Even after page reload, authentication state is restored using the token.',
        passkeyFlowComplete: 'Passkey authentication flow is complete and user is logged in.',
        noPasswordSent: 'No password was ever sent.',
        privateKeyInDevice: 'Private key never leaves the device — only the signature is sent.',
        publicKeyCrypto: 'Public key cryptography enables highly secure authentication.',
        multipleSecurityChecks: 'Multiple security checks (challenge verification, signature verification, signCount check) prevent spoofing attacks.',
    },

    // SVG diagram translations (MagicFlowSvg)
    magicFlowSvg: {
        // Notes
        noteEmailInput: '① Email Address Input',
        noteOneTimeToken: '② One-Time Token Issuance (Short-lived)',
        noteSendEmail: '③ Send Email (with embedded link)',
        noteUserOpensEmail: '④ User opens email and clicks link',
        noteTokenVerify: '⑤ Token verification & login confirmed',
        // Arrow labels
        emailInputAndSend: 'Enter email & send',
        userLookupCreate: 'User lookup/create',
        createMagicToken: 'create magic_token (hash saved)',
        sendEmailMagicLink: 'Send email (Magic Link)',
        checkYourEmail: '200 OK "Check your email"',
        checkEmailMessage: '"Please check your email"',
        readEmail: 'Read email',
        hashVerify: 'hash(token) match confirmation',
        expiryUsedCheck: 'Check expiry / used=false',
    },
};
