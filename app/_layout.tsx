import "@/global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useMemo, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import { Platform } from "react-native";
import "@/lib/_core/nativewind-pressable";
import { ThemeProvider } from "@/lib/theme-provider";
import { LanguageProvider } from "@/lib/i18n/language-context";
const queryClient = new QueryClient();
export default function RootLayout() {
 return (
 <GestureHandlerRootView style={{ flex: 1 }}>
 <QueryClientProvider client={queryClient}>
 <ThemeProvider>
 <LanguageProvider>
 <Stack screenOptions={{ headerShown: false }} />
 <StatusBar barStyle="light-content" />
 </LanguageProvider>
 </ThemeProvider>
 </QueryClientProvider>
 </GestureHandlerRootView>
 );
}
