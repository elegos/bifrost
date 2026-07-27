import { FLUXER_CDN_URL, FLUXER_STATIC_CDN_URL } from './env';

export const buildFluxerAvatarUrl = (
    userId: string,
    avatarHash: string | null | undefined,
    size?: number
): string => {
    if (avatarHash) {
        const ext = avatarHash.startsWith('a_') ? 'gif' : 'png';
        const sizeParam = size ? `?size=${size}` : '';
        return `${FLUXER_CDN_URL}/avatars/${userId}/${avatarHash}.${ext}${sizeParam}`;
    }

    const index = Number(BigInt(userId) % BigInt(6));
    return `${FLUXER_STATIC_CDN_URL}/avatars/${index}.png`;
};
