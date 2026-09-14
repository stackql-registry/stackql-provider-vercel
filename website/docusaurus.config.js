import {themes as prismThemes} from 'prism-react-renderer';
import { createConfig } from './.shared-config/index.js';
import { providerName, providerTitle } from './provider.js';

// Shared StackQL provider microsite configuration (navbar, footer, theme,
// plugins, redirects) is vendored from stackql/docusaurus-config into
// .shared-config/ by the `vendor-config` script before every start/build.
// Only provider identity and the few site-local overrides live here.
const config = createConfig({
  providerName,
  providerTitle,
  prismThemes,
  overrides: {
    // Docusaurus Faster (rspack + swc, via @docusaurus/faster) for build
    // speed and consistency with the other provider microsites.
    future: {
      v4: true,
      faster: true,
    },
  },
});

// Date-stamp every generated doc page ("Last updated on ...") from git
// history; the shared config leaves this off.
config.presets[0][1].docs.showLastUpdateTime = true;

// Use the locally vendored registry-branded logos (STACKQL>> | REGISTRY)
// instead of the shared config's hotlinked main-site wordmark - self-contained
// assets, no cross-origin fetch. global.css swaps in the -mobile variants
// below 996px.
const registryLogo = {
  alt: 'StackQL',
  href: '/',
  src: 'img/stackql-registry-logo.svg',
  srcDark: 'img/stackql-registry-logo-white.svg',
};
config.themeConfig.navbar.logo = { ...registryLogo };
config.themeConfig.footer.logo = { ...registryLogo };

export default config;
