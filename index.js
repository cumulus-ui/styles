export var Mode;
(function (Mode) {
  Mode["Light"] = "light";
  Mode["Dark"] = "dark";
})(Mode || (Mode = {}));

export var Density;
(function (Density) {
  Density["Comfortable"] = "comfortable";
  Density["Compact"] = "compact";
})(Density || (Density = {}));

function toggleClass(target, className, enabled) {
  if (enabled) {
    target.classList.add(className);
  } else {
    target.classList.remove(className);
  }
}

export function applyMode(mode, target) {
  if (target === void 0) { target = document.documentElement; }
  toggleClass(target, 'awsui-dark-mode', mode === Mode.Dark);
}

export function applyDensity(density, target) {
  if (target === void 0) { target = document.documentElement; }
  toggleClass(target, 'awsui-compact-mode', density === Density.Compact);
}

export function disableMotion(disabled, target) {
  if (target === void 0) { target = document.documentElement; }
  toggleClass(target, 'awsui-motion-disabled', disabled);
}
