// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: "https://groupwisedocs.sean.cyou",
	integrations: [
		starlight({
			title: 'Groupwise Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/devramsean0/groupwisedocs' }],
			sidebar: [
				{
					label: 'Groupwise Web',
					autogenerate: { directory: 'groupwise-web' }
				},
				{
					label: 'LDAP',
					autogenerate: { directory: 'ldap' }
				},
				{
					label: 'Advanced Authentication',
					autogenerate: { directory: 'aauth' }
				}
			],
		}),
	],
});
