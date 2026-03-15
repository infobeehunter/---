import { themeColors } from "@/theme.config";
export type ColorScheme = "light" | "dark";
export type ThemeColorPalette = {
 primary: string;
 secondary: string;
 background: string;
 surface: string;
 foreground: string;
 muted: string;
 border: string;
 success: string;
 warning: string;
 error: string;
 partner: string;
 tint: string;
};
export const Colors: Record<ColorScheme, ThemeColorPalette> = {
 light: {
 primary: themeColors.primary.light,
 secondary: themeColors.secondary.light,
 background: themeColors.background.light,
 surface: themeColors.surface.light,
 foreground: themeColors.foreground.light,
 muted: themeColors.muted.light,
 border: themeColors.border.light,
 success: themeColors.success.light,
 warning: themeColors.warning.light,
 error: themeColors.error.light,
 partner: themeColors.partner.light,
 tint: themeColors.primary.light,
 },
 dark: {
 primary: themeColors.primary.dark,
 secondary: themeColors.secondary.dark,
 background: themeColors.background.dark,
 surface: themeColors.surface.dark,
 foreground: themeColors.foreground.dark,
 muted: themeColors.muted.dark,
 border: themeColors.border.dark,
 success: themeColors.success.dark,
 warning: themeColors.warning.dark,
 error: themeColors.error.dark,
 partner: themeColors.partner.dark,
 tint: themeColors.primary.dark,
 },
};
