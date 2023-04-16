export const SITE = {
	title: 'FoxDot en Español',
	description: 'Doc de FoxDot en español',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/.github/assets/banner.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'FoxDot': [
			{ text: 'Que es Foxdot?', link: 'en/foxdot' },
			{ text: 'Instalación', link: 'en/introduccion_del_objeto_del_player' },
			{ text: 'IDES', link: 'en/patrones_basicos' },
			
		],
		'Empezando': [
			{ text: 'Introduction', link: 'en/introduction' },
			{ text: 'Intro del objeto del player ', link: 'en/introduccion_del_objeto_del_player' },
			{ text: 'Patrones Basicos', link: 'en/patrones_basicos' },
			{ text: 'Variables dependientes del tiempo', link: 'en/variables_dependientes_del_tiempo' },
		],
		'Players': [{ text: 'Atributos del Player', link: 'en/atributos_del_player' },
		{ text: 'Efectos del Player', link: 'en/page-4' },
		{ text: 'Manipulación Algorítmica', link: 'en/page-4' },
		{ text: 'Reproduciendo samples', link: 'en/page-4' },
		{ text: 'Player Keys', link: 'en/page-4' },
		{ text: 'Groups', link: 'en/page-4' },
		{ text: 'Raiz y escalas', link: 'en/page-4' },
		{ text: 'Valores Constantes', link: 'en/page-4' },
	
	
	],

		'Patrones': [
			{ text: 'Metodos del patron', link: 'en/introduction' },
			{ text: 'Funciones del patron', link: 'en/page-2' },
			{ text: 'Generador de patrones', link: 'en/page-3' },
			{ text: 'PGroups', link: 'en/page-3' },
		],

		'Variables de tiempo': [
			{ text: 'Variables de tiempo basicas', link: 'en/introduction' },
			{ text: 'Tipos de Variables de tiempo', link: 'en/page-2' },
			{ text: 'Variables de tiempo Avanzados', link: 'en/page-3' },
		],
		'Reloj (Clock)': [
			{ text: 'Usando el tiempo del reloj', link: 'en/introduction' },
			{ text: 'Recursión temporal', link: 'en/page-2' },
			
		],

		'Configuración': [
			{ text: 'Compartiendo mensajes por OSC', link: 'en/introduction' },
			{ text: 'Configurando MIDI', link: 'en/page-2' },
			{ text: 'Usando nuestro porpio Synth', link: 'en/page-3' },
		],
	},
};
