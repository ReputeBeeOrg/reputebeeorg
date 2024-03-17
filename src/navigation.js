import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
import logo from './assets/images/reputebee_logo_Right_text.svg';

export const headerData = {
  links: [
    // {
    //   text: 'Homes',
    //   links: [
    //     {
    //       text: 'Sass',
    //       href: getPermalink('/homes/saas'),
    //     },
    //     {
    //       text: 'Startup',
    //       href: getPermalink('/homes/startup'),
    //     },
    //     {
    //       text: 'Mobile App',
    //       href: getPermalink('/homes/mobile-app'),
    //     },
    //     {
    //       text: 'Personal',
    //       href: getPermalink('/homes/personal'),
    //     },
    //   ],
    // },
    {
      text: 'Pricing',
      href: getPermalink('/pricing'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),

      
    },
    {
      text: 'Blog',
      href: getBlogPermalink('/blog'),
     },
      {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {text: 'Docs',
        href: getPermalink('/docs')},
        {text: 'Sample Wall Of Love',
      href: "https://widgets.reputebee.com/static/v1/wol/wall-of-love-simple/?id=JGdwd94SCH"}
  ],
  //actions: [{ type: 'button', text: 'Download', href: 'https://github.com/onwidget/astrowind' }],
  actions: [
    {
      type: 'ghost',
      text: 'Login',
      href: 'https://app.reputebee.com/accounts/login/?next=/',
    },
    {
      type: 'primarybase',
      text: 'Sign Up',
      href: 'https://app.reputebee.com/accounts/signup/?next=/',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        // { text: 'Features', href: '#' },
        // { text: 'Security', href: '#' },
        // { text: 'Team', href: '#' },
        // { text: 'Enterprise', href: '#' },
      //  { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: getPermalink('/pricing') },
        

        // { text: 'Resources', href: '#' },
      ],
    },
    // {
    //   title: 'Platform',
    //   links: [
    //     { text: 'Developer API', href: '#' },
    //     { text: 'Partners', href: '#' },
    //     { text: 'Atom', href: '#' },
    //     { text: 'Electron', href: '#' },
    //     { text: 'AstroWind Desktop', href: '#' },
    //   ],
    // },
    // {
    //   title: 'Support',
    //   links: [
    //     { text: 'Docs', href: '#' },
    //     { text: 'Community Forum', href: '#' },
    //     { text: 'Professional Services', href: '#' },
    //     { text: 'Skills', href: '#' },
    //     { text: 'Status', href: '#' },
    //   ],
    // },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Blog', href: getPermalink('/blog') },
        { text: 'Support', href: getPermalink('/contact') },
        // { text: 'Press', href: '#' },
        // { text: 'Inclusion', href: '#' },
        // { text: 'Social Impact', href: '#' },
        // { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondarybaseLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    { text: 'Cookie Policy', href: getPermalink('/cookie') },
    
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/reputebee' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/reputebee/' },
    { ariaLabel: 'Producthunt', icon: 'tabler:brand-producthunt', href: 'https://www.producthunt.com/@reputebeelaunch' },
    
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
        // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(${logo.src })]"><Image src=${logo.src}  class="w-full" /> </span>
    `,
};
