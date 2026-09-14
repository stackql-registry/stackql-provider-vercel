# vercel provider microsite

Docusaurus 3.10 site for `vercel-provider.stackql.io`. Shared navbar, footer, theme and plugin configuration is vendored from [`stackql/docusaurus-config`](https://github.com/stackql/docusaurus-config) into `.shared-config/` by the `vendor-config` script before every start and build; site-local files are the provider identity (`provider.js`), the thin `docusaurus.config.js` wrapper, the shared components and theme overrides under `src/`, and the static assets (registry logos, the provider featured image, favicons, `CNAME`).

The docs under `docs/` are generated - do not edit them by hand. From the repository root:

```bash
make docs           # generate docs from the provider, then sanitize for MDX
make website        # yarn install && yarn build
make website-start  # dev server
```
