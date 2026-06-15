# Sukoon

A minimal, premium startpage with Swiss typography, calm aesthetics, and thoughtful micro-interactions.

> *Sukoon* (सुकून) — Urdu/Hindi for peace, tranquility.

## Features

- **Geist variable font** — clean, modern typography loaded globally
- **Typewriter greeting** — multi-stage typed effect with natural keystroke jitter, punctuation pauses, and a smart fading caret
- **Phosphor Icons** — fast, class-based icon rendering via CDN
- **Swiss date & weather stack** — centered, typographic layout with a fading divider line
- **Accent color system** — symmetric color spills across clock separator, greeting name, date elements, and weather details
- **Staggered entry animations** — cards fade and slide up sequentially on load
- **Dark/Light mode** — toggle with smooth icon rotation and tactile button feedback
- **Expanding underline hovers** — modern center-expanding effect on list links
- **12h/24h clock** — configurable, zero-padded
- **Weather widget** — minimal, iconless, locationless display via OpenWeatherMap
- **Responsive grid layout** — three layout modes: `bento`, `lists`, `buttons`

## Usage

### As Homepage

1. Fork this repo
2. Enable GitHub Pages: `Settings → GitHub Pages → Source [master branch] → Save`
3. Set as homepage in your browser settings

### As New Tab

- **Firefox**: [Custom New Tab Page](https://addons.mozilla.org/en-US/firefox/addon/custom-new-tab-page/) — enable "Force links to open in the top frame"
- **Chromium** (Chrome, Brave, Vivaldi): [Custom New Tab URL](https://chrome.google.com/webstore/detail/custom-new-tab-url/mmjbdbjnoablegbkcklggeknkfcjkjia)

### Docker

```bash
docker-compose up -d
```

Or with `docker run`:

```bash
docker run -it -d -p 80:80 -v ./config.js:/usr/share/nginx/html/config.js sukoon
```

## Customization

All customization lives in `config.js`:

### General

```js
name: 'YourName',
imageBackground: false,
openInNewTab: false,
twelveHourFormat: true,
```

### Greetings

```js
greetingMorning: 'Good morning,',
greetingAfternoon: 'Good afternoon,',
greetingEvening: 'Good evening,',
greetingNight: 'Good night, sleep well.',
```

### Layout

Three layout modes:

```js
layout: 'bento', // 'bento', 'lists', 'buttons'
```

### Weather

Get an API key from [OpenWeatherMap](https://openweathermap.org/):

```js
weatherKey: 'your-api-key',
weatherUnit: 'C', // 'C' or 'F'
language: 'en',
trackLocation: true,
defaultLatitude: '0.0',
defaultLongitude: '0.0',
```

### Theme Auto-Change

```js
autoChangeTheme: true,
changeThemeByOS: true,
changeThemeByHour: false,
hourDarkThemeActive: '18:30',
hourDarkThemeInactive: '07:00',
```

### Colors

Edit the CSS variables in `app.css`:

```css
:root {
  --accent: #537060;
  --bg: #f5f5f5;
  --sbg: #e4e6e6;
  --fg: #3a3a3a;
  --sfg: #3a3a3a;
}

.darktheme {
  --accent: #8fa89b;
  --bg: #19171a;
  --sbg: #201e21;
  --fg: #d8dee9;
  --sfg: #3a3a3a;
}
```

## Credits

Sukoon is based on [Bento](https://github.com/migueravila/bento) by [Miguel Ávila](https://avila.sh), licensed under [GPL-3.0](https://www.gnu.org/licenses/gpl-3.0).

## License

[GPL-3.0](License)
