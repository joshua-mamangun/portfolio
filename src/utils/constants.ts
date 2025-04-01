export const 
	TO_LEFT = 'LEFT', 
	TO_RIGHT = 'RIGHT',
	STAY = 'STAY',
	SCROLL_DISTANCE = 8;

export enum STYLE_TYPE_ON_SM {
	DEFAULT = 'default',
	NO_BG = 'no-bg',
	TOP_IMG = 'top-img',
	TOP_RIGHT_IMG = 'top-right-img',
	TOP_LEFT_IMG = 'top-left-img',
};

export enum ALIGN_TEXT_ON_SM {
	CENTER = 'center',
	LEFT = 'left',
};

export const PROJECT_STYLE_TYPES_ON_SM = [
	STYLE_TYPE_ON_SM.TOP_RIGHT_IMG,
	STYLE_TYPE_ON_SM.TOP_IMG,
	STYLE_TYPE_ON_SM.TOP_LEFT_IMG,
] as const;