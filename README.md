# @cumulus-ui/styles

Full environment CSS for Cumulus UI — normalize, fonts, design tokens, dark/compact mode, and keyframes.

## CSS

```js
import "@cumulus-ui/styles/index.css";
```

## Utilities

```js
import { applyMode, Mode, applyDensity, Density, disableMotion } from "@cumulus-ui/styles";

applyMode(Mode.Dark);
applyDensity(Density.Compact);
disableMotion(true);
```
