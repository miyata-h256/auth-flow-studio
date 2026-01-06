interface JwtPayload {
    [key: string]: unknown;
}

export function decodeJwt(jwt: string | null | undefined): JwtPayload | null {
    if (!jwt) return null;
    const parts = jwt.split('.');
    if (parts.length < 2) return null;

    try {
        const payload = parts[1].replace(/-/g, '+').replace(/_/g, '/');
        const json = atob(payload);
        return JSON.parse(json) as JwtPayload;
    } catch {
        return null;
    }
}
