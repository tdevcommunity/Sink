export default defineAppConfig({
  title: 'link.ourtdev.org',
  email: 'contact@ourtdev.org',
  github: 'https://github.com/tdevcommunity/Sink/issues',
  twitter: 'https://tr.ee/2nNsUBinDx',
  telegram: 'https://t.me/tdev228',
  mastodon: '',
  blog: 'https://ourtdev.com/blog',
  description: 'Un raccourcisseur de liens simple, rapide et sécurisé avec analyses, entièrement auhébergé.',
  image: 'https://sink.cool/banner.png',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
