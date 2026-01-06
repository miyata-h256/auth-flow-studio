export function buildMagicLink(email: string): string {
    const base = 'https://app.example.com/magic-login';
    const token = btoa(JSON.stringify({ email, exp: '2025-01-01T00:00:00Z' }));
    return `${base}?token=${encodeURIComponent(token)}`;
}
