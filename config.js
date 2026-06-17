// ┌─┐┌─┐┌┐┐┌─┐┌─┐┌─┐
// └─┐│ │││││ ┬├┤ └─┐
// └─┘└─┘┘└┘└─┘└─┘└─┘
// A minimal, premium startpage
// Edit this file to personalize your startpage.

const CONFIG = {
    // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
    // ├┴┐├─┤└─┐││  └─┐
    // └─┘┴ ┴└─┘┴└─┘└─┘

    // General
    name: 'Oliwier',
    imageBackground: false,
    openInNewTab: true,
    twelveHourFormat: false,

    // Greetings
    greetingMorning: 'Good morning,',
    greetingAfternoon: 'Good afternoon,',
    greetingEvening: 'Good evening,',
    greetingNight: 'Good night, sleep well.',

    // Layout
    layout: 'buttons', // 'bento', 'lists', 'buttons'

    // Weather
    weatherKey: '', // Get your API key from https://openweathermap.org/
    weatherIcons: 'OneDark', // 'OneDark', 'Nord', 'Dark', 'White'
    weatherUnit: 'C', // 'C' or 'F'
    language: 'en', // More languages at https://openweathermap.org/current#multi
    trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
    defaultLatitude: '0.0',
    defaultLongitude: '0.0',

    // Auto-change theme
    autoChangeTheme: true,

    // Auto-change by OS
    changeThemeByOS: true,

    // Auto-change by hour (24hr format, hh:mm)
    changeThemeByHour: false,
    hourDarkThemeActive: '18:30',
    hourDarkThemeInactive: '07:00',

    // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
    // ├┴┐│ │ │  │ │ ││││└─┐
    // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

    firstButtonsContainer: [
        {
            id: '1',
            name: 'GitHub',
            icon: 'github-logo',
            link: 'https://github.com/',
        },
        {
            id: '2',
            name: 'ListenBrainz',
            icon: 'headset',
            link: 'https://listenbrainz.org/user/KaziuuMaSos/',
        },
        {
            id: '3',
            name: 'YouTube',
            icon: 'youtube-logo',
            link: 'https://youtube.com/',
        },
        {
            id: '4',
            name: 'Claude',
            icon: 'asterisk-simple',
            link: 'https://claude.ai',
        },
        {
            id: '5',
            name: 'FMHY',
            icon: 'cassette-tape',
            link: 'https://fmhy.net/',
        },
        {
            id: '6',
            name: 'Send Vis',
            icon: 'cloud-arrow-up',
            link: 'https://send.vis.ee/',
        },
    ],

    secondButtonsContainer: [
        {
            id: '1',
            name: 'TikTok',
            icon: 'tiktok-logo',
            link: 'https://www.tiktok.com/',
        },
        {
            id: '2',
            name: 'Lucide Icons',
            icon: 'tornado',
            link: 'https://lucide.dev/icons/',
        },
        {
            id: '3',
            name: 'Messenger',
            icon: 'messenger-logo',
            link: 'https://www.messenger.com/e2ee/t/6898544493589156',
        },
        {
            id: '4',
            name: 'Discord',
            icon: 'discord-logo',
            link: 'https://discord.com/app',
        },
        {
            id: '5',
            name: 'SteamRip',
            icon: 'steam-logo',
            link: 'https://steamrip.com/',
        },
        {
            id: '6',
            name: 'Gemini',
            icon: 'star-four',
            link: 'https://gemini.google.com/app/',
        },
    ],

    // ┬  ┬┌─┐┌┬┐┌─┐
    // │  │└─┐ │ └─┐
    // ┴─┘┴└─┘ ┴ └─┘

    firstlistsContainer: [
        {
            icon: 'sparkle',
            id: '1',
            links: [
                {
                    name: 'Gmail',
                    link: 'https://mail.google.com/',
                },
                {
                    name: 'Calendar',
                    link: 'https://calendar.google.com/',
                },
                {
                    name: 'Drive',
                    link: 'https://drive.google.com/',
                },
                {
                    name: 'Keep',
                    link: 'https://keep.google.com/',
                },
            ],
        },
        {
            icon: 'code',
            id: '2',
            links: [
                {
                    name: 'Lucide Dev',
                    link: 'https://lucide.dev/icons/',
                },
                {
                    name: 'Stack Overflow',
                    link: 'https://stackoverflow.com/',
                },
                {
                    name: 'MDN',
                    link: 'https://developer.mozilla.org/',
                },
                {
                    name: 'Reddit',
                    link: 'https://reddit.com/',
                },
            ],
        },
    ],

    secondListsContainer: [
        {
            icon: 'music-notes-simple',
            id: '1',
            links: [
                {
                    name: 'YouTube Music',
                    link: 'https://music.youtube.com/',
                },
                {
                    name: 'SoundCloud',
                    link: 'https://soundcloud.com/',
                },
                {
                    name: 'Bandcamp',
                    link: 'https://bandcamp.com/',
                },
                {
                    name: 'Last.fm',
                    link: 'https://last.fm/',
                },
            ],
        },
        {
            icon: 'bookmark',
            id: '2',
            links: [
                {
                    name: 'Notion',
                    link: 'https://notion.so/',
                },
                {
                    name: 'Trello',
                    link: 'https://trello.com/',
                },
                {
                    name: 'Todoist',
                    link: 'https://todoist.com/',
                },
            ],
        },
    ],
};
