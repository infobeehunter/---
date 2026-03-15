export const Colors = {
 light: {
 text: "#1C1C1E",
 background: "#FFFFFF",
 tint: "#F5C518",
 tabIconDefault: "#687076",
 tabIconSelected: "#F5C518",
 },
 dark: {
 text: "#ECEDEE",
 background: "#1C1C1E",
 tint: "#F5C518",
 tabIconDefault: "#9BA1A6",
 tabIconSelected: "#F5C518",
 },
};
export type ColorScheme = keyof typeof Colors;
export type ThemeColorPalette = (typeof Colors)[ColorScheme];
