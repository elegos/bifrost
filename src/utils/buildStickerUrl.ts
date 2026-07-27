import { FLUXER_CDN_URL } from './env';

export const buildFluxerStickerUrl = (
    id: string,
    animated: boolean,
    size?: number
) => {
    const url = `${FLUXER_CDN_URL}/stickers/${id}?size=${size || 320}&animated=${animated}`;
    return url;
};

export const buildDiscordStickerUrl = (id: string, size?: number) => {
    return `https://media.discordapp.net/stickers/${id}.webp?size=${size || 320}&quality=lossless`;
};
