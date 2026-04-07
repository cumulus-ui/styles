export declare enum Mode {
  Light = "light",
  Dark = "dark"
}

export declare enum Density {
  Comfortable = "comfortable",
  Compact = "compact"
}

export declare function applyMode(mode: Mode, target?: HTMLElement): void;
export declare function applyDensity(density: Density, target?: HTMLElement): void;
export declare function disableMotion(disabled: boolean, target?: HTMLElement): void;
