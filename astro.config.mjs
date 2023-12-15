import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import compress from 'astro-compress';
import icon from 'astro-icon';
import tasks from "./src/utils/tasks";
import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin } from './src/utils/frontmatter.mjs';
import { ANALYTICS, SITE } from './src/utils/config.ts';
import starlight from "@astrojs/starlight";
//import astroExpressiveCode from '@astrojs/expressive-code';
import expressiveCode from "astro-expressive-code";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const whenExternalScripts = (items = []) => ANALYTICS.vendors.googleAnalytics.id && ANALYTICS.vendors.googleAnalytics.partytown ? Array.isArray(items) ? items.map(item => item()) : [items()] : [];


// https://astro.build/config
export default defineConfig({
  site: SITE.site,
  base: SITE.base,
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',
  output: 'static',
  integrations: [tailwind({
    applyBaseStyles: false
  }), sitemap(), icon({
    include: {
      tabler: ['*'],
      'flat-color-icons': ['template', 'gallery', 'approval', 'document', 'advertising', 'currency-exchange', 'voice-presentation', 'business-contact', 'database', 'sales-performance', 'refresh', 'collaboration']
    }
  }), ...whenExternalScripts(() => partytown({
    config: {
      forward: ['dataLayer.push']
    }
  })), tasks(), compress({
    CSS: true,
    HTML: false,
    Image: false,
    JavaScript: true,
    SVG: true,
    Logger: 1
  }), 
  starlight({
    title: 'ReputeBee Documentation',
    customCss: [
      // Path to your Tailwind base styles:
      './src/docs/assets/styles/tailwind.css',
      '@fontsource-variable/inter'
    ],
    sidebar: [
      {
        label: 'Introduction',
        // Autogenerate a group of links for the 'guides' directory.
        link: '/docs/index',
      },
      {
        label: 'Getting Started',
        // Autogenerate a group of links for the 'guides' directory.
        link: '/docs/getting-started',
      },

      {
        label: 'Integrations',
        // Autogenerate a group of links for the 'guides' directory.
        autogenerate: { directory: 'integrations' },
      },
      {
        label: 'Widgets',
        autogenerate: { directory: 'widgets' }
      },

      {
        label: 'FAQs',
        link: '/docs/faqs',
      },
      {
        label: "Support",
        link: "/docs/support",
      },
      {
        label: "Release Notes",
        link: "/docs/release-notes",
      }
    ],
  }),
  //    astroExpressiveCode(),
  expressiveCode(),
  mdx()],
  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    rehypePlugins: [responsiveTablesRehypePlugin]
  },
  // experimental:{
  //   assets: true
  // },

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src')
      }
    }
  }
});