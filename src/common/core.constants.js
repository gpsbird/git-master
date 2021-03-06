export const NODE_PREFIX = 'gitmaster';
export const ADDON_CLASS = 'gitmaster';
export const SHOW_CLASS = 'gitmaster-show';
export const PINNED_CLASS = 'gitmaster-pinned';
export const SIDEBAR_RIGHT = 'gitmaster-sidebar-right';

export const STORE = {
  GITHUB_TOKEN: 'gitmaster.github_token.local',
  GITLAB_TOKEN: 'gitmaster.gitlab_token.local',
  GITEE_TOKEN: 'gitmaster.gitee_token.local',
  HOVEROPEN: 'gitmaster.hover_open',
  PR: 'gitmaster.prdiff_shown',
  HOTKEYS: 'gitmaster.hotkeys',
  ICONS: 'gitmaster.icons',
  LAZYLOAD: 'gitmaster.lazyload',
  POPUP: 'gitmaster.popup_shown',
  WIDTH: 'gitmaster.sidebar_width',
  SHOWN: 'gitmaster.sidebar_shown',
  PINNED: 'gitmaster.sidebar_pinned',
  HUGE_REPOS: 'gitmaster.huge_repos',
  NONCODE: 'gitmaster.noncode_shown',
  GITHUB_ENTERPRICE_URLS: 'gitmaster.github_custom_url',
  GITLAB_ENTERPRICE_URLS: 'gitmaster.gitlab_custom_url',
  GITEE_ENTERPRICE_URLS: 'gitmaster.gitee_custom_url',
  DIRECTION: 'gitmaster.direction',
};

export const DICT = {
  GITHUB: 1,
  GITLAB: 2,
  OSCHINA: 3,
};

export const DEFAULTS = {
  GITHUB_TOKEN: '',
  GITLAB_TOKEN: '',
  GITEE_TOKEN: '',
  HOVEROPEN: true,
  PR: true,
  LAZYLOAD: false,
  HOTKEYS: '⌘+⇧+s, ⌃+⇧+s',
  ICONS: true,
  POPUP: false,
  WIDTH: 232,
  SHOWN: false,
  PINNED: false,
  HUGE_REPOS: {},
  NONCODE: true,
  DIRECTION: 'left',
};

export const EVENT = {
  TOGGLE: 'gitmaster:toggle',
  TOGGLE_PIN: 'gitmaster:pin',
  LOC_CHANGE: 'gitmaster:location',
  LAYOUT_CHANGE: 'gitmaster:layout',
  REQ_START: 'gitmaster:start',
  REQ_END: 'gitmaster:end',
  STORE_CHANGE: 'gitmaster:storeChange',
  VIEW_READY: 'gitmaster:ready',
  VIEW_CLOSE: 'gitmaster:close',
  VIEW_SHOW: 'gitmaster:show',
  FETCH_ERROR: 'gitmaster:error',
  SIDEBAR_HTML_INSERTED: 'gitmaster:sidebarHtmlInserted',
  REPO_LOADED: 'gitmaster:repoLoaded',
};

export const MessageType = {
  PAGE_RENDERED: 'pageRendered',
};

window.STORE = STORE;
window.DEFAULTS = DEFAULTS;
window.EVENT = EVENT;
window.DICT = DICT;
