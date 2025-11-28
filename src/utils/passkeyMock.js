export function generatePasskey() {
  return {
    credentialId: 'cred-xyz-123',
    publicKey: 'PUBLIC_KEY_SAMPLE',
  };
}

export function signChallenge() {
  return {
    challenge: 'random_challenge_456',
    signature: 'SIGNED_CHALLENGE_SAMPLE',
  };
}
