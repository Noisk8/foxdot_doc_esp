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



export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'FoxDot': [
			{ text: 'Que es Foxdot?', link: 'en/foxdot' },
			{ text: 'Instalación', link: 'en/instalacion' },
			{ text: 'IDES', link: 'en/ides' },
			
		],
		'Empezando': [
			{ text: 'Introduction', link: 'en/introduction' },
			{ text: 'Intro del objeto del player ', link: 'en/introduccion_del_objeto_del_player' },
			{ text: 'Patrones Basicos', link: 'en/patrones_basicos' },
			{ text: 'Variables dependientes del tiempo', link: 'en/variables_dependientes_del_tiempo' },
		],
		'Players': [{ text: 'Atributos del Player', link: 'en/atributos_del_player' },
		{ text: 'Efectos del Player', link: 'en/efectos_de_player' },
		{ text: 'Manipulación Algorítmica', link: 'en/manipulacion' },
		{ text: 'Reproduciendo samples', link: 'en/repro_samples' },
		{ text: 'Player Keys', link: 'en/player_keys' },
		{ text: 'Groups', link: 'en/grupos' },
		{ text: 'Raiz y escalas', link: 'en/raiz' },
		{ text: 'Valores Constantes', link: 'en/val_const' },
	
	
	],

		'Patrones': [
			{ text: 'Metodos del patron', link: 'en/met_pat' },
			{ text: 'Funciones del patron', link: 'en/fun_pat' },
			{ text: 'Generador de patrones', link: 'en/gen_pat' },
			{ text: 'PGroups', link: 'en/pgrupos' },
		],

		'Variables de tiempo': [
			{ text: 'Variables de tiempo basicas', link: 'en/var_tb' },
			{ text: 'Tipos de Variables de tiempo', link: 'en/tvt' },
			{ text: 'Variables de tiempo Avanzados', link: 'en/vta' },
		],
		'Reloj (Clock)': [
			{ text: 'Usando el tiempo del reloj', link: 'en/usetiemporeal' },
			{ text: 'Recursión temporal', link: 'en/rec_tem' },
			
		],

		'Configuración': [
			{ text: 'Compartiendo mensajes por OSC', link: 'en/osc' },
			{ text: 'Configurando MIDI', link: 'en/midi' },
			{ text: 'Usando nuestro porpio Synth', link: 'en/diy' },
		],
	},
};
