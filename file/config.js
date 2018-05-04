var gmodLS = {}

/**
 * To get the users avatar and username, a steam web api key is needed.
 * You can get it with your steam account for free here: https://steamcommunity.com/dev/apikey
 * @type {String}
 */
gmodLS.steamWebApiKey = '7860F9308A4F4DEA3D01ECE3243A2A14';

/**
 * A URI path or full URL to the loadingscreen background.
 * Will be centered and streched if needed to the users resolution
 * @type {String}
 */
gmodLS.backgroundImg  = 'http://123.214.103.182:12355/gmod-loadingscreen-2.0.0-alpha/loadbackground.png';

/**
 * If you want music played in background add your music files here.
 * The music files must be in OGG format to be played correctly.
 * @type {Array}
 */
gmodLS.musicFiles = [
    'music/1.ogg',
    'music/2.ogg',
    'music/3.ogg',
];

/**
 * Music volume (Float value, max=1)
 * 0   = off/no music
 * 0.5 = 50% volume
 * 1   = full volume
 * @type {Number}
 */
gmodLS.musicVolume = .1;

/**
 * Serverrules - One rule per row
 * @type {Array}
 */
gmodLS.rules = [
    "유저 방해 금지",
    "어드민 경고 무시 금지",
    "테러 금지",
    "그 외 내용은 !motd 참고",
];