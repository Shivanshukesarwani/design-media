# Design Media

A modern, Netflix/Prime Video inspired UI for Jellyfin, fully brandable and self-hosted.

## Features
- Dynamic carousels: Continue Watching, Trending, Recommendations
- Full video player with subtitles & audio tracks
- Watchlist & Favorites
- Search with filters
- Profile management & avatars
- Admin tools
- PWA (installable)
- Theme switcher (dark/light)
- Multi-language support
- Mobile/desktop responsive
- Notifications for playback, library updates

## Quick Start
```bash
git clone https://github.com/yourusername/design-media.git
cd design-media
npm install
npm run dev
```

## Deployment
### Docker
```bash
docker build -t design-media .
docker run -p 80:80 design-media
```

## Customization
- Logo, theme, and colors: see `src/theme.ts` and `public/`
- Add languages in `src/i18n.ts`

## Contribution
See [CONTRIBUTING.md](CONTRIBUTING.md)

## License
MIT