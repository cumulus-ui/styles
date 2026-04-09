# @cumulus-ui/styles — DEPRECATED

> **This package is deprecated.** Use [`@cumulus-ui/design-tokens`](https://github.com/cumulus-ui/design-tokens) instead.

## Migration

Replace:

```js
import "@cumulus-ui/styles/index.css";
```

With:

```js
import "@cumulus-ui/design-tokens/tokens.css";
```

`@cumulus-ui/design-tokens` provides:
- 725 clean, dehashed CSS custom properties on `:root`
- 364 dark mode overrides via `.awsui-dark-mode`
- `color-scheme: dark` for native dark scrollbars and form controls
- JS/TS exports for all token values

Dark mode toggle:
```js
document.documentElement.classList.toggle('awsui-dark-mode');
```
