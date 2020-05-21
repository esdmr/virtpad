/// <reference types="node"/>
import type { WriteStream } from 'fs';

export interface SetupConfig {
    EV_KEY: number[];
    EV_ABS?: number[];
    EV_REL?: number[];
}

export interface CreateConfig {
    name: string;
    ffEffectsMax?: number;
    absMax?: Abs[];
    absMin?: Abs[];
    absFuzz?: Abs[];
    absFlat?: Abs[];

    id: {
        busType: number;
        vendor: number;
        product: number;
        version: number;
    };
}

export type EventType = number;
export type CodeType = number;
export type InputEvent =
    (type: EventType, code: CodeType, value: number) => Buffer;

export interface Abs {
    offset: number;
    value: number;
}

declare class UInput {
    constructor (stream: WriteStream);
    write (data: any): Promise<void>;
    create (option: CreateConfig): Promise<void>;
    sendEvent (type: EventType, code: CodeType, value: number): Promise<void>;
    keyEvent (code: CodeType): Promise<void>;
    emitCombo (code: CodeType[]): Promise<void>;
}

export function abs (offset: number, value: number): Abs;
export function setup (options: SetupConfig): Promise<UInput>;

export namespace events {
    export const ABS_X: 0;
    export const ABS_Y: 1;
    export const ABS_Z: 2;
    export const ABS_RX: 3;
    export const ABS_RY: 4;
    export const ABS_RZ: 5;
    export const ABS_THROTTLE: 6;
    export const ABS_RUDDER: 7;
    export const ABS_WHEEL: 8;
    export const ABS_GAS: 9;
    export const ABS_BRAKE: 10;
    export const ABS_HAT0X: 16;
    export const ABS_HAT0Y: 17;
    export const ABS_HAT1X: 18;
    export const ABS_HAT1Y: 19;
    export const ABS_HAT2X: 20;
    export const ABS_HAT2Y: 21;
    export const ABS_HAT3X: 22;
    export const ABS_HAT3Y: 23;
    export const ABS_PRESSURE: 24;
    export const ABS_DISTANCE: 25;
    export const ABS_TILT_X: 26;
    export const ABS_TILT_Y: 27;
    export const ABS_TOOL_WIDTH: 28;
    export const ABS_VOLUME: 32;
    export const ABS_MISC: 40;
    export const ABS_MT_SLOT: 47;
    export const ABS_MT_TOUCH_MAJOR: 48;
    export const ABS_MT_TOUCH_MINOR: 49;
    export const ABS_MT_WIDTH_MAJOR: 50;
    export const ABS_MT_WIDTH_MINOR: 51;
    export const ABS_MT_ORIENTATION: 52;
    export const ABS_MT_POSITION_X: 53;
    export const ABS_MT_POSITION_Y: 54;
    export const ABS_MT_TOOL_TYPE: 55;
    export const ABS_MT_BLOB_ID: 56;
    export const ABS_MT_TRACKING_ID: 57;
    export const ABS_MT_PRESSURE: 58;
    export const ABS_MT_DISTANCE: 59;
    export const ABS_MAX: 63;
    export const ABS_CNT: 64;
    export const BTN_0: 256;
    export const BTN_MISC: 256;
    export const BTN_1: 257;
    export const BTN_2: 258;
    export const BTN_3: 259;
    export const BTN_4: 260;
    export const BTN_5: 261;
    export const BTN_6: 262;
    export const BTN_7: 263;
    export const BTN_8: 264;
    export const BTN_9: 265;
    export const BTN_LEFT: 272;
    export const BTN_MOUSE: 272;
    export const BTN_RIGHT: 273;
    export const BTN_MIDDLE: 274;
    export const BTN_SIDE: 275;
    export const BTN_EXTRA: 276;
    export const BTN_FORWARD: 277;
    export const BTN_BACK: 278;
    export const BTN_TASK: 279;
    export const BTN_JOYSTICK: 288;
    export const BTN_TRIGGER: 288;
    export const BTN_THUMB: 289;
    export const BTN_THUMB2: 290;
    export const BTN_TOP: 291;
    export const BTN_TOP2: 292;
    export const BTN_PINKIE: 293;
    export const BTN_BASE: 294;
    export const BTN_BASE2: 295;
    export const BTN_BASE3: 296;
    export const BTN_BASE4: 297;
    export const BTN_BASE5: 298;
    export const BTN_BASE6: 299;
    export const BTN_DEAD: 303;
    export const BTN_A: 304;
    export const BTN_GAMEPAD: 304;
    export const BTN_B: 305;
    export const BTN_C: 306;
    export const BTN_X: 307;
    export const BTN_Y: 308;
    export const BTN_Z: 309;
    export const BTN_TL: 310;
    export const BTN_TR: 311;
    export const BTN_TL2: 312;
    export const BTN_TR2: 313;
    export const BTN_SELECT: 314;
    export const BTN_START: 315;
    export const BTN_MODE: 316;
    export const BTN_THUMBL: 317;
    export const BTN_THUMBR: 318;
    export const BTN_DIGI: 320;
    export const BTN_TOOL_PEN: 320;
    export const BTN_TOOL_RUBBER: 321;
    export const BTN_TOOL_BRUSH: 322;
    export const BTN_TOOL_PENCIL: 323;
    export const BTN_TOOL_AIRBRUSH: 324;
    export const BTN_TOOL_FINGER: 325;
    export const BTN_TOOL_MOUSE: 326;
    export const BTN_TOOL_LENS: 327;
    export const BTN_TOOL_QUINTTAP: 328;
    export const BTN_TOUCH: 330;
    export const BTN_STYLUS: 331;
    export const BTN_STYLUS2: 332;
    export const BTN_TOOL_DOUBLETAP: 333;
    export const BTN_TOOL_TRIPLETAP: 334;
    export const BTN_TOOL_QUADTAP: 335;
    export const BTN_GEAR_DOWN: 336;
    export const BTN_WHEEL: 336;
    export const BTN_GEAR_UP: 337;
    export const BTN_TRIGGER_HAPPY: 704;
    export const BTN_TRIGGER_HAPPY1: 704;
    export const BTN_TRIGGER_HAPPY2: 705;
    export const BTN_TRIGGER_HAPPY3: 706;
    export const BTN_TRIGGER_HAPPY4: 707;
    export const BTN_TRIGGER_HAPPY5: 708;
    export const BTN_TRIGGER_HAPPY6: 709;
    export const BTN_TRIGGER_HAPPY7: 710;
    export const BTN_TRIGGER_HAPPY8: 711;
    export const BTN_TRIGGER_HAPPY9: 712;
    export const BTN_TRIGGER_HAPPY10: 713;
    export const BTN_TRIGGER_HAPPY11: 714;
    export const BTN_TRIGGER_HAPPY12: 715;
    export const BTN_TRIGGER_HAPPY13: 716;
    export const BTN_TRIGGER_HAPPY14: 717;
    export const BTN_TRIGGER_HAPPY15: 718;
    export const BTN_TRIGGER_HAPPY16: 719;
    export const BTN_TRIGGER_HAPPY17: 720;
    export const BTN_TRIGGER_HAPPY18: 721;
    export const BTN_TRIGGER_HAPPY19: 722;
    export const BTN_TRIGGER_HAPPY20: 723;
    export const BTN_TRIGGER_HAPPY21: 724;
    export const BTN_TRIGGER_HAPPY22: 725;
    export const BTN_TRIGGER_HAPPY23: 726;
    export const BTN_TRIGGER_HAPPY24: 727;
    export const BTN_TRIGGER_HAPPY25: 728;
    export const BTN_TRIGGER_HAPPY26: 729;
    export const BTN_TRIGGER_HAPPY27: 730;
    export const BTN_TRIGGER_HAPPY28: 731;
    export const BTN_TRIGGER_HAPPY29: 732;
    export const BTN_TRIGGER_HAPPY30: 733;
    export const BTN_TRIGGER_HAPPY31: 734;
    export const BTN_TRIGGER_HAPPY32: 735;
    export const BTN_TRIGGER_HAPPY33: 736;
    export const BTN_TRIGGER_HAPPY34: 737;
    export const BTN_TRIGGER_HAPPY35: 738;
    export const BTN_TRIGGER_HAPPY36: 739;
    export const BTN_TRIGGER_HAPPY37: 740;
    export const BTN_TRIGGER_HAPPY38: 741;
    export const BTN_TRIGGER_HAPPY39: 742;
    export const BTN_TRIGGER_HAPPY40: 743;
    export const BUS_PCI: 1;
    export const BUS_ISAPNP: 2;
    export const BUS_USB: 3;
    export const BUS_HIL: 4;
    export const BUS_BLUETOOTH: 5;
    export const BUS_VIRTUAL: 6;
    export const BUS_ISA: 16;
    export const BUS_I8042: 17;
    export const BUS_XTKBD: 18;
    export const BUS_RS232: 19;
    export const BUS_GAMEPORT: 20;
    export const BUS_PARPORT: 21;
    export const BUS_AMIGA: 22;
    export const BUS_ADB: 23;
    export const BUS_I2C: 24;
    export const BUS_HOST: 25;
    export const BUS_GSC: 26;
    export const BUS_ATARI: 27;
    export const BUS_SPI: 28;
    export const EV_SYN: 0;
    export const EV_KEY: 1;
    export const EV_REL: 2;
    export const EV_ABS: 3;
    export const EV_MSC: 4;
    export const EV_SW: 5;
    export const EV_LED: 17;
    export const EV_SND: 18;
    export const EV_REP: 20;
    export const EV_FF: 21;
    export const EV_PWR: 22;
    export const EV_FF_STATUS: 23;
    export const EV_MAX: 31;
    export const EV_CNT: 32;
    export const EV_UINPUT: 257;
    export const FF_STATUS_STOPPED: 0;
    export const FF_STATUS_MAX: 1;
    export const FF_STATUS_PLAYING: 1;
    export const FF_EFFECT_MIN: 80;
    export const FF_RUMBLE: 80;
    export const FF_PERIODIC: 81;
    export const FF_CONSTANT: 82;
    export const FF_SPRING: 83;
    export const FF_FRICTION: 84;
    export const FF_DAMPER: 85;
    export const FF_INERTIA: 86;
    export const FF_EFFECT_MAX: 87;
    export const FF_RAMP: 87;
    export const FF_SQUARE: 88;
    export const FF_WAVEFORM_MIN: 88;
    export const FF_TRIANGLE: 89;
    export const FF_SINE: 90;
    export const FF_SAW_UP: 91;
    export const FF_SAW_DOWN: 92;
    export const FF_CUSTOM: 93;
    export const FF_WAVEFORM_MAX: 93;
    export const FF_GAIN: 96;
    export const FF_AUTOCENTER: 97;
    export const FF_MAX: 127;
    export const FF_CNT: 128;
    export const ID_BUS: 0;
    export const ID_VENDOR: 1;
    export const ID_PRODUCT: 2;
    export const ID_VERSION: 3;
    export const KEY_RESERVED: 0;
    export const KEY_ESC: 1;
    export const KEY_1: 2;
    export const KEY_2: 3;
    export const KEY_3: 4;
    export const KEY_4: 5;
    export const KEY_5: 6;
    export const KEY_6: 7;
    export const KEY_7: 8;
    export const KEY_8: 9;
    export const KEY_9: 10;
    export const KEY_0: 11;
    export const KEY_MINUS: 12;
    export const KEY_EQUAL: 13;
    export const KEY_BACKSPACE: 14;
    export const KEY_TAB: 15;
    export const KEY_Q: 16;
    export const KEY_W: 17;
    export const KEY_E: 18;
    export const KEY_R: 19;
    export const KEY_T: 20;
    export const KEY_Y: 21;
    export const KEY_U: 22;
    export const KEY_I: 23;
    export const KEY_O: 24;
    export const KEY_P: 25;
    export const KEY_LEFTBRACE: 26;
    export const KEY_RIGHTBRACE: 27;
    export const KEY_ENTER: 28;
    export const KEY_LEFTCTRL: 29;
    export const KEY_A: 30;
    export const KEY_S: 31;
    export const KEY_D: 32;
    export const KEY_F: 33;
    export const KEY_G: 34;
    export const KEY_H: 35;
    export const KEY_J: 36;
    export const KEY_K: 37;
    export const KEY_L: 38;
    export const KEY_SEMICOLON: 39;
    export const KEY_APOSTROPHE: 40;
    export const KEY_GRAVE: 41;
    export const KEY_LEFTSHIFT: 42;
    export const KEY_BACKSLASH: 43;
    export const KEY_Z: 44;
    export const KEY_X: 45;
    export const KEY_C: 46;
    export const KEY_V: 47;
    export const KEY_B: 48;
    export const KEY_N: 49;
    export const KEY_M: 50;
    export const KEY_COMMA: 51;
    export const KEY_DOT: 52;
    export const KEY_SLASH: 53;
    export const KEY_RIGHTSHIFT: 54;
    export const KEY_KPASTERISK: 55;
    export const KEY_LEFTALT: 56;
    export const KEY_SPACE: 57;
    export const KEY_CAPSLOCK: 58;
    export const KEY_F1: 59;
    export const KEY_F2: 60;
    export const KEY_F3: 61;
    export const KEY_F4: 62;
    export const KEY_F5: 63;
    export const KEY_F6: 64;
    export const KEY_F7: 65;
    export const KEY_F8: 66;
    export const KEY_F9: 67;
    export const KEY_F10: 68;
    export const KEY_NUMLOCK: 69;
    export const KEY_SCROLLLOCK: 70;
    export const KEY_KP7: 71;
    export const KEY_KP8: 72;
    export const KEY_KP9: 73;
    export const KEY_KPMINUS: 74;
    export const KEY_KP4: 75;
    export const KEY_KP5: 76;
    export const KEY_KP6: 77;
    export const KEY_KPPLUS: 78;
    export const KEY_KP1: 79;
    export const KEY_KP2: 80;
    export const KEY_KP3: 81;
    export const KEY_KP0: 82;
    export const KEY_KPDOT: 83;
    export const KEY_ZENKAKUHANKAKU: 85;
    export const KEY_102ND: 86;
    export const KEY_F11: 87;
    export const KEY_F12: 88;
    export const KEY_RO: 89;
    export const KEY_KATAKANA: 90;
    export const KEY_HIRAGANA: 91;
    export const KEY_HENKAN: 92;
    export const KEY_KATAKANAHIRAGANA: 93;
    export const KEY_MUHENKAN: 94;
    export const KEY_KPJPCOMMA: 95;
    export const KEY_KPENTER: 96;
    export const KEY_RIGHTCTRL: 97;
    export const KEY_KPSLASH: 98;
    export const KEY_SYSRQ: 99;
    export const KEY_RIGHTALT: 100;
    export const KEY_LINEFEED: 101;
    export const KEY_HOME: 102;
    export const KEY_UP: 103;
    export const KEY_PAGEUP: 104;
    export const KEY_LEFT: 105;
    export const KEY_RIGHT: 106;
    export const KEY_END: 107;
    export const KEY_DOWN: 108;
    export const KEY_PAGEDOWN: 109;
    export const KEY_INSERT: 110;
    export const KEY_DELETE: 111;
    export const KEY_MACRO: 112;
    export const KEY_MIN_INTERESTING: 113;
    export const KEY_MUTE: 113;
    export const KEY_VOLUMEDOWN: 114;
    export const KEY_VOLUMEUP: 115;
    export const KEY_POWER: 116;
    export const KEY_KPEQUAL: 117;
    export const KEY_KPPLUSMINUS: 118;
    export const KEY_PAUSE: 119;
    export const KEY_SCALE: 120;
    export const KEY_KPCOMMA: 121;
    export const KEY_HANGEUL: 122;
    export const KEY_HANGUEL: 122;
    export const KEY_HANJA: 123;
    export const KEY_YEN: 124;
    export const KEY_LEFTMETA: 125;
    export const KEY_RIGHTMETA: 126;
    export const KEY_COMPOSE: 127;
    export const KEY_STOP: 128;
    export const KEY_AGAIN: 129;
    export const KEY_PROPS: 130;
    export const KEY_UNDO: 131;
    export const KEY_FRONT: 132;
    export const KEY_COPY: 133;
    export const KEY_OPEN: 134;
    export const KEY_PASTE: 135;
    export const KEY_FIND: 136;
    export const KEY_CUT: 137;
    export const KEY_HELP: 138;
    export const KEY_MENU: 139;
    export const KEY_CALC: 140;
    export const KEY_SETUP: 141;
    export const KEY_SLEEP: 142;
    export const KEY_WAKEUP: 143;
    export const KEY_FILE: 144;
    export const KEY_SENDFILE: 145;
    export const KEY_DELETEFILE: 146;
    export const KEY_XFER: 147;
    export const KEY_PROG1: 148;
    export const KEY_PROG2: 149;
    export const KEY_WWW: 150;
    export const KEY_MSDOS: 151;
    export const KEY_COFFEE: 152;
    export const KEY_SCREENLOCK: 152;
    export const KEY_DIRECTION: 153;
    export const KEY_CYCLEWINDOWS: 154;
    export const KEY_MAIL: 155;
    export const KEY_BOOKMARKS: 156;
    export const KEY_COMPUTER: 157;
    export const KEY_BACK: 158;
    export const KEY_FORWARD: 159;
    export const KEY_CLOSECD: 160;
    export const KEY_EJECTCD: 161;
    export const KEY_EJECTCLOSECD: 162;
    export const KEY_NEXTSONG: 163;
    export const KEY_PLAYPAUSE: 164;
    export const KEY_PREVIOUSSONG: 165;
    export const KEY_STOPCD: 166;
    export const KEY_RECORD: 167;
    export const KEY_REWIND: 168;
    export const KEY_PHONE: 169;
    export const KEY_ISO: 170;
    export const KEY_CONFIG: 171;
    export const KEY_HOMEPAGE: 172;
    export const KEY_REFRESH: 173;
    export const KEY_EXIT: 174;
    export const KEY_MOVE: 175;
    export const KEY_EDIT: 176;
    export const KEY_SCROLLUP: 177;
    export const KEY_SCROLLDOWN: 178;
    export const KEY_KPLEFTPAREN: 179;
    export const KEY_KPRIGHTPAREN: 180;
    export const KEY_NEW: 181;
    export const KEY_REDO: 182;
    export const KEY_F13: 183;
    export const KEY_F14: 184;
    export const KEY_F15: 185;
    export const KEY_F16: 186;
    export const KEY_F17: 187;
    export const KEY_F18: 188;
    export const KEY_F19: 189;
    export const KEY_F20: 190;
    export const KEY_F21: 191;
    export const KEY_F22: 192;
    export const KEY_F23: 193;
    export const KEY_F24: 194;
    export const KEY_PLAYCD: 200;
    export const KEY_PAUSECD: 201;
    export const KEY_PROG3: 202;
    export const KEY_PROG4: 203;
    export const KEY_DASHBOARD: 204;
    export const KEY_SUSPEND: 205;
    export const KEY_CLOSE: 206;
    export const KEY_PLAY: 207;
    export const KEY_FASTFORWARD: 208;
    export const KEY_BASSBOOST: 209;
    export const KEY_PRINT: 210;
    export const KEY_HP: 211;
    export const KEY_CAMERA: 212;
    export const KEY_SOUND: 213;
    export const KEY_QUESTION: 214;
    export const KEY_EMAIL: 215;
    export const KEY_CHAT: 216;
    export const KEY_SEARCH: 217;
    export const KEY_CONNECT: 218;
    export const KEY_FINANCE: 219;
    export const KEY_SPORT: 220;
    export const KEY_SHOP: 221;
    export const KEY_ALTERASE: 222;
    export const KEY_CANCEL: 223;
    export const KEY_BRIGHTNESSDOWN: 224;
    export const KEY_BRIGHTNESSUP: 225;
    export const KEY_MEDIA: 226;
    export const KEY_SWITCHVIDEOMODE: 227;
    export const KEY_KBDILLUMTOGGLE: 228;
    export const KEY_KBDILLUMDOWN: 229;
    export const KEY_KBDILLUMUP: 230;
    export const KEY_SEND: 231;
    export const KEY_REPLY: 232;
    export const KEY_FORWARDMAIL: 233;
    export const KEY_SAVE: 234;
    export const KEY_DOCUMENTS: 235;
    export const KEY_BATTERY: 236;
    export const KEY_BLUETOOTH: 237;
    export const KEY_WLAN: 238;
    export const KEY_UWB: 239;
    export const KEY_UNKNOWN: 240;
    export const KEY_VIDEO_NEXT: 241;
    export const KEY_VIDEO_PREV: 242;
    export const KEY_BRIGHTNESS_CYCLE: 243;
    export const KEY_BRIGHTNESS_ZERO: 244;
    export const KEY_DISPLAY_OFF: 245;
    export const KEY_WIMAX: 246;
    export const KEY_RFKILL: 247;
    export const KEY_MICMUTE: 248;
    export const KEY_OK: 352;
    export const KEY_SELECT: 353;
    export const KEY_GOTO: 354;
    export const KEY_CLEAR: 355;
    export const KEY_POWER2: 356;
    export const KEY_OPTION: 357;
    export const KEY_INFO: 358;
    export const KEY_TIME: 359;
    export const KEY_VENDOR: 360;
    export const KEY_ARCHIVE: 361;
    export const KEY_PROGRAM: 362;
    export const KEY_CHANNEL: 363;
    export const KEY_FAVORITES: 364;
    export const KEY_EPG: 365;
    export const KEY_PVR: 366;
    export const KEY_MHP: 367;
    export const KEY_LANGUAGE: 368;
    export const KEY_TITLE: 369;
    export const KEY_SUBTITLE: 370;
    export const KEY_ANGLE: 371;
    export const KEY_ZOOM: 372;
    export const KEY_MODE: 373;
    export const KEY_KEYBOARD: 374;
    export const KEY_SCREEN: 375;
    export const KEY_PC: 376;
    export const KEY_TV: 377;
    export const KEY_TV2: 378;
    export const KEY_VCR: 379;
    export const KEY_VCR2: 380;
    export const KEY_SAT: 381;
    export const KEY_SAT2: 382;
    export const KEY_CD: 383;
    export const KEY_TAPE: 384;
    export const KEY_RADIO: 385;
    export const KEY_TUNER: 386;
    export const KEY_PLAYER: 387;
    export const KEY_TEXT: 388;
    export const KEY_DVD: 389;
    export const KEY_AUX: 390;
    export const KEY_MP3: 391;
    export const KEY_AUDIO: 392;
    export const KEY_VIDEO: 393;
    export const KEY_DIRECTORY: 394;
    export const KEY_LIST: 395;
    export const KEY_MEMO: 396;
    export const KEY_CALENDAR: 397;
    export const KEY_RED: 398;
    export const KEY_GREEN: 399;
    export const KEY_YELLOW: 400;
    export const KEY_BLUE: 401;
    export const KEY_CHANNELUP: 402;
    export const KEY_CHANNELDOWN: 403;
    export const KEY_FIRST: 404;
    export const KEY_LAST: 405;
    export const KEY_AB: 406;
    export const KEY_NEXT: 407;
    export const KEY_RESTART: 408;
    export const KEY_SLOW: 409;
    export const KEY_SHUFFLE: 410;
    export const KEY_BREAK: 411;
    export const KEY_PREVIOUS: 412;
    export const KEY_DIGITS: 413;
    export const KEY_TEEN: 414;
    export const KEY_TWEN: 415;
    export const KEY_VIDEOPHONE: 416;
    export const KEY_GAMES: 417;
    export const KEY_ZOOMIN: 418;
    export const KEY_ZOOMOUT: 419;
    export const KEY_ZOOMRESET: 420;
    export const KEY_WORDPROCESSOR: 421;
    export const KEY_EDITOR: 422;
    export const KEY_SPREADSHEET: 423;
    export const KEY_GRAPHICSEDITOR: 424;
    export const KEY_PRESENTATION: 425;
    export const KEY_DATABASE: 426;
    export const KEY_NEWS: 427;
    export const KEY_VOICEMAIL: 428;
    export const KEY_ADDRESSBOOK: 429;
    export const KEY_MESSENGER: 430;
    export const KEY_DISPLAYTOGGLE: 431;
    export const KEY_SPELLCHECK: 432;
    export const KEY_LOGOFF: 433;
    export const KEY_DOLLAR: 434;
    export const KEY_EURO: 435;
    export const KEY_FRAMEBACK: 436;
    export const KEY_FRAMEFORWARD: 437;
    export const KEY_CONTEXT_MENU: 438;
    export const KEY_MEDIA_REPEAT: 439;
    export const KEY_10CHANNELSUP: 440;
    export const KEY_10CHANNELSDOWN: 441;
    export const KEY_IMAGES: 442;
    export const KEY_DEL_EOL: 448;
    export const KEY_DEL_EOS: 449;
    export const KEY_INS_LINE: 450;
    export const KEY_DEL_LINE: 451;
    export const KEY_FN: 464;
    export const KEY_FN_ESC: 465;
    export const KEY_FN_F1: 466;
    export const KEY_FN_F2: 467;
    export const KEY_FN_F3: 468;
    export const KEY_FN_F4: 469;
    export const KEY_FN_F5: 470;
    export const KEY_FN_F6: 471;
    export const KEY_FN_F7: 472;
    export const KEY_FN_F8: 473;
    export const KEY_FN_F9: 474;
    export const KEY_FN_F10: 475;
    export const KEY_FN_F11: 476;
    export const KEY_FN_F12: 477;
    export const KEY_FN_1: 478;
    export const KEY_FN_2: 479;
    export const KEY_FN_D: 480;
    export const KEY_FN_E: 481;
    export const KEY_FN_F: 482;
    export const KEY_FN_S: 483;
    export const KEY_FN_B: 484;
    export const KEY_BRL_DOT1: 497;
    export const KEY_BRL_DOT2: 498;
    export const KEY_BRL_DOT3: 499;
    export const KEY_BRL_DOT4: 500;
    export const KEY_BRL_DOT5: 501;
    export const KEY_BRL_DOT6: 502;
    export const KEY_BRL_DOT7: 503;
    export const KEY_BRL_DOT8: 504;
    export const KEY_BRL_DOT9: 505;
    export const KEY_BRL_DOT10: 506;
    export const KEY_NUMERIC_0: 512;
    export const KEY_NUMERIC_1: 513;
    export const KEY_NUMERIC_2: 514;
    export const KEY_NUMERIC_3: 515;
    export const KEY_NUMERIC_4: 516;
    export const KEY_NUMERIC_5: 517;
    export const KEY_NUMERIC_6: 518;
    export const KEY_NUMERIC_7: 519;
    export const KEY_NUMERIC_8: 520;
    export const KEY_NUMERIC_9: 521;
    export const KEY_NUMERIC_STAR: 522;
    export const KEY_NUMERIC_POUND: 523;
    export const KEY_CAMERA_FOCUS: 528;
    export const KEY_WPS_BUTTON: 529;
    export const KEY_TOUCHPAD_TOGGLE: 530;
    export const KEY_TOUCHPAD_ON: 531;
    export const KEY_TOUCHPAD_OFF: 532;
    export const KEY_CAMERA_ZOOMIN: 533;
    export const KEY_CAMERA_ZOOMOUT: 534;
    export const KEY_CAMERA_UP: 535;
    export const KEY_CAMERA_DOWN: 536;
    export const KEY_CAMERA_LEFT: 537;
    export const KEY_CAMERA_RIGHT: 538;
    export const KEY_MAX: 767;
    export const KEY_CNT: 768;
    export const LED_NUML: 0;
    export const LED_CAPSL: 1;
    export const LED_SCROLLL: 2;
    export const LED_COMPOSE: 3;
    export const LED_KANA: 4;
    export const LED_SLEEP: 5;
    export const LED_SUSPEND: 6;
    export const LED_MUTE: 7;
    export const LED_MISC: 8;
    export const LED_MAIL: 9;
    export const LED_CHARGING: 10;
    export const LED_MAX: 15;
    export const LED_CNT: 16;
    export const MSC_SERIAL: 0;
    export const MSC_PULSELED: 1;
    export const MSC_GESTURE: 2;
    export const MSC_RAW: 3;
    export const MSC_SCAN: 4;
    export const MSC_MAX: 7;
    export const MSC_CNT: 8;
    export const MT_TOOL_FINGER: 0;
    export const MT_TOOL_PEN: 1;
    export const MT_TOOL_MAX: 2;
    export const REL_X: 0;
    export const REL_Y: 1;
    export const REL_Z: 2;
    export const REL_RX: 3;
    export const REL_RY: 4;
    export const REL_RZ: 5;
    export const REL_HWHEEL: 6;
    export const REL_DIAL: 7;
    export const REL_WHEEL: 8;
    export const REL_MISC: 9;
    export const REL_MAX: 15;
    export const REL_CNT: 16;
    export const REP_DELAY: 0;
    export const REP_MAX: 1;
    export const REP_PERIOD: 1;
    export const REP_CNT: 2;
    export const SND_CLICK: 0;
    export const SND_BELL: 1;
    export const SND_TONE: 2;
    export const SND_MAX: 7;
    export const SND_CNT: 8;
    export const SW_LID: 0;
    export const SW_TABLET_MODE: 1;
    export const SW_HEADPHONE_INSERT: 2;
    export const SW_RADIO: 3;
    export const SW_RFKILL_ALL: 3;
    export const SW_MICROPHONE_INSERT: 4;
    export const SW_DOCK: 5;
    export const SW_LINEOUT_INSERT: 6;
    export const SW_JACK_PHYSICAL_INSERT: 7;
    export const SW_VIDEOOUT_INSERT: 8;
    export const SW_CAMERA_LENS_COVER: 9;
    export const SW_KEYPAD_SLIDE: 10;
    export const SW_FRONT_PROXIMITY: 11;
    export const SW_ROTATE_LOCK: 12;
    export const SW_LINEIN_INSERT: 13;
    export const SW_MAX: 15;
    export const SW_CNT: 16;
    export const SYN_REPORT: 0;
    export const SYN_CONFIG: 1;
    export const SYN_MT_REPORT: 2;
    export const SYN_DROPPED: 3;
    export const UI_FF_UPLOAD: 1;
    export const UI_FF_ERASE: 2;
    export const UI_DEV_CREATE: 21761;
    export const UI_DEV_DESTROY: 21762;
    export const UI_SET_EVBIT: 1074025828;
    export const UI_SET_KEYBIT: 1074025829;
    export const UI_SET_RELBIT: 1074025830;
    export const UI_SET_ABSBIT: 1074025831;
    export const UI_SET_MSCBIT: 1074025832;
    export const UI_SET_LEDBIT: 1074025833;
    export const UI_SET_SNDBIT: 1074025834;
    export const UI_SET_FFBIT: 1074025835;
    export const UI_SET_SWBIT: 1074025837;
    export const UI_SET_PROPBIT: 1074025838;
    export const UI_SET_PHYS: 1074287980;
    export const UI_END_FF_ERASE: 1074550219;
    export const UI_END_FF_UPLOAD: 1080579529;
    export const UI_BEGIN_FF_ERASE: 3222033866;
    export const UI_BEGIN_FF_UPLOAD: 3228063176;
    export const UINPUT_MAX_NAME_SIZE: 80;
}
