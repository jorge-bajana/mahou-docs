import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Mahou - Convenios colectivos',
			logo: {
				light: './src/assets/logo-mahou-san-miguel2.svg',
				dark: './src/assets/logo-mahou-san-miguel.svg',
				replacesTitle: true,
			},
			locales: {
				root: {
					label: 'Español',
					lang: 'es',
				},
			},
			customCss: [
				'./src/fonts/stylesheet.css',
			],
			sidebar: [
				{
					label: 'Convenios colectivos',
					autogenerate: { directory: 'convenios' },
				},
			],
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 4,
			}
		}),
	],
});
