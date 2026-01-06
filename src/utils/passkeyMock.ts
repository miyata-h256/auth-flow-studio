export interface Passkey {
    credentialId: string;
    publicKey: string;
}

export interface SignedChallenge {
    challenge: string;
    signature: string;
}

export function generatePasskey(): Passkey {
    return {
        credentialId: 'cred-xyz-123',
        publicKey: 'PUBLIC_KEY_SAMPLE',
    };
}

export function signChallenge(): SignedChallenge {
    return {
        challenge: 'random_challenge_456',
        signature: 'SIGNED_CHALLENGE_SAMPLE',
    };
}
