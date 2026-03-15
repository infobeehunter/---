import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { translations } from "./translations";
type Language = "it" | "en";
interface LanguageContextType {
 language: Language;
 setLanguage: (lang: Language) => void;
 t: (key: string) => string;
}
const LanguageContext = createContext<LanguageContextType | undefined>(undefined
export function LanguageProvider({ children }: { children: React.ReactNode }) {
 const [language, setLanguageState] = useState<Language>("it");
 const [isLoaded, setIsLoaded] = useState(false);
 useEffect(() => {
 loadLanguage();
 }, []);
 const loadLanguage = async () => {
 try {
 const saved = await AsyncStorage.getItem("language");
 if (saved === "it" || saved === "en") {
 setLanguageState(saved);
 }
 } catch (error) {
 console.error("Error loading language:", error);
 } finally {
 setIsLoaded(true);
 }
 };
 const setLanguage = async (lang: Language) => {
 setLanguageState(lang);
 try {
 await AsyncStorage.setItem("language", lang);
 } catch (error) {
 console.error("Error saving language:", error);
 }
 };
 const t = (key: string): string => {
 return (translations[language] as Record<string, string>)[key] || key;
 };
 if (!isLoaded) {
 return null;
 }
 return (
 <LanguageContext.Provider value={{ language, setLanguage, t }}>
 {children}
 </LanguageContext.Provider>
 );
}
export function useLanguage() {
 const context = useContext(LanguageContext);
 if (!context) {
 throw new Error("useLanguage must be used within LanguageProvider");
 }
 return context;
}
