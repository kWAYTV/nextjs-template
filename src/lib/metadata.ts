import type { Metadata } from 'next/types';

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: 'https://perc.dev',
      images: 'https://perc.dev/og.png',
      siteName: 'perc.dev',
      ...override.openGraph
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@ogeperc',
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: 'https://perc.dev/og.png',
      ...override.twitter
    }
  };
}

export const baseUrl =
  process.env.NODE_ENV === 'development'
    ? new URL('http://localhost:3000')
    : new URL(`https://${process.env.VERCEL_URL!}`);

export const githubUsername = 'kWAYTV';
export const githubProfileUrl = `https://github.com/${githubUsername}`;
export const githubRepoUrl = `https://github.com/${githubUsername}/nextjs-template`;
