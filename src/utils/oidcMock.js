export function buildAuthRequest() {
  return {
    client_id: 'demo-client',
    redirect_uri: 'https://app.example.com/callback',
    scope: 'openid profile email',
    response_type: 'code',
    state: 'random_state_xyz',
    nonce: 'random_nonce_abc',
  };
}

export function buildRedirectUrl() {
  return 'https://app.example.com/callback?code=AUTH_CODE_123&state=random_state_xyz';
}

export function issueTokens() {
  return {
    accessToken: 'ACCESS_TOKEN_SAMPLE',
    idToken: createMockIdToken(),
    refreshToken: 'REFRESH_TOKEN_SAMPLE',
  };
}

function createMockIdToken() {
  const header = { alg: 'HS256', typ: 'JWT' };
  const payload = {
    iss: 'https://issuer.example.com',
    aud: 'demo-client',
    sub: 'user-123',
    email: 'user@example.com',
    name: 'Demo User',
  };

  const toBase64 = (obj) =>
    btoa(JSON.stringify(obj))
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');

  return `${toBase64(header)}.${toBase64(payload)}.signature`;
}
